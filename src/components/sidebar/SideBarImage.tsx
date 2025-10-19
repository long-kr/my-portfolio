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

  const src =
    resolvedTheme === "light"
      ? lightImage
      : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  return (
    <div className={cn(className)}>
      {isClient && (
        <Image
          src={src}
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
