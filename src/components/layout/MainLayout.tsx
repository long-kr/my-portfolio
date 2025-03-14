import { cn } from "@/lib/utils";

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className,
}) => {
  return <div className={cn(className)}>{children}</div>;
};
