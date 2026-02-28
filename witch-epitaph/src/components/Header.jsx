/**
  header.jsx 
  
  isinya komponen yang menampilkan judul utama halaman, dekorasi ornamen, dan subjudul.
  Komponen ini menggunakan Tailwind CSS untuk styling, dengan fokus pada estetika yang gelap
  dan misterius sesuai tema "The Golden Witch's Epitaph".
 */

const Header = () => {
  return (
    <header className="relative flex flex-col items-center pt-16 pb-10 px-6 overflow-hidden">
      
      {/* 2 lingkaran besar dengan warna amber gelap dan efek blur ditempatkan di sudut kiri atas dan kanan atas */}
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96
                   rounded-full bg-amber-900/20 blur-3xl"
      />
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96
                   rounded-full bg-amber-900/20 blur-3xl"
      />

      {/* dekor bintang emas di atas judul */}

      <div className="flex items-center gap-4 mb-6">
        <span className="text-amber-600/60 text-2xl select-none">✦</span>
        <span className="text-amber-600/40 text-lg select-none">✦</span>
        <span className="text-amber-600/20 text-sm select-none">✦</span>
      </div>

      {/* judul utama dengan font Cinzel, warna amber cerah, dan efek glow */}

      <h1
        className="font-cinzel text-amber-400 text-4xl sm:text-5xl md:text-6xl
                   text-center tracking-widest uppercase 
                   drop-shadow-[0_0_18px_rgba(217,119,6,0.55)]
                   transition-all duration-700" 
      >
        The Golden Witch's Epitaph
      </h1>

      {/* garis horizontal dekoratif dengan gradasi warna amber di bawah judul */}

      <div className="flex items-center gap-3 mt-6 w-full max-w-2xl">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600/70 to-amber-500/30" />
        <span className="text-amber-500 text-xl select-none">❧</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-600/70 to-amber-500/30" />
      </div> 


      {/* subjudul dengan font Playfair, warna amber terang, dan efek glow yang lebih halus */}

      <p
        className="font-playfair mt-5 text-amber-200/60 text-sm sm:text-base
                   italic tracking-widest text-center"
      >
        "Those who seek my gold, heed these words…"
      </p>

      {/* dekor bintang emas di bawah subjudul */}

      <div className="flex items-center gap-4 mt-6">
        <span className="text-amber-600/20 text-sm select-none">✦</span>
        <span className="text-amber-600/40 text-lg select-none">✦</span>
        <span className="text-amber-600/60 text-2xl select-none">✦</span>
        <span className="text-amber-600/40 text-lg select-none">✦</span>
        <span className="text-amber-600/20 text-sm select-none">✦</span>
      </div>
    </header>
  );
};

export default Header;
