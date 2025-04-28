import { Card, CardContent } from "@/components/ui";
import { Project } from "@/config";
import { DEFAULT_IMAGE } from "@/config/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProjectCardProps = React.ComponentProps<typeof Card> & {
  project: Project;
  renderInfo: (project: Project, className?: string) => React.ReactNode;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  project,
  renderInfo,
  ...props
}) => {
  return (
    <Card
      {...props}
      className={cn(
        "group h-[750px] w-full border-none shadow-none md:h-[550px]",
        className,
      )}
    >
      {renderInfo(
        project,
        "hidden min-h-full flex-col items-center gap-5 py-10 text-lg group-hover:flex md:group-hover:hidden",
      )}

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

export { ProjectCard };

