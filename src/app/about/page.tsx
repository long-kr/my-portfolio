"use client";

import { IconKeys, icons } from "@/assests/svg";
import AboutPageLayout from "@/components/layout/AboutPageLayout";
import { SVGIcon } from "@/components/ui/icon";

const iconKeys = Object.keys(icons) as Array<IconKeys>;

const About = () => {
  return (
    <AboutPageLayout>
      <div className="flex flex-col justify-end gap-5">
        <h1>Long T Huynh</h1>

        <p>Fullstack Developer</p>

        <p>Vietnamese, A developer obssessed with solving problems.</p>
      </div>

      <div>
        <h2>Tech stack</h2>

        <div className="flex flex-row gap-5">
          {iconKeys.map((iconKey) => (
            <SVGIcon
              key={iconKey}
              iconKey={iconKey}
              svgProps={{ className: "w-10 h-10" }}
              className="bg-slate-800"
            />
          ))}
        </div>
      </div>
    </AboutPageLayout>
  );
};

export default About;
