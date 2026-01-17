import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { ToggleTheme } from "../ToogleTheme";
import { isUserAuthenticated } from "@/actions/auth.action";
import LogoutBtn from "./LogoutBtn";

export default async function Navbar() {
  const loggedIn = await isUserAuthenticated();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          ComNex<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <ToggleTheme />
          {loggedIn ? (
            <LogoutBtn />
          ) : (
            <Button asChild>
              <Link href={"/login"}>Sign In</Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu (Client Only) */}
        <MobileMenu />
      </div>
    </header>
  );
}
