import profilePic from "@/assests/image/Screen (30).jpg";
import Navigation from "@/components/sidebar/Navigation";
import { cn } from "@/lib/utils";
import React from "react";
import SideBarHeader from "./SideBarHeader";

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
    link: "#contact",
  },
];

type SideBarProps = {
  className?: string;
};

const SideBar: React.FC<SideBarProps> = ({ className }) => {
  return (
    <div className={cn("h-full", className)}>
      <SideBarHeader image={profilePic} />

      <Navigation navItems={navItems} />
    </div>
  );
};

export default SideBar;
