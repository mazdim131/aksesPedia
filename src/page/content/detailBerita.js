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
            // ini yang deskripsi di paling awal itu agar yang kepilih nya itu yang deskripsi bukan yang description
            detailDescription.innerHTML = data.deskripsi || data.description || '';
        }

        // WEB SPEECH API (Text to Speech) dengan Sistem Antrean Kalimat
        const voiceBtn = document.getElementById('voiceBtn');
        const voiceIcon = document.getElementById('voiceIcon');
        const voiceStatus = document.getElementById('voice-status');

        let isSpeaking = false;
        let utteranceQueue = []; // Menyimpan potongan kalimat agar browser tidak crash

        function updateVoiceUI() {
            if (isSpeaking) {
                if (voiceIcon) voiceIcon.className = 'bi bi-pause-fill';
                if (voiceStatus) voiceStatus.textContent = 'Bantuan Suara : Aktif';
            } else {
                if (voiceIcon) voiceIcon.className = 'bi bi-mic-fill';
                if (voiceStatus) voiceStatus.textContent = 'Bantuan Suara : Nonaktif';
            }
        }

        // Fungsi rekursif untuk memutar antrean potongan teks satu per satu
        function speakNextChunk() {
            if (utteranceQueue.length === 0) {
                isSpeaking = false;
                updateVoiceUI();
                return;
            }

            const textChunk = utteranceQueue.shift().trim();
            if (!textChunk) {
                speakNextChunk();
                return;
            }

            const utterance = new SpeechSynthesisUtterance(textChunk);
            utterance.lang = 'id-ID'; //bahasa indonesia

            utterance.onend = () => {
                if (isSpeaking) {
                    speakNextChunk();
                }
            };

            utterance.onerror = (e) => {
                console.error('TTS Chunk Error:', e);
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
            updateVoiceUI();
        }

        if ('speechSynthesis' in window) {
            updateVoiceUI();

            const toggleTTS = () => {
                if (isSpeaking) {
                    stopTTS();
                } else {
                    // Hentikan sisa pemutaran suara lain jika ada
                    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

                    // Mengekstrak teks bersih dari tag HTML deskripsi
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = data.deskripsi || data.description || '';
                    let rawText = tempDiv.textContent || tempDiv.innerText || '';

                    // Bersihkan tabulasi dan spasi liar akibat format backtick template literal
                    rawText = rawText.replace(/\s+/g, ' ').trim();

                    const fullText = `${data.title || ''}. ${rawText}`;

                    // Pecah teks panjang menjadi potongan kalimat berdasarkan tanda baca (. ! ?)
                    utteranceQueue = fullText.split(/(?<=[.,!?])\s+/);

                    isSpeaking = true;
                    updateVoiceUI();
                    speakNextChunk();
                }
            };

            if (voiceBtn) {
                voiceBtn.addEventListener('click', toggleTTS);
            }

            // --- Toast Konfirmasi Suara ---
            const voiceToastElement = document.getElementById('voiceToast');
            const enableVoiceBtn = document.getElementById('enableVoiceBtn');
            const disableVoiceBtn = document.getElementById('disableVoiceBtn');

            if (voiceToastElement) {
                const voiceToast = new bootstrap.Toast(voiceToastElement, { autohide: false });

                // Tampilkan toast konfirmasi setelah halaman terbuka
                setTimeout(() => {
                    voiceToast.show();
                }, 500);

                // Klik tombol 'Ya' di Toast
                if (enableVoiceBtn) {
                    enableVoiceBtn.addEventListener('click', () => {
                        voiceToast.hide();
                        if (!isSpeaking) {
                            toggleTTS();
                        }
                    });
                }

                // Klik tombol 'Tidak' di Toast
                if (disableVoiceBtn) {
                    disableVoiceBtn.addEventListener('click', () => {
                        voiceToast.hide();
                    });
                }
            }

        } else {
            console.warn("Speech Synthesis tidak didukung di browser ini.");
            if (voiceBtn) voiceBtn.style.display = 'none';
            if (voiceStatus) voiceStatus.textContent = "Suara tidak didukung";
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

        document.addEventListener('click', (e) => {
            if (!shareBtn.contains(e.target) && !shareDropdown.contains(e.target)) {
                shareDropdown.classList.add('d-none');
            }
        });
    }

    if (copyBtn && shareLink) {
        copyBtn.addEventListener('click', () => {
            shareLink.select();
            shareLink.setSelectionRange(0, 99999); // Untuk mobile device
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

    // Ketika halaman ditinggalkan atau di-refresh, matikan TTS secara total
    window.addEventListener('beforeunload', () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    });
});