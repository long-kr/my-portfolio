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
    link: "/contact",
  },
];

type SideBarProps = {
  className?: string;
};

const SideBar: React.FC<SideBarProps> = ({ className }) => {
  return (
    <aside className={cn(className)}>
      <SideBarHeader />

      <Navigation navItems={navItems} />
    </aside>
  );
};

export default SideBar;
