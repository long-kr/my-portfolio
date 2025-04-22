"use client";

import navItems from "@/components/sidebar/navItems";
import { useIsClient } from "@/hooks/useIsClient";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const isClient = useIsClient();

  const ref = useRef<HTMLDivElement>(null);
  const initialHeight = useRef<number | null>(null);

  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (ref.current && isClient) initialHeight.current = ref.current.offsetTop;
  }, [isClient]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || !initialHeight.current) return;

      if (initialHeight.current < window.scrollY) {
        setIsOnScreen(true);
      } else {
        setIsOnScreen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, initialHeight]);

  return (
    <div
      ref={ref}
      className={cn(
        "px-5 lg:mx-auto lg:w-2/5 lg:p-0",
        // Responsive sticky/fixed navigation
        "lg:sticky lg:top-10",
        isOnScreen ? "fixed top-0 z-10" : "",
        className,
      )}
    >
      <ul className="flex flex-row justify-between sm:justify-evenly lg:flex-col">
        {navItems.map((item) => (
          <li className="pb-5 pt-0" key={item.title}>
            <Link
              className={cn(
                "font-bold transition-all duration-200 hover:font-normal hover:text-secondary",
              )}
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navigation };
