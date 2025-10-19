"use client";

import lightImage from "@/assets/image/sig.jpg";
import { useIsClient } from "@/hooks/useIsClient";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

interface SideBarHeaderProps {
  className?: string;
}

export const SideBarImage = ({ className }: SideBarHeaderProps) => {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  // Only show image in light mode
  if (!isClient || resolvedTheme === "dark") return null;

  return (
    <div className={cn(className)}>
      {isClient && (
        <Image
          src={lightImage}
          alt='avatar'
          style={{
            objectFit: "cover",
          }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      )}
    </div>
  );
};
