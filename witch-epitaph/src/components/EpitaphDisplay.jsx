/**
epitaphdisplay.jsx

isinya komponen yang nampilin baris-baris teka teki dengan styling dan efek yang berbeda berdasarkan tipe masing-masing baris.
mengambil data dari epitaphdata.js, dan menggunakan .map() untuk merender setiap baris dengan komponen epitaphline yang sesuai.
.map gunanya biar bisa nambahin baris teka teki baru di epitaphdata.js tanpa harus ngubah kode di epitaphdisplay.jsx, 
cukup dengan nambahin objek baru ke array data.
 */

import epitaphData from "../data/epitaphData";
import EpitaphLine from "./EpitaphLine";

// komponen utama yang nampilin semua baris teka teki dalam urutan yang benar.

const EpitaphDisplay = () => {
  return (
    <main className="flex justify-center px-4 pb-16">
      <div
        className="relative w-full max-w-3xl
                   bg-stone-950/80 border border-amber-900/30
                   rounded-md shadow-[0_0_60px_rgba(120,53,15,0.25)]
                   backdrop-blur-sm overflow-hidden"
      >
        {/* dekorasi sudut dengan simbol ⌜ yang ditempatkan secara absolut di keempat sudut*/}
        <span aria-hidden="true"
          className="absolute top-2 left-2 text-amber-700/30 text-xl select-none">⌜</span>
        <span aria-hidden="true"
          className="absolute top-2 right-2 text-amber-700/30 text-xl select-none rotate-90">⌜</span>
        <span aria-hidden="true"
          className="absolute bottom-2 left-2 text-amber-700/30 text-xl select-none -rotate-90">⌜</span>
        <span aria-hidden="true"
          className="absolute bottom-2 right-2 text-amber-700/30 text-xl select-none rotate-180">⌜</span>

        {/* label "The Epitaph" dengan font Cinzel, warna amber gelap, dan spasi huruf yang lebar */}
        <div className="px-8 pt-8 pb-4 text-center">
          <p className="font-cinzel text-amber-600/70 text-xs tracking-[0.4em] uppercase">
            — The Epitaph —
          </p>
        </div>

        {/* ini yang paling penting, pake .map() buat ngiterasi atau nambahin baris teka teki baru di epitaphdata.js, 
        setiap objek di array data bakal dioper ke komponen EpitaphLine sebagai props, 
        yang kemudian bakal dirender dengan styling dan efek yang sesuai berdasarkan tipe masing-masing baris*/}
        
        <ul className="px-4 sm:px-8 pb-8 flex flex-col gap-1" role="list">
          {epitaphData.map(({ id, twilight, text, type }) => (
            <EpitaphLine
              key={id}
              twilight={twilight}
              text={text}
              type={type}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default EpitaphDisplay;
