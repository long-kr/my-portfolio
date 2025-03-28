"use client";

import { IconKeys, icons } from "@/assests/svg";
import React from "react";

interface SVGIconProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.RefObject<HTMLDivElement>;
  iconKey: IconKeys;
  svgProps?: React.ComponentProps<"svg">;
}

export const SVGIcon: React.FC<SVGIconProps> = ({
  iconKey,
  svgProps,
  ref,
  ...props
}) => {
  const Icon = React.cloneElement(icons[iconKey], {
    ...svgProps,
  });

  return (
    <div ref={ref} {...props}>
      {Icon}
    </div>
  );
};
