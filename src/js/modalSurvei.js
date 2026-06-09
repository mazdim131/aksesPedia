function renderDanInisialisasiModal() {
  const mainContent = document.getElementById("main");
  if (!mainContent) return;

  const modalHTML = `
        <div class="modal fade" id="modalPreferensi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content rounded-5 text-dark">
                    <div class="modal-body">
                        <div class="d-flex">
                            <div class="justify-content-start">
                                <h4><b>Pilih Preferensi Anda</b></h4>
                                <p style="font-sizge: 12px; max-width: 300px;">Sesuaikan preferensi membaca Anda agar penjelajahan informasi pada platform ini terasa lebih ramah.</p>
                            </div>
                            <div class="justify-content-end ms-auto">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div class="cardPreferensi mt-4">
                            <div class="card normalPreferensi rounded-4 mb-3">
                                <div class="card-body">
                                    <div class="row align-items-center g-3">
                                        <div class="col-8 col-md-8 col-lg-9 d-flex align-items-center flex-row text-start gap-2 gap-sm-3">
                                            <img src="/src/assets/logo/normalIcon.png" alt="Normal Vision" class="img-icon-butaWarna flex-shrink-0">
                                            <div class="card-text min-width-0">
                                                <h5 class="mb-1"><b>Penglihatan Normal</b></h5>
                                                <span class="text-muted">Tampilan standar / normal</span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
                                            <label class="custom-select w-100-sm">
                                                <input type="radio" name="pilihan_berita" value="normal" checked>
                                                <span class="select-button w-100 justify-content-center">
                                                    <span class="circle"></span>
                                                    <span class="text-button-labe text-dark">Pilih</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card protanopiaPreferensi rounded-4 mb-3">
                                <div class="card-body">
                                    <div class="row align-items-center g-3">
                                        <div class="col-8 col-md-8 col-lg-9 d-flex align-items-center flex-row text-start gap-2 gap-sm-3">
                                            <img src="/src/assets/logo/protanopiaIcon.png" alt="Protanopia" class="img-icon-butaWarna flex-shrink-0">
                                            <div class="card-text min-width-0">
                                                <h5 class="mb-1"><b>Protanopia</b></h5>
                                                <span class="text-muted">Tampilan untuk buta warna merah (protan).</span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
                                            <label class="custom-select w-100-sm">
                                                <input type="radio" name="pilihan_berita" value="protanopia">
                                                <span class="select-button w-100 justify-content-center">
                                                    <span class="circle"></span>
                                                    <span class="text-button-label text-dark">Pilih</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card deuteranopiaPreferensi rounded-4 mb-3">
                                <div class="card-body">
                                    <div class="row align-items-center g-3">
                                        <div class="col-8 col-md-8 col-lg-9 d-flex align-items-center flex-row text-start gap-2 gap-sm-3">
                                            <img src="/src/assets/logo/deuteranopiaIcon.png" alt="Deuteranopia" class="img-icon-butaWarna flex-shrink-0">
                                            <div class="card-text min-width-0">
                                                <h5 class="mb-1"><b>Deuteranopia</b></h5>
                                                <span class="text-muted">Tampilan untuk buta warna hijau.</span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
                                            <label class="custom-select w-100-sm">
                                                <input type="radio" name="pilihan_berita" value="deuteranopia">
                                                <span class="select-button w-100 justify-content-center">
                                                    <span class="circle"></span>
                                                    <span class="text-button-label text-dark">Pilih</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card tritanopiaPreferensi rounded-4 mb-3">
                                <div class="card-body">
                                    <div class="row align-items-center g-3">
                                        <div class="col-8 col-md-8 col-lg-9 d-flex align-items-center flex-row text-start gap-2 gap-sm-3">
                                            <img src="/src/assets/logo/tritanopiaIcon.png" alt="Tritanopia" class="img-icon-butaWarna flex-shrink-0">
                                            <div class="card-text min-width-0">
                                                <h5 class="mb-1"><b>Tritanopia</b></h5>
                                                <span class="text-muted">Tampilan untuk buta warna biru dan kuning.</span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
                                            <label class="custom-select w-100-sm">
                                                <input type="radio" name="pilihan_berita" value="tritanopia">
                                                <span class="select-button w-100 justify-content-center">
                                                    <span class="circle"></span>
                                                    <span class="text-button-label text-dark">Pilih</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalKeyboardShortCut" tabindex="-1" aria-labelledby="modalShortcutsLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content rounded-5 shadow-lg border-0 text-dark">
                    <div class="modal-body">
                        <div class="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom">
                            <h4 class="modal-title" id="modalShortcutsLabel"><b>Keyboard ShortCuts</b></h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="row g-4 shortcut-list">
                            <div class="col-6 border-end-md">
                                <div class="d-flex flex-column gap-4 pe-md-3">
                                    <div class="shortcut-item">
                                        <span class="shortcut-label">Nonaktifkan Suara</span>
                                        <div class="shortcut-keys">
                                            <kbd>ALT</kbd> <span>+</span> <kbd>S</kbd>
                                        </div>
                                    </div>
                                    <div class="shortcut-item">
                                        <span class="shortcut-label">Aktifkan Suara</span>
                                        <div class="shortcut-keys">
                                            <kbd>ALT</kbd> <span>+</span> <kbd>A</kbd>
                                        </div>
                                    </div>
                                    <div class="shortcut-item">
                                        <span class="shortcut-label">Buka Keyboard Shortcut</span>
                                        <div class="shortcut-keys">
                                            <kbd>ALT</kbd> <span>+</span> <kbd>H</kbd>
                                        </div>
                                    </div>
                                    <div class="shortcut-item">
                                        <span class="shortcut-label">Menuju Halaman Berita</span>
                                        <div class="shortcut-keys">
                                            <kbd>ALT</kbd> <span>+</span> <kbd>B</kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex flex-column gap-4 ps-md-3">
                                    <div class="shortcut-item">
                                        <span class="shortcut-label">Berita Sebelumnya</span>
                                        <div class="shortcut-keys">
                                            <kbd>ALT</kbd> <span>+</span> <kbd><i class="bi bi-arrow-left-square"></i></kbd>
                                        </div>
                                    </div>
                                    <div class="shortcut-item">
                                        <span class="shortcut-label">Berita Selanjutnya</span>
                                        <div class="shortcut-keys">
                                            <kbd>ALT</kbd> <span>+</span> <kbd><i class="bi bi-arrow-right-square"></i></kbd>
                                        </div>
                                    </div>
                                    <div class="shortcut-item">
                                        <span class="shortcut-label">Membesar Teks</span>
                                        <div class="shortcut-keys">
                                            <kbd>ALT</kbd> <span>+</span> <kbd><i class="bi bi-arrow-up-square"></i></kbd>
                                        </div>
                                    </div>
                                    <div class="shortcut-item">
                                        <span class="shortcut-label">Mengecilkan Teks</span>
                                        <div class="shortcut-keys">
                                            <kbd>ALT</kbd> <span>+</span> <kbd><i class="bi bi-arrow-down-square"></i></kbd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    `;

  mainContent.insertAdjacentHTML("beforeend", modalHTML);

  const modalPrefEl = document.getElementById("modalPreferensi");
  const modalKeyEl = document.getElementById("modalKeyboardShortCut");

  if (!modalPrefEl || !modalKeyEl || typeof bootstrap === "undefined") return;

  const modalPreferensi = new bootstrap.Modal(modalPrefEl);
  const modalKeyboard = new bootstrap.Modal(modalKeyEl);

  const berkunjung = sessionStorage.getItem("sudahBerkunjung");

  if (!berkunjung) {
    modalPreferensi.show();

    modalPrefEl.addEventListener(
      "hidden.bs.modal",
      function () {
        modalKeyboard.show();
      },
      { once: true },
    );

    sessionStorage.setItem("sudahBerkunjung", "true");
  }

  const temaTersimpan = localStorage.getItem("temaAksesibilitas");
  if (temaTersimpan) {
    document.documentElement.setAttribute("data-theme", temaTersimpan);
    const radioCocok = document.querySelector(
      `input[name="pilihan_berita"][value="${temaTersimpan}"]`,
    );
    if (radioCocok) radioCocok.checked = true;
  }

  const radioOpsi = document.querySelectorAll('input[name="pilihan_berita"]');
  radioOpsi.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.checked) {
        const jenisOpsi = this.value;
        if (jenisOpsi === "normal") {
          document.documentElement.removeAttribute("data-theme");
          localStorage.removeItem("temaAksesibilitas");
        } else {
          document.documentElement.setAttribute("data-theme", jenisOpsi);
          localStorage.setItem("temaAksesibilitas", jenisOpsi);
        }
        setTimeout(() => {
          modalPreferensi.hide();
        }, 300);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", renderDanInisialisasiModal);
