import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductHero } from "@/components/products/ProductHero";
import { ProductGrid } from "@/components/products/ProductGrid";

export function ProductListingPage() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-6 sm:space-y-12">
        <ProductHero />
        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}
