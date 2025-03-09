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
  return (
    <main className={cn("h-full", className)}>
      <section id="">{children}</section>

      <section className="flex justify-center py-14">
        <a href="#" className="hover:text-black">
          Back to top
        </a>
      </section>
    </main>
  );
};

export default MainContainer;
