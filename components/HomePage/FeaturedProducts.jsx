import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import SmallProductCard from "../Products/SmallProductCard";

const FeaturedProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  const products = await res.json();
  const featuredProducts = products.products.slice(4, 8);
  return (
    <section className="space-y-8 container mx-auto p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured Products
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
        {featuredProducts.map((product) => (
          <SmallProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
