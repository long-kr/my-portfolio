import { TechnologiCard } from "@/components/card/TechnologiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { appData } from "@/config";
import React from "react";
import { ScrollAnimationWrapper } from "../theme/ScrollAnimationWrapper";

const { techs } = appData;

const AboutSection = () => (
  <ScrollAnimationWrapper className='grid grid-cols-1 gap-4 md:grid-cols-2'>
    <div className='stagger-item col-span-1 flex flex-col justify-end'>
      <Card className='h-fit border-none shadow-none'>
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
  </ScrollAnimationWrapper>
);

export default AboutSection;
