const LETTER_TEXT = [
  `Có những điều rất dễ nói vào một ngày đặc biệt, nhưng lại thường bị bỏ quên trong những ngày bình thường.`,
  `Có một người mẹ từng thức dậy sớm hơn mọi người để chuẩn bị một bữa sáng. Có một người chị từng nhường đi điều mình thích. Có một người cô, một người bạn, một người đồng nghiệp… từng âm thầm làm cho một ngày của ai đó trở nên nhẹ hơn.`,
  `Có thể họ không nhớ những điều mình đã làm. Nhưng người nhận được sự tử tế ấy thì có.`,
  `Vì vậy hôm nay, thay vì chỉ nói rằng phụ nữ xứng đáng được yêu thương, hãy nói thêm một điều: họ xứng đáng được lắng nghe. Được nghỉ ngơi. Được lựa chọn. Được sống theo nhịp của riêng mình.`,
  `Không phải lúc nào cũng cần phải mạnh mẽ. Không phải lúc nào cũng phải mỉm cười. Và cũng không cần phải trở thành một phiên bản hoàn hảo để được yêu thương.`,
  `Nếu hôm nay bạn đang mệt, hãy nghỉ một chút. Nếu bạn đang vui, hãy tận hưởng thật trọn vẹn. Nếu bạn đang bắt đầu lại, mong bạn đủ kiên nhẫn với chính mình.`,
  `Và nếu chẳng ai nói điều này với bạn hôm nay, thì hãy để căn phòng nhỏ này nói thay: cảm ơn bạn vì đã cố gắng. Cảm ơn vì đã đi đến tận hôm nay.`
];

const CHIBI_MESSAGES = [
  "Bạn đáng được nghỉ.",
  "Uống nước nhé ♡",
  "Đừng quên mình.",
  "Chậm một chút thôi.",
  "Bạn làm tốt rồi.",
  "Cho mình một cái ôm.",
  "Hôm nay cũng đủ rồi.",
  "Cứ là chính mình.",
  "Không cần hoàn hảo.",
  "Bạn xứng đáng bình yên."
];

const MEMORYS = [
  ["assets/photos/memory-01.jpg","Một khoảnh khắc","01"],
  ["assets/photos/memory-02.jpg","Một nụ cười","02"],
  ["assets/photos/memory-03.jpg","Một ngày bình thường","03"],
  ["assets/photos/memory-04.jpg","Một người đặc biệt","04"],
  ["assets/photos/memory-05.jpg","Một mùa thật đẹp","05"],
  ["assets/photos/memory-06.jpg","Một lần gặp nhau","06"],
  ["assets/photos/memory-07.jpg","Một góc quen thuộc","07"],
  ["assets/photos/memory-08.jpg","Một điều muốn giữ","08"]
];

const LetterPage = {
  initialized: false,
  rainTimer: null,
  scrollFrame: null,
  messageIndex: 0,
  motionQuery: window.matchMedia("(prefers-reduced-motion: reduce)"),
  init() {
    if (!this.initialized) {
      this.initialized = true;
      this.render();
      this.bindScroll();
      document.addEventListener("visibilitychange", () => this.syncRain());
      this.motionQuery.addEventListener("change", () => {
        this.clearRain();
        this.syncRain();
        this.queueReveal();
      });
    }
    this.queueReveal();
    this.syncRain();
  },
  render() {
    const container = document.getElementById("letterContent");
    container.innerHTML = LETTER_TEXT.map((text, i) => `<p class="${i === 0 ? "dropcap" : ""}">${text}</p>`).join("");
    const progress = document.createElement("div");
    progress.className = "letter-reading-progress";
    progress.setAttribute("role", "progressbar");
    progress.setAttribute("aria-label", "Tiến độ đọc thư");
    progress.setAttribute("aria-valuemin", "0");
    progress.setAttribute("aria-valuemax", "100");
    progress.setAttribute("aria-valuenow", "0");
    progress.innerHTML = '<span></span>';
    document.getElementById("exploreStage").appendChild(progress);
    this.progress = progress;
    this.paragraphs = [...container.querySelectorAll("p")];
  },
  bindScroll() {
    const scroll = document.getElementById("letterScroll");
    scroll.tabIndex = 0;
    scroll.setAttribute("aria-label", "Nội dung bức thư");
    scroll.addEventListener("scroll", () => this.queueReveal(), { passive: true });
    window.addEventListener("resize", () => {
      if (App.current === "letter") {
        this.queueReveal();
        this.fitRain();
      }
    }, { passive: true });
  },
  queueReveal() {
    if (this.scrollFrame !== null) return;
    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = null;
      this.reveal();
    });
  },
  reveal() {
    const scroll = document.getElementById("letterScroll");
    if (!scroll || App.current !== "letter") return;
    const bounds = scroll.getBoundingClientRect();
    this.paragraphs.forEach(p => {
      const r = p.getBoundingClientRect();
      if (this.motionQuery.matches || r.top < bounds.bottom - 20) p.classList.add("show");
    });
    const distance = scroll.scrollHeight - scroll.clientHeight;
    const amount = distance > 0 ? Math.min(1, Math.max(0, scroll.scrollTop / distance)) : 1;
    this.progress.firstElementChild.style.width = `${amount * 100}%`;
    this.progress.setAttribute("aria-valuenow", String(Math.round(amount * 100)));
    const tip = document.querySelector(".letter-scroll-tip");
    tip.classList.toggle("is-complete", amount >= .99);
    tip.textContent = amount >= .99 ? "♡ Cảm ơn bạn đã đọc đến đây" : "↓ Cuộn để đọc hết bức thư";
  },
  resetScroll() {
    const scroll = document.getElementById("letterScroll");
    if (scroll) scroll.scrollTop = 0;
    this.queueReveal();
  },
  clearRain() {
    clearTimeout(this.rainTimer);
    this.rainTimer = null;
    const holder = document.getElementById("chibiRain");
    if (holder) holder.replaceChildren();
  },
  syncRain() {
    if (document.hidden || App.current !== "letter") {
      this.clearRain();
      return;
    }
    this.startRain();
  },
  startRain() {
    const holder = document.getElementById("chibiRain");
    if (!holder || document.hidden || App.current !== "letter" || this.rainTimer !== null || holder.children.length) return;
    this.messageIndex = Math.floor(Math.random() * CHIBI_MESSAGES.length);
    holder.classList.toggle("is-still", this.motionQuery.matches);
    if (this.motionQuery.matches) {
      for (let i = 0; i < 3; i++) this.createChibi(holder, true);
      return;
    }

    const tick = () => {
      this.rainTimer = null;
      if (document.hidden || App.current !== "letter") {
        this.syncRain();
        return;
      }
      if (holder.children.length < this.rainLimit(holder)) this.createChibi(holder);
      this.rainTimer = setTimeout(tick, 1400 + Math.random() * 800);
    };
    tick();
  },
  fitRain() {
    const holder = document.getElementById("chibiRain");
    if (!holder || this.motionQuery.matches) return;
    const limit = this.rainLimit(holder);
    [...holder.children].slice(limit).forEach(box => {
      if (box.contains(document.activeElement)) document.getElementById("letterScroll").focus({ preventScroll: true });
      box.remove();
    });
    [...holder.children].forEach((box, index) => {
      box.dataset.lane = index;
      this.fitChibi(box, holder);
    });
  },
  rainLimit(holder) {
    const maximum = window.innerWidth <= 620 ? 3 : 4;
    const boxWidth = holder.firstElementChild?.offsetWidth || (window.innerWidth <= 620 ? 72 : 84);
    return Math.max(1, Math.min(maximum, Math.floor(holder.clientWidth / (boxWidth + 10))));
  },
  fitChibi(box, holder) {
    const boxWidth = box.offsetWidth || 84, boxHeight = box.offsetHeight || 73;
    const laneWidth = holder.clientWidth / this.rainLimit(holder), lane = Number(box.dataset.lane);
    const maximumLeft = Math.max(0, holder.clientWidth - boxWidth);
    const left = Math.min(maximumLeft, lane * laneWidth + 5);
    const right = Math.max(left, Math.min(maximumLeft, (lane + 1) * laneWidth - boxWidth - 5));
    const x = left + (right - left) * Number(box.dataset.scatter);
    const drift = Math.max(left - x, Math.min(right - x, Number(box.dataset.sway) * 28));
    box.style.left = `${x.toFixed(1)}px`;
    box.style.setProperty("--drift", `${drift.toFixed(1)}px`);
    box.style.setProperty("--fall-distance", `${holder.clientHeight + boxHeight + 24}px`);
  },
  setChibiMessage(box) {
    const text = CHIBI_MESSAGES[this.messageIndex % CHIBI_MESSAGES.length];
    this.messageIndex = (this.messageIndex + 1) % CHIBI_MESSAGES.length;
    box.dataset.message = text;
    box.setAttribute("aria-label", text);
    box.querySelector(".chibi-copy").textContent = text;
  },
  createChibi(holder, still = false) {
    const box = document.createElement("button");
    box.className = "chibi-box";
    box.type = "button";
    if (!still) {
      const used = new Set([...holder.children].map(item => Number(item.dataset.lane)));
      const lanes = Array.from({ length: this.rainLimit(holder) }, (_, lane) => lane).filter(lane => !used.has(lane));
      box.dataset.lane = lanes[Math.floor(Math.random() * lanes.length)] ?? 0;
      box.dataset.scatter = Math.random();
      box.dataset.sway = Math.random() * 2 - 1;
      box.style.setProperty("--delay", `${Math.random() * .35}s`);
      box.style.setProperty("--dur", `${6 + Math.random() * 2}s`);
      box.style.setProperty("--rot", `${-10 + Math.random() * 20}deg`);
      box.style.setProperty("--scale", (.88 + Math.random() * .12).toFixed(2));
    }
    box.setAttribute("aria-haspopup", "dialog");
    box.setAttribute("aria-controls", "messageModal");
    box.innerHTML = '<span class="chibi-hair" aria-hidden="true"></span><span class="chibi-face" aria-hidden="true"></span><span class="chibi-heart" aria-hidden="true">♡</span><span class="chibi-copy"></span>';
    this.setChibiMessage(box);
    box.addEventListener("click", e => {
      e.stopPropagation();
      // The falling target disappears, so the dialog returns to the letter.
      if (!still) document.getElementById("letterScroll").focus({ preventScroll: true });
      UI.message(box.dataset.message, { bloom: "♡" });
      if (!still) box.remove();
    });
    holder.appendChild(box);
    if (!still) {
      this.fitChibi(box, holder);
      box.addEventListener("animationend", () => box.remove(), { once: true });
    }
  }
};

const MemoryPage = {
  index: 0,
  initialized: false,
  renderVersion: 0,
  imageCache: new Map(),
  suppressClickUntil: 0,
  init() {
    if (!this.initialized) {
      this.initialized = true;
      this.renderDots();
      document.getElementById("photoPrev").addEventListener("click", () => this.change(-1));
      document.getElementById("photoNext").addEventListener("click", () => this.change(1));
      document.getElementById("photoPrev").setAttribute("aria-label", "Ảnh trước");
      document.getElementById("photoNext").setAttribute("aria-label", "Ảnh tiếp theo");
      const heroPhoto = document.getElementById("heroPhoto");
      heroPhoto.setAttribute("role", "button");
      heroPhoto.tabIndex = 0;
      heroPhoto.setAttribute("aria-haspopup", "dialog");
      heroPhoto.setAttribute("aria-controls", "lightbox");
      heroPhoto.style.touchAction = "pan-y";
      heroPhoto.addEventListener("click", () => {
        if (Date.now() > this.suppressClickUntil) this.open();
      });
      heroPhoto.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.open();
        }
      });
      heroPhoto.addEventListener("dragstart", e => e.preventDefault());
      heroPhoto.addEventListener("selectstart", e => e.preventDefault());
      const lb = document.getElementById("lightbox");
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.setAttribute("aria-label", "Xem ảnh kỷ niệm");
      lb.setAttribute("aria-describedby", "lightboxText");
      lb.style.touchAction = "pan-y";
      lb.querySelector(".lightbox-close").setAttribute("aria-label", "Đóng ảnh");
      [-1, 1].forEach(dir => {
        const arrow = document.createElement("button");
        arrow.type = "button";
        arrow.className = `lightbox-nav ${dir < 0 ? "prev" : "next"}`;
        arrow.textContent = dir < 0 ? "←" : "→";
        arrow.setAttribute("aria-label", dir < 0 ? "Ảnh trước" : "Ảnh tiếp theo");
        arrow.addEventListener("click", () => this.change(dir));
        lb.appendChild(arrow);
      });
      lb.addEventListener("dragstart", e => e.preventDefault());
      lb.addEventListener("selectstart", e => e.preventDefault());
      lb.addEventListener("click", e => {
        if (e.target !== lb || Date.now() < this.suppressClickUntil) return;
        const r = document.getElementById("lightboxImage").getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) this.close();
      });
      this.bindSwipe(heroPhoto);
      this.bindSwipe(lb);
      document.addEventListener("keydown", e => {
        if (App.current !== "women" || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
        if (e.target.closest("input, textarea, select, [contenteditable='true']")) return;
        if (Dialogs.active && Dialogs.active.id !== "lightbox") return;
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          e.preventDefault();
          this.change(e.key === "ArrowLeft" ? -1 : 1);
        } else if (e.key === "Home" || e.key === "End") {
          e.preventDefault();
          this.select(e.key === "Home" ? 0 : MEMORYS.length - 1);
        }
      });
      document.getElementById("photoStage").setAttribute("aria-label", "Album kỷ niệm");
      document.getElementById("photoStage").setAttribute("aria-roledescription", "carousel");
      document.getElementById("photoCaption").setAttribute("aria-live", "polite");
      this.render(false);
    }
  },
  renderDots() {
    const holder = document.getElementById("photoDots");
    holder.setAttribute("aria-label", "Chọn ảnh kỷ niệm");
    holder.innerHTML = MEMORYS.map(([, caption, num], i) => `<button type="button" class="photo-dot" data-i="${i}" aria-label="Ảnh ${num}: ${caption}"></button>`).join("");
    holder.addEventListener("click", e => {
      const dot = e.target.closest(".photo-dot");
      if (dot) this.select(Number(dot.dataset.i));
    });
  },
  loadImage(index) {
    const src = MEMORYS[(index + MEMORYS.length) % MEMORYS.length][0];
    if (!this.imageCache.has(src)) {
      this.imageCache.set(src, new Promise(resolve => {
        const image = new Image();
        image.onload = () => resolve(true);
        image.onerror = () => {
          this.imageCache.delete(src);
          resolve(false);
        };
        image.src = src;
      }));
    }
    return this.imageCache.get(src);
  },
  async render(transition = true, direction = 1) {
    const version = ++this.renderVersion;
    const [src, caption, num] = MEMORYS[this.index];
    const photo = document.getElementById("heroPhoto");
    const img = document.querySelector("#heroPhoto img");
    photo.style.setProperty("--slide-direction", String(direction));
    photo.classList.add("is-loading");
    const animate = transition && !LetterPage.motionQuery.matches && !document.hidden;
    photo.classList.toggle("is-changing", animate);
    photo.setAttribute("aria-label", `Mở ảnh ${num}: ${caption}`);
    document.getElementById("memoryCounter").textContent = `${num} / ${String(MEMORYS.length).padStart(2, "0")}`;
    document.querySelectorAll(".photo-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === this.index);
      if (i === this.index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    this.syncLightbox();
    const [loaded] = await Promise.all([
      this.loadImage(this.index),
      animate ? new Promise(resolve => setTimeout(resolve, 160)) : Promise.resolve()
    ]);
    if (version !== this.renderVersion) return;
    img.src = src;
    img.alt = caption;
    document.getElementById("photoCaption").textContent = caption;
    document.getElementById("photoMeta").textContent = num;
    photo.classList.remove("is-loading", "is-changing");
    photo.classList.toggle("has-image-error", !loaded);
    this.loadImage(this.index - 1);
    this.loadImage(this.index + 1);
  },
  select(index) {
    if (index === this.index) return;
    const direction = index > this.index ? 1 : -1;
    this.index = index;
    this.render(true, direction);
  },
  change(dir) {
    this.index = (this.index + dir + MEMORYS.length) % MEMORYS.length;
    this.render(true, dir);
  },
  bindSwipe(surface) {
    let start = null;
    surface.addEventListener("pointerdown", e => {
      if (!e.isPrimary || e.button !== 0 || e.target.closest("button")) return;
      start = { x: e.clientX, y: e.clientY, id: e.pointerId };
    });
    surface.addEventListener("pointerup", e => {
      if (!start || start.id !== e.pointerId) return;
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      start = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        this.suppressClickUntil = Date.now() + 400;
        this.change(dx > 0 ? -1 : 1);
      }
    });
    surface.addEventListener("pointercancel", () => { start = null; });
    surface.addEventListener("pointerleave", e => {
      if (e.pointerType === "mouse") start = null;
    });
  },
  open() {
    const lb = document.getElementById("lightbox");
    Dialogs.open(lb);
    this.syncLightbox();
  },
  close() {
    Dialogs.close(document.getElementById("lightbox"));
  },
  syncLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("show")) return;
    const index = this.index;
    const [src, caption, num] = MEMORYS[index];
    const img = document.getElementById("lightboxImage");
    lb.classList.add("is-loading");
    img.src = src;
    img.alt = caption;
    document.getElementById("lightboxText").textContent = `${num} / ${String(MEMORYS.length).padStart(2, "0")} · ${caption}`;
    this.loadImage(index).then(() => {
      if (this.index === index) lb.classList.remove("is-loading");
    });
  }
};

const Notes = {
  initialized: false,
  init() {
    if (this.initialized) return;
    this.initialized = true;
    document.querySelectorAll(".note-card").forEach(note => {
      note.setAttribute("aria-haspopup", "dialog");
      note.setAttribute("aria-controls", "messageModal");
      note.addEventListener("click", e => {
        if (!note.classList.contains("is-read")) {
          const r = note.getBoundingClientRect();
          Effects.burst(e.detail ? e.clientX : r.left + r.width / 2, e.detail ? e.clientY : r.top + r.height / 2, 8);
        }
        note.classList.add("is-read");
        note.querySelector("i").textContent = "✓";
        note.querySelector("i").setAttribute("aria-hidden", "true");
        note.setAttribute("aria-label", `${note.querySelector("strong").textContent} · đã đọc, chạm để đọc lại`);
        UI.message(note.dataset.note, { title: "MỘT LỜI NHẮC", bloom: "✦" });
      });
    });
  }
};

const Gifts = {
  initialized: false,
  init() {
    if (this.initialized) return;
    this.initialized = true;
    document.querySelectorAll(".gift-tile").forEach(gift => {
      gift.setAttribute("aria-haspopup", "dialog");
      gift.setAttribute("aria-controls", "messageModal");
      gift.addEventListener("click", e => {
        if (!gift.classList.contains("is-opened")) {
          const r = gift.getBoundingClientRect();
          Effects.burst(e.detail ? e.clientX : r.left + r.width / 2, e.detail ? e.clientY : r.top + r.height / 2, 14);
        }
        gift.classList.add("is-opened");
        gift.querySelector("small").textContent = "đã mở · mở lại";
        UI.message(gift.dataset.gift, { title: "MỘT MÓN QUÀ", bloom: gift.querySelector(".gift-art").textContent });
      });
    });
  }
};

const Thanks = {
  initialized: false,
  sending: false,
  init() {
    if (this.initialized) return;
    this.initialized = true;
    const form = document.getElementById("thanksForm");
    const range = document.getElementById("ratingRange");
    const updateRating = () => {
      document.getElementById("ratingValue").textContent = range.value;
      range.style.setProperty("--rating-fill", `${(Number(range.value) - 1) / 4 * 100}%`);
      range.setAttribute("aria-valuetext", `${range.value} trên 5`);
    };
    range.addEventListener("input", updateRating);
    updateRating();
    form.addEventListener("input", () => {
      if (!this.sending) {
        form.classList.remove("is-sent");
        document.getElementById("thanksStatus").textContent = "";
      }
    });
    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (this.sending || form.elements.namedItem("_honey").value || !form.reportValidity()) return;
      const field = name => form.elements.namedItem(name).value;
      const label = document.getElementById("sendLabel");
      const status = document.getElementById("thanksStatus");
      const submit = form.querySelector("[type='submit']");
      const defaultLabel = label.textContent;
      this.sending = true;
      submit.disabled = true;
      form.classList.add("is-sending");
      form.classList.remove("is-sent");
      form.setAttribute("aria-busy", "true");
      label.textContent = "ĐANG GỬI…";
      status.textContent = "";
      const payload = {
        name: field("name").trim(),
        email: field("email").trim(),
        _replyto: field("email").trim(),
        message: field("message").trim(),
        rating: `${field("rating")}/5`,
        _subject: field("_subject"),
        _template: "table",
        _url: location.href
      };
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        if (location.protocol === "file:") throw new Error("local_file");
        const body = new URLSearchParams(payload);
        const response = await fetch(SITE_CONFIG.formSubmitEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Accept": "application/json"
          },
          body,
          signal: controller.signal
        });
        const result = await response.json();
        if (!response.ok || result.success === false || result.success === "false") throw new Error("send_failed");
        status.textContent = "Đã gửi rồi ♡ Cảm ơn bạn đã để lại một lời nhắn.";
        status.dataset.state = "success";
        form.classList.add("is-sent");
        form.reset();
        updateRating();
        App.showToast("Lời nhắn đã bay đến Kio ♡");
      } catch (err) {
        status.dataset.state = "error";
        if (err.message === "local_file") {
          status.textContent = "Bạn đang mở file trực tiếp. Hãy mở bằng VS Code → Live Server rồi gửi lại nhé.";
        } else if (err.name === "AbortError") {
          status.textContent = "Mạng hơi chậm nên chưa gửi được. Bạn hãy thử lại nhé.";
        } else {
          status.textContent = "Chưa gửi được. Kiểm tra mạng, email hoặc thư mục Spam rồi thử lại.";
        }
      } finally {
        clearTimeout(timeout);
        this.sending = false;
        submit.disabled = false;
        form.classList.remove("is-sending");
        form.removeAttribute("aria-busy");
        label.textContent = defaultLabel;
      }
    });
  }
};

const UI = {
  initialized: false,
  init() {
    if (this.initialized) return;
    this.initialized = true;
    const modal = document.getElementById("messageModal");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "messageText");
    modal.querySelector(".modal-x").setAttribute("aria-label", "Đóng lời nhắn");
    Notes.init();
    Gifts.init();
    Thanks.init();
  },
  message(text, { title = "MỘT ĐIỀU NHỎ", bloom = "✦" } = {}) {
    const modal = document.getElementById("messageModal");
    document.getElementById("messageText").textContent = text;
    modal.querySelector(".kicker").textContent = title;
    modal.querySelector(".message-bloom").textContent = bloom;
    Dialogs.open(modal);
  }
};

window.addEventListener("pagechange", e => {
  const page = e.detail.page;
  if (page === "letter") LetterPage.init();
  else LetterPage.clearRain();
  if (page === "women") MemoryPage.init();
  else if (MemoryPage.initialized) MemoryPage.close();
});

document.addEventListener("DOMContentLoaded", () => {
  UI.init();
  LetterPage.init();
  if (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.connectUrl) {
    const connect = document.getElementById("connectLink");
    if (connect) connect.href = SITE_CONFIG.connectUrl;
  }
  if (App.current === "women") MemoryPage.init();
});
