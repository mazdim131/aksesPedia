// =============================================
// MAIN.JS - Render semua section dari data.js
// =============================================
// Pastikan data.js di-load sebelum file ini di index.html

// =============================================
// 1. RENDER HERO SECTION
// =============================================
function renderHero() {
  // Isi teks & gambar dari heroData (di data.js)
  document.getElementById("heroTag").textContent = heroData.tag;
  document.getElementById("heroTitle").textContent = heroData.title;
  document.getElementById("heroDesc").textContent = heroData.description;

  const btn = document.getElementById("heroBtn");
  btn.textContent = heroData.buttonText;
  btn.href = heroData.buttonLink;

  const img = document.getElementById("heroImage");
  img.src = heroData.image;
  img.alt = heroData.imageAlt;

  // Render 3 link bawah hero
  const container = document.getElementById("heroLinks");

  heroLinks.forEach(function (item) {
    const el = document.createElement("a");
    el.href = item.link;
    el.className = "hero-link";

    el.innerHTML = `
      <div class="hero-link__img">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <p class="hero-link__title">${item.title}</p>
    `;

    container.appendChild(el);
  });
}

// =============================================
// 2. RENDER TRENDING SECTION
// =============================================
function renderTrending() {
  const container = document.getElementById("trendingList");

  trendingData.forEach(function (item) {
    const el = document.createElement("a");
    el.href = item.link;
    el.className = "trending-item";

    el.innerHTML = `
      <span class="trending-item__number">${item.number}</span>
      <p  class="trending-item__title">${item.title}</p>
      <span class="trending-item__category">${item.category}</span>
    `;

    container.appendChild(el);
  });
}

// =============================================
// 3. RENDER TAGLINE SECTION
// =============================================
function renderTagline() {
  document.getElementById("taglineTitle").textContent = taglineData.title;
  document.getElementById("taglineSubtitle").textContent = taglineData.subtitle;
}

// =============================================
// 4. RENDER JELAJAHI BERITA (kolom kiri, card besar)
// =============================================
function renderJelajahiBerita() {
  const container = document.getElementById("jelajahiGrid");

  jelajahiBerita.forEach(function (item) {
    const el = document.createElement("a");
    el.href = item.link;
    el.className = "card-berita";

    el.innerHTML = `
      <img class="card-berita__img" src="${item.image}" alt="${item.title}" />
      <div class="card-berita__body">
        <span class="card-berita__category">${item.category}</span>
        <p class="card-berita__title">${item.title}</p>
        <div class="card-berita__meta">
          <span>${item.date}</span>
          <span>${item.readTime}</span>
        </div>
      </div>
    `;

    container.appendChild(el);
  });
}

// =============================================
// 5. RENDER PILIHAN REAKSI (kolom kanan, card kecil)
// =============================================
function renderPilihanReaksi() {
  const container = document.getElementById("reaksiList");

  pilihanReaksi.forEach(function (item) {
    const el = document.createElement("a");
    el.href = item.link;
    el.className = "card-reaksi";

    el.innerHTML = `
      <div class="card-reaksi__img">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="card-reaksi__body">
        <span class="card-reaksi__tag">${item.tag}</span>
        <p class="card-reaksi__date">${item.date}</p>
        <p class="card-reaksi__title">${item.title}</p>
      </div>
    `;

    container.appendChild(el);
  });
}

// =============================================
// JALANKAN SEMUA
// =============================================
renderHero();
renderTrending();
renderTagline();
renderJelajahiBerita();
renderPilihanReaksi();
