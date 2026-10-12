import { products } from "@/lib/data";
import ProductClient from "./ProductClient";

// Fungsi ini menyetorkan semua daftar ID produk ke sistem Next.js saat build
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Komponen utama ini sekadar memanggil kodingan tampilanmu yang lama
export default function Page({ params }: { params: { id: string } }) {
  return <ProductClient params={params} />;
}