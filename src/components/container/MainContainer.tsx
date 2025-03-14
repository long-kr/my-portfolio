import { cn } from "@/lib/utils";
import React from "react";
import { BottomContainer } from ".";

type MainContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const MainContainer: React.FC<MainContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className={cn(className)}>
      <section id="">{children}</section>

      <BottomContainer />
    </main>
  );
};
