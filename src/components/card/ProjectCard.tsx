"use client";

import { Card, CardContent } from "@/components/ui";
import { Project } from "@/config";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = React.ComponentProps<typeof Card> & {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  project,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "w-full rounded-lg shadow-none hover:shadow-lg hover:shadow-muted-foreground",
        className,
      )}
      {...props}
    >
      <Link
        href={project.github ?? project.url ?? "#"}
        onClick={() => track("click_link_project", { project: project.name })}
        target='_blank'
      >
        <CardContent className='relative min-h-full w-full overflow-hidden rounded-lg'>
          <Image
            src={project.image}
            alt={project.name}
            fill
            placeholder='blur'
            loading='lazy'
            // className='object-cover'
          />
        </CardContent>
      </Link>
    </Card>
  );
};
