import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
    </main>
  );
}
