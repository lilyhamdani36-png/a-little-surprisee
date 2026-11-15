# A Little Surprise For You ♡

Website kejutan ulang tahun interaktif menggunakan HTML, CSS, dan JavaScript. Bahasa utamanya Bahasa Indonesia; beberapa judul dan ungkapan bahasa Inggris dipakai sebagai pemanis. Ada **8 halaman utama** yang disusun seperti beberapa chapter.

## Isi website
1. **The Secret** — halaman pembuka dan tombol kejutan.
2. **The Big Surprise** — ucapan ulang tahun, ilustrasi kue, dan confetti.
3. **Little Memories** — satu halaman khusus galeri foto kenangan.
4. **Achievements** — chapter terpisah untuk 6 foto pencapaian.
5. **Pelopor** — chapter khusus cerita dan 3 foto Pelopor.
6. **A Letter For You** — amplop digital dan surat personal.
7. **Let's Find Out!** — satu game berisi 7 pertanyaan terbuka bertema harapan, cerita, dan keinginan. Jawaban boleh singkat atau panjang seperti essay.
8. **One Last Thing** — pesan akhir dan pesan rahasia.

## Menjalankan website
1. Ekstrak ZIP.
2. Buka folder `birthday-surprise` di Visual Studio Code.
3. Pasang ekstensi **Live Server** jika belum ada.
4. Klik kanan `index.html` → **Open with Live Server**.

## Tempat mengganti isi website
Buka `script.js`. Di bagian paling atas ada bagian **PERSONAL CONTENT**. Inilah tempat utama untuk mengganti konten tanpa mengubah susunan halaman.

- `memoryPhotos`: foto dan caption galeri kenangan (3 slot).
- `achievementPhotos`: foto, judul, dan caption pencapaian (**6 slot**).
- `peloporPhotos`: foto dan caption Pelopor (3 slot).
- Tujuh pertanyaan game berada di `index.html`, pada bagian **PAGE 7: GAME**. Kamu bisa mengubah pertanyaan dan placeholder di sana.
- `letterText`: seluruh isi surat.

Untuk foto: masukkan foto baru ke `assets/images/`, misalnya `memory1.jpg`, lalu ubah `src` di daftar yang sesuai pada `script.js`. Contoh: `src: "assets/images/memory1.jpg"`. Kamu boleh mengganti gambar placeholder dengan JPG, PNG, atau WEBP. Jangan lupa sesuaikan nama file di `src`.

Slot foto yang tersedia:
- Galeri: `memory1`, `memory2`, `memory3`.
- Pencapaian: `achievement1` sampai `achievement6`.
- Pelopor: `pelopor1`, `pelopor2`, `pelopor3`.

Teks yang tampil langsung di halaman (judul, tombol, label, dan paragraf) dapat diubah di `index.html`.

## Mengganti musik
1. Masukkan file lagu berformat MP3 ke `assets/music/`.
2. Beri nama `song.mp3` agar langsung terbaca oleh website.
3. Jika nama file berbeda, ubah atribut `src` pada elemen audio di bagian bawah `index.html`.
4. Musik baru diputar setelah pengunjung menekan tombol musik karena browser umumnya membatasi pemutaran otomatis.

## Teks panjang menyesuaikan otomatis
Isi surat dan paragraf sudah menggunakan pembungkus teks dan ukuran huruf responsif. Jika kamu menambahkan tulisan panjang, teks akan turun ke baris berikutnya dan area konten akan bertambah mengikuti isinya. Tidak perlu memperbesar kotak secara manual. Hindari menambahkan satu kata atau URL yang sangat panjang tanpa spasi.

## Bagian desain dan fungsi
- `style.css`: warna, ukuran, tata letak, ilustrasi kue, animasi, dan tampilan HP/desktop.
- `index.html`: susunan halaman dan teks yang bukan data personal.
- `script.js`: data foto, caption, surat, pertanyaan, navigasi, permainan, musik, dan efek.

## Jawaban game: cara menyimpan dan melihat
- Tombol **Simpan jawabanku** menyimpan jawaban di penyimpanan browser (localStorage) pada perangkat dan browser yang sedang dipakai.
- Saat website dibuka lagi di browser/perangkat yang sama, jawaban yang sudah disimpan akan muncul kembali.
- Tombol **Download jawaban** membuat file teks `jawaban-i-wish-you.txt` yang bisa dikirimkan kepada pembuat website.
- Catatan penting: website statis belum mengirim jawaban secara online ke perangkat lain. Kalau teman mengisi dari HP/laptop miliknya dan kamu ingin melihat jawabannya dari laptopmu tanpa menerima file secara manual, perlu dihubungkan ke layanan penyimpanan online seperti Google Sheets atau Firebase.

## Sebelum dibagikan
Coba semua tombol, pindah-pindah foto, buka surat, isi 7 pertanyaan game, simpan dan download jawaban, buka pesan rahasia, lalu cek tampilan di browser HP dan laptop. Ganti semua foto placeholder dan isi surat sebelum dibagikan.

## Publikasi dan QR Code
Unggah isi folder proyek ke repository GitHub, aktifkan **Settings → Pages → Deploy from a branch**, pilih branch `main` dan folder `/ (root)`. Setelah URL publik berhasil dibuka di HP, buat QR Code yang mengarah ke URL tersebut. QR Code belum disertakan karena alamat website publik belum ada.

Made with care & a little bit of magic ♡
