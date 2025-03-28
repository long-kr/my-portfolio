"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItem {
  title: string;
  link: string;
}

interface NavigationProps {
  navItems: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2 text-sm font-medium",
            pathname === item.link
              ? "bg-accent text-accent-foreground"
              : "transparent",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
