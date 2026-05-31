const bilahNavigasi = document.getElementById("navbar");
bilahNavigasi.innerHTML = `
<nav class="navbar navbar-expand-lg navigasi-kustom">
  <div class="container-fluid p-0 d-flex align-items-center justify-content-between">
    
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
`;