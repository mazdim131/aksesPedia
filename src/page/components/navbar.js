const bilahNavigasi = document.getElementById("navbar");
bilahNavigasi.innerHTML = `
<nav class="navbar navbar-expand-lg mt-3 navigasi-kustom rounded-5">
  <div class="container-fluid rounded-5 px-4 py-2 d-flex align-items-center justify-content-between">
    
    <div class="d-flex align-items-center">
      <img src="/src/assets/logo/logo.png" class="p-0 m-0" style="height: 30px; display: block;">
      <a class="navbar-brand text-white fw-bold p-0 m-0" href="/index.html" style="margin-left: -2px !important; line-height: 1;">ksesPedia</a>
    </div>

        <button class="navbar-toggler border-0 text-white d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavigasi">
          <i class="bi bi-list fs-2"></i>
        </button>

        <div class="collapse navbar-collapse" id="menuNavigasi">
          <ul class="navbar-nav ms-auto align-items-center gap-3 mt-4 mt-lg-0 w-100 justify-content-lg-end text-center">
            <li class="nav-item"><a class="nav-link text-white fw-bold" href="#">Beranda</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">Tentang Kami</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#">Hubungi Kami</a></li>
            
            <li class="nav-item dropdown dropdown-perbaikan-mobile mt-2 mt-lg-0">
              <button class="btn btn-light rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-bold mx-auto" 
                type="button" id="tombolAksesibilitas" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <i class="bi bi-gear-fill"></i>
                <span>Sesuaikan Tema</span>
              </button>

              <div class="dropdown-menu dropdown-menu-end dropdown-aksesibilitas shadow p-4 mt-3" id="menuAkordion">
                <div class="mb-3">
                  <div class="d-flex justify-content-between align-items-center mb-2 pemicu-akordion" style="cursor: pointer;">
                    <div class="d-flex align-items-center gap-2 text-dark">
                      <i class="bi bi-eye fs-5"></i>
                      <span class="fw-bold">Mode Buta Warna</span>
                    </div>
                    <i class="bi bi-chevron-down text-muted small ikon-panah" style="transform: rotate(180deg);"></i>
                  </div>
                  
                  <div id="kontenWarna" class="konten-akordion ps-4 d-flex flex-column gap-3 text-start mt-3">
                    <label class="d-flex align-items-center gap-4 label-pilihan">
                      <input type="radio" name="modeWarna" value="default" class="form-check-input d-none">
                      <span class="kotak-warna warna-default" style="border: 1px solid black !important;"></span>
                      <span class="text-dark">Normal</span>
                    </label>
                    <label class="d-flex align-items-center gap-4 label-pilihan">
                      <input type="radio" name="modeWarna" value="deuteranomali" class="form-check-input d-none">
                      <span class="kotak-warna warna-deuteranomali"></span>
                      <span class="text-dark">Deuteranomali</span>
                    </label>
                    <label class="d-flex align-items-center gap-4 label-pilihan">
                      <input type="radio" name="modeWarna" value="protanomali" class="form-check-input d-none">
                      <span class="kotak-warna warna-protanomali"></span>
                      <span class="text-dark">Protanomali</span>
                    </label>
                    <label class="d-flex align-items-center gap-4 label-pilihan">
                      <input type="radio" name="modeWarna" value="deuteranopia" class="form-check-input d-none">
                      <span class="kotak-warna warna-deuteranopia"></span>
                      <span class="text-dark">Deuteranopia</span>
                    </label>
                    <label class="d-flex align-items-center gap-4 label-pilihan">
                      <input type="radio" name="modeWarna" value="protanopia" class="form-check-input d-none">
                      <span class="kotak-warna warna-protanopia"></span>
                      <span class="text-dark">Protanopia</span>
                    </label>
                    <label class="d-flex align-items-center gap-4 label-pilihan">
                      <input type="radio" name="modeWarna" value="tritanopia" class="form-check-input d-none">
                      <span class="kotak-warna warna-tritanopia"></span>
                      <span class="text-dark">Tritanopia</span>
                    </label>
                  </div>
                </div>

                <button type="button" class="btn tombol-terapkan w-100 fw-bold py-3 rounded-3" id="tombolTerapkan">
                  Terapkan
                </button>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
    
  </div>
</div>
`;

function inisialisasiFiturAksesibilitas() {
  const temaTersimpan = localStorage.getItem("temaAksesibilitas");
  if (temaTersimpan) {
    document.documentElement.setAttribute("data-theme", temaTersimpan);

    setTimeout(() => {
      const radioTarget = document.querySelector(
        `input[name="modeWarna"][value="${temaTersimpan}"]`,
      );

      if (radioTarget) {
        radioTarget.checked = true;
        const labelTerkait = radioTarget.closest(".label-pilihan");
        if (labelTerkait) {
          labelTerkait.style.backgroundColor = "rgba(13, 110, 253, 0.1)";
          labelTerkait.style.borderRadius = "8px";
        }
      }
    }, 50);
  }

  document.addEventListener("click", function (e) {
    const pemicu = e.target.closest(".pemicu-akordion");
    if (pemicu) {
      const kontenAkordion = document.getElementById("kontenWarna");
      const ikonPanah = pemicu.querySelector(".ikon-panah");
      if (
        kontenAkordion.style.display === "none" ||
        kontenAkordion.style.display === ""
      ) {
        kontenAkordion.style.display = "flex";
        if (ikonPanah) ikonPanah.style.transform = "rotate(180deg)";
      } else {
        kontenAkordion.style.display = "none";
        if (ikonPanah) ikonPanah.style.transform = "rotate(0deg)";
      }
      return;
    }

    const labelPilihan = e.target.closest(".label-pilihan");
    if (labelPilihan) {
      const semuaLabel = document.querySelectorAll(".label-pilihan");
      semuaLabel.forEach((l) => (l.style.backgroundColor = "transparent"));
      const inputRadio = labelPilihan.querySelector('input[name="modeWarna"]');
      if (inputRadio) {
        inputRadio.checked = true;
      }
      labelPilihan.style.backgroundColor = "rgba(13, 110, 253, 0.1)";
      labelPilihan.style.borderRadius = "8px";
      return;
    }
    const tombolTerapkan = e.target.closest("#tombolTerapkan");
    if (tombolTerapkan) {
      e.preventDefault();
      const pilihanModeWarna = document.querySelectorAll(
        'input[name="modeWarna"]',
      );
      let modeTerpilih = "";
      pilihanModeWarna.forEach((radio) => {
        if (radio.checked) {
          modeTerpilih = radio.value;
        }
      });
      if (modeTerpilih) {
        document.documentElement.setAttribute("data-theme", modeTerpilih);
        localStorage.setItem("temaAksesibilitas", modeTerpilih);
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.removeItem("temaAksesibilitas");
      }
    }
  });
}

inisialisasiFiturAksesibilitas();
