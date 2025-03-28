"use client";

import pic from "@/assests/image/Screen (30).jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/card/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps extends React.ComponentProps<typeof Card> {
  title?: string;
  description?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  title = "Project Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ...props
}) => {
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
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
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
