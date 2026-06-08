const content = document.getElementById("main");

content.innerHTML = `
  <div class="container-xl container-hero">
    <div class="row align-items-center gy-4"> 
      <div class="col-lg-7 col-12 d-flex flex-column justify-content-center py-4 py-lg-5 px-3 px-lg-5">
        <div class="mb-3 mb-lg-4 text-center text-lg-start">
          <a href="#" class="badge-custom-cta d-inline-flex align-items-center text-decoration-none">
            <span class="badge-inner-dark d-flex align-items-center justify-content-center">100+ User membaca berita</span>
            <span class="badge-text-action d-flex align-items-center text-dark">Bergabung <i class="bi bi-arrow-right ms-1"></i></span>
          </a>
        </div>
        <h1 class="hero-title mb-3 text-center text-lg-start">Informasi Tanpa Batas Portal Berita Ramah Disabilitas.</h1>
        <p class="hero-description mb-4 text-center text-lg-start">Dengarkan kisah, dapatkan informasi krusial, dan pelajari praktik aksesibilitas terbaik untuk menciptakan dunia digital yang adil bagi semua.</p>
        <div class="d-flex flex-wrap gap-3 btn-hero-option justify-content-center justify-content-lg-start">
          <button type="button" class="btn btn-primary-custom d-flex align-items-center justify-content-center" onclick="window.location.href='/src/page/structure/Hero.html'">Mulai Membaca <i class="bi bi-arrow-right ms-2"></i></button>
          <button class="btn btn-light-custom d-flex align-items-center justify-content-center text-dark">Pelajari Lebih Lanjut</button>
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
          <div class="d-flex justify-content-between align-items-center mb-3 small">
            <div class="d-flex align-items-center gap-2 text-custom">
              <span class="fw-bold">Radar Sumbar</span>
              <span>Adiyansyah Lubis</span>
            </div>
            <div class="text-custom">20 Mei 2026</div>
          </div>
          <div class="text-custom">
            <h1 class="featured-title mb-3">Juara Premier League 2025/2026, Arsenal Raup Rp3,9 Triliun dari Liga Inggris</h1>
            <p class="featured-desc mb-2">Gelar juara The Gunners dipastikan setelah Manchester City hanya bermain imbang 1-1 melawan Bournemouth. Hasil itu membuat Arsenal tak lagi terkejar di puncak klasemen dengan koleksi 82 poin.</p>
            <a href="#" class="fw-bold text-decoration-underline text-custom">Lihat Selengkapnya</a>
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
                <h5 class="side-news-title mb-1 text-custom">Persib Bandung Klub Pertama Hattrick Juara di Era Liga Indonesia</h5>
                <div class="d-flex justify-content-between small-text"><span class="text-custom">CNN Indonesia</span><span class="text-custom">23 Mei 2026</span></div>
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
                <h5 class="side-news-title mb-1 text-custom">Bayern Munich Pastikan Angkat Trofi Bundesliga di Allianz Arena</h5>
                <div class="d-flex justify-content-between small-text"><span class="text-custom">Garuda TV</span><span class="text-custom">11 Mei 2025</span></div>
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
                <h5 class="side-news-title mb-1 text-custom">Juara Liga Champions, PSG Resmi Raih Treble</h5>
                <div class="d-flex justify-content-between small-text"><span class="text-custom">CNN Indonesia</span><span class="text-custom">01 Jun 2025</span></div>
              </div>
            </div>
          </div>

        </div>
        
        <div class="sumber-terkenal-section pt-3 border-top">
          <h6 class="fw-bold mb-3 text-custom">Sumber Terkenal</h6>
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
    <div class="mb-3"><span class="badge-hot-news text-dark">Hot News</span></div>
    <div class="category-header mb-4 mb-lg-5">
      <h1 class="category-title mb-2 text-white">Kategori Teratas</h1>
      <p class="category-subtitle text-custom">Jelajahi kategori berita terpopuler dari <span class="fw-bold text-custom">AksesPedia</span></p>
    </div>
    <div class="category-grid">
      <a href="#" class="category-card text-decoration-none">
        <div class="icon-wrapper"><i class="bi bi-bicycle"></i></div>
        <span class="card-label text-dark">Olahraga</span>
      </a>
      <a href="#" class="category-card text-decoration-none">
        <div class="icon-wrapper"><i class="bi bi-globe"></i></div>
        <span class="card-label text-dark">Internasional</span>
      </a>
      <a href="#" class="category-card text-decoration-none">
        <div class="icon-wrapper"><i class="bi bi-flag-fill"></i></div>
        <span class="card-label text-dark">Nasional</span>
      </a>
      <a href="#" class="category-card text-decoration-none">
        <div class="icon-wrapper"><i class="bi bi-cpu"></i></div>
        <span class="card-label text-dark">Teknologi</span>
      </a>
    </div>
  </div>

  <div class="container my-5 fade-in">
    <h3 class="mb-4 fw-bold text-custom">Rekomendasi Berita</h3>
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
`;

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
;