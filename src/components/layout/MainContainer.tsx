import { cn } from "@/lib/utils";
import React from "react";
import BottomContainer from "./BottomContainer";

type MainContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className={cn("h-full", className)}>
      <section id="">{children}</section>

      <BottomContainer />
    </main>
  );
};

export default MainContainer;
