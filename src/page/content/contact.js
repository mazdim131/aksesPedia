const content = document.getElementById("main");

content.innerHTML = `
    <div class="contact-container">
        <div class="main-card">

            <div class="form-section">
                <!-- TOMBOL BACK DI SINI -->
                <button type="button" class="btn-back" onclick="history.back()">
                    ← Kembali
                </button>

                <div class="header-form">
                    <a href="/index.html">
                        <img class="logo-aksespedia" src="https://c.animaapp.com/mpm845f798Vnt1/img/image-109.png" alt="Logo" />
                    </a>
                    <h2>Hubungi Kami</h2>
                    <p>Kirimkan saran atau kendala Anda untuk bantu kami berkembang.</p>
                </div>

                <form class="actual-form" action="https://formspree.io/f/mwvzrzve" method="POST">
                    <div class="form-grid">
                        <div class="input-group">
                            <label>Nama depan :</label>
                            <input name="Nama_Depan" type="text" placeholder="Jhon">
                        </div>
                        <div class="input-group">
                            <label>Nama belakang :</label>
                            <input name="Nama_Belakang" type="text" placeholder="dhea Alfrendo">
                        </div>
                        <div class="input-group">
                            <label>Alamat email :</label>
                            <input name="Email" type="email" placeholder="Jhon@gmail.com">
                        </div>
                        <div class="input-group">
                            <label>No telepon :</label>
                            <input name="Nomor_Telepon" type="tel" placeholder="0855-6688-990">
                        </div>
                    </div>

                    <div class="input-group full-width">
                        <label>Subjek :</label>
                        <input name="Subjek" type="text" placeholder="Tulis inti pesan Anda di sini...">
                    </div>

                    <div class="input-group full-width">
                        <label>Pesan :</label>
                        <textarea name="Text_Area" placeholder="Tulis Rincian pesan Anda di sini..."></textarea>
                    </div>

                    <div class="checkbox-wrapper">
                        <input type="checkbox" id="agree">
                        <label for="agree">Saya menyetujui <span class="underline">Kebijakan & Privasi</span></label>
                    </div>

                    <button type="submit" class="btn-submit">Kirim Pesan</button>
                </form>
            </div>

            <div class="info-section">
                <h3>Suara Anda adalah Kunci Utama Perubahan Digital Kami</h3>
                <p class="sub-info">Mari berkolaborasi menciptakan portal informasi yang ramah dan bisa diakses oleh
                    siapa saja.</p>

                <div class="info-blocks">
                    <div class="block">
                        <h4>Jam Buka</h4>
                        <p><strong>Sen - Jum:</strong> 10.00 - 17.00</p>
                    </div>

                    <div class="block">
                        <h4>Lokasi</h4>
                        <p>SMK Wikrama Bogor berlokasi di Jl. Raya Wangun, Kelurahan Sindangsari, Kecamatan Bogor Timur,
                            Kota Bogor, Jawa Barat 16720</p>
                    </div>

                    <div class="block">
                        <h4>Kontak</h4>
                        <p class="icon-text"><img src="https://c.animaapp.com/mpm845f798Vnt1/img/whatsapp.svg"
                                alt="WA" /> +0811-9875-668</p>
                        <p class="icon-text"><img src="https://c.animaapp.com/mpm845f798Vnt1/img/frame.svg"
                                alt="Email" /> AksesPedia@gmail.com</p>
                    </div>
                </div>

                <div class="info-footer">
                    <div class="line-divider"></div>
                    <div class="footer-bottom">
                        <p class="copy">Copyright 2026 | All Rights Reserved</p>
                        <div class="sosmed-icons">
                            <a href="#" aria-label="Facebook AksesPedia">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                    style="fill: #ffffff;">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-2v7h-3v-7h-2v-3h2V8.2c0-2.2 1.4-3.2 3.2-3.2.9 0 1.6.1 1.8.1v2.1h-1.2c-1.1 0-1.2.5-1.2 1.3V10h2.4l-.4 3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter AksesPedia">
                                <img src="https://c.animaapp.com/mpm845f798Vnt1/img/vector-8.svg" style="fill: #ffffff;"
                                    alt="Twitter Icon" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
`;