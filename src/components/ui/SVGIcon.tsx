import { IconKeys, icons } from "@/assets/svg";
import React from "react";

interface SVGIconProps {
  iconKey: IconKeys;
  svgProps?: React.ComponentProps<"svg">;
}

export const SVGIcon: React.FC<SVGIconProps> = ({ iconKey, svgProps }) => {
  const Icon = React.cloneElement(icons[iconKey], {
    ...svgProps,
  });

  return <div>{Icon}</div>;
};
