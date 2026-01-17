import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <section className="container mx-auto py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground mt-3">
          Find answers to common questions about our products and services.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Do I need an account to browse products?
          </AccordionTrigger>
          <AccordionContent>
            No, you can browse all products without creating an account. Login
            is only required for future features.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Are the products authentic?</AccordionTrigger>
          <AccordionContent>
            Yes, all listed products are curated and sourced from trusted
            brands.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I see product details before buying?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. Each product has a detailed page with images,
            descriptions, and pricing.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Do you offer discounts?</AccordionTrigger>
          <AccordionContent>
            Yes, selected items are available with special discounts and offers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
