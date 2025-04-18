"use client";

import darkImage from "@/assets/image/sig-dark.jpg";
import lightImage from "@/assets/image/sig.jpg";
import { useIsClient } from "@/hook/useIsClient";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

interface SideBarHeaderProps {
  className?: string;
}

export const SideBarHeader = ({ className }: SideBarHeaderProps) => {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  const image = resolvedTheme === "dark" ? darkImage : lightImage;

  return (
    <header className={cn(className)}>
      {isClient && (
        <Image
          src={image}
          alt="avatar"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      )}
    </header>
  );
};
