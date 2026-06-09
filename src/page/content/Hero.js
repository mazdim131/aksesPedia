// NAVIGATION 
window.goToDetail = function (section, index = null) {
    let url = `/src/page/structure/detailBerita.html?section=${section}`;
    if (index !== null) {
        url += `&index=${index}`;
    }
    window.location.href = url;
};

document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderTrending();
    renderTagline();
    renderBeritaInklusif();
    renderPilihanRedaksi();
    initPlayerControls(); // Inisialisasi pengontrol suara
});


//  HERO SECTION (bagian paling atas)
function renderHero() {
    const heroSection = document.getElementById('hero-section');
    const hero = newsData.hero;

    heroSection.innerHTML = `
        <div class="hero__inner py-5">
            <div class="row align-items-center gx-5">
                <div class="col-lg-6 hero__content mb-4 mb-lg-0" style="cursor: pointer;" onclick="goToDetail('hero_main')">
                    <span class="hero__tag text-danger fw-bold mb-2 d-block">${hero.tag}</span>
                    <h1 class="hero__title display-5 fw-bold  mb-4" style="white-space: pre-line;">${hero.title}</h1>
                    <p class="hero__desc mb-4">${hero.description}</p>
                    <button class="hero__btn-play" aria-label="Dengarkan artikel" onclick="event.stopPropagation(); window.togglePlayer(this)" data-section="hero_main">
                        <i class="bi bi-soundwave"></i>
                    </button>
                </div>
                <div class="col-lg-6">
                    <div class="hero__image-wrap shadow-lg" style="cursor: pointer;" onclick="goToDetail('hero_main')">
                        <img src="${hero.mainImage}" alt="Ibadah Haji di Tanah Suci">
                    </div>
                </div>
            </div>
        </div>

        <div class="hero__links">
            <div class="row m-0">
                ${hero.subNews.map((news, index) => `
                    <div class="col-lg-4 col-md-12 p-0">
                            <div class="hero-link" style="cursor: pointer;" onclick="goToDetail('hero_subNews', ${index})">
                                <h3 class="hero-link__title mb-1">${news.title}</h3>
                                <span class="hero-link__category fw-bold">${news.category}</span>
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
    trendingList.innerHTML = newsData.trending.map((item, index) => `
            <div class="trending-item d-flex align-items-start gap-3 py-2" style="cursor: pointer;" onclick="goToDetail('trending', ${index})">
                <span class="trending-item__number h3 fw-bold text-light-emphasis opacity-25">${item.number}</span>
                <div>
                    <h4 class="trending-item__title h6 mb-1 small fw-bold">${item.title}</h4>
                    <span class="trending-item__category small fw-bold">${item.category}</span>
                </div>
            </div>
    `).join('');
}

// TAGLINE SECTION
function renderTagline() {
    document.getElementById('tagline-title').textContent = newsData.tagline.title;
    document.getElementById('tagline-subtitle').textContent = newsData.tagline.subtitle;
}

// BERITA INKLUSIF 
function renderBeritaInklusif() {
    const container = document.getElementById('berita-inklusif-content');
    const b = newsData.beritaInklusif;

    container.innerHTML = `
        <div class="row g-4 mb-4">
            <div class="col-md-8">
                <div class="card-berita featured-overlay overflow-hidden position-relative h-100" style="cursor: pointer;" onclick="goToDetail('beritaInklusif_featured')">
                    <img src="${b.featured.image}" alt="${b.featured.title}" class="w-100 h-100" style="object-fit: cover; position: absolute; z-index: 0;">
                    <div class="overlay-content p-4 d-flex flex-column justify-content-end h-100 position-relative" style="z-index: 1;">
                        <div class="d-flex justify-content-between align-items-end">
                            <div class="berita_inklusif_duakolom" style="flex: 1;">
                                <span class="card-berita__date-badge mb-3 d-inline-block position-relative" style="position: relative !important; bottom: auto; left: auto;">${b.featured.date}</span>
                                <h4 class="h5 fw-bold mb-2">${b.featured.title}</h4>
                                <p class="small mb-0">${b.featured.description}</p>
                            </div>
                            <div class="ms-3 text-center flex-shrink-0">
                                <div class="ms-3 text-center flex-shrink-0">
                                    <button class="btn-mulai-large"
                                        aria-label="Dengarkan berita"
                                        onclick="event.stopPropagation(); window.togglePlayer(this)"
                                        data-section="beritaInklusif_featured">
                                        <i class="bi bi-soundwave"></i>
                                    </button>
                                    <div class="small mt-1 fw-semibold">Mulai</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card-berita secondary-card overflow-hidden border-0 shadow-sm d-flex flex-column h-100 p-0" style="cursor: pointer;" onclick="goToDetail('beritaInklusif_secondary')">
                    <div class="card-berita__img-container">
                        <img src="${b.secondary.image}" alt="${b.secondary.title}" class="w-100" style="height: 180px; object-fit: cover;">
                        <span class="card-berita__date-badge">${b.secondary.date}</span>
                    </div>
                    <div class="p-3 flex-grow-1 d-flex flex-column">
                        <h4 class="h5 fw-bold mb-2">${b.secondary.title}</h4>
                        <p class="small text-muted mb-3">${b.secondary.description}</p>
                        <div class="mt-auto">
                            <div class="flex-shrink-0">
                                <button class="btn-mulai"
                                    aria-label="Dengarkan berita"
                                    onclick="event.stopPropagation(); window.togglePlayer(this)"
                                    data-section="beritaInklusif_secondary">
                                    <div class="icon-circle"><i class="bi bi-soundwave"></i></div>
                                    <span>Mulai</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-3">
            ${b.grid.map((item, index) => `
                <div class="col">
                    <div class="card-berita overflow-hidden border-0 shadow-sm d-flex flex-column p-0" style="cursor: pointer;" onclick="goToDetail('beritaInklusif_grid', ${index})">
                        <div class="card-berita__img-container">
                            <img src="${item.image}" alt="${item.title}" class="w-100" style="height: 150px; object-fit: cover;">
                            <span class="card-berita__date-badge">${item.date}</span>
                        </div>
                        <div class="p-3 flex-grow-1 d-flex flex-column">
                            <h4 class="h6 fw-bold mb-2 small" style="height: 40px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.title}</h4>
                            <p class="small text-muted mb-3" style="font-size: 0.78rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.description}</p>
                            <div class="mt-auto">
                                <button class="btn-mulai" aria-label="Dengarkan berita" onclick="event.stopPropagation(); window.togglePlayer(this)" data-section="beritaInklusif_grid" data-index="${index}">
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

// PILIHAN REDAKSI
function renderPilihanRedaksi() {
    const list = document.getElementById('pilihan-redaksi-list');
    list.innerHTML = newsData.pilihanRedaksi.map((item, index) => `
        <div class="card-reaksi d-flex align-items-start gap-3 border-bottom" style="cursor: pointer;" onclick="goToDetail('pilihanRedaksi', ${index})">
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
    let currentPlayingBtn = null;
    let utteranceQueue = []; // Menyimpan potongan kalimat agar browser tidak crash
    let isSpeaking = false;

    function setUIStop(targetBtn) {
        if (!targetBtn) return;

        targetBtn.classList.remove('playing');

        const targetIcon = targetBtn.querySelector('i');
        const targetText = targetBtn.querySelector('span');
        const targetLabel = targetBtn.nextElementSibling && targetBtn.nextElementSibling.classList.contains('fw-semibold') ? targetBtn.nextElementSibling : null;

        if (targetIcon) {
            targetIcon.classList.remove('bi-pause-fill');
            targetIcon.classList.add('bi-soundwave');
        }
        if (targetText) targetText.textContent = 'Mulai';
        if (targetLabel) targetLabel.textContent = 'Mulai';
    }

    function setUIPlay(targetBtn) {
        if (!targetBtn) return;

        targetBtn.classList.add('playing');

        const targetIcon = targetBtn.querySelector('i');
        const targetText = targetBtn.querySelector('span');
        const targetLabel = targetBtn.nextElementSibling && targetBtn.nextElementSibling.classList.contains('fw-semibold') ? targetBtn.nextElementSibling : null;

        if (targetIcon) {
            targetIcon.classList.remove('bi-soundwave');
            targetIcon.classList.add('bi-pause-fill');
        }
        if (targetText) targetText.textContent = 'Berhenti';
        if (targetLabel) targetLabel.textContent = 'Berhenti';
    }

    // Fungsi rekursif untuk memutar antrean potongan teks pendek satu per satu
    function speakNextChunk(btn) {
        if (utteranceQueue.length === 0) {
            isSpeaking = false;
            setUIStop(btn);
            currentPlayingBtn = null;
            return;
        }

        const textChunk = utteranceQueue.shift().trim();
        // Lewati jika potongan teks kosong
        if (!textChunk) {
            speakNextChunk(btn);
            return;
        }

        const utterance = new SpeechSynthesisUtterance(textChunk);
        utterance.lang = 'id-ID';

        utterance.onend = () => {
            // Lanjut ke kalimat berikutnya jika status masih aktif membaca
            if (isSpeaking && currentPlayingBtn === btn) {
                speakNextChunk(btn);
            }
        };

        utterance.onerror = (e) => {
            console.error("TTS Chunk Error", e);
            stopTTS();
        };

        window.speechSynthesis.speak(utterance);
    }

    function stopTTS() {
        isSpeaking = false;
        utteranceQueue = [];
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        if (currentPlayingBtn) {
            setUIStop(currentPlayingBtn);
            currentPlayingBtn = null;
        }
    }

    // Expose fungsi ke scope global window agar bisa dipanggil lewat inline onclick
    window.togglePlayer = function (btn) {
        if (!btn) return;

        const isPlaying = btn.classList.contains('playing');

        if (isPlaying) {
            stopTTS();
        } else {
            // Matikan suara lain yang sedang berjalan
            stopTTS();

            // Aktifkan UI Putar berita
            setUIPlay(btn);
            currentPlayingBtn = btn;

            if ('speechSynthesis' in window) {
                const section = btn.dataset.section;
                const index = btn.dataset.index;
                let data = null;

                // Ambil data berdasarkan section tombol
                if (section === 'hero_main') data = newsData.hero;
                else if (section === 'beritaInklusif_featured') data = newsData.beritaInklusif.featured;
                else if (section === 'beritaInklusif_secondary') data = newsData.beritaInklusif.secondary;
                else if (section === 'beritaInklusif_grid' && index !== undefined) data = newsData.beritaInklusif.grid[index];

                if (data) {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = data.deskripsi || data.description || '';

                    // untuk membersihkan hastag liar kayak yang template literal
                    let rawText = tempDiv.textContent || tempDiv.innerText || '';
                    rawText = rawText.replace(/\s+/g, ' ').trim();

                    const fullText = `${data.title || ''}. ${rawText}`;

                    // Memecah teks panjang menjadi potongan kalimat pendek agar browser tidak crash
                    utteranceQueue = fullText.split(/(?<=[.,!?])\s+/);

                    isSpeaking = true;
                    speakNextChunk(btn);
                } else {
                    // Jika data tidak ditemukan, balikkan UI ke awal
                    setTimeout(() => setUIStop(btn), 500);
                }
            }
        }
    };

    // Ketika halaman ditinggalkan atau di-refresh, matikan suara otomatis
    window.addEventListener('beforeunload', () => stopTTS());
}