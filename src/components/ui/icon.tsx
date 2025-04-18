import { IconKeys, icons } from "@/assets/svg";
import { toTitleCase } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
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

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div {...props}>{Icon}</div>
        </TooltipTrigger>

        <TooltipContent className="bg-milk-white shadow">
          {toTitleCase(iconKey)}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
