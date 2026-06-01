const content = document.getElementById("main");

content.innerHTML = `
  <div class="container-xl container-hero">
    <div class="row align-items-center gy-4"> <div class="col-lg-7 col-12 d-flex flex-column justify-content-center py-4 py-lg-5 px-3 px-lg-5">
        <div class="mb-3 mb-lg-4 text-center text-lg-start">
          <a href="#" class="badge-custom-cta d-inline-flex align-items-center text-decoration-none">
            <span class="badge-inner-dark d-flex align-items-center justify-content-center">100+ User membaca berita</span>
            <span class="badge-text-action d-flex align-items-center">Bergabung <i class="bi bi-arrow-right ms-1"></i></span>
          </a>
        </div>
        <h1 class="text-white hero-title mb-3 text-center text-lg-start">Informasi Tanpa Batas Portal Berita Ramah Disabilitas.</h1>
        <p class="hero-description mb-4 text-center text-lg-start">Dengarkan kisah, dapatkan informasi krusial, dan pelajari praktik aksesibilitas terbaik untuk menciptakan dunia digital yang adil bagi semua.</p>
        <div class="d-flex flex-wrap gap-3 btn-hero-option justify-content-center justify-content-lg-start">
          <button class="btn btn-primary-custom d-flex align-items-center justify-content-center">Mulai Membaca <i class="bi bi-arrow-right ms-2"></i></button>
          <button class="btn btn-light-custom d-flex align-items-center justify-content-center">Pelajari Lebih Lanjut</button>
        </div>
      </div>
      
      <div class="col-lg-5 col-12 hero-image-wrapper d-flex justify-content-center align-items-end">
        <img src="/src/assets/hero.png" alt="Pria membaca koran" class="img-fluid hero-img">
      </div>
    </div>
  </div>

  <div class="container my-5 fade-in">
    <div class="row g-4">
      <div class="col-lg-7 col-12">
        <article class="featured-card">
          <div class="position-relative overflow-hidden rounded-4 mb-3 image-featured-wrapper">
            <img src="/src/assets/newsAssets/arsenal-juara-liga-inggris-2025-2026.jpg" alt="Arsenal Juara" class="img-fluid w-100 featured-img">
            <span class="badge-category position-absolute top-0 start-0 m-3">Olahraga</span>
            <div class="badge-floating-title position-absolute bottom-0 start-0 m-3 m-lg-4 px-3 px-lg-4 py-2 bg-white rounded-3 shadow">
              Berita Olahraga <span class="fw-bold">Juara</span>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3 text-muted small">
            <div class="d-flex align-items-center gap-2" style="color: var(--color-body-text) !important;">
              <span class="fw-bold">Radar Sumbar</span>
              <span>Adiyansyah Lubis</span>
            </div>
            <div style="color: var(--color-body-text);">20 Mei 2026</div>
          </div>
          <div style="color: var(--color-body-text);">
            <h1 class="featured-title mb-3">Juara Premier League 2025/2026, Arsenal Raup Rp3,9 Triliun dari Liga Inggris</h1>
            <p class="featured-desc mb-2">Gelar juara The Gunners dipastikan setelah Manchester City hanya bermain imbang 1-1 melawan Bournemouth. Hasil itu membuat Arsenal tak lagi terkejar di puncak klasemen dengan koleksi 82 poin.</p>
            <a href="#" style="color: var(--color-body-text);" class="fw-bold text-decoration-underline">Lihat Selengkapnya</a>
          </div>
        </article>
      </div>

      <div class="col-lg-5 col-12 d-flex flex-column justify-content-between gap-4">
        <div class="news-side-list d-flex flex-column gap-3 mb-2">
          
          <div class="news-side-item pb-3 border-bottom">
            <div class="row g-2 align-items-center">
              <div class="col-4 col-sm-3 col-lg-4">
                <img src="/src/assets/newsAssets/persib-bandung-juara-liga-1-1748142161979_169.jpeg" alt="Persib Juara" class="img-fluid rounded-3 w-100 object-fit-cover img-news-right">
              </div>
              <div class="col-8 col-sm-9 col-lg-8">
                <span class="badge bg-dark-navy mb-1 mb-lg-2">Olahraga</span>
                <h5 class="side-news-title mb-1" style="color: var(--color-body-text);">Persib Bandung Klub Pertama Hattrick Juara di Era Liga Indonesia</h5>
                <div class="d-flex justify-content-between text-muted small-text"><span style="color: var(--color-body-text);">CNN Indonesia</span><span style="color: var(--color-body-text);">23 Mei 2026</span></div>
              </div>
            </div>
          </div>

          <div class="news-side-item pb-3 border-bottom">
            <div class="row g-2 align-items-center">
              <div class="col-4 col-sm-3 col-lg-4">
                <img src="/src/assets/newsAssets/result_ChatGPT-Image-May-18-2026-08_05_59-AM-420x280.webp" alt="Bayern Munich" class="img-fluid rounded-3 w-100 object-fit-cover img-news-right">
              </div>
              <div class="col-8 col-sm-9 col-lg-8">
                <span class="badge bg-dark-navy mb-1 mb-lg-2">Olahraga</span>
                <h5 class="side-news-title mb-1" style="color: var(--color-body-text);">Bayern Munich Pastikan Angkat Trofi Bundesliga di Allianz Arena</h5>
                <div class="d-flex justify-content-between text-muted small-text"><span style="color: var(--color-body-text);">Garuda TV</span><span style="color: var(--color-body-text);">11 Mei 2025</span></div>
              </div>
            </div>
          </div>

          <div class="news-side-item pb-3">
            <div class="row g-2 align-items-center">
              <div class="col-4 col-sm-3 col-lg-4">
                <img src="/src/assets/newsAssets/soccer-champions-psg-intreport-1748726157629_169.jpeg" alt="PSG Juara" class="img-fluid rounded-3 w-100 object-fit-cover img-news-right">
              </div>
              <div class="col-8 col-sm-9 col-lg-8">
                <span class="badge bg-dark-navy mb-1 mb-lg-2">Olahraga</span>
                <h5 class="side-news-title mb-1" style="color: var(--color-body-text);">Juara Liga Champions, PSG Resmi Raih Treble</h5>
                <div class="d-flex justify-content-between text-muted small-text"><span style="color: var(--color-body-text);">CNN Indonesia</span><span style="color: var(--color-body-text);">01 Jun 2025</span></div>
              </div>
            </div>
          </div>

        </div>
        
        <div class="sumber-terkenal-section pt-3 border-top">
          <h6 class="fw-bold mb-3" style="color: var(--color-body-text);">Sumber Terkenal</h6>
          <div class="d-flex flex-wrap gap-3 gap-md-4 align-items-center">
            <div class="brand-logo"><img src="/src/assets/logo/cnn.png" alt="CNN"></div>
            <div class="brand-logo"><img src="/src/assets/logo/garuda-tv.png" alt="GarudaTV"></div>
            <div class="brand-logo"><img src="/src/assets/logo/radar-sumbar.png" alt="RadarSumbar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-xl container-category text-center fade-in">
    <div class="mb-3"><span class="badge-hot-news">Hot News</span></div>
    <div class="category-header mb-4 mb-lg-5">
      <h1 class="text-white category-title mb-2">Kategori Teratas</h1>
      <p class="category-subtitle">Jelajahi kategori berita terpopuler dari <span class="fw-bold text-white">AksesPedia</span></p>
    </div>
    <div class="category-grid">
      <a href="#" class="category-card text-decoration-none">
        <div class="icon-wrapper"><i class="bi bi-bicycle"></i></div>
        <span class="card-label">Olahraga</span>
      </a>
      <a href="#" class="category-card text-decoration-none">
        <div class="icon-wrapper"><i class="bi bi-globe"></i></div>
        <span class="card-label">Internasional</span>
      </a>
      <a href="#" class="category-card text-decoration-none">
        <div class="icon-wrapper"><i class="bi bi-flag-fill"></i></div>
        <span class="card-label">Nasional</span>
      </a>
      <a href="#" class="category-card text-decoration-none">
        <div class="icon-wrapper"><i class="bi bi-cpu"></i></div>
        <span class="card-label">Teknologi</span>
      </a>
    </div>
  </div>

  <div class="container my-5 fade-in">
    <h3 class="mb-4 fw-bold" style="color: var(--color-body-text);">Rekomendasi Berita</h3>
    <div class="swiper news-swiper">
      <div class="swiper-wrapper">
        
        <div class="swiper-slide h-auto">
          <article class="news-card h-100">
            <div class="image-container">
              <img src="/src/assets/newsAssets/1697684847-berita.jpg" alt="Gaya Hidup" class="card-img">
              <span class="badge-date">31 Juli 2023</span>
            </div>
            <div class="card-body-custom">
              <h3 class="card-title-custom">Bagaimana Gaya Hidup Sehat Ala Remaja?</h3>
              <p class="card-tag">Gaya Hidup Sehat</p>
              <div class="card-action">
                <span class="icon-play"><i class="bi bi-play-fill"></i></span>
                <span class="action-text">Dengarkan</span>
              </div>
            </div>
          </article>
        </div>

        <div class="swiper-slide h-auto">
          <article class="news-card h-100">
            <div class="image-container">
              <img src="/src/assets/newsAssets/1697680056-berita.jpg" alt="Mood Belajar" class="card-img">
              <span class="badge-date">31 Juli 2023</span>
            </div>
            <div class="card-body-custom">
              <h3 class="card-title-custom">5 Cara Meningkatkan Mood Belajar, Dijamin Nggak Gampang Bosan!</h3>
              <p class="card-tag">Menghilangkan Malas Belajar</p>
              <div class="card-action">
                <span class="icon-play"><i class="bi bi-play-fill"></i></span>
                <span class="action-text">Dengarkan</span>
              </div>
            </div>
          </article>
        </div>

        <div class="swiper-slide h-auto">
          <article class="news-card h-100">
            <div class="image-container">
              <img src="/src/assets/newsAssets/1694156630-berita.png" alt="Makanan" class="card-img">
              <span class="badge-date">31 Juli 2023</span>
            </div>
            <div class="card-body-custom">
              <h3 class="card-title-custom">Jenis Makanan Appetizer, Main Course, dan Dessert, Apa Bedanya?</h3>
              <p class="card-tag">Belajar Memasak</p>
              <div class="card-action">
                <span class="icon-play"><i class="bi bi-play-fill"></i></span>
                <span class="action-text">Dengarkan</span>
              </div>
            </div>
          </article>
        </div>

        <div class="swiper-slide h-auto">
          <article class="news-card h-100">
            <div class="image-container">
              <img src="/src/assets/newsAssets/1684822233-berita$berita.jpg" alt="Istirahat" class="card-img">
              <span class="badge-date">23 Mei 2023</span>
            </div>
            <div class="card-body-custom">
              <h3 class="card-title-custom">5 Alasan Harus Memilih Jurusan Rekayasa Perangkat Lunak</h3>
              <p class="card-tag">Motivasi</p>
              <div class="card-action">
                <span class="icon-play"><i class="bi bi-play-fill"></i></span>
                <span class="action-text">Dengarkan</span>
              </div>
            </div>
          </article>
        </div>

        <div class="swiper-slide h-auto">
          <article class="news-card h-100">
            <div class="image-container">
              <img src="/src/assets/newsAssets/1689906138-berita.jpg" alt="Aksesibilitas" class="card-img">
              <span class="badge-date">02 Agustus 2023</span>
            </div>
            <div class="card-body-custom">
              <h3 class="card-title-custom">Cara Check In Hotel dan Panduan Reservasinya untuk Pemula</h3>
              <p class="card-tag">Tips dan Trik</p>
              <div class="card-action">
                <span class="icon-play"><i class="bi bi-play-fill"></i></span>
                <span class="action-text">Dengarkan</span>
              </div>
            </div>
          </article>
        </div>

      </div>
      <div class="swiper-pagination mt-4 position-relative"></div>
    </div>
  </div>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPreferensi">
  Launch demo modal
</button>

<div class="modal fade" id="modalPreferensi" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content rounded-5">
      <div class="modal-body">

        <div class="d-flex">
          <div class="justify-content-start">
            <h4><b>Pilih Prefrensi Anda</b></h4>
            <p style="font-size: 12px; max-width: 300px;">Sesuaikan preferensi membaca Anda agar penjelajahan informasi pada platform ini terasa lebih ramah.</p>
          </div>
          <div class="justify-content-end ms-auto">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>

<div class="cardPreferensi mt-4">
  
  <div class="card normalPreferensi rounded-4 mb-3">
    <div class="card-body">
      <div class="row align-items-center g-3">
        <div class="col-12 col-md-8 col-lg-9 d-flex align-items-center flex-column flex-sm-row text-center text-sm-start">
          <img src="/src/assets/logo/normalIcon.png" alt="Normal Vision" class="img-icon-butaWarna mb-2 mb-sm-0">
          <div class="card-text ms-sm-4">
            <h5 class="mb-1"><b>Penglihatan Normal</b></h5>
            <span class="text-muted">Tampilan standar / normal</span>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
          <label class="custom-select w-100-sm">
            <input type="radio" name="pilihan_berita" value="normal" checked>
            <span class="select-button w-100 justify-content-center">
              <span class="circle"></span>
              <span class="text-button-label">Pilih</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="card protanopiaPreferensi rounded-4 mb-3">
    <div class="card-body">
      <div class="row align-items-center g-3">
        <div class="col-12 col-md-8 col-lg-9 d-flex align-items-center flex-column flex-sm-row text-center text-sm-start">
          <img src="/src/assets/logo/protanopiaIcon.png" alt="Protanopia" class="img-icon-butaWarna mb-2 mb-sm-0">
          <div class="card-text ms-sm-4">
            <h5 class="mb-1"><b>Protanopia</b></h5>
            <span class="text-muted">Tampilan untuk buta warna merah (protan).</span>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
          <label class="custom-select w-100-sm">
            <input type="radio" name="pilihan_berita" value="protanopia">
            <span class="select-button w-100 justify-content-center">
              <span class="circle"></span>
              <span class="text-button-label">Pilih</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="card deuteranopiaPreferensi rounded-4 mb-3">
    <div class="card-body">
      <div class="row align-items-center g-3">
        <div class="col-12 col-md-8 col-lg-9 d-flex align-items-center flex-column flex-sm-row text-center text-sm-start">
          <img src="/src/assets/logo/deuteranopiaIcon.png" alt="Deuteranopia" class="img-icon-butaWarna mb-2 mb-sm-0">
          <div class="card-text ms-sm-4">
            <h5 class="mb-1"><b>Deuteranopia</b></h5>
            <span class="text-muted">Tampilan untuk buta warna hijau.</span>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
          <label class="custom-select w-100-sm">
            <input type="radio" name="pilihan_berita" value="deuteranopia">
            <span class="select-button w-100 justify-content-center">
              <span class="circle"></span>
              <span class="text-button-label">Pilih</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="card tritanopiaPreferensi rounded-4 mb-3">
    <div class="card-body">
      <div class="row align-items-center g-3">
        <div class="col-12 col-md-8 col-lg-9 d-flex align-items-center flex-column flex-sm-row text-center text-sm-start">
          <img src="/src/assets/logo/tritanopiaIcon.png" alt="Tritanopia" class="img-icon-butaWarna mb-2 mb-sm-0">
          <div class="card-text ms-sm-4">
            <h5 class="mb-1"><b>Tritanopia</b></h5>
            <span class="text-muted">Tampilan untuk buta warna biru dan kuning.</span>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
          <label class="custom-select w-100-sm">
            <input type="radio" name="pilihan_berita" value="tritanopia">
            <span class="select-button w-100 justify-content-center">
              <span class="circle"></span>
              <span class="text-button-label">Pilih</span>
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




<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalKeyboardShortCut">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="modalKeyboardShortCut" tabindex="-1" aria-labelledby="modalShortcutsLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content rounded-5 shadow-lg border-0">
      <div class="modal-body">
        
        <div class="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom">
          <h4 class="modal-title" id="modalShortcutsLabel"><b>Keyboard ShortCuts</b></h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="row g-4 shortcut-list">
          
          <div class="col-12 col-md-6 border-end-md">
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

            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="d-flex flex-column gap-4 ps-md-3">
              
              <div class="shortcut-item">
                <span class="shortcut-label">Membuka Panduan Navigasi</span>
                <div class="shortcut-keys">
                  <kbd>ALT</kbd> <span>+</span> <kbd>H</kbd>
                </div>
              </div>

              <div class="shortcut-item">
                <span class="shortcut-label">Membesar Ukuran Teks</span>
                <div class="shortcut-keys">
                  <kbd>ALT</kbd> <span>+</span> <kbd><i class="bi bi-arrow-up-square"></i></kbd>
                </div>
              </div>

              <div class="shortcut-item">
                <span class="shortcut-label">Mengecilkan Ukuran Teks</span>
                <div class="shortcut-keys">
                  <kbd>ALT</kbd> <span>+</span> <kbd><i class="bi bi-arrow-down-square"></i></kbd>
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

        </div> </div>
    </div>
  </div>
</div>`;

// fungsi swiper
function initNewsSwiper() {
  const swiperElement = document.querySelector(".news-swiper");
  if (!swiperElement) return;

  const newSwiperInstance = new Swiper(".news-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    loop: false,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      576: { slidesPerView: 2, spaceBetween: 24 },
      992: { slidesPerView: 3, spaceBetween: 24 },
    },
  });
  setTimeout(() => {
    newSwiperInstance.update();
  }, 100);
}
setTimeout(initNewsSwiper, 150);


// fungsi modal
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modalPreferensi');
  const modalMuncul = new bootstrap.modal(modal);

  const btnSimpan = document.getElementById('btnSimpanPreferensi');
  const berkunjung = sessionStorage.getItem('sudahBerkunjung')

  if(!berkunjung) {
    modalMuncul.show();
  }

  btnSimpan.addEventListener('sudahBerkunjung', function () {
    sessionStorage.setItem("sudahBerkunjung", "true");
    modalMuncul.hide();
  })
})