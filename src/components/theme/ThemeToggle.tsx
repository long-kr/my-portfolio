"use client";

import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className }: Readonly<{ className?: string }>) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("fixed bottom-4 right-4 z-50", className)}>
      <Button
        variant='ghost'
        size='sm'
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className='w-9 px-0'
      >
        <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:scale-125 dark:-rotate-90 dark:scale-0' />
        <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-white transition-all dark:rotate-0 dark:scale-100 dark:hover:scale-125' />
        <span className='sr-only'>Toggle theme</span>
      </Button>
    </div>
  );
}
