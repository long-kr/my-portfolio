"use client";

import { ProjectCard, ProjectInformation } from "@/components/card";
import { appData } from "@/config";
import { useIsClient } from "@/hooks";
import { useTheme } from "next-themes";
import { ScrollAnimationWrapper } from "../theme/ScrollAnimationWrapper";

const ProjectsSection = () => {
  const isClient = useIsClient();
  const { theme } = useTheme();

  const { projects } = appData;

  if (theme === "dark" || !isClient) return null;

  return (
    <ScrollAnimationWrapper>
      <div className='mb-12 text-center'>
        <h2 className='text-4xl font-bold'>My Projects</h2>
      </div>

      {/* Web */}
      <div className='gird-cols-1 hidden w-full gap-24 md:grid'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='col-span-1 grid max-h-[540px] min-h-[540px] grid-cols-3'
          >
            <ProjectCard
              project={project}
              className='stagger-item col-span-2'
            />

            <ProjectInformation project={project} className='col-span-1' />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className='flex w-full flex-col md:hidden'>
        {projects.map((project) => (
          <ProjectInformation
            key={project.name}
            project={project}
            className='col-span-1'
          />
        ))}
      </div>
    </ScrollAnimationWrapper>
  );
};

export default ProjectsSection;
