const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full flex-row gap-5 py-20">{children}</div>
  );
};

export default AboutLayout;
