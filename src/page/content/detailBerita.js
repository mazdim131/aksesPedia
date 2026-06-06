
document.addEventListener('DOMContentLoaded', () => {
    // Parsing URL parameters
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');
    const index = params.get('index');

    let data = null;

    // Ambil data yang sesuai dari beritaHero.js berdasarkan parameter URL
    if (section === 'hero_main') {
        data = newsData.hero;
    } else if (section === 'hero_subNews' && index !== null) {
        data = newsData.hero.subNews[index];
    } else if (section === 'trending' && index !== null) {
        data = newsData.trending[index];
    } else if (section === 'beritaInklusif_featured') {
        data = newsData.beritaInklusif.featured;
    } else if (section === 'beritaInklusif_secondary') {
        data = newsData.beritaInklusif.secondary;
    } else if (section === 'beritaInklusif_grid' && index !== null) {
        data = newsData.beritaInklusif.grid[index];
    } else if (section === 'pilihanRedaksi' && index !== null) {
        data = newsData.pilihanRedaksi[index];
    }

    if (data) {
        const detailImage = document.getElementById('detailImage');
        const detailTitle = document.getElementById('detailTitle');
        const detailDate = document.getElementById('detailDate');
        const detailCategory = document.getElementById('detailCategory');
        const detailDescription = document.getElementById('detailDescription');
        const detailAuthorImg = document.getElementById('detailAuthorImg');
        const detailAuthorName = document.getElementById('detailAuthorName');

        if (detailImage) {
            detailImage.src = data.image || data.mainImage || '';
            detailImage.alt = data.title || '';
        }

        if (detailCategory) {
            detailCategory.textContent = data.category || 'Berita';
        }

        if (detailAuthorName) {
            detailAuthorName.textContent = data.Penulis || '';
        }

        if (detailDate) {
            detailDate.textContent = data.date || 'Tanggal tidak tersedia';
        }

        if (detailTitle) {
            detailTitle.textContent = data.title || '';
        }

        if (detailAuthorImg && data.FotoProfile) {
            detailAuthorImg.src = data.FotoProfile;
        }

        if (detailDescription) {

            // Ambil teks apa adanya dari beritaHero.js
            detailDescription.innerHTML = data.deskripsi || data.description || '';

        }

        // --- WEB SPEECH API (Text to Speech) ---
        const voiceBtn = document.getElementById('voiceBtn');
        const voiceIcon = document.getElementById('voiceIcon');
        const voiceStatus = document.getElementById('voice-status');

        let isSpeaking = false;
        updateVoiceUI();

        // Mengekstrak teks dari HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data.deskripsi || data.description || '';
        const rawText = tempDiv.textContent || tempDiv.innerText || '';

        // Teks yang akan dibaca
        const textToSpeak = `${data.title}. ${rawText}`;

        if ('speechSynthesis' in window) {
            const toggleTTS = () => {
                if (isSpeaking) {
                    window.speechSynthesis.cancel();
                    isSpeaking = false;
                    updateVoiceUI();
                } else {
                    const utterance = new SpeechSynthesisUtterance(textToSpeak);
                    utterance.lang = 'id-ID'; // Bahasa Indonesia

                    utterance.onend = () => {
                        isSpeaking = false;
                        updateVoiceUI();
                    };

                    utterance.onerror = (e) => {
                        console.error('TTS Error:', e);
                        isSpeaking = false;
                        updateVoiceUI();
                    };

                    isSpeaking = true;
                    updateVoiceUI();
                    window.speechSynthesis.speak(utterance);
                }
            };

            voiceBtn.addEventListener('click', toggleTTS);
            // Toast Konfirmasi Suara
            const voiceToastElement = document.getElementById('voiceToast');
            const enableVoiceBtn = document.getElementById('enableVoiceBtn');
            const disableVoiceBtn = document.getElementById('disableVoiceBtn');

            if (voiceToastElement) {

                const voiceToast = new bootstrap.Toast(
                    voiceToastElement,
                    {
                        autohide: false
                    }
                );

                // Tampilkan toast saat halaman dibuka
                setTimeout(() => {
                    voiceToast.show();
                }, 500);

                // Klik Ya
                enableVoiceBtn.addEventListener('click', () => {
                    voiceToast.hide();

                    if (!isSpeaking) {
                        toggleTTS();
                    }
                });

                // Klik Tidak
                disableVoiceBtn.addEventListener('click', () => {
                    voiceToast.hide();
                });
            }

            // AUTO-PLAY: Langsung bacakan berita saat halaman terbuka.
            // setTimeout(() => {
            //     if (!isSpeaking) {
            //         toggleTTS();
            //     }
            // }, 300);

        } else {
            console.warn("Speech Synthesis tidak didukung di browser ini.");
            voiceBtn.style.display = 'none';
            voiceStatus.textContent = "Suara tidak didukung";
        }

        function updateVoiceUI() {
            if (isSpeaking) {
                voiceIcon.className = 'bi bi-pause-fill';
                voiceStatus.textContent = 'Bantuan Suara : Aktif';
            } else {
                voiceIcon.className = 'bi bi-mic-fill';
                voiceStatus.textContent = 'Bantuan Suara : Nonaktif';
            }
        }

    } else {
        // Jika tidak ada data yang ditemukan
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.innerHTML = `
                <div class="container-sm mt-5 text-center">
                    <h3>Berita tidak ditemukan</h3>
                    <a href="/src/page/structure/Hero.html" class="btn btn-danger mt-3">Kembali ke Beranda</a>
                </div>
            `;
        }
    }

    // --- SHARE FUNCTIONALITY ---
    const shareBtn = document.getElementById('shareBtn');
    const shareDropdown = document.getElementById('shareDropdown');
    const copyBtn = document.getElementById('copyBtn');
    const shareLink = document.getElementById('shareLink');

    if (shareLink) {
        shareLink.value = window.location.href;
    }

    if (shareBtn && shareDropdown) {
        shareBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            shareDropdown.classList.toggle('d-none');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!shareBtn.contains(e.target) && !shareDropdown.contains(e.target)) {
                shareDropdown.classList.add('d-none');
            }
        });
    }

    if (copyBtn && shareLink) {
        copyBtn.addEventListener('click', () => {
            shareLink.select();
            shareLink.setSelectionRange(0, 99999); // Untuk mobile devices
            navigator.clipboard.writeText(shareLink.value).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Disalin!';
                copyBtn.classList.replace('btn-warning', 'btn-success');
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.classList.replace('btn-success', 'btn-warning');
                }, 2000);
            }).catch(err => {
                console.error('Gagal menyalin text: ', err);
            });
        });
    }

    // Ketika halaman ditinggalkan, matikan TTS
    window.addEventListener('beforeunload', () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    });

});
