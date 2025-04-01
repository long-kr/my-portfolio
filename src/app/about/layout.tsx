import { MainLayout } from "@/components/layout";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {children}
    </MainLayout>
  );
};

export default AboutLayout;
