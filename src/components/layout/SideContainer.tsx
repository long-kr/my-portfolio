type HomeLayoutProps = {
  children: React.ReactNode;
  bgColor?: string;
};

const SideContainer: React.FC<HomeLayoutProps> = ({ children, bgColor }) => {
  return (
    <div
      className={`
      grid
      grid-cols-1 sm:grid-cols-5 grid-flow-col
      bg-${bgColor}`}
    >
      {children}
    </div>
  );
};

export default SideContainer;
