"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, Category } from "@/lib/data";

const categories: Category[] = ['Semua', 'Pria', 'Wanita', 'Kebaya', 'Gamis'];

function KoleksiContent() {
  const searchParams = useSearchParams();
  const kategoriQuery = searchParams.get("kategori") as Category;
  
  const [activeTab, setActiveTab] = useState<Category>('Semua');

  // Menangkap parameter dari URL (misal: /koleksi?kategori=Wanita)
  useEffect(() => {
    if (kategoriQuery && categories.includes(kategoriQuery)) {
      setActiveTab(kategoriQuery);
    }
  }, [kategoriQuery]);

  const filteredProducts = activeTab === 'Semua'
    ? products
    : products.filter(p => p.category.includes(activeTab));

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-serif text-3xl md:text-4xl text-navy-950 mb-6">Semua Koleksi</h1>
        <div className="w-16 h-[2px] bg-gold-600 mx-auto"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-none text-xs uppercase tracking-widest transition-all duration-300 ${
              activeTab === cat
                ? 'bg-gold-600 text-navy-950 font-medium'
                : 'bg-transparent text-navy-800 hover:text-navy-950 border border-gold-600/30 hover:border-gold-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid - Menampilkan SEMUA produk tanpa dibatasi 8 foto */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative bg-white border border-gold-600/20 overflow-hidden hover:border-gold-600/80 transition-colors duration-500 cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden relative">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md border border-gold-600 text-gold-600 text-[10px] px-3 py-1 tracking-[0.2em] uppercase">
                  {product.badge}
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Link href={`/produk/${product.id}`} className="bg-gold-600 text-navy-950 px-6 py-3 uppercase tracking-widest text-xs font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Lihat Detail
                </Link>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-navy-800/70 text-[10px] uppercase tracking-widest mb-3">{product.category}</p>
              <h3 className="text-navy-950 font-serif text-base mb-3 line-clamp-1 group-hover:text-gold-600 transition-colors">{product.name}</h3>
              <p className="text-navy-900 font-medium text-sm">
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KoleksiPage() {
  return (
    <main className="bg-[#f3efc2]">
      <Navbar />
      <Suspense fallback={<div className="h-screen flex items-center justify-center text-navy-950">Memuat Koleksi...</div>}>
        <KoleksiContent />
      </Suspense>
      <Footer />
    </main>
  );
}