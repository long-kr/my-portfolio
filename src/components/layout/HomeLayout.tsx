const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  //TODO: setup prettier
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 grid-flow-col bg-[#DDDDDD]">
      {children}
    </div>
  );
};

export default HomeLayout;
