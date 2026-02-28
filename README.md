# 🕯️ The Witch's Epitaph Reader

> *"Without Love, It Cannot Be Seen."*

Sebuah web app bertemakan gothic gelap yang menampilkan teka-teki sang Penyihir Emas dari visual novel **Umineko no Naku Koro ni**. Dibuat sebagai tantangan implementasi komponen React — mendemonstrasikan reusable components, penggunaan props, dan render list dengan `.map()`.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## ✨ Tampilan

Desain mengusung estetika **gothic & elegan** dengan:
- 🖤 Background gelap pekat bertekstur
- 🟡 Aksen emas / amber untuk teks dan dekorasi
- 🔴 Teks merah menyala untuk baris-baris pengorbanan (*special twilight*)
- ✨ Efek glow dan hover yang halus di setiap baris
- 🔤 Font **Cinzel** (judul) dan **Playfair Display** (isi teks)

---

## 📁 Struktur Project

```
witch-epitaph/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx               # Entry point React
    ├── App.jsx                # Komponen utama
    ├── index.css              # CSS global + Tailwind + import font
    ├── data/
    │   └── epitaphData.js     # Sumber data semua baris epitaph
    └── components/
        ├── Header.jsx         # Judul atas halaman
        ├── EpitaphDisplay.jsx # Container + render list dengan .map()
        ├── EpitaphLine.jsx    # Komponen reusable satu baris epitaph
        └── Footer.jsx         # Bagian bawah halaman
```

---

## 🚀 Cara Menjalankan

### Prasyarat
Pastikan sudah menginstall:
- **Node.js** versi 18 ke atas
- **npm** versi 9 ke atas

### Langkah Instalasi

```bash
# 1. Clone repository ini
git clone github.com/Kokoparel/The-Witche-s-Epitaph.git

# 2. Masuk ke folder project
cd witch-epitaph

# 3. Install semua dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Setelah itu buka browser dan akses **http://localhost:5173**

### Build untuk Production

```bash
npm run build
```

---

## 🧠 Konsep React yang Didemonstrasikan

| Konsep | Implementasi |
|---|---|
| **Functional Component** | Semua komponen menggunakan arrow function |
| **Props** | `EpitaphLine` menerima `twilight`, `text`, dan `type` dari induknya |
| **`.map()` untuk render list** | `EpitaphDisplay` meng-iterasi `epitaphData` dan menghasilkan `<EpitaphLine />` |
| **Conditional Rendering** | `{twilight && <span>...</span>}` — label hanya muncul jika ada nilainya |
| **Conditional Styling** | Style teks berubah berdasarkan nilai prop `type` |
| **Component Separation** | Data, logika render, dan tampilan dipisah ke file masing-masing |
| **Reusable Component** | Satu komponen `EpitaphLine` dipakai 19 kali dengan tampilan berbeda |

---

## 🧩 Penjelasan Komponen

### `epitaphData.js` — Sumber Data
Array of objects yang menyimpan semua baris epitaph. Setiap objek punya:
- `id` → pengenal unik, dipakai sebagai `key` di React
- `twilight` → label urutan (`"First"`, `"Second"`, dst) atau `null`
- `text` → isi teks baris epitaph
- `type` → menentukan tampilan: `"normal"` | `"special"` | `"conclusion"`

### `Header.jsx` — Judul Halaman
Komponen statis yang menampilkan judul utama dengan efek glow emas, garis dekoratif, dan subtitle. Tidak menerima props.

### `EpitaphDisplay.jsx` — Container List
Mengambil data dari `epitaphData.js` lalu menggunakan `.map()` untuk merender satu `<EpitaphLine />` per item. Komponen ini adalah jembatan antara data dan tampilan.

### `EpitaphLine.jsx` — Komponen Reusable ⭐
Komponen terpenting dalam project ini. Menerima 3 props dan mengubah tampilannya secara dinamis:

| Nilai `type` | Tampilan |
|---|---|
| `"normal"` | Teks emas redup, border kiri tipis |
| `"special"` | Teks merah menyala, glow effect merah, border merah |
| `"conclusion"` | Teks emas terang, italic, glow emas lebih kuat |

### `Footer.jsx` — Penutup Halaman
Komponen statis sederhana berisi kutipan ikonik dari Umineko. Tidak menerima props.

---

## 🔄 Alur Data

```
epitaphData.js  →  EpitaphDisplay.jsx  →  EpitaphLine.jsx  →  Browser
  (sumber)           (.map() render)       (tampilan)
```

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| [React 18](https://react.dev/) | Library UI utama |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Styling berbasis utility class |
| [Google Fonts](https://fonts.google.com/) | Font Cinzel & Playfair Display |

---

## 📜 Tentang Umineko

**Umineko no Naku Koro ni** (うみねこのなく頃に) adalah visual novel karya Ryukishi07 yang dirilis tahun 2007. Ceritanya berpusat pada keluarga Ushiromiya yang terjebak di pulau terpencil, dengan teka-teki pembunuhan misterius yang dikaitkan dengan penyihir emas bernama **Beatrice**.

Epitaph yang ditampilkan dalam project ini adalah teka-teki inti dari cerita — sebuah puisi gelap berisi petunjuk untuk menemukan harta emas sang penyihir.

---

## 👤 Author

Dibuat dengan 🖤 dan sedikit kutukan penyihir.

---

> *"Let all praise the name of the Golden Witch, Beatrice."*
