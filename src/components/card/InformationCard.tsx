"use client";

import { Project } from "@/config";
import { cn } from "@/lib";

import { Github, SquareArrowUp } from "lucide-react";
import {
  Button,
  Card,
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
      <Card className='relative flex w-full flex-col items-center gap-6 border-none px-6 py-6 shadow-none md:px-0'>
        <CardTitle className='w-full text-left text-2xl'>
          {project.name}
        </CardTitle>

        <CardDescription className='flex w-full flex-col justify-start gap-2 text-lg'>
          {project.description}
        </CardDescription>

        <CardDescription className='flex w-full flex-col justify-start gap-2 text-lg'>
          <div className='flex w-full flex-wrap items-center gap-2'>
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

        <CardFooter className='just w-full flex-row gap-2 p-0'>
          {project.github && (
            <a href={project.github} target='_blank' rel='noreferrer'>
              <Button variant='light' size='sm' icon={<Github />}>
                Github
              </Button>
            </a>
          )}

          <a href={project.url} target='_blank'>
            <Button variant='primary' size='sm' icon={<SquareArrowUp />}>
              Live
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};
