"use client";

import { IconKeys } from "@/assests/svg";
import { toTitleCase } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { SVGIcon } from "../ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ProjectCardProps {
  title: string;
  description: string;
  icons?: IconKeys[];
}

export const ProjectCard = ({
  title,
  description,
  icons = [],
}: ProjectCardProps) => {
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

      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
