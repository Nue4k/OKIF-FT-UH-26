# 🌐 Web Profil OKIF FT-UH

Selamat datang di repositori Website Profil **Organisasi Kemahasiswaan Informatika Fakultas Teknik Universitas Hasanuddin (OKIF FT-UH)**. 

Dokumen ini dibuat khusus agar **tim *developer* (partner)** dapat langsung memahami arsitektur proyek, gaya penulisan kode, dan daftar tugas yang harus dilanjutkan.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4
- **Font Global:** Lato (Terkonfigurasi langsung pada tag `<body>` di `layout.tsx`)

---

## 🏗️ Arsitektur & Komponen Inti (OOP)

Proyek ini sangat mengedepankan prinsip komponen yang dapat digunakan ulang (*Reusable Components*) agar kode bersih dan terstruktur.

### 1. `BaseSection.tsx`
Setiap kompartemen utama halaman (*Hero*, Statistik, Organisasi, dll.) **WAJIB dibungkus menggunakan `<BaseSection>`**. 
Komponen ini secara otomatis memberikan jarak antar-kompartemen yang sangat lega (`py-32`) dan memastikan tinggi minimal setara satu layar penuh (`min-h-screen`) sehingga perpindahan antar-seksi saat di-*scroll* terasa elegan.

### 2. `HorizontalScrollContainer.tsx`
Komponen *slider* pintar untuk membungkus item-item yang memanjang ke samping (horizontal).
- **Fitur Spesial:** Komponen ini secara otomatis menerjemahkan putaran roda *mouse* biasa (vertikal) menjadi geseran horizontal. Pengguna PC tidak perlu repot menekan `Shift`.
- **Aturan Pakai:** Cukup bungkus item dengan komponen ini. **Jangan** tambahkan efek CSS seperti `snap-x` atau `snap-mandatory` karena akan bertabrakan dengan *script scroll* mulus bawaannya.

### 3. Font & Warna Global
- **Ketebalan Font:** Karena Lato sudah diatur sebagai *font* dasar, kamu cukup menggunakan kelas Tailwind standar: `font-black` (untuk Heading/Judul besar), `font-bold` (untuk tombol/Pill), dan `font-normal` (untuk paragraf teks panjang).
- **Warna CSS:** Warna khusus proyek telah disuntikkan ke dalam `globals.css` (misal: `--color-okif-dark`).

---

## 📋 Daftar Tugas (What to do Next)

Jika kamu mengambil alih pengerjaan, silakan eksekusi daftar berikut:

- [ ] **Ganti Semua Placeholder Gambar:** Saat ini gambar logo, ilustrasi *Hero*, dan foto anggota masih memanggil tautan dari `https://placehold.co/...`. Mintalah aset gambar PNG/JPG yang asli, taruh di folder `/public`, dan panggil secara lokal (contoh: `src="/aset/foto-ketua.png"`).
- [ ] **Ganti Teks "Lorem Ipsum":** Teks deskripsi di `HeroSection` dan `OrganisasiSection` masih berupa draf kosong. Ganti dengan teks profil yang sebenarnya.
- [ ] **Sambungkan Tautan (Link) Navbar:** Tombol-tombol di `Navbar.tsx` (Beranda, Profil, dll.) harus diarahkan (*href*) ke `id` masing-masing *section* secara tepat. Tambahkan `scroll-behavior: smooth;` pada tag HTML agar perpindahannya mulus.
- [ ] **Cek Tampilan Mobile:** Lakukan *testing* responsif di ukuran layar *handphone*. Jika ada teks yang menabrak pinggir layar, sesuaikan dengan penambahan kelas seperti `md:text-5xl text-3xl`.

---

## 🚀 Panduan Menjalankan Proyek Lokal

1. Buka terminal di folder proyek ini.
2. Unduh semua *dependencies*:
   ```bash
   npm install
   ```
3. Nyalakan server *development*:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) 
