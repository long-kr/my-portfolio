"use client";

import { IconKeys } from "@/assests/svg";
import { toTitleCase } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, SVGIcon } from "../ui";

type TechnologiCardProps = {
  title: string;
  icons?: IconKeys[];
};

export const TechnologiCard = ({ title, icons = [] }: TechnologiCardProps) => {
  const [visibleIcons, setVisibleIcons] = useState<number>(0);

  useEffect(() => {
    // Reset visible icons when icons prop changes
    setVisibleIcons(0);

    // Show icons one by one with a delay
    const interval = setInterval(() => {
      setVisibleIcons((prev) => {
        if (prev >= icons.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [icons]);

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="border-b border-primary">
          {toTitleCase(title)}
        </CardTitle>
      </CardHeader>

      <CardContent role="ul" className="flex list-none flex-wrap gap-5">
        {icons.map((iconKey, index) => (
          <li
            key={iconKey}
            className={`transition-all duration-500 ${
              index < visibleIcons
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <SVGIcon
              iconKey={iconKey}
              svgProps={{ className: "w-10 h-10" }}
              className="self-center"
            />
          </li>
        ))}
      </CardContent>
    </Card>
  );
};

TechnologiCard.displayName = "TechnologiCard";
