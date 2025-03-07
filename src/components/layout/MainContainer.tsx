import { cn } from "@/lib/utils";
import React from "react";

type MainContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  className,
}) => {
  return <main className={cn("h-full", className)}>{children}</main>;
};

export default MainContainer;
