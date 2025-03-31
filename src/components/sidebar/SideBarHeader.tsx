"use client";

import darkImage from "@/assests/image/sig dark.jpg";
import lightImage from "@/assests/image/sig.jpg";
import { useIsClient } from "@/hook/useIsClient";
import { useTheme } from "next-themes";
import Image from "next/image";

export const SideBarHeader = () => {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  const image = resolvedTheme === "dark" ? darkImage : lightImage;

  return (
    <header className="h-auto w-auto md:h-60 xl:p-12">
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
