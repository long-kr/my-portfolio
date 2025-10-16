"use client";

import { TechnologiCard } from "@/components/card/TechnologiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { appData } from "@/config";
import { useIsClient } from "@/hooks";
import { cn } from "@/lib";
import React, { useEffect, useRef, useState } from "react";
import { ScrollAnimationWrapper } from "../theme/ScrollAnimationWrapper";

const { techs } = appData;

const AboutSection = () => {
  const isClient = useIsClient();
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const initialHeight = useRef<number | null>(null);

  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (childRef.current && isClient)
      initialHeight.current = childRef.current.offsetTop;
  }, [isClient]);

  useEffect(() => {
    const handleScroll = () => {
      if (!childRef.current || !initialHeight.current) return;

      if (initialHeight.current < window.scrollY) {
        setIsOnScreen(true);
      } else {
        setIsOnScreen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [parentRef, childRef, initialHeight]);

  return (
    <ScrollAnimationWrapper className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <div ref={parentRef} className='relative'>
        <Card
          ref={childRef}
          className={cn(
            "lg:sticky lg:top-10",
            "h-fit border-none shadow-none",
            isOnScreen ? "fixed top-0 z-10" : "",
          )}
        >
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
};

export default AboutSection;
