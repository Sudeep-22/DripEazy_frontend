import Image from "next/image";

type ProductProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-gray-600">₹{product.price}</p>
      </div>
    </div>
  );
}