"use client";

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

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      <div className='inline-flex'>
        {text.split("").map((char, index) =>
          char === " " ? (
            <span key={`space-${index}`} className='inline-block w-4' />
          ) : (
            <span
              key={`char-${char}-${index}`}
              className={cn(
                "inline-block translate-y-4 opacity-0",
                "hover:animate-[leftToRight_0.8s_ease-out_forwards]",
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
    </div>
  );
};
