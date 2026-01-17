import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

async function getProduct(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await res.json();
    return data.product;
  } catch (error) {
    console.error("[SingleProductPage] error: ", error);
  }
}

export default async function SingleProductPage({ params }) {
  let { id } = await params;
  const product = await getProduct(id);

  return (
    <section className="container mx-auto px-4 py-12">
      <Card className="max-w-5xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <CardHeader className="">
            <div className="relative h-95 w-full rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </CardHeader>

          {/* Content */}
          <CardContent className="p-8 flex flex-col justify-center">
            <div className="space-y-2">
              <Badge variant="secondary">{product.category}</Badge>

              <CardTitle className="text-3xl">{product.name}</CardTitle>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <Separator />

              <div className="text-2xl font-semibold">
                {product.currency} {product.price.toFixed(2)}
              </div>
            </div>

            <Button size="lg" className="mt-8 w-fit">
              Add to Cart
            </Button>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
