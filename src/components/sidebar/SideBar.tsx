import profilePicDark from "@/assests/image/sig dark.jpg";
import profilePic from "@/assests/image/sig.jpg";
import { cn } from "@/lib/utils";

import React from "react";
import { Navigation } from "./Navigation";
import { SideBarHeader } from "./SideBarHeader";

const navItems = [
  {
    title: "Home",
    link: "./",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

interface SideBarProps {
  className?: string;
}

export const SideBar: React.FC<SideBarProps> = ({ className }) => {
  return (
    <aside className={cn(className)}>
      <SideBarHeader lightImage={profilePic} darkImage={profilePicDark} />

      <Navigation navItems={navItems} />
    </aside>
  );
};
