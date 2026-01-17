import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-muted/40" />

      <div className="relative container mx-auto grid grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 md:px-12 md:py-20">
        {/* Left content */}
        <div className="flex flex-col justify-center space-y-6">
          <span className="w-fit rounded-full border bg-muted px-4 py-1 text-sm font-medium text-muted-foreground">
            New Collection 2026
          </span>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Elevate Your{" "}
            <span className="text-primary">Everyday Experience</span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            Discover thoughtfully designed products crafted for comfort,
            performance, and modern living.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button size="lg">Shop Now</Button>
            <Button size="lg" variant="outline">
              Explore Categories
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex items-center justify-end">
          <div className="relative h-72 w-full max-w-md overflow-hidden rounded-xl shadow-xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6"
              alt="Featured product"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
