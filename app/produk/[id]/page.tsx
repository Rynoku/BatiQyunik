"use client";
import { useState, useEffect } from "react";
import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const { addToCart } = useCart();

  // Interactivity States
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState("");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    nama: "",
    pengiriman: "Kirim ke Alamat",
    alamat: "",
    pembayaran: ""
  });

  // Nomor WA Admin Perusahaan (Ganti dengan nomor asli nanti, gunakan format 62...)
  const adminWhatsApp = "6281563142041";

  // Fungsi untuk handle submit ke WhatsApp
  const handleCheckoutWA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSize) {
      alert("Mohon pilih ukuran terlebih dahulu.");
      return;
    }

    const message = `Halo BatiQyunik, saya ingin memesan:
*Detail Pesanan*
• Produk: ${product.name}
• Ukuran: ${selectedSize}
• Harga: ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(product.price)}

*Data Pemesan*
• Nama: ${formData.nama}
• Pengiriman: ${formData.pengiriman}
${formData.pengiriman === 'Kirim ke Alamat' ? `• Alamat Lengkap: ${formData.alamat}\n` : ''}• Metode Pembayaran: ${formData.pembayaran}

Mohon informasi selanjutnya untuk proses pembayaran. Terima kasih.`;

    const waUrl = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const handleCustomizationWA = () => {
    const msg = `Halo BatiQyunik, saya ingin konsultasi mengenai kustomisasi ukuran/model untuk produk *${product.name}*.`;
    window.open(`https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="bg-[#f3efc2] min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <div className="text-xs uppercase tracking-widest text-navy-800/60 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gold-600 transition-colors">Beranda</Link>
          <span>/</span>
          <Link href={`/koleksi?kategori=${product.category[0]}`} className="hover:text-gold-600 transition-colors">{product.category[0]}</Link>
          <span>/</span>
          <span className="text-navy-950 truncate max-w-[200px] md:max-w-none">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Kolom Kiri: Galeri Produk */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-white border border-gold-600/20 p-2 md:p-4 transition-all duration-500">
              {product.badge && (
                <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-md border border-gold-600 text-gold-600 text-[10px] px-4 py-2 tracking-[0.2em] uppercase">
                  {product.badge}
                </div>
              )}
              <img 
                src={`/${selectedImage}`} 
                alt={product.name} 
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            
            {/* Thumbnail Galeri */}
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((imgSrc, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImage(imgSrc)}
                  className={`aspect-[3/4] cursor-pointer border-2 transition-all duration-300 ${selectedImage === imgSrc ? 'border-gold-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={`/${imgSrc}`} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Informasi & Checkout */}
          <div className="flex flex-col">
            <p className="text-gold-600 text-xs uppercase tracking-[0.3em] font-medium mb-4">
              {product.category.join(' • ')}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-navy-950 leading-tight mb-6">
              {product.name}
            </h1>
            <p className="text-2xl text-navy-900 font-medium mb-6">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(product.price)}
            </p>

            <p className="text-navy-800 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="w-full h-[1px] bg-gold-600/20 mb-8"></div>

            {/* Pemilih Ukuran */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-widest text-navy-950 font-medium">Pilih Ukuran</span>
                <Link href="/panduan-ukuran" target="_blank" className="text-xs text-gold-600 underline hover:text-navy-950 transition-colors">
                  Detail Ukuran
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${selectedSize === size ? 'bg-gold-600 border-gold-600 text-navy-950 font-bold' : 'border-gold-600/30 text-navy-800 hover:border-gold-600'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Aksi Pembelian */}
            {!showCheckoutForm ? (
              <div className="flex flex-col gap-4 mb-10">
                <button 
                  onClick={() => {
                    if (!selectedSize) alert("Mohon pilih ukuran terlebih dahulu.");
                    else setShowCheckoutForm(true);
                  }}
                  className="w-full bg-navy-950 text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-gold-600 transition-colors duration-300"
                >
                  Beli Sekarang
                </button>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      if (!selectedSize) alert("Mohon pilih ukuran terlebih dahulu.");
                      else {
                        addToCart({
                          id: `${product.id}-${selectedSize}`,
                          productId: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          size: selectedSize,
                          quantity: 1
                        });
                      }
                    }}
                    className="flex-1 border border-navy-950 text-navy-950 py-4 uppercase tracking-widest text-xs font-medium hover:bg-navy-950 hover:text-white transition-all duration-300"
                  >
                    Tambah Keranjang
                  </button>
                  <button 
                    onClick={handleCustomizationWA}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-[#128C7E] transition-all duration-300"
                  >
                    <MessageCircle size={16} /> Kustomisasi (WA)
                  </button>
                </div>
              </div>
            ) : (
              /* Formulir Checkout Langsung */
              <div className="bg-white border border-gold-600/30 p-6 mb-10 animate-fade-in-up">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                  <h3 className="font-serif text-xl text-navy-950">Detail Pengiriman</h3>
                  <button onClick={() => setShowCheckoutForm(false)} className="text-xs text-red-500 hover:underline">Batal</button>
                </div>
                
                <form onSubmit={handleCheckoutWA} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-navy-800 mb-2">Nama Pemesan</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.nama}
                      onChange={(e) => setFormData({...formData, nama: e.target.value})}
                      className="w-full border border-gray-200 p-3 text-sm focus:border-gold-600 focus:outline-none bg-gray-50/50" 
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-navy-800 mb-2">Metode Pengiriman</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 text-sm text-navy-900 cursor-pointer">
                        <input 
                          type="radio" 
                          checked={formData.pengiriman === "Kirim ke Alamat"}
                          onChange={() => setFormData({...formData, pengiriman: "Kirim ke Alamat"})}
                          className="text-gold-600 focus:ring-gold-600"
                        /> Kirim ke Alamat
                      </label>
                      <label className="flex items-center gap-2 text-sm text-navy-900 cursor-pointer">
                        <input 
                          type="radio" 
                          checked={formData.pengiriman === "Ambil di Tempat"}
                          onChange={() => setFormData({...formData, pengiriman: "Ambil di Tempat"})}
                          className="text-gold-600 focus:ring-gold-600"
                        /> Ambil di Tempat
                      </label>
                    </div>
                  </div>

                  {formData.pengiriman === "Kirim ke Alamat" ? (
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy-800 mb-2">Alamat Lengkap</label>
                      <textarea 
                        required 
                        value={formData.alamat}
                        onChange={(e) => setFormData({...formData, alamat: e.target.value})}
                        className="w-full border border-gray-200 p-3 text-sm focus:border-gold-600 focus:outline-none bg-gray-50/50 min-h-[100px]" 
                        placeholder="Jalan, RT/RW, Kecamatan, Kota, Kode Pos"
                      ></textarea>
                    </div>
                  ) : (
                    <div className="bg-[#f3efc2]/30 p-4 border border-gold-600/20">
                      <p className="text-xs uppercase tracking-wider text-navy-950 font-medium mb-1">Lokasi Pengambilan (BatiQyunik):</p>
                      <p className="text-sm text-navy-800 leading-relaxed">
                        Kp. Ciwaru No.1 RT.001/RW.016<br />
                        Desa Soreang, Kec. Soreang, Kabupaten Bandung<br />
                        Jawa Barat 40911
                      </p>
                      <p className="text-[10px] text-navy-800/70 mt-2 italic">*Mohon konfirmasi jam kedatangan via WhatsApp.</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-navy-800 mb-2">Metode Pembayaran</label>
                    <select 
                      required 
                      value={formData.pembayaran}
                      onChange={(e) => setFormData({...formData, pembayaran: e.target.value})}
                      className="w-full border border-gray-200 p-3 text-sm focus:border-gold-600 focus:outline-none bg-gray-50/50"
                    >
                      <option value="" disabled>Pilih metode pembayaran...</option>
                      <option value="Transfer Bank">Transfer Bank (BCA / Mandiri)</option>
                      <option value="QRIS">QRIS</option>
                    </select>
                  </div>

                  <div className="bg-[#f3efc2]/50 p-4 border border-gold-600/20 mt-4">
                    <p className="text-xs text-navy-800 leading-relaxed italic">
                      Pesanan ini akan diarahkan ke WhatsApp admin kami. Jika ada perubahan pesanan atau kendala pembayaran, Anda bisa langsung berdiskusi di obrolan tersebut.
                    </p>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 bg-navy-950 text-white py-4 uppercase tracking-widest text-xs font-medium hover:bg-gold-600 transition-colors duration-300 mt-2"
                  >
                    <MessageCircle size={16} /> Lanjut ke WhatsApp
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}