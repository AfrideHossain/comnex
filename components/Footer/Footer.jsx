import Link from "next/link";
import { Github, Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-6 md:px-6">
        {/* ================= TOP ROW ================= */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold tracking-tight">
              ComNex<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Connecting communities through seamless commerce solutions.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition"
            >
              About
            </Link>
          </nav>

          {/* Social / Contact */}
          <div className="flex items-center gap-4">
            <Link
              href="mailto:support@reflect.app"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="mt-6 flex flex-col gap-2 border-t pt-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Reflect. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-muted-foreground">
            Built with <Heart className="h-4 w-4 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
