import Banner from "@/components/HomePage/Banner";
import BrandPartners from "@/components/HomePage/BrandPartners";
import DiscountSection from "@/components/HomePage/DiscountSection";
import FaqSection from "@/components/HomePage/FaqSection";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import HowItWorks from "@/components/HomePage/HowItWorks";
import NewArrival from "@/components/HomePage/NewArrival";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <FeaturedProducts />
      <NewArrival />
      <div className="container mx-auto p-4 md:p-8">
        <DiscountSection
          title="Ergonomic Office Chair Sale"
          subtitle="Furniture deal"
          description="Upgrade your workspace with premium comfort at a special price."
          discount="40% OFF"
          href="/products/4"
          image="https://images.unsplash.com/photo-1748887522224-88528bd4bd5f"
          imageAlt="Ergonomic office chair"
        />
        <WhyChooseUs />
        {/* <BrandPartners /> */}
        <HowItWorks />
        <FaqSection />
      </div>
    </section>
  );
}
