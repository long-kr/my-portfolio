"use client";

import { IconKeys } from "@/assests/svg";
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
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent role="ul" className="flex flex-wrap gap-5">
        {icons.map((iconKey) => (
          <li key={iconKey} className="justify-center-center flex h-10 w-20">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SVGIcon
                    iconKey={iconKey}
                    svgProps={{ className: "w-10 h-10" }}
                    className="self-center"
                  />
                </TooltipTrigger>
                <TooltipContent className="border border-black bg-black bg-opacity-80">
                  <p>{iconKey}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </CardContent>
    </Card>
  );
};
