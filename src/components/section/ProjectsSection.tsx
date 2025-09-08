import { ProjectCard, ProjectInformation } from "@/components/card";
import { appData } from "@/config/data";
import { ScrollAnimationWrapper } from "../theme/ScrollAnimationWrapper";

const ProjectsSection = () => {
  const { projects } = appData;

  return (
    <ScrollAnimationWrapper className="mx-auto max-w-7xl px-4">
      <h2 className="mb-12 text-center text-4xl font-bold">My Projects</h2>

      {/* Web */}
      <div className="hidden w-full flex-col md:flex">
        {projects.map((project) => (
          <div key={project.name} className="mb-2 grid grid-cols-3">
            <ProjectCard
              project={project}
              className="stagger-item col-span-2 max-h-[540px]"
            />

            <ProjectInformation
              project={project}
              className="col-span-1 max-h-[540px]"
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
