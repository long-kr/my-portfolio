import Navigation from "@/components/sidebar/Navigation";
import navItems from "@/data/navItems";
import { cn } from "@/lib/utils";
import React from "react";
import { SideBarHeader } from "./SideBarHeader";

export const SideBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <aside className={cn(className)}>
      <SideBarHeader />

      <Navigation navItems={navItems} />
    </aside>
  );
};
