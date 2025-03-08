"use client";

import pic from "@/assests/image/Screen (30).jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = React.ComponentProps<typeof Card>;

const ProjectCard: React.FC<ProjectCardProps> = ({ className, ...props }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Card
      {...props}
      className={cn(className)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover ? (
        <CardContent className="flex min-h-full flex-col p-0 text-center">
          <CardTitle className="text-xl">Project Title</CardTitle>
          <CardDescription className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardDescription>
        </CardContent>
      ) : (
        <CardContent className="p-0">
          <Image
            src={pic}
            alt="Project Image"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </CardContent>
      )}
    </Card>
  );
};

export default ProjectCard;
