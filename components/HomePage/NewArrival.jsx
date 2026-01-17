import { Button } from "@/components/ui/button";
import Link from "next/link";
import SmallProductCard from "../Products/SmallProductCard";

export default async function NewArrival() {
  const res = await fetch("http://localhost:3000/api/products");

  const products = await res.json();
  const newArrivals = products.products.slice(-4);

  return (
    <section className="space-y-8 container mx-auto p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            New Arrivals
          </h2>
          <p className="text-muted-foreground">
            Fresh picks just landed in store
          </p>
        </div>

        <Button variant="outline" asChild>
          <Link href="/products">View all</Link>
        </Button>
      </div>

      {/* Products */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {newArrivals.map((product) => (
          <SmallProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
