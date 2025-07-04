import { IconKeys, icons } from "@/assets/svg";
import React from "react";

interface SVGIconProps {
  iconKey: IconKeys;
  divProps?: React.ComponentProps<"div">;
  svgProps?: React.ComponentProps<"svg">;
}

export const SVGIcon: React.FC<SVGIconProps> = ({
  iconKey,
  divProps,
  svgProps,
}) => {
  const Icon = React.cloneElement(icons[iconKey], {
    ...svgProps,
  });

  return <div {...divProps}>{Icon}</div>;
};
