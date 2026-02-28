/**
  footer.jsx 
  
  isinya komponen yang menampilkan kutipan penutup dan atribusi, dengan dekorasi garis horizontal dan simbol yang konsisten dengan tema.
  Komponen ini menggunakan Tailwind CSS untuk styling, dengan fokus pada estetika yang gelap
  dan misterius sesuai tema "The Golden Witch's Epitaph".
 */


const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-3 py-10 px-6
                       border-t border-amber-900/20"> 

      {/* garis horizontal dekoratif dengan gradasi warna amber */}
      <div className="flex items-center gap-3 w-full max-w-xs">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-900/40" />
        <span className="text-amber-700/50 text-sm select-none">❦</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-900/40" />
      </div>

      {/* kutipan penutup dengan font Playfair, warna amber gelap, dan efek glow yang sangat halus */}
      <p className="font-playfair text-amber-900/60 text-xs italic tracking-widest text-center">
        "Without love, the truth cannot be seen."
      </p>

      {/* atribusi dengan font Cinzel, warna amber gelap, dan spasi huruf yang lebar */}
      <p className="font-cinzel text-amber-900/40 text-[10px] tracking-[0.3em] uppercase text-center mt-1">
        Umineko no Naku Koro ni · When the Seagulls Cry
      </p>
    </footer>
  );
};

export default Footer;
