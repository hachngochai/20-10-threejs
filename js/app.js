// Respect system motion settings and reserve pointer effects for mice/trackpads.
const Motion = {
  query: window.matchMedia("(prefers-reduced-motion: reduce)"),
  pointer: window.matchMedia("(hover: hover) and (pointer: fine)"),
  get reduced() { return this.query.matches; },
  get interactive() { return !this.reduced && this.pointer.matches; }
};

const Dialogs = {
  active: null,
  returnFocus: null,
  background: [],
  init() {
    const labels = { helpModal: "helpTitle", messageModal: "messageText", completionModal: "completionTitle", lightbox: "lightboxText" };
    document.querySelectorAll(".overlay-modal, .completion-modal, .lightbox").forEach(modal => {
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("aria-labelledby", labels[modal.id]);
      modal.tabIndex = -1;
      modal.querySelectorAll(".modal-x, .lightbox-close, #completionClose").forEach(button => {
        if (button.matches(".modal-x, .lightbox-close")) button.setAttribute("aria-label", "Đóng");
        button.addEventListener("click", () => this.close(modal));
      });
      // The gallery checks image bounds itself before closing its backdrop.
      if (modal.id !== "lightbox") modal.addEventListener("click", event => {
        if (event.target === modal) this.close(modal);
      });
    });
    document.addEventListener("keydown", event => {
      if (!this.active) return;
      if (event.key === "Escape") {
        event.preventDefault();
        this.close(this.active);
      } else if (event.key === "Tab") {
        const controls = [...this.active.querySelectorAll('button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])')]
          .filter(element => !element.disabled && element.getClientRects().length);
        if (!controls.length) { event.preventDefault(); this.active.focus(); return; }
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === this.active)) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === this.active)) {
          event.preventDefault(); first.focus();
        }
      }
    });
  },
  open(modal) {
    if (!modal || this.active === modal) return;
    const origin = this.active ? this.returnFocus : document.activeElement;
    if (this.active) this.close(this.active, false);
    this.returnFocus = origin;
    this.active = modal;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    // Inert siblings along the ancestor path, including for a nested lightbox.
    let branch = modal;
    while (branch.parentElement && branch !== document.body) {
      for (const sibling of branch.parentElement.children) {
        if (sibling === branch || !(sibling instanceof HTMLElement)) continue;
        this.background.push([sibling, sibling.inert]);
        sibling.inert = true;
      }
      branch = branch.parentElement;
    }
    requestAnimationFrame(() => {
      if (this.active === modal) (modal.querySelector("button, a[href]") || modal).focus({ preventScroll: true });
    });
  },
  close(modal = this.active, restore = true) {
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    if (this.active !== modal) return;
    this.background.forEach(([element, inert]) => { element.inert = inert; });
    this.background = [];
    this.active = null;
    if (restore && this.returnFocus?.isConnected && this.returnFocus.getClientRects().length && !this.returnFocus.closest("[inert]")) this.returnFocus.focus({ preventScroll: true });
    this.returnFocus = null;
    document.dispatchEvent(new Event("dialogclose"));
  }
};

const Effects = {
  particleTimer: null,
  cursorFrame: null,
  pointer: { x: innerWidth / 2, y: innerHeight / 2 },
  cursor: { x: innerWidth / 2, y: innerHeight / 2 },
  init() {
    this.initCursor(); this.initTilt(); this.initRipples(); this.refreshParticles();
    Motion.query.addEventListener("change", () => {
      this.resetTilt(); Room.reset();
      document.documentElement.style.setProperty("--pointer-x", "0");
      document.documentElement.style.setProperty("--pointer-y", "0");
      this.refreshParticles();
      window.dispatchEvent(new Event("motionchange"));
    });
    Motion.pointer.addEventListener("change", () => { this.resetTilt(); Room.reset(); });
    document.addEventListener("visibilitychange", () => {
      document.body.classList.toggle("effects-paused", document.hidden);
      this.refreshParticles();
    });
    window.addEventListener("pagechange", () => this.resetTilt());
  },
  initCursor() {
    const glow = document.getElementById("cursorGlow");
    if (!glow) return;
    document.body.classList.add("pointer-away");
    document.addEventListener("pointerleave", () => document.body.classList.add("pointer-away"));
    const draw = () => {
      this.cursorFrame = null;
      if (!Motion.interactive || document.hidden) return;
      this.cursor.x += (this.pointer.x - this.cursor.x) * .18;
      this.cursor.y += (this.pointer.y - this.cursor.y) * .18;
      glow.style.left = `${this.cursor.x}px`; glow.style.top = `${this.cursor.y}px`;
      document.documentElement.style.setProperty("--pointer-x", ((this.pointer.x / innerWidth - .5) * 2).toFixed(3));
      document.documentElement.style.setProperty("--pointer-y", ((this.pointer.y / innerHeight - .5) * 2).toFixed(3));
      if (Math.abs(this.pointer.x - this.cursor.x) + Math.abs(this.pointer.y - this.cursor.y) > .5) this.cursorFrame = requestAnimationFrame(draw);
    };
    document.addEventListener("pointermove", event => {
      if (!Motion.interactive || event.pointerType === "touch") return;
      document.body.classList.remove("pointer-away");
      this.pointer = { x: event.clientX, y: event.clientY };
      if (!this.cursorFrame) this.cursorFrame = requestAnimationFrame(draw);
    }, { passive: true });
  },
  initTilt() {
    document.querySelectorAll(".gift-tile, .note-card").forEach(card => {
      let frame = null;
      const reset = () => {
        cancelAnimationFrame(frame); frame = null;
        card.classList.remove("is-tilting");
        card.style.setProperty("--tilt-x", "0deg"); card.style.setProperty("--tilt-y", "0deg");
      };
      card.addEventListener("pointermove", event => {
        if (!Motion.interactive || event.pointerType === "touch" || Dialogs.active) return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          frame = null;
          if (!Motion.interactive || Dialogs.active) return;
          const rect = card.getBoundingClientRect();
          const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
          const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
          card.style.setProperty("--tilt-x", `${(.5 - y) * 8}deg`);
          card.style.setProperty("--tilt-y", `${(x - .5) * 10}deg`);
          card.style.setProperty("--shine-x", `${x * 100}%`); card.style.setProperty("--shine-y", `${y * 100}%`);
          card.classList.add("is-tilting");
        });
      }, { passive: true });
      card.addEventListener("pointerleave", reset); card.addEventListener("blur", reset);
    });
  },
  resetTilt() {
    document.querySelectorAll(".is-tilting").forEach(card => {
      card.classList.remove("is-tilting");
      card.style.setProperty("--tilt-x", "0deg"); card.style.setProperty("--tilt-y", "0deg");
    });
  },
  initRipples() {
    const selector = ".mini-control, .hero-enter, .back-chip, .gift-tile, .note-card, .connect-door, .connect-button, .final-btn, .photo-arrow, .send-note, .completion-card button, .room-final-door, .room3d-nav-item";
    document.querySelectorAll(selector).forEach(control => control.classList.add("fx-control"));
    document.addEventListener("click", event => {
      const control = event.target.closest(".fx-control");
      if (!control || Motion.reduced || control.disabled) return;
      const rect = control.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "fx-ripple"; ripple.setAttribute("aria-hidden", "true");
      ripple.style.setProperty("--ripple-x", `${event.detail ? event.clientX - rect.left : rect.width / 2}px`);
      ripple.style.setProperty("--ripple-y", `${event.detail ? event.clientY - rect.top : rect.height / 2}px`);
      ripple.style.setProperty("--ripple-size", `${Math.max(rect.width, rect.height) * 2}px`);
      control.querySelectorAll(".fx-ripple").forEach(old => old.remove());
      control.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    });
  },
  refreshParticles() {
    clearInterval(this.particleTimer); this.particleTimer = null;
    const holder = document.getElementById("ambientParticles");
    if (!holder) return;
    if (Motion.reduced) { holder.replaceChildren(); document.getElementById("effectParticles")?.replaceChildren(); return; }
    if (document.body.classList.contains("has-world3d")) { holder.replaceChildren(); return; }
    if (document.hidden) return;
    if (!holder.childElementCount) for (let i = 0; i < 6; i++) this.spawnParticle(true);
    this.particleTimer = setInterval(() => this.spawnParticle(), 1400);
  },
  spawnParticle(seed = false) {
    const holder = document.getElementById("ambientParticles");
    if (!holder || document.hidden || Motion.reduced || holder.childElementCount >= 16) return;
    const particle = document.createElement("span");
    const symbols = ["✦", "·", "♡", "✿", "°"];
    particle.className = "ambient-p"; particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = `${Math.random() * 100}%`; particle.style.animationDuration = `${12 + Math.random() * 10}s`;
    particle.style.animationDelay = seed ? `${-Math.random() * 12}s` : "0s"; particle.style.fontSize = `${7 + Math.random() * 7}px`;
    holder.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
  },
  burst(x, y, count = 12) {
    const holder = document.getElementById("effectParticles");
    if (!holder || Motion.reduced || document.hidden) return;
    for (let i = 0; i < Math.min(count, 32); i++) {
      if (holder.childElementCount >= 64) break;
      const spark = document.createElement("span");
      const angle = Math.PI * 2 * i / count, distance = 40 + Math.random() * 85;
      spark.className = "effect-spark";
      spark.style.left = `${x}px`; spark.style.top = `${y}px`;
      spark.style.setProperty("--burst-x", `${Math.cos(angle) * distance}px`);
      spark.style.setProperty("--burst-y", `${Math.sin(angle) * distance - 28}px`);
      spark.style.setProperty("--burst-turn", `${Math.random() * 180 - 90}deg`);
      spark.style.setProperty("--burst-color", i % 2 ? "#f39bc3" : "#edcca0");
      holder.appendChild(spark);
      spark.addEventListener("animationend", () => spark.remove(), { once: true });
    }
  }
};

const App = {
  current: "intro", busy: false,
  visited: [], // Reload starts a fresh 0/4 journey.
  core: ["letter", "women", "facts", "surprise"],
  completionTimer: null, completionPending: false, toastTimer: null,
  init() {
    document.querySelectorAll(".screen").forEach(screen => {
      const active = screen.classList.contains("active");
      if (active) this.current = screen.dataset.page;
      screen.inert = !active; screen.setAttribute("aria-hidden", String(!active));
    });
    Dialogs.init(); Effects.init(); this.bindNavigation(); this.initMusic();
    document.getElementById("helpToggle")?.addEventListener("click", () => {
      if (!this.busy) Dialogs.open(document.getElementById("helpModal"));
    });
    this.syncConfig(); this.updateProgress();
    window.addEventListener("pagechange", event => this.onPageChange(event.detail.page, event.detail.from));
    document.addEventListener("dialogclose", () => this.showCompletionIfReady());
    document.addEventListener("visibilitychange", () => this.showCompletionIfReady());
    window.addEventListener("room3dready", () => {
      Room.reset();
      Effects.refreshParticles();
      window.Room3D.syncProgress(this.visited);
      if (this.current === "hub" && !this.busy) window.Room3D.enter({ from: "intro" });
    });
    if (this.current === "hub") Room.init();
  },
  bindNavigation() {
    document.addEventListener("click", event => {
      const target = event.target.closest("[data-go]");
      if (target?.dataset.go) {
        const rect = target.getBoundingClientRect();
        this.go(target.dataset.go, {
          x: event.detail ? event.clientX : rect.left + rect.width / 2,
          y: event.detail ? event.clientY : rect.top + rect.height / 2
        });
      }
    });
  },
  waitForTransition(duration) {
    if (Motion.reduced || document.hidden) return Promise.resolve();
    return new Promise(resolve => {
      const finish = () => {
        clearTimeout(timer);
        document.removeEventListener("visibilitychange", changed);
        Motion.query.removeEventListener("change", changed);
        resolve();
      };
      const changed = () => { if (document.hidden || Motion.reduced) finish(); };
      const timer = setTimeout(finish, duration);
      document.addEventListener("visibilitychange", changed);
      Motion.query.addEventListener("change", changed);
    });
  },
  async go(target, origin = null) {
    if (this.busy || target === this.current) return;
    const next = [...document.querySelectorAll(".screen")].find(screen => screen.dataset.page === target);
    const old = document.querySelector(".screen.active");
    if (!next || !old) return;
    if (target === "final" && !this.core.every(page => this.visited.includes(page))) { this.showToast("Khám phá đủ 4 không gian trước nhé ✦"); return; }
    const wasComplete = this.visited.length === this.core.length;
    clearTimeout(this.completionTimer); this.completionPending = false; Dialogs.close(undefined, false);
    this.busy = true; document.getElementById("app").setAttribute("aria-busy", "true");
    const from = this.current;
    const transition = document.getElementById("transition");
    if (origin && transition) {
      transition.style.setProperty("--transition-x", `${origin.x}px`);
      transition.style.setProperty("--transition-y", `${origin.y}px`);
    } else if (transition) {
      transition.style.setProperty("--transition-x", "50%");
      transition.style.setProperty("--transition-y", "50%");
    }
    document.body.classList.add("is-navigating", target === "hub" ? "entering-room" : "leaving-room");
    const fadeOut = () => {
      old.classList.add("is-leaving");
      transition?.classList.add("play");
    };
    try {
      if (window.Room3D?.ready && !Motion.reduced && !document.hidden) {
        const travel = Promise.resolve().then(() => window.Room3D.leave(target)).catch(() => false);
        await this.waitForTransition(200);
        fadeOut();
        await Promise.all([Promise.race([travel, this.waitForTransition(900)]), this.waitForTransition(360)]);
      } else {
        fadeOut();
        await this.waitForTransition(420);
      }
      old.classList.remove("active"); old.inert = true; old.setAttribute("aria-hidden", "true");
      next.inert = false; next.setAttribute("aria-hidden", "false"); next.classList.add("active", "is-arriving"); next.scrollTop = 0;
      this.current = target;
      if (this.core.includes(target) && !this.visited.includes(target)) this.visited.push(target);
      this.updateProgress();
      const heading = next.querySelector("h1, h2") || next;
      heading.tabIndex = -1; heading.focus({ preventScroll: true });
      window.dispatchEvent(new CustomEvent("pagechange", { detail: { page: target, from } }));
      if (!wasComplete && this.visited.length === this.core.length) {
        this.completionPending = true;
      }
      if (target === "final") Effects.burst(innerWidth / 2, innerHeight * .36, 28);
      await this.waitForTransition(650);
    } finally {
      this.busy = false;
      old.classList.remove("is-leaving"); next.classList.remove("is-arriving");
      transition?.classList.remove("play");
      document.body.classList.remove("is-navigating", "entering-room", "leaving-room");
      document.getElementById("app").setAttribute("aria-busy", "false");
      this.showCompletionIfReady();
    }
  },
  showCompletionIfReady() {
    if (!this.completionPending || this.busy || Dialogs.active || document.hidden) return;
    this.completionPending = false;
    Dialogs.open(document.getElementById("completionModal"));
    Effects.burst(innerWidth / 2, innerHeight * .4, 28);
  },
  updateProgress() {
    const count = this.core.filter(page => this.visited.includes(page)).length;
    document.getElementById("progressText").textContent = `${count} / 4`;
    document.getElementById("progressBar").style.width = `${count * 25}%`;
    document.querySelector(".progress-track").setAttribute("aria-valuenow", count);
    document.getElementById("roomHint").textContent = count === 4 ? "Bạn đã mở tất cả. Cánh cửa cuối cùng đang chờ." : `Có ${4 - count} điều còn lại đang đợi bạn chạm tới.`;
    document.querySelector('[data-page="hub"]').classList.toggle("all-found", count === 4);
    document.getElementById("finalDoor").hidden = count !== 4;
    document.querySelectorAll(".room-object").forEach(object => {
      const visited = this.visited.includes(object.dataset.go);
      object.classList.toggle("visited", visited);
      object.setAttribute("aria-label", `${object.dataset.label}${visited ? " · đã khám phá" : ""}`);
    });
    document.querySelectorAll(".room3d-nav-item").forEach(control => {
      const visited = this.visited.includes(control.dataset.go);
      control.classList.toggle("visited", visited);
      control.setAttribute("aria-label", `${control.querySelector(".nav-label").textContent}${visited ? " · đã khám phá" : ""}`);
    });
    window.Room3D?.syncProgress(this.visited);
  },
  onPageChange(page, from) {
    if (page === "hub" && window.Room3D?.ready) window.Room3D.enter({ from });
    else if (page === "hub") Room.init();
    else Room.reset();
    if (page === "letter") LetterPage.init();
  },
  initMusic() {
    const audio = document.getElementById("bgMusic"), toggle = document.getElementById("musicToggle"), label = document.getElementById("musicLabel");
    let choice = null, pending = false;
    audio.volume = .55;
    const sync = () => {
      const playing = !audio.paused;
      toggle.classList.toggle("playing", playing); toggle.setAttribute("aria-pressed", String(playing));
      toggle.setAttribute("aria-label", playing ? "Tắt nhạc" : "Bật nhạc"); label.textContent = playing ? "TẮT NHẠC" : "BẬT NHẠC";
    };
    const play = async (explicit = false) => {
      if (pending) return;
      pending = true;
      try { await audio.play(); if (choice === false) audio.pause(); }
      catch { if (explicit) this.showToast("Chưa bật được nhạc. Hãy thử lại nhé ♡"); }
      finally { pending = false; sync(); }
    };
    audio.addEventListener("play", sync); audio.addEventListener("pause", sync);
    toggle.addEventListener("click", () => {
      if (!audio.paused || pending) { choice = false; audio.pause(); sync(); }
      else { choice = true; play(true); }
    });
    document.addEventListener("click", event => {
      if (choice !== null || event.target.closest("#musicToggle, #helpToggle")) return;
      choice = true; play();
    });
  },
  syncConfig() {
    if (!window.SITE_CONFIG) return;
    const link = document.getElementById("connectLink"), address = document.querySelector(".mail-address");
    if (link) link.href = SITE_CONFIG.connectUrl;
    if (address) address.textContent = SITE_CONFIG.ownerEmail;
  },
  showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    clearTimeout(this.toastTimer); toast.textContent = message; toast.classList.add("show");
    this.toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
  }
};

const Room = {
  initialized: false, frame: null, scene: null,
  init() {
    this.scene = document.getElementById("roomScene");
    if (window.Room3D?.ready) { this.reset(); return; }
    if (!this.scene || this.initialized) return;
    this.initialized = true;
    this.scene.addEventListener("pointermove", event => {
      if (!Motion.interactive || innerWidth <= 768 || event.pointerType === "touch" || Dialogs.active) return;
      cancelAnimationFrame(this.frame);
      this.frame = requestAnimationFrame(() => {
        this.frame = null;
        if (App.current !== "hub" || !Motion.interactive || Dialogs.active) return;
        const rect = this.scene.getBoundingClientRect();
        const x = Math.min(.5, Math.max(-.5, (event.clientX - rect.left) / rect.width - .5));
        const y = Math.min(.5, Math.max(-.5, (event.clientY - rect.top) / rect.height - .5));
        this.scene.style.transform = `translate(-50%,-50%) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
      });
    }, { passive: true });
    this.scene.addEventListener("pointerleave", () => this.reset());
    window.addEventListener("resize", () => this.reset(), { passive: true });
    const label = document.getElementById("objectLabel"), defaultLabel = label.textContent;
    this.scene.querySelectorAll(".room-object").forEach(object => {
      const show = () => { label.textContent = object.dataset.label; label.classList.add("is-highlighted"); };
      const hide = () => { label.textContent = defaultLabel; label.classList.remove("is-highlighted"); };
      object.addEventListener("pointerenter", show); object.addEventListener("focus", show);
      object.addEventListener("pointerleave", hide); object.addEventListener("blur", hide);
    });
  },
  reset() { cancelAnimationFrame(this.frame); this.frame = null; this.scene?.style.removeProperty("transform"); }
};

// The ES module scene and classic page controllers share one navigation owner.
window.App = App;
window.Motion = Motion;
window.Dialogs = Dialogs;
document.addEventListener("DOMContentLoaded", () => App.init());
// Protect artwork while leaving letter text and form fields usable.
document.addEventListener("dragstart", event => {
  if (event.target.closest(".chibi-box, .hero-photo, .lightbox, .gift-tile")) event.preventDefault();
});
