"use client";

import { Card, CardContent } from "@/components/ui";
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
      className={cn("w-full border-none shadow-none", className)}
      {...props}
    >
      <Link
        href={project.github ?? project.url ?? "#"}
        onClick={() => track("click_link_project", { project: project.name })}
        target='_blank'
      >
        <CardContent className='relative overflow-hidden rounded-lg shadow-none hover:shadow-md hover:shadow-muted-foreground'>
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={1200}
            className='h-auto w-full'
            placeholder='blur'
            loading='lazy'
          />
        </CardContent>
      </Link>
    </Card>
  );
};
