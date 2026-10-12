import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ProductCatalog from "@/components/ProductCatalog";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3efc2] overflow-hidden">
      <Navbar />
      <Hero />
      <FadeIn>
        <BrandStory />
      </FadeIn>
      <FadeIn delay={100}>
        <ProductCatalog />
      </FadeIn>
      <Footer />
    </main>
  );
}