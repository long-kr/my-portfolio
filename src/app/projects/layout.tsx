import { MainLayout } from "@/components/layout";

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout className="grid grid-cols-2 gap-1">{children}</MainLayout>;
};

export default ProjectsLayout;
