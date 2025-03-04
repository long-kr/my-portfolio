type HomeLayoutProps = {
  children: React.ReactNode;
  bgColor?: string;
};

const HomeLayout: React.FC<HomeLayoutProps> = ({ children, bgColor }) => {
  return (
    <div
      className={`
      grid
      grid-cols-1 sm:grid-cols-4 grid-flow-col
      bg-${bgColor}`}
    >
      {children}
    </div>
  );
};

export default HomeLayout;
