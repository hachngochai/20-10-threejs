// Keep normal navigation available even if modules or WebGL cannot start.
(() => {
  const fallback = message => {
    const viewport = document.getElementById("room3dViewport");
    const status = document.getElementById("room3dStatus");
    if (viewport) viewport.dataset.roomRenderer = "fallback";
    if (status) {
      status.textContent = message;
      status.classList.add("is-fallback");
      status.hidden = false;
    }
    document.querySelector(".room-ui")?.classList.remove("has-room3d");
    document.body.classList.remove("has-world3d");
    delete document.body.dataset.worldPage;
  };
  const load = () => {
    if (location.protocol === "file:") {
      fallback("Mở bằng Live Server để bước vào căn phòng 3D.");
      return;
    }
    import("./room3d.js?v=20261011-rose-ui").catch(error => {
      console.warn("Room 3D could not load; the accessible room remains available.", error);
      fallback("Căn phòng vẫn mở. Chạm một vật thể để khám phá nhé.");
    });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", load, { once: true });
  else load();
})();
