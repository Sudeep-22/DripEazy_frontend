import ProductCard from "@/components/product/ProductCard";

export default function ProductsPage() {
  const dummyProducts = [
    { id: 1, name: "Graphic T-Shirt", price: 999, image: "/tshirt.jpg" },
    { id: 2, name: "Leather Jacket", price: 4999, image: "/leather.jpg" },
  ];

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}