"use client";
import { useState } from "react";
import { products, Category } from "@/lib/data";
import Link from "next/link";

const categories: Category[] = ['Semua', 'Pria', 'Wanita', 'Kebaya', 'Gamis'];

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<Category>('Semua');

  const filteredProducts = activeTab === 'Semua'
    ? products
    : products.filter(p => p.category.includes(activeTab));

  // Grid di Homepage selalu dibatasi maksimal 8 produk
  const displayedProducts = filteredProducts.slice(0, 8);

  return (
    <section id="katalog" className="py-32 bg-[#f3efc2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-navy-950 mb-6">Koleksi Unggulan</h2>
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
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
                {/* Hover Overlay */}
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

        {/* Action Button: Navigasi ke Halaman Koleksi Penuh */}
        {filteredProducts.length > 8 && (
          <div className="mt-16 flex justify-center">
            <Link
              href={`/koleksi?kategori=${activeTab}`}
              className="group relative px-10 py-4 border border-gold-600 text-navy-950 uppercase tracking-widest text-xs font-medium overflow-hidden transition-all duration-500 hover:text-white inline-block"
            >
              <span className="absolute inset-0 w-full h-full bg-gold-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10 flex items-center gap-2">
                Tampilkan Semua Koleksi
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}