type AboutPageLayoutProps = {
  children: React.ReactNode;
};

const AboutPageLayout: React.FC<AboutPageLayoutProps> = ({ children }) => {
  return <div className="flex h-screen w-full flex-row gap-5">{children}</div>;
};

export default AboutPageLayout;
