import { ProjectCard, ProjectInformation } from "@/components/card";
import { appData } from "@/config";
import { ScrollAnimationWrapper } from "../theme/ScrollAnimationWrapper";

const ProjectsSection = () => {
  const { projects } = appData;

  return (
    <ScrollAnimationWrapper className="mx-auto max-w-7xl px-4">
      <h2 className="mb-12 text-center text-4xl font-bold">My Projects</h2>

      {/* Web */}
      <div className="gird-cols-1 hidden w-full gap-3 md:grid">
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-1 grid max-h-[540px] min-h-[540px] grid-cols-3"
          >
            <ProjectCard
              project={project}
              className="stagger-item border-1 col-span-2 p-2 hover:shadow-sm"
            />

            <ProjectInformation
              project={project}
              className="border-1 col-span-1 p-2 shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex w-full flex-col md:hidden">
        {projects.map((project) => (
          <ProjectInformation
            key={project.name}
            project={project}
            className="col-span-1"
          />
        ))}
      </div>
    </ScrollAnimationWrapper>
  );
};

export default ProjectsSection;
