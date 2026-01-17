import SmallProductCard from "@/components/Products/SmallProductCard";
import { Suspense } from "react";

async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error("[ProductsPage] error: ", error);
  }
}
const ProductsPage = async () => {
  const { products } = await getProducts();
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-4 gap-4 py-4">
        {products?.map((product) => (
          <Suspense key={product?.id} fallback={<div>Loading...</div>}>
            <SmallProductCard product={product} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
