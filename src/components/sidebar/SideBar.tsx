import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import React from "react";

const SideBarImage = dynamic(
  () => import("./SideBarImage").then((mod) => mod.SideBarImage),
  {
    loading: () => <div className='w-full'>Loading...</div>,
  },
);

export const SideBar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => (
  <nav className={cn(className, "relative")}>
    <SideBarImage className='sticky top-0 h-[8%]' />
  </nav>
);
