import { cn } from "@/lib/utils";
import React from "react";
import { BottomContainer } from ".";

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className={cn(className)}>
      {children}

      <BottomContainer />
    </main>
  );
};
