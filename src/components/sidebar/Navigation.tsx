"use client";

import navItems from "@/components/sidebar/navItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        // Responsive sticky/fixed navigation
        "bg-background/80 backdrop-blur z-50",
        "fixed bottom-0 left-0 right-0 w-full md:static md:sticky md:top-8 md:w-auto",
        className,
      )}
    >
      {navItems.map((item) => {
        const isActive =
          pathname === item.link || (pathname === "/" && item.link === "./");

        return (
          <li className="pb-5 pt-0" key={item.title}>
            <Link
              className={cn(
                "transition-all duration-200",
                isActive
                  ? "font-extrabold text-primary blur-[1px]"
                  : "font-bold hover:font-normal hover:text-secondary",
              )}
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Navigation };
