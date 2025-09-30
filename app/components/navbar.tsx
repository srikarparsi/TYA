"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Podcast",
    href: "/podcast",
  },
  {
    name: "Get Involved",
    href: "/get-involved",
  },
  {
    name: "About",
    href: "/about",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Telugu Youth of America
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
