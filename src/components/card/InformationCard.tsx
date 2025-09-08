"use client";

import darkBg from "@/assets/image/bg-black.webp";
import whiteBg from "@/assets/image/bg-white.jpg";

import { Project } from "@/config";
import { useIsClient } from "@/hooks";
import { cn, toTitleCase } from "@/lib";
import { track } from "@vercel/analytics";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  ToolTipSVGIcon,
} from "../ui";

export const ProjectInformation = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
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
        <CardContent
          className={
            "flex min-h-full flex-col items-center gap-5 py-10 text-lg"
          }
        >
          <CardTitle className="text-2xl">{project.name}</CardTitle>

          <CardDescription className="flex w-full flex-col justify-start gap-2 text-lg">
            <p className="flex gap-2">
              {project.github && (
                <span className="font-bold">
                  <a
                    href={project.github}
                    target="_blank"
                    onClick={() =>
                      track("click_github_project", { project: project.name })
                    }
                  >
                    Github
                  </a>
                </span>
              )}
              <span className="font-bold">
                <a
                  href={project.url}
                  target="_blank"
                  onClick={() =>
                    track("click_link_project", { project: project.name })
                  }
                >
                  Live
                </a>
              </span>
            </p>

            <p>
              <span className="font-bold">Type:</span>{" "}
              {toTitleCase(project.type)}
            </p>

            <p>
              <span className="font-bold">Description:</span>{" "}
              {project.description}
            </p>
          </CardDescription>

          <CardFooter className="flex w-full flex-col justify-start gap-2 p-0">
            <div className="w-full text-start font-bold">Technologies:</div>

            <div className="flex w-full flex-wrap items-center gap-2">
              {project.technologies.map((technology) => (
                <ToolTipSVGIcon
                  key={technology}
                  iconKey={technology}
                  svgProps={{ className: "w-10 h-10" }}
                />
              ))}
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};
