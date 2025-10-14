import { IconKeys, icons } from "@/assets/svg";
import { toTitleCase } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React from "react";

type IconWithToolTip = {
  iconKey: IconKeys;
  svgProps?: React.ComponentProps<"svg">;
} & Partial<React.ComponentProps<typeof TooltipProvider>>;

export const IconWithToolTip: React.FC<IconWithToolTip> = ({
  iconKey,
  svgProps,
  ...props
}) => {
  const Icon = React.cloneElement(icons[iconKey], {
    ...svgProps,
  });

  return (
    <TooltipProvider {...props}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>{Icon}</div>
        </TooltipTrigger>

        <TooltipContent className="bg-milk-white shadow">
          {toTitleCase(iconKey)}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
