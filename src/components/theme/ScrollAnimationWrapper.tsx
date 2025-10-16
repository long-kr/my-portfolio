"use client";

import { useEffect, useRef } from "react";

type ScrollAnimationWrapperProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  id?: string;
};

/**
 * A component that adds scroll-triggered animations to its children
 * Uses Intersection Observer to add/remove the 'animate' class
 */
export const ScrollAnimationWrapper = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "-100px",
  id,
}: ScrollAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold, rootMargin },
    );

    const currentRef = ref.current;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`scroll-animation ${className}`} id={id}>
      {children}
    </div>
  );
};
