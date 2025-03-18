import { MainLayout } from "@/components/layout";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout className="flex h-screen w-full flex-row justify-between bg-slate-800 px-5 py-10">
      {children}
    </MainLayout>
  );
};

export default AboutLayout;
