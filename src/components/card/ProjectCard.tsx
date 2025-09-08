import { Card, CardContent } from "@/components/ui";
import { DEFAULT_IMAGE, Project } from "@/config";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
      className={cn("group w-full border-none shadow-none", className)}
      {...props}
    >
      <CardContent className="relative min-h-full w-full overflow-hidden p-0 group-hover:hidden md:group-hover:block">
        <Image
          src={project.image ?? DEFAULT_IMAGE}
          alt={project.name}
          fill
          placeholder="blur"
          loading="lazy"
          className="object-cover"
        />
      </CardContent>
    </Card>
  );
};
