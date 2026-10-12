"use client";
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function CartSidebar() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const adminWhatsApp = "6281563142041";

  // Mencegah klik tembus ke belakang
  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    setIsCheckingOut(true);
    
    let itemsText = cartItems.map((item, index) => 
      `${index + 1}. ${item.name} (${item.size}) - ${item.quantity}x`
    ).join('\n');

    const totalFormatted = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(cartTotal);

    const message = `Halo BatiQyunik, saya ingin memproses pesanan di keranjang saya:
    
*Daftar Pesanan:*
${itemsText}

*Subtotal:* ${totalFormatted}

Mohon panduan selanjutnya untuk pengisian data pengiriman dan pembayaran. Terima kasih.`;

    const waUrl = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    
    // Opsional: Kosongkan keranjang setelah checkout? (Tergantung preferensi)
    // clearCart(); 
    
    setTimeout(() => setIsCheckingOut(false), 1000);
  };

  return (
    <>
      {/* Background Overlay Hitam */}
      <div 
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Laci Keranjang Putih */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out translate-x-0 overflow-hidden">
        
        {/* Header Laci */}
        <div className="flex justify-between items-center p-6 border-b border-gold-600/20 bg-[#f3efc2]/30">
          <h2 className="font-serif text-xl text-navy-950 flex items-center gap-2">
            <ShoppingBag size={20} className="text-gold-600" /> Tas Belanja Saya
          </h2>
          <button onClick={closeCart} className="text-navy-950 hover:text-red-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Isi Keranjang */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-navy-800/60 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>Keranjang Anda masih kosong.</p>
              <button onClick={closeCart} className="mt-4 border border-gold-600 text-gold-600 px-6 py-2 uppercase text-xs tracking-widest hover:bg-gold-600 hover:text-white transition-colors">
                Mulai Belanja
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-gray-100">
                  <div className="w-20 h-24 bg-gray-100 shrink-0 border border-gold-600/10">
                    <img src={`/${item.image}`} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-navy-950 line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-navy-800/70 mt-1 uppercase">Ukuran: {item.size}</p>
                      <p className="text-sm text-gold-600 font-medium mt-1">
                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-gray-200">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-100 text-navy-800"><Minus size={14} /></button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-100 text-navy-800"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 text-xs flex items-center gap-1 transition-colors">
                        <Trash2 size={14} /> Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Laci & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gold-600/20 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm uppercase tracking-wider text-navy-800">Subtotal</span>
              <span className="text-xl font-serif text-navy-950">
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(cartTotal)}
              </span>
            </div>
            
            <p className="text-[10px] text-navy-800/70 text-center mb-4 italic">
              Pengiriman dan metode pembayaran akan diproses via WhatsApp.
            </p>

            <button 
              onClick={handleWhatsAppCheckout}
              disabled={isCheckingOut}
              className="w-full bg-navy-950 text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-gold-600 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? "Memproses..." : "Checkout via WhatsApp"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}