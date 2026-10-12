"use client";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Semua Koleksi", href: "/koleksi" },
    { name: "Batik Pria", href: "/koleksi?kategori=Pria" },
    { name: "Batik Wanita", href: "/koleksi?kategori=Wanita" },
    { name: "Kebaya Premium", href: "/koleksi?kategori=Kebaya" },
    { name: "Gamis", href: "/koleksi?kategori=Gamis" },
  ];

  const navBackground = isHomepage 
    ? (isScrolled ? 'bg-[#f3efc2]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6')
    : 'bg-[#f3efc2] py-4 shadow-md';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/" className="font-serif text-2xl tracking-widest text-navy-950 font-bold">
            Bati<span className="text-gold-600">Qyu</span>nik
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-xs uppercase tracking-[0.2em] text-navy-800 hover:text-gold-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button onClick={openCart} className="text-navy-950 hover:text-gold-600 transition-colors relative">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-5">
          <button onClick={openCart} className="text-navy-950 relative">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-navy-950">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f3efc2] border-t border-gold-600/20 shadow-xl pb-4">
          <div className="flex flex-col px-6 py-4 space-y-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-sm uppercase tracking-wider text-navy-800 hover:text-gold-600">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}