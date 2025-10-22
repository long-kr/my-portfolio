import { IconKeys, icons } from "@/assets/svg";
import { cn, toTitleCase } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React from "react";
import { Badge } from ".";

type IconWithToolTip = {
  iconKey: IconKeys;
  svgProps?: React.ComponentProps<"svg">;
  isMoveable?: boolean;
} & Partial<React.ComponentProps<typeof TooltipProvider>>;

export const IconWithToolTip: React.FC<IconWithToolTip> = ({
  iconKey,
  svgProps,
  isMoveable = false,
  ...props
}) => {
  const Icon = React.cloneElement(icons[iconKey], {
    ...svgProps,
  });

  return (
    <TooltipProvider {...props}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            className={cn(
              "px-2 py-1 text-white hover:shadow",
              isMoveable
                ? "transition-transform duration-300 hover:translate-x-1 hover:translate-y-1"
                : "",
            )}
          >
            {toTitleCase(iconKey)}
          </Badge>
        </TooltipTrigger>

        <TooltipContent
          sideOffset={10}
          className='z-2 bg-milk-white-color rounded p-2 shadow-lg'
        >
          {Icon}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
