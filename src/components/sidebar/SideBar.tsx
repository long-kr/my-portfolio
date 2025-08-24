import { Navigation } from "@/components/sidebar/Navigation";
import { cn } from "@/lib/utils";
import React from "react";
import { SideBarHeader } from "./SideBarHeader";

export const SideBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => (
  <nav className={cn(className)}>
    <SideBarHeader className="h-auto w-auto lg:p-6 xl:p-12" />

    <Navigation className={cn("w-full")} />
  </nav>
);
