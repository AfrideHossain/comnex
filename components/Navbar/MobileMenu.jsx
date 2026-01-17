"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "./NavLinks";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72 px-4">
        <SheetTitle className={"hidden"}>Menu</SheetTitle>
        <nav className="mt-10 flex flex-col gap-6">
          <NavLinks />
        </nav>

        <div className="mt-10 flex flex-col gap-3">
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
