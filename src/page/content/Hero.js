
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderTrending();
    renderTagline();
    renderBeritaInklusif();
    renderPilihanRedaksi();
    initPlayerControls();
});


//  HERO SECTION (bagian paling atas)
function renderHero() {
    const heroSection = document.getElementById('hero-section');
    const hero = newsData.hero;

    heroSection.innerHTML = `
        <div class="hero__inner py-5">
            <div class="row align-items-center gx-5">
                <!-- Kolom Kiri: Teks & Tombol -->
                <div class="col-lg-6 hero__content mb-4 mb-lg-0">
                    <span class="hero__tag text-danger fw-bold mb-2 d-block">${hero.tag}</span>
                    <h1 class="hero__title display-5 fw-bold text-white mb-4" style="white-space: pre-line;">${hero.title}</h1>
                    <p class="hero__desc text-white-50 mb-4">${hero.description}</p>
                    <button class="hero__btn-play" aria-label="Dengarkan artikel">
                        <i class="bi bi-soundwave"></i>
                    </button>
                </div>
                <!-- Kolom Kanan: Gambar Hero -->
                <div class="col-lg-6">
                    <div class="hero__image-wrap shadow-lg">
                        <img src="${hero.mainImage}" alt="Ibadah Haji di Tanah Suci">
                    </div>
                </div>
            </div>
        </div>

        <!-- Sub-News Bar -->
        <div class="hero__links">
            <div class="row m-0">
                ${hero.subNews.map(news => `
                    <div class="col-lg-4 col-md-12 p-0">
                        <div class="hero-link">
                            <h3 class="hero-link__title text-white mb-1">${news.title}</h3>
                            <span class="hero-link__category text-danger fw-bold">${news.category}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// TRENDING SECTION (01-06)
function renderTrending() {
    const trendingList = document.getElementById('trending-list');
    trendingList.innerHTML = newsData.trending.map(item => `
        <div class="trending-item d-flex align-items-start gap-3 py-2">
            <span class="trending-item__number h3 fw-bold text-light-emphasis opacity-25">${item.number}</span>
            <div>
                <h4 class="trending-item__title h6 mb-1 small fw-bold">${item.title}</h4>
                <span class="trending-item__category text-danger small fw-bold">${item.category}</span>
            </div>
        </div>
    `).join('');
}

// TAGLINE SECTION
function renderTagline() {
    document.getElementById('tagline-title').textContent = newsData.tagline.title;
    document.getElementById('tagline-subtitle').textContent = newsData.tagline.subtitle;
}

// BERITA INKLUSIF SECTION
function renderBeritaInklusif() {
    const container = document.getElementById('berita-inklusif-content');
    const b = newsData.beritaInklusif;

    container.innerHTML = `
        <!-- Featured + Secondary Row -->
        <div class="row g-4 mb-4">
            <!-- Featured Card (besar, kiri) -->
            <div class="col-md-8">
                <div class="card-berita featured-overlay overflow-hidden position-relative h-100">
                    <img src="${b.featured.image}" alt="${b.featured.title}" class="w-100 h-100" style="object-fit: cover; position: absolute; z-index: 0;">
                    <div class="overlay-content p-4 d-flex flex-column justify-content-end h-100 position-relative" style="z-index: 1;">
                        <div class="d-flex justify-content-between align-items-end">
                            <div style="flex: 1;">
                                <span class="card-berita__date-badge mb-3 d-inline-block position-relative" style="position: relative !important; bottom: auto; left: auto;">${b.featured.date}</span>
                                <h4 class="h5 fw-bold text-white mb-2">${b.featured.title}</h4>
                                <p class="small text-white-50 mb-0">${b.featured.description}</p>
                            </div>
                            <div class="ms-3 text-center flex-shrink-0">
                                <button class="btn-mulai-large" aria-label="Dengarkan berita">
                                    <i class="bi bi-soundwave"></i>
                                </button>
                                <div class="text-white small mt-1 fw-semibold">Mulai</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Secondary Card (kecil, kanan) -->
            <div class="col-md-4">
                <div class="card-berita secondary-card overflow-hidden border-0 shadow-sm d-flex flex-column h-100 p-0">
                    <div class="card-berita__img-container">
                        <img src="${b.secondary.image}" alt="${b.secondary.title}" class="w-100" style="height: 180px; object-fit: cover;">
                        <span class="card-berita__date-badge">${b.secondary.date}</span>
                    </div>
                    <div class="p-3 flex-grow-1 d-flex flex-column">
                        <h4 class="h5 fw-bold mb-2">${b.secondary.title}</h4>
                        <p class="small text-muted mb-3">${b.secondary.description}</p>
                        <div class="mt-auto">
                            <button class="btn-mulai-mini" aria-label="Dengarkan berita">
                                <div class="icon-circle"><i class="bi bi-soundwave"></i></div>
                                <span>Mulai</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Grid Articles (6 card kecil) -->
        <div class="row row-cols-1 row-cols-md-3 g-3">
            ${b.grid.map(item => `
                <div class="col">
                    <div class="card-berita overflow-hidden border-0 shadow-sm d-flex flex-column bg-white p-0">
                        <div class="card-berita__img-container">
                            <img src="${item.image}" alt="${item.title}" class="w-100" style="height: 150px; object-fit: cover;">
                            <span class="card-berita__date-badge">${item.date}</span>
                        </div>
                        <div class="p-3 flex-grow-1 d-flex flex-column">
                            <h4 class="h6 fw-bold mb-2 small" style="height: 40px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.title}</h4>
                            <p class="small text-muted mb-3" style="font-size: 0.78rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.description}</p>
                            <div class="mt-auto">
                                <button class="btn-mulai" aria-label="Dengarkan berita">
                                    <div class="icon-circle"><i class="bi bi-soundwave"></i></div>
                                    <span>Mulai</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// PILIHAN REDAKSI (sidebar kanan)
function renderPilihanRedaksi() {
    const list = document.getElementById('pilihan-redaksi-list');
    list.innerHTML = newsData.pilihanRedaksi.map(item => `
        <div class="card-reaksi d-flex align-items-start gap-3 border-bottom">
            <div class="card-reaksi__img">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div>
                <span class="card-reaksi__date">${item.date}</span>
                <h4 class="card-reaksi__title fw-bold">${item.title}</h4>
            </div>
        </div>
    `).join('');
}


// PLAYER CONTROLS (toggle play/pause)
function initPlayerControls() {
    const main = document.getElementById('main');

    main.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-mulai, .btn-mulai-large, .btn-mulai-mini, .hero__btn-play');
        if (!btn) return;

        const icon = btn.querySelector('i');
        if (!icon) return;

        const textSpan = btn.querySelector('span');
        const labelDiv = btn.nextElementSibling && btn.nextElementSibling.classList.contains('small')
            ? btn.nextElementSibling
            : null;

        const isPlaying = icon.classList.contains('bi-pause-fill');

        if (isPlaying) {
            icon.classList.replace('bi-pause-fill', 'bi-soundwave');
            if (textSpan) textSpan.textContent = 'Mulai';
            if (labelDiv) labelDiv.textContent = 'Mulai';
        } else {
            icon.classList.replace('bi-soundwave', 'bi-pause-fill');
            if (textSpan) textSpan.textContent = 'Berhenti';
            if (labelDiv) labelDiv.textContent = 'Berhenti';
        }
    });
}
