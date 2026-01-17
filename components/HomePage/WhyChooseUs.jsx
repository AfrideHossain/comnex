import { ShieldCheck, BadgeCheck, Truck, Wallet } from "lucide-react";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Quality Products",
    description: "Carefully selected items that meet high quality standards.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Brands",
    description:
      "We only showcase products from reliable and reputable brands.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description: "Smooth logistics ensuring timely product delivery.",
  },
  {
    icon: Wallet,
    title: "Fair Pricing",
    description: "Competitive prices with no hidden costs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
          <p className="mt-3 text-muted-foreground">
            We focus on quality, reliability, and a seamless shopping
            experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-background p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
