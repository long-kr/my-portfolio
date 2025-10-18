"use client";

import { useIsClient } from "@/hooks";
import { cn } from "@/lib";
import { useTheme } from "next-themes";

export default function TrollSection() {
  const isClient = useIsClient();
  const { theme } = useTheme();

  const text = "No Dark Mode Allowed!";

  if (isClient && theme === "dark")
    return (
      <div className='text-center hover:cursor-none'>
        {text.split(" ").map((word) => (
          <span key={word} className='px-1'>
            {word.split("").map((char, index) => (
              <span
                key={index}
                className={cn(
                  "p-1 text-8xl font-bold text-primary",
                  "inline-block transition delay-500 hover:animate-[leftToRight_1s_ease-out_forwards]",
                )}
              >
                {char}
              </span>
            ))}{" "}
          </span>
        ))}
      </div>
    );

  return null;
}
