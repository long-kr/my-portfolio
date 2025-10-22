"use client";

import { Project } from "@/config";
import { cn } from "@/lib";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  ToolTipSVGIcon,
} from "../ui";

export const ProjectInformation = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full justify-center overflow-hidden",
        className,
      )}
    >
      {/* Content */}
      <Card className='group relative w-full border-none shadow-none'>
        <CardContent
          className={
            "flex min-h-full flex-col items-center gap-5 py-10 text-lg"
          }
        >
          <CardTitle className='text-2xl'>{project.name}</CardTitle>

          <CardDescription className='flex w-full flex-col justify-start gap-2 text-lg'>
            {project.description}
          </CardDescription>

          <CardFooter className='w-full p-0'>
            <div className='flex w-full flex-wrap items-center justify-center gap-2'>
              {project.technologies.map((technology) => (
                <ToolTipSVGIcon
                  key={technology}
                  iconKey={technology}
                  svgProps={{ className: "w-10 h-10" }}
                  isMoveable
                />
              ))}
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};
