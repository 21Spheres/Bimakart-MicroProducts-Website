import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
        />
      ))}
    </section>
  );
}
