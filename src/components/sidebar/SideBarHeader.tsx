"use client";

import darkSig from "@/assests/image/sig dark.jpg";
import lightSig from "@/assests/image/sig.jpg";
import { useIsClient } from "@/hook";
import { useTheme } from "next-themes";
import Image from "next/image";

export const SideBarHeader = () => {
  const { theme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <header className="p-12">
        <Image
          src={lightSig}
          alt="avatar"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </header>
    );
  }

  const image = theme === "dark" ? darkSig : lightSig;

  return (
    <header className="p-12">
      <Image
        src={image}
        alt="avatar"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </header>
  );
};
