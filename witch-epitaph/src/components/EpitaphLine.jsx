/**
 epitaphline.jsx

 isinya komponen yang menampilkan satu baris teka teki, dengan label twilight opsional dan variasi styling berdasarkan tipe.
 caranya dengan menerima tiga props: twilight (string label), text (isi teka teki), dan type (normal, special, atau conclusion).
 props adalah  isi dari setiap baris teka teki yang didefinisikan dalam epitaphdata.js, 
 yang kemudian dipetakan dan dirender oleh EpitaphDisplay.jsx agar tampil dalam urutan yang benar.
 tipe "normal" → warna amber pucat dengan aksen border halus (baris standar)
 tipe "special" → warna merah darah dengan bayangan merah gelap yang mencolok (teka tekinya)
 tipe "conclusion" → warna emas cerah, lebih besar, terpusat, dengan kilau ekstra (kesimpulan)
 */

const EpitaphLine = ({ twilight, text, type }) => {

  const wrapperClasses = [
    // buat wrapper yang fleksibel untuk menampung label twilight dan teks, dengan padding, border, dan efek hover yang konsisten
    "group relative flex flex-col gap-1 px-6 py-4 rounded-sm",
    "transition-all duration-300 ease-in-out",
    "cursor-default select-none",

    // efek hover
    "hover:-translate-y-0.5 hover:bg-white/[0.03]",

    // styling berdasarkan tipe
    type === "special" 
      ? "border-l-2 border-red-700/70 hover:border-red-500"
      : type === "conclusion"
      ? "border-l-2 border-amber-400/80 hover:border-amber-300"
      : "border-l border-amber-900/40 hover:border-amber-700/60",
  ].join(" "); 

  // ini cuman buat label twilight, bakal muncul jika isinya bukan null. 
  const twilightClasses = [
    "inline-block font-cinzel text-xs tracking-[0.25em] uppercase mb-1 px-2 py-0.5 rounded-sm",
    type === "special"
      ? "text-red-400/80 bg-red-950/40 border border-red-800/50"
      : "text-amber-500/70 bg-amber-950/40 border border-amber-800/40",
  ].join(" ");

  // ini buat teks teka tekinya, menciptakan efek glow dan perubahan warna saat hover, 
  const textClasses = [
    "font-playfair leading-relaxed",

    // ukuran teks berdasarkan tipe, kalau conclusion lebih gede dan italic, kalau special tetap normal tapi mencolok
    type === "conclusion" ? "text-xl sm:text-2xl" : "text-base sm:text-lg", 

    // efek glow dan warna berdasarkan tipe, kalau special warna merah dengan glow lebih kuat, 
    // kalau conclusion warna emas dengan glow lebih halus, 
    // kalau normal warna amber pucat dengan glow yang halus.
    type === "special"
      ? [
          "text-red-400",
          "drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]",
          "group-hover:drop-shadow-[0_0_14px_rgba(239,68,68,0.9)]",
          "group-hover:text-red-300",
        ].join(" ")
      : type === "conclusion"
      ? [
          "text-amber-300 italic",
          "drop-shadow-[0_0_10px_rgba(217,119,6,0.65)]",
          "group-hover:drop-shadow-[0_0_18px_rgba(217,119,6,0.9)]",
          "group-hover:text-amber-200",
          "text-center",
        ].join(" ")
        // ini normal
      : [
          "text-amber-200/80",
          "group-hover:text-amber-100",
        ].join(" "),

    // ini untuk hover efek pada semua tipe, teks jadi sedikit naik dan lebih terang saat dihover
    "transition-all duration-300",
  ].join(" ");

  // buat render / nampilin wrapper utama, label twilight jika ada, teks teka teki, dan efek hover untuk tipe special.
  return (
    <li className={wrapperClasses}>

      {/* ini buat label twilight, muncul di atas teks kalau isinya bukan null.*/}
      {twilight && (
        <span className={twilightClasses}>
          {twilight} Twilight
        </span>
      )}

      {/* ini buat teks teka tekinya, dengan styling dan efek glow yang berbeda berdasarkan tipe.*/}
      <p className={textClasses}>{text}</p>

      {/* ini buat efek hover khusus untuk tipe special, muncul garis merah di bawah teks pas dihover. */}
      {type === "special" && (
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-6 right-6 h-px
                     bg-gradient-to-r from-transparent via-red-700/50 to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}
    </li>
  );
};

export default EpitaphLine;
