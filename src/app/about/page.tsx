import { IconKeys } from "@/assests/svg";
import { TechnologiCard } from "@/components/card/TechnologiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { appData } from "@/data";
import React from "react";

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

const About = () => (
  <>
    <div className="col-span-1 flex flex-col justify-end">
      <Card className="h-fit border-none shadow-none">
        <CardHeader>
          <CardTitle>{appData.title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p>
            {appData.description.split(" ").map((char, index) => {
              return (
                <React.Fragment key={index}>
                  <span
                    className="animate-[fadeInUp_1s_ease-out_forwards]"
                    style={{
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    {char}
                  </span>
                  {index < appData.description.split(" ").length - 1 && " "}
                </React.Fragment>
              );
            })}
          </p>
        </CardContent>
      </Card>
    </div>

    <div className="col-span-1 flex flex-col justify-between gap-2">
      {Object.entries(technologies).map(([key, value]) => (
        <TechnologiCard key={key} title={key} icons={value} />
      ))}
    </div>
  </>
);

export default About;
