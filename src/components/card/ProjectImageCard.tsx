"use client";

import { Card } from "@/components/ui";
import { Project } from "@/config";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import Image from "next/image";
import Link from "next/link";

type ProjectImageProps = React.ComponentProps<typeof Card> & {
  project: Project;
};

export const ProjectImage: React.FC<ProjectImageProps> = ({
  className,
  project,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "relative w-full overflow-hidden rounded-lg border-none p-6 shadow-none hover:shadow-md hover:shadow-muted-foreground",
        className,
      )}
      {...props}
    >
      <Link
        href={project.github ?? project.url ?? "#"}
        onClick={() => track("click_link_project", { project: project.name })}
        target='_blank'
      >
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={1200}
          className='h-auto w-full transition-transform duration-300 ease-in-out hover:scale-105'
          placeholder='blur'
          loading='lazy'
        />
      </Link>
    </Card>
  );
};
