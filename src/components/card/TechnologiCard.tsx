"use client";

import { IconKeys } from "@/assests/svg";
import { toTitleCase } from "@/lib/utils";
import { SVGIcon } from "../ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

type TechnologiCardProps = {
  title: string;
  icons?: IconKeys[];
};

export const TechnologiCard = ({ title, icons = [] }: TechnologiCardProps) => {
  return (
    <Card className="h-fit gap-5 border-none shadow-none">
      <CardHeader>
        <CardTitle>{toTitleCase(title)}</CardTitle>
      </CardHeader>

      <CardContent role="ul" className="flex list-none flex-wrap gap-5">
        {icons.map((iconKey) => (
          <li key={iconKey}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SVGIcon
                    iconKey={iconKey}
                    svgProps={{ className: "w-10 h-10" }}
                    className="self-center"
                  />
                </TooltipTrigger>
                <TooltipContent className="bg-milk-white shadow">
                  {toTitleCase(iconKey)}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </CardContent>
    </Card>
  );
};
