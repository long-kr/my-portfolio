"use client";

import { Project } from "@/config";
import { cn } from "@/lib";

import { Github, SquareArrowUp } from "lucide-react";
import {
  Button,
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

          <CardDescription className='flex w-full flex-col justify-start gap-2 text-lg'>
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
          </CardDescription>

          <CardFooter className='w-full flex-row gap-2 p-0'>
            {project.github && (
              <a href={project.github} target='_blank'>
                <Button variant='light' size='sm' icon={<Github />}>
                  Github
                </Button>
              </a>
            )}

            <a href={project.url} target='_blank'>
              <Button variant='primary' icon={<SquareArrowUp />}>
                Live
              </Button>
            </a>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};
