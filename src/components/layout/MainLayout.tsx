import React from "react";

type MainLayoutProps = {
  className?: string;
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};
