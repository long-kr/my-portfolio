"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({
  text,
  className,
  delay = 0.1,
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <div className="inline-flex">
        {text.split("").map((char, index) =>
          char === " " ? (
            <span key={`space-${index}`} className="inline-block w-4" />
          ) : (
            <span
              key={`char-${char}-${index}`}
              className={cn(
                "inline-block translate-y-4 text-neutral-900 opacity-0 dark:text-primary",
                isVisible && "animate-[fadeInUp_0.5s_ease-out_forwards]",
              )}
              style={{
                animationDelay: `${index * delay}s`,
              }}
            >
              {char}
            </span>
          ),
        )}
      </div>
      <span className="via-primary/80 absolute -bottom-2 left-0 h-1 w-full animate-[width_2s_ease-in-out_infinite] bg-gradient-to-r from-primary to-primary" />
    </div>
  );
};
