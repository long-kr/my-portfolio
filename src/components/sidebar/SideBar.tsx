import Navigation from "@/components/sidebar/Navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { SideBarHeader } from "./SideBarHeader";

export const SideBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <nav className={cn(className)}>
      <SideBarHeader className="h-auto w-auto lg:p-6 xl:p-12" />

      <Navigation className="flex w-full flex-row justify-between px-5 sm:justify-evenly lg:mx-auto lg:w-2/5 lg:flex-col lg:p-0" />
    </nav>
  );
};
