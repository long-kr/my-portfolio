import { IconKeys } from "@/assets/svg";
import { TechnologiCard } from "@/components/card/TechnologiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { appData } from "@/config";
import React from "react";
import { ScrollAnimationWrapper } from "../theme/ScrollAnimationWrapper";

const technologies = {
  language: ["javascript", "typescript", "java", "python"] as IconKeys[],
  frontend: [
    "react",
    "nextjs",
    "tailwindcss",
    "jest",
    "playwright",
  ] as IconKeys[],
  backend: ["expressjs", "springboot"] as IconKeys[],
  database: ["mongodb", "postgresql", "firebase"] as IconKeys[],
  tool: ["aws", "git", "bash", "docker", "postman"] as IconKeys[],
};

const AboutSection = () => {
  return (
    <ScrollAnimationWrapper
      id="about"
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
    >
      <div className="stagger-item col-span-1 flex flex-col justify-end">
        <Card className="h-fit border-none shadow-none">
          <CardHeader>
            <CardTitle>{appData.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p>
              {appData.description.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  <span
                    className="word"
                    style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
                  >
                    {word}
                  </span>
                  {index < appData.description.split(" ").length - 1 && " "}
                </React.Fragment>
              ))}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-1 flex flex-col justify-between gap-2">
        {Object.entries(technologies).map(([key, value]) => (
          <div key={key} className="stagger-item">
            <TechnologiCard title={key} icons={value} />
          </div>
        ))}
      </div>
    </ScrollAnimationWrapper>
  );
};

AboutSection.displayName = "AboutSection";

export default AboutSection;
