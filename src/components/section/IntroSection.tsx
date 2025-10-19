"use client";

import { appData } from "@/config";
import { useIsClient } from "@/hooks";
import { cn } from "@/lib";
import { useTheme } from "next-themes";
import { AnimatedText } from "../ui";

export default function IntroSection() {
  const isClient = useIsClient();
  const { theme } = useTheme();

  const text = "No Dark Mode Allowed!";

  return (
    <section className='min-h-dvh'>
      <div className='flex min-h-dvh flex-wrap items-center justify-center'>
        {isClient && theme === "dark" ? (
          // Animated "No Dark Mode Allowed!" text
          text.split(" ").map((word) => (
            <span key={word} className='px-1 hover:cursor-none'>
              {word.split("").map((char, index) => (
                <span
                  key={index}
                  className={cn(
                    "p-1 text-9xl font-bold text-primary",
                    "inline-block transition delay-500 hover:animate-[leftToRight_0.8s_ease-out_forwards]",
                  )}
                >
                  {char}
                </span>
              ))}{" "}
            </span>
          ))
        ) : (
          <h1 className='text-2xl font-bold sm:text-4xl md:text-6xl'>
            Hi!{" "}
            <AnimatedText
              text={`I'm ${appData.name}`}
              className='relative inline-block'
              delay={0.1}
            />
          </h1>
        )}
      </div>
    </section>
  );
}
