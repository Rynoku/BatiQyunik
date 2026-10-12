export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Luxury Fashion Aesthetic */}
      <div className="absolute inset-0 z-0">
        {/* Gambar pertama (LCP) wajib eager load agar langsung muncul saat web dibuka */}
        <img
          src="https://images.unsplash.com/photo-1610992015732-2449b0849ed3?q=80&w=2000&auto=format&fit=crop"
          alt=""
          loading="eager"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f3efc2]/50 via-[#f3efc2]/60 to-[#f3efc2]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <h1 className="font-serif text-5xl md:text-7xl text-navy-950 mb-6 leading-tight drop-shadow-lg">
          Keanggunan Warisan Nusantara <br />
          <span className="text-gold-600 italic font-light">Dalam Sentuhan Modern</span>
        </h1>
        <p className="text-navy-800 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
          Menghadirkan keunikan motif tradisional Indonesia dengan potongan eksklusif untuk gaya hidup masa kini.
        </p>
        <a
          href="#katalog"
          className="inline-block px-10 py-4 border border-gold-600 text-gold-500 uppercase tracking-widest text-sm hover:bg-gold-600 hover:text-navy-950 transition-all duration-300"
        >
          Jelajahi Koleksi
        </a>
      </div>
    </section>
  );
}