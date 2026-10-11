(() => {
  const room = document.getElementById("bonusRoom");
  const header = document.querySelector(".bonus-header");
  const open = document.getElementById("openBonus");
  const modal = document.getElementById("bonusLetter");
  const close = document.getElementById("closeBonus");
  const sparkles = document.getElementById("bonusSparkles");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let lastFocus = null;

  const clearSparkles = () => sparkles.replaceChildren();
  const bloom = () => {
    clearSparkles();
    if (motion.matches || document.hidden) return;
    for (let i = 0; i < 12; i++) {
      const heart = document.createElement("span");
      heart.textContent = i % 3 ? "♡" : "✦";
      heart.style.setProperty("--spark-x", `${(Math.random() - .5) * 360}px`);
      heart.style.setProperty("--spark-y", `${-80 - Math.random() * 210}px`);
      heart.style.setProperty("--spark-delay", `${Math.random() * .2}s`);
      sparkles.appendChild(heart);
      heart.addEventListener("animationend", () => heart.remove(), { once: true });
    }
  };
  const dismiss = () => {
    if (modal.hidden) return;
    modal.hidden = true;
    room.inert = false; header.inert = false;
    document.body.classList.remove("bonus-reading");
    open.classList.remove("is-open");
    if (lastFocus?.isConnected) lastFocus.focus({ preventScroll: true });
  };
  open.addEventListener("click", () => {
    lastFocus = document.activeElement;
    bloom();
    open.classList.add("is-open");
    modal.hidden = false;
    room.inert = true; header.inert = true;
    document.body.classList.add("bonus-reading");
    close.focus({ preventScroll: true });
  });
  close.addEventListener("click", dismiss);
  modal.addEventListener("click", event => { if (event.target === modal) dismiss(); });
  modal.addEventListener("keydown", event => {
    if (event.key === "Escape") { event.preventDefault(); dismiss(); }
    else if (event.key === "Tab") { event.preventDefault(); close.focus(); }
  });
  document.addEventListener("visibilitychange", () => { if (document.hidden) clearSparkles(); });
  motion.addEventListener("change", clearSparkles);
})();
