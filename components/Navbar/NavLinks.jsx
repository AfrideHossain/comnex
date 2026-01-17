import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function NavLinks({ onClick, className = "" }) {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ${className}`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
