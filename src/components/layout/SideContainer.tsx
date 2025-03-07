type HomeLayoutProps = {
  children: React.ReactNode;
  bgColor?: string;
};

const SideContainer: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className={`grid grid-flow-col grid-cols-1 sm:grid-cols-5`}>
      {children}
    </div>
  );
};

export default SideContainer;
