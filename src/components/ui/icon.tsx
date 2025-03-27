import { IconKeys, icons } from "@/assests/svg";
import React from "react";

type SVGIconProps = {
  iconKey: IconKeys;
  svgProps?: React.ComponentProps<"svg">;
} & React.ComponentProps<"div">;

export const SVGIcon: React.FC<SVGIconProps> = ({
  iconKey,
  svgProps,
  ...props
}) => {
  const Icon = React.cloneElement(icons[iconKey], {
    ...svgProps,
  });

  return <div {...props}>{Icon}</div>;
};
