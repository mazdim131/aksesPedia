(function () {
  if (!document.getElementById("aksespedia-shortcut-style")) {
    var style = document.createElement("style");
    style.id = "aksespedia-shortcut-style";
    style.textContent =
      ".shortcut-item{display:flex;align-items:center;justify-content:space-between;gap:15px}" +
      ".shortcut-label{font-family:sans-serif;font-size:15px;font-weight:500;color:#000}" +
      ".shortcut-keys{display:flex;align-items:center;gap:8px;flex-shrink:0}" +
      ".shortcut-keys span{font-weight:700;color:#666;font-size:14px}" +
      "kbd{display:inline-flex;align-items:center;justify-content:center;min-width:42px;height:35px;padding:0 8px;font-family:sans-serif;font-size:13px;font-weight:600;color:#333!important;background-color:#fff!important;border:1px solid #333;border-radius:8px}" +
      "body{background-color:var(--bg-body)!important;color:var(--color-body-text)!important}" +
      ".modal-content{padding:15px}" +
      "@media(min-width:576px){.modal-content{padding:25px}}" +
      "@media(min-width:768px){.border-end-md{border-right:1px solid #dee2e6}}" +
      "@media(max-width:767.98px){.shortcut-item{flex-wrap:wrap;gap:10px;padding-bottom:12px;border-bottom:1px dashed #eee}.shortcut-label{width:100%;font-size:14px}.shortcut-keys{width:100%;justify-content:flex-start;margin-top:2px}}";
    document.head.appendChild(style);
  }
})();

(function () {
  var tema = localStorage.getItem("temaAksesibilitas");
  if (tema) document.documentElement.setAttribute("data-theme", tema);
})();

window.addEventListener("keydown", (event) => {
  if (event.altKey) {
    const key = event.key.toLowerCase();

    switch (key) {
      case "s":
        event.preventDefault();
        nonaktifkanSuara();
        break;

      case "a":
        event.preventDefault();
        aktifkanSuara();
        break;

      case "arrowleft":
        event.preventDefault();
        beritaSebelumnya();
        break;

      case "arrowright":
        event.preventDefault();
        beritaSelanjutnya();
        break;

      case "h":
        event.preventDefault();
        membukaPanduanNavigasi();
        break;

      case "arrowup":
        event.preventDefault();
        membesarUkuranTeks();
        break;

      case "arrowdown":
        event.preventDefault();
        mengecilkanUkuranTeks();
        break;

      case "b":
        event.preventDefault();
        menujuHalamanBerita();
        break;

      default:
        break;
    }
  }
});

function nonaktifkanSuara() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  const statusEl = document.getElementById("voice-status");
  const iconEl = document.getElementById("voiceIcon");
  if (statusEl) statusEl.textContent = "Bantuan Suara : NonAktif";
  if (iconEl) iconEl.className = "bi bi-mic-mute-fill";
}

function aktifkanSuara() {
  const btn = document.getElementById("voiceBtn");
  const icon = document.getElementById("voiceIcon");
  if (btn && icon && icon.classList.contains("bi-mic-fill")) {
    btn.click();
    return;
  }
  if (!btn) {
    const playBtn = document.querySelector(
      ".btn-mulai, .btn-mulai-large, .hero__btn-play",
    );
    if (playBtn) playBtn.click();
  }
}

function beritaSebelumnya() {
  const swiperEl = document.querySelector(".swiper");
  if (swiperEl && swiperEl.swiper) {
    swiperEl.swiper.slidePrev();
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const section = params.get("section");
  const index = params.get("index");
  if (section && index !== null && typeof newsData !== "undefined") {
    let arr;
    if (section === "hero_subNews") arr = newsData.hero.subNews;
    else if (section === "trending") arr = newsData.trending;
    else if (section === "beritaInklusif_grid")
      arr = newsData.beritaInklusif.grid;
    else if (section === "pilihanRedaksi") arr = newsData.pilihanRedaksi;
    if (arr && parseInt(index) - 1 >= 0) {
      window.location.href =
        "/src/page/structure/detailBerita.html?section=" +
        section +
        "&index=" +
        (parseInt(index) - 1);
    }
  }
}

function beritaSelanjutnya() {
  const swiperEl = document.querySelector(".swiper");
  if (swiperEl && swiperEl.swiper) {
    swiperEl.swiper.slideNext();
    return;
  }
  const params = new URLSearchParams(window.location.search);
  const section = params.get("section");
  const index = params.get("index");
  if (section && index !== null && typeof newsData !== "undefined") {
    let arr;
    if (section === "hero_subNews") arr = newsData.hero.subNews;
    else if (section === "trending") arr = newsData.trending;
    else if (section === "beritaInklusif_grid")
      arr = newsData.beritaInklusif.grid;
    else if (section === "pilihanRedaksi") arr = newsData.pilihanRedaksi;
    if (arr && parseInt(index) + 1 < arr.length) {
      window.location.href =
        "/src/page/structure/detailBerita.html?section=" +
        section +
        "&index=" +
        (parseInt(index) + 1);
    }
  }
}

function membukaPanduanNavigasi() {
  const modalEl = document.getElementById("modalKeyboardShortCut");
  if (modalEl && typeof bootstrap !== "undefined") {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

function membesarUkuranTeks() {
  const el = document.documentElement;
  let size = parseFloat(getComputedStyle(el).fontSize);
  size = Math.min((size || 16) + 2, 32);
  el.style.fontSize = size + "px";
}

function mengecilkanUkuranTeks() {
  const el = document.documentElement;
  let size = parseFloat(getComputedStyle(el).fontSize);
  size = Math.max((size || 16) - 2, 10);
  el.style.fontSize = size + "px";
}

function menujuHalamanBerita() {
  window.location.href = "/src/page/structure/Hero.html";
}

function aktifkanModeTunaNetra() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const teks =
      "Mode tuna netra aktif. Berikut pintasan keyboard yang tersedia: " +
      "ALT S untuk menonaktifkan suara. " +
      "ALT A untuk mengaktifkan suara pembacaan berita. " +
      "ALT panah kiri untuk berita sebelumnya. " +
      "ALT panah kanan untuk berita selanjutnya. " +
      "ALT H untuk membuka panduan shortcut ini. " +
      "ALT panah atas untuk membesarkan ukuran teks. " +
      "ALT panah bawah untuk mengecilkan ukuran teks. " +
      "ALT B untuk menuju halaman berita.";
    const utterance = new SpeechSynthesisUtterance(teks);
    utterance.lang = "id-ID";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }

  const modalEl = document.getElementById("modalKeyboardShortCut");
  if (modalEl && typeof bootstrap !== "undefined") {
    const modal =
      bootstrap.Modal.getInstance(modalEl) ||
      new bootstrap.Modal(modalEl, { backdrop: "static" });
    modal.show();
  }
}
