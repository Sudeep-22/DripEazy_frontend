import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";


export default function Home() {
  const dummyProducts = [
      { id: 1, name: "Denim Jacket", price: 2999, image: "/jacket.jpg" },
      { id: 2, name: "White Sneakers", price: 1999, image: "/sneakers.jpg" },
    ];

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
