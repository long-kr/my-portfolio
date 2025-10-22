"use client";

import { ProjectCard, ProjectInformation } from "@/components/card";
import { appData } from "@/config";
import { useIsClient } from "@/hooks";
import { useTheme } from "next-themes";
import { SectionLayout } from "../layout";

const ProjectsSection = () => {
  const isClient = useIsClient();
  const { theme } = useTheme();

  const { projects } = appData;

  if (theme === "dark" || !isClient) return null;

  return (
    <SectionLayout title='My Projects'>
      {/* Web */}
      <div className='gird-cols-1 hidden w-full gap-24 md:grid'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='col-span-1 grid max-h-[540px] min-h-[540px] grid-cols-3'
          >
            <ProjectCard
              project={project}
              className='stagger-item col-span-2 p-6'
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
    </SectionLayout>
  );
};

export default ProjectsSection;
