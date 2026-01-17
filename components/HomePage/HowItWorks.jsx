import { ShoppingBag, Search, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Products",
    description:
      "Explore a wide range of curated products across multiple categories.",
  },
  {
    icon: ShoppingBag,
    title: "Select Your Item",
    description:
      "Choose the product that fits your needs with transparent pricing.",
  },
  {
    icon: CreditCard,
    title: "Easy Checkout",
    description:
      "Simple and secure checkout process with no unnecessary steps.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Get your products delivered quickly and reliably to your doorstep.",
  },
];

export default function HowItWorks() {
  return (
    <section className="container mx-auto py-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
        <p className="text-muted-foreground mt-3">
          A simple and seamless process from browsing to delivery.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center p-6 rounded-xl border bg-background hover:shadow-md transition"
            >
              {/* Step number */}
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-semibold">
                {index + 1}
              </span>

              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
