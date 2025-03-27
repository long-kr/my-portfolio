"use client";

import { useClient } from "@/hook";
import { useTheme } from "next-themes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const SideBarHeader = ({
  lightImage,
  darkImage,
}: {
  lightImage: string | StaticImport;
  darkImage: string | StaticImport;
}) => {
  const isClient = useClient();
  const { resolvedTheme } = useTheme();

  let image;
  switch (resolvedTheme) {
    case "light":
      image = lightImage;
      break;
    case "dark":
      image = darkImage;
      break;
    default:
      image = lightImage;
      break;
  }

  return (
    <header className="h-[25%] w-full p-12">
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
