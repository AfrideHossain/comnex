
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export default function SmallProductCard({ product }) {
  const { id, name, category, price, currency, description, image } = product;

  return (
    // <Link href={`/products/${id}`}>
    <Card
      className={cn(
        "max-w-sm w-full overflow-hidden rounded-xl border shadow-lg transition hover:shadow-2xl hover:scale-102 duration-300"
      )}
    >
      <CardHeader>
        <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden rounded-xl">
          <Image
            src={`${image}`}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
            unoptimized
          />
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <p className="text-xs uppercase text-muted-foreground mb-1">
          {category}
        </p>

        <CardTitle className="text-lg md:text-xl font-semibold truncate">
          {name}
        </CardTitle>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        <p className="mt-4 font-bold text-primary">
          {currency} {price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className={"justify-end"}>
        <Button asChild>
          <Link href={`/products/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
    // </Link>
  );
}
