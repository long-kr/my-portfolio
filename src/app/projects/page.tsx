"use client";

import darkBg from "@/assests/image/bg-black.webp";
import whiteBg from "@/assests/image/bg-white.jpg";

import { ProjectCard } from "@/components/card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  SVGIcon,
} from "@/components/ui";
import { appData, Project } from "@/data/appData";
import { useIsClient } from "@/hook/useIsClient";
import { toTitleCase } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";

const renderProjectCard = (project: Project, className?: string) => (
  <CardContent className={className}>
    <CardTitle className="text-2xl">{project.name}</CardTitle>

    <CardDescription className="flex w-full justify-start gap-2 text-lg">
      {project.github && (
        <span className="font-bold">
          <a href={project.github} target="_blank">
            Github
          </a>
        </span>
      )}

      <span className="font-bold">
        <a href={project.url} target="_blank">
          Demo
        </a>
      </span>
    </CardDescription>

    <CardDescription className="w-full text-left text-lg">
      <span className="font-bold">Type:</span> {toTitleCase(project.type)}
    </CardDescription>

    <CardDescription className="text-justify text-lg">
      <span className="font-bold">Description:</span> {project.description}
    </CardDescription>

    <CardFooter className="flex w-full flex-wrap justify-start gap-5 p-0">
      <span className="font-bold">Technologies:</span>

      {project.technologies.map((technology) => (
        <SVGIcon
          key={technology}
          iconKey={technology}
          svgProps={{ className: "w-10 h-10" }}
        />
      ))}
    </CardFooter>
  </CardContent>
);

const ProjectInforDisplay = ({ project }: { project: Project }) => {
  const { resolvedTheme } = useTheme();

  const isClient = useIsClient();

  return (
    <div className="relative hidden min-h-full w-full overflow-hidden md:col-span-1 md:block">
      {/* Background image container */}
      {isClient && (
        <div
          className="absolute inset-0 blur-[1px]"
          style={{
            backgroundImage: `url(${resolvedTheme === "dark" ? whiteBg.src : darkBg.src})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />
      )}
      {/* Content */}
      <Card className="group relative w-full border-none shadow-none">
        {renderProjectCard(
          project,
          "absolute inset-0 flex min-h-full flex-col items-center gap-5 py-10 text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        )}
      </Card>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = appData.projects;

  return projects.map((project, index) => (
    <React.Fragment key={project.name}>
      {index % 2 === 0 && <ProjectInforDisplay project={project} />}

      <div className="col-span-2 md:col-span-1">
        <ProjectCard project={project} renderInfo={renderProjectCard} />
      </div>

      {index % 2 !== 0 && <ProjectInforDisplay project={project} />}
    </React.Fragment>
  ));
};

export default ProjectsPage;
