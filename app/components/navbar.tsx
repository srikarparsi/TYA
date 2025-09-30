"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
    <div className="flex h-16 items-center justify-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                href={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
