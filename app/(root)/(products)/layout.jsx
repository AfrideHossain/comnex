import Navbar from "@/components/Navbar/Navbar";
import "@/app/globals.css";
export default function ProductsLayout({ children }) {
  return (
    <section className="container mx-auto h-full">
      <div>{children}</div>
    </section>
  );
}
