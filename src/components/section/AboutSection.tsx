"use client";

import { TechnologiCard } from "@/components/card/TechnologiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { appData } from "@/config";
import { useIsClient } from "@/hooks";
import { cn } from "@/lib";
import { useTheme } from "next-themes";
import React from "react";
import { SectionLayout } from "../layout";

const { techs } = appData;

const AboutSection = () => {
  const { theme } = useTheme();
  const isClient = useIsClient();

  if (theme === "dark" || !isClient) return null;

  return (
    <SectionLayout title='About Me'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='relative'>
          <Card className={cn("sticky top-0 h-fit border-none shadow-none")}>
            <CardHeader>
              <CardTitle>{appData.title}</CardTitle>
            </CardHeader>

            <CardContent className='flex flex-col gap-2'>
              {appData.description.split("\n").map((line) => (
                <p key={line}>
                  {line.split(" ").map((word, index) => (
                    <React.Fragment key={index}>
                      <span
                        className='word'
                        style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
                      >
                        {word}
                      </span>
                      {index < appData.description.split(" ").length - 1 && " "}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className='col-span-1 flex flex-col justify-between gap-2'>
          {Object.entries(techs).map(([key, value]) => (
            <div key={key} className='stagger-item'>
              <TechnologiCard title={key} icons={value} />
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
