"use client";

import { IconKeys } from "@/assests/svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { TechnologiCard } from "@/components/card/TechnologiCard";

const technologies = {
  language: ["java", "javascript", "typescript", "python"] as IconKeys[],
  frontend: [
    "react",
    "nextjs",
    "tailwindcss",
    "jest",
    "playwright",
  ] as IconKeys[],
  backend: ["expressjs", "springboot"] as IconKeys[],
  database: ["mongoDB", "postgreSQL", "firebase"] as IconKeys[],
  tool: ["aws", "git", "bash", "docker", "postman"] as IconKeys[],
};

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-end">
        <Card className="h-fit border-none shadow-none">
          <CardHeader>
            <CardTitle>Hi, I&apos;m Long T Huynh</CardTitle>
          </CardHeader>

          <CardContent>
            <p>I&apos;m a Fullstack Developer</p>
          </CardContent>

          <CardContent>
            <p>Vietnamese, A developer obssessed with solving problems.</p>
          </CardContent>
        </Card>
      </div>

      <div>
        {Object.entries(technologies).map(([key, value]) => (
          <TechnologiCard key={key} title={key} icons={value} />
        ))}
      </div>
    </>
  );
};

export default About;
