import { Instagram, Facebook, ShoppingBag, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f3efc2] border-t border-gold-600/20 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-4">
          <a href="/" className="font-serif text-2xl tracking-widest text-navy-950 font-bold block mb-6">
            Bati<span className="text-gold-600">Qyu</span>nik
          </a>
          <p className="text-navy-800 font-light text-sm leading-relaxed pr-6">
            Menghadirkan keanggunan warisan Nusantara dalam potongan eksklusif untuk gaya hidup modern. Temukan keindahan sejati dalam setiap lembaran kain.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-navy-950 font-serif text-lg mb-6">Navigasi</h4>
          <ul className="space-y-4 text-sm text-navy-800 font-light">
            <li><a href="/" className="hover:text-gold-500 transition-colors">Beranda</a></li>
            <li><a href="/koleksi" className="hover:text-gold-500 transition-colors">Koleksi</a></li>
            <li><a href="/tentang-kami" className="hover:text-gold-500 transition-colors">Tentang Kami</a></li>
            <li><a href="/panduan-ukuran" className="hover:text-gold-500 transition-colors">Panduan Ukuran</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-navy-950 font-serif text-lg mb-6">Hubungi Kami</h4>
          <ul className="space-y-4 text-sm text-navy-800 font-light">
            <li className="flex items-start gap-3 group">
              <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <a href="https://maps.app.goo.gl/vxW9167guqUWrWVM7" target="_blank" rel="noopener noreferrer" className="hover:text-gold-600 transition-colors cursor-pointer">Bandung, Jawa Barat, Indonesia</a>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone size={18} className="text-gold-500 shrink-0 group-hover:scale-110 transition-transform" />
              <a href="https://wa.me/6281563142041" target="_blank" rel="noopener noreferrer" className="hover:text-gold-600 transition-colors cursor-pointer">+62 815 6314 2041</a>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail size={18} className="text-gold-500 shrink-0 group-hover:scale-110 transition-transform" />
              <a href="mailto:batiqyunik@gmail.com" className="hover:text-gold-600 transition-colors cursor-pointer">batiqyunik@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-navy-950 font-serif text-lg mb-6">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/batiqyunik/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold-600/30 flex items-center justify-center text-navy-800 hover:text-gold-600 hover:border-gold-600 transition-all duration-300">
              <Instagram size={16} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100046379993190" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold-600/30 flex items-center justify-center text-navy-800 hover:text-gold-600 hover:border-gold-600 transition-all duration-300">
              <Facebook size={16} />
            </a>
            <a href="https://shopee.co.id/batiqyunik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold-600/30 flex items-center justify-center text-navy-800 hover:text-gold-600 hover:border-gold-600 transition-all duration-300">
              <ShoppingBag size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gold-600/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-navy-800/80 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} BatiQyunik. Hak Cipta Dilindungi.
        </p>
        <div className="flex gap-6 text-navy-800/80 text-xs tracking-wider">
          <a href="#" className="hover:text-gold-500 transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-gold-500 transition-colors">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}