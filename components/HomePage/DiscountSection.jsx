import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DiscountSection({
  title = "Limited Time Offer",
  subtitle = "Special discount",
  description = "Get premium products at a reduced price. This offer is available for a short time only.",
  discount = "30% OFF",
  href = "/products",
  image,
  imageAlt = "Discount product",
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/90 to-primary text-primary-foreground">
      <div className="relative z-10 grid gap-8 p-8 md:grid-cols-2 md:items-center">
        {/* Left content */}
        <div className="space-y-4">
          <Badge variant="secondary" className="w-fit">
            {subtitle}
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>

          <p className="max-w-md text-primary-foreground/90">{description}</p>

          <div className="flex items-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href={href}>Shop now</Link>
            </Button>

            <span className="text-lg font-semibold">{discount}</span>
          </div>
        </div>

        {/* Right image */}
        <div className="relative mx-auto h-56 w-full max-w-sm overflow-hidden rounded-xl bg-background/10 backdrop-blur">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />

          {/* Discount badge overlay */}
          <div className="absolute right-3 top-3 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground shadow">
            {discount}
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
    </section>
  );
}
