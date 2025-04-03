import { IconKeys } from "@/assests/svg";
import { TechnologiCard } from "@/components/card/TechnologiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { appData } from "@/data";

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
          <p>{appData.description}</p>
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
