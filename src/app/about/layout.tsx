import { MainLayout } from "@/components/layout";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout className="flex h-screen w-full flex-row gap-5 py-20">
      {children}
    </MainLayout>
  );
};

export default AboutLayout;
