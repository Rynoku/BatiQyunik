import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TentangKamiPage() {
  return (
    <main className="bg-[#f3efc2] min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-5xl text-navy-950 mb-6">Tentang BatiQyunik</h1>
          <div className="w-16 h-[2px] bg-gold-600 mx-auto mb-8"></div>
          <p className="text-navy-800 font-light max-w-2xl mx-auto leading-relaxed text-lg">
            Menjaga warisan budaya, merajut keanggunan Nusantara ke dalam setiap lembaran kain untuk menemani gaya hidup modern Anda.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative aspect-[4/5] bg-white p-3 md:p-4 border border-gold-600/20">
            {/* Foto Dummy: Nanti bisa diganti dengan foto proses membatik atau butik asli */}
            <img 
              src="/image/mamahh.jpg" 
              alt="Kisah BatiQyunik" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-600/10 -z-10 hidden md:block"></div>
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-navy-950">Kisah Kami</h2>
            <p className="text-navy-800 font-light leading-relaxed">
              BatiQyunik lahir dari kecintaan yang mendalam terhadap seni tradisional Indonesia. Kami percaya bahwa batik bukan sekadar pakaian, melainkan kanvas yang bercerita tentang sejarah, filosofi, dan identitas bangsa.
            </p>
            <p className="text-navy-800 font-light leading-relaxed">
              Berpusat di wilayah Jawa Barat, kami berdedikasi untuk menciptakan busana premium yang memadukan keindahan motif klasik dengan potongan yang relevan untuk masa kini. Setiap potong pakaian kami dikerjakan dengan ketelitian tingkat tinggi, menghadirkan karya seni yang bisa Anda kenakan setiap hari dengan penuh kebanggaan.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white border border-gold-600/20 p-10 md:p-16 mb-24 text-center">
          <h2 className="font-serif text-3xl text-navy-950 mb-16">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-16 h-16 border-2 border-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600 font-serif text-2xl group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">1</div>
              <h3 className="text-navy-950 font-medium uppercase tracking-widest text-sm mb-4">Kualitas Premium</h3>
              <p className="text-navy-800/80 font-light text-sm leading-relaxed max-w-xs mx-auto">Hanya menggunakan material terbaik dengan jahitan presisi untuk kenyamanan dan keawetan maksimal.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 border-2 border-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600 font-serif text-2xl group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">2</div>
              <h3 className="text-navy-950 font-medium uppercase tracking-widest text-sm mb-4">Warisan Budaya</h3>
              <p className="text-navy-800/80 font-light text-sm leading-relaxed max-w-xs mx-auto">Melestarikan motif dan teknik tradisional agar pesonanya tetap hidup di tengah arus modernisasi.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 border-2 border-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600 font-serif text-2xl group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">3</div>
              <h3 className="text-navy-950 font-medium uppercase tracking-widest text-sm mb-4">Karya Lokal</h3>
              <p className="text-navy-800/80 font-light text-sm leading-relaxed max-w-xs mx-auto">Berkomitmen mendukung dan memberdayakan komunitas perajin lokal dalam setiap proses produksi.</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center bg-navy-950 p-12 md:p-20 text-white">
          <h2 className="font-serif text-3xl mb-6">Jadilah Bagian dari Cerita Kami</h2>
          <p className="font-light text-white/80 mb-10 max-w-lg mx-auto">
            Temukan koleksi eksklusif kami dan bawa pulang sepotong kebanggaan Nusantara.
          </p>
          <Link href="/koleksi" className="inline-block bg-gold-600 text-navy-950 px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300">
            Jelajahi Koleksi
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}