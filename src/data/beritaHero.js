const newsData = {
  hero: {
    // paling atas
    tag: "Haji 2026",
    title: "Cerita Ibadah Haji\ndi Tanah Suci",
    description: "Kumpulan berita-berita, foto, video dan infografis tentang pelaksanaan ibadah haji 1447 M/2026 H.",
    mainImage: "/src/assets/assetBeritaHero/HeroPalingAtas/FotoMekkah.jpg",


    // ini yang di bawah tranding paling atas // sub berita
    subNews: [
      {
        title: "FOTO: Parade Militer Pengamanan Ibadah Haji 2024 di Arab Saudi",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1565711561500-49678a10a63f?q=80&w=2100&auto=format&fit=crop"
      },
      {
        title: "Hilang di Makkah, Jemaah Haji Lansia Asal Jakarta Ditemukan Meninggal",
        category: "Nasional",
        image: "https://images.unsplash.com/photo-1542461927-9168923f738a?q=80&w=2000&auto=format&fit=crop"
      },
      {
        title: "Suasana Masjidil Haram Jelang Puncak Haji 2024",
        category: "Internasional",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },

  // Trending yang 01-06
  trending: [
    {
      number: "01",
      title: "Hasil Babak I Super League: Persib Imbang, Borneo FC Menang Besar",
      category: "Olahraga"
    },
    {
      number: "02",
      title: "Persib Bandung Klub Pertama Hatrick Juara di Era Liga Indonesia",
      category: "Olahraga"
    },
    {
      number: "03",
      title: "PLN Ungkap Penyebab Listrik Padam di Sumatera, Cuaca Buruk",
      category: "Ekonomi"
    },
    {
      number: "04",
      title: "BMKG Beber Daftar Wilayah Berpotensi Hujan Sangat Lebat Hari Ini",
      category: "Teknologi"
    },
    {
      number: "05",
      title: "LIVE REPORT: Persib vs Persiraja di Super League",
      category: "Olahraga"
    },
    {
      number: "06",
      title: "Jorge Jesus: Guardiola Harus Bangga Latih Saya di Al Nassr",
      category: "Olahraga"
    }
  ],

  tagline: {
    title: "Ketika Suara Menjadi Jendela Informasi.",
    subtitle: "Platform artikel interaktif yang membebaskan mata Anda dari hambatan digital. Ketuk tombol apapun, dan biarkan dunia bercerita kepada Anda."
  },


  beritaInklusif: {
    // dua kolom/card nyatu
    featured: {
      date: "23 Mei 2024",
      title: "Bupati Maesyal Pastikan Hewan Kurban di Kabupaten Tangerang Sehat dan Aman Jelang Idul Adha 1447 H",
      description: "Bupati Tangerang Moch. Maesyal Rasyid meninjau salah satu lapak penjualan hewan kurban menjelang Hari Raya Idul Adha 1447 H.",
      image: "/src/assets/assetBeritaHero/beritaInklusif/featured/bupatiTanggerang.jpeg"
    },
    // yang sebelah nya card
    secondary: {
      date: "21 Juli 2023",
      title: "Kuliner Indonesia yang Mendunia",
      description: "5 kuliner Indonesia yang mendunia",
      image: "/src/assets/assetBeritaHero/beritaInklusif/secondary/foto5Kulinerindonesia .jpg"
    },

    //6 card di bawah bawah nya
    grid: [
      {
        date: "21 Juli 2023",
        title: "Apa Itu Anxiety Disorder? Kenali Gejala dan Pengobatannya",
        description: "Mengenal Anxiety Disorder",
        image: "/src/assets/assetBeritaHero/beritaInklusif/grid/apaituanxienty.jpg"
      },
      {
        date: "21 Juli 2023",
        title: "Gaya Hidup Sehat untuk Menjaga Kesehatan Lambung",
        description: "Menjaga Kesehatan Lambung",
        image: "/src/assets/assetBeritaHero/beritaInklusif/grid/kesehatanLambung.jpeg"
      },
      {
        date: "21 Juli 2023",
        title: "10 Hotel Terbaik di Indonesia 2022 Versi Travel and Leisure",
        description: "Berlibur untuk melepas penat",
        image: "/src/assets/assetBeritaHero/beritaInklusif/grid/JKTcityIcon.jpg"
      },
      {
        date: "21 Juli 2023",
        title: "Bagaimana Gaya Hidup Sehat Ala Remaja?",
        description: "Gaya Hidup Sehat",
        image: "/src/assets/assetBeritaHero/beritaInklusif/grid/GayaHidupAlaRemaja.jpg"
      },
      {
        date: "21 Juli 2023",
        title: "5 Cara Meningkatkan Mood Belajar, Dijamin Nggak Gampang Bosan!",
        description: "Menghilangkan Malas Belajar",
        image: "/src/assets/assetBeritaHero/beritaInklusif/grid/MoodBelajar.jpg"
      },
      {
        date: "21 Juli 2023",
        title: "Jenis Makanan Appetizer, Main Course, dan Dessert, Apa Bedanya?",
        description: "Belajar Memasak",
        image: "/src/assets/assetBeritaHero/beritaInklusif/grid/MakananAppetizer.jpeg"
      }
    ]
  },

  //card paling kiri yang kecil kecil
  pilihanRedaksi: [
    {
      date: "21 Juli 2023",
      title: "Waktu Terbaik Untuk Belajar",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/waktuTerbaikUntukBelajar.jpg"
    },
    {
      date: "21 Juli 2023",
      title: "4 Jenis Gangguan Jiwa yang Perlu Anda Ketahui!",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/4JenisGangguanJiwa.jpg"
    },
    {
      date: "31 Juli 2023",
      title: "6 Tips Meningkatkan Semangat Belajar",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/6TipsMeningkatkanSemangatBelajar.jpg"
    },
    {
      date: "21 Juli 2023",
      title: "Yuk Cari Tau Apa Itu Ala Carte?",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/ApaItuAlaCarte.png"
    },
    {
      date: "21 Juli 2023",
      title: "5 Cara Menjadi Reseller Laris Modal Minimalis",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/5CaraMenjadiReseller.jpg"
    },
    {
      date: "31 Juli 2023",
      title: "Seputar Mental Illness yang Perlu Anda Ketahui",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/SeputarMentalIllness.jpg"
    },
    {
      date: "21 Juli 2023",
      title: "Tips Pakai Google Search Secara Efektif dan Efisien",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/google.png"
    },
    {
      date: "21 Juli 2023",
      title: "Ambisius Dalam Belajar",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/AmbisiusDalamBelajar.jpeg"
    },
    {
      date: "31 Juli 2023",
      title: "Bahaya Makanan Cepat Saji bagi Kesehatan",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/BahayaMakananCepatSaji.jpg"
    },
    {
      date: "31 Juli 2023",
      title: "Cara Menjaga Kesehatan Remaja",
      image: "/src/assets/assetBeritaHero/pilihanRedaksi/CaraMenjagaKesehatanRemaja.jpg"
    }
  ]
};
