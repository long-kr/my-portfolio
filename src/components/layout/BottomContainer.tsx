"use client";

import Button from "../Button";

const BottomContainer = () => {
  const handleClick = () => {
    console.log("Back to top");
  };

  return (
    <section className="flex justify-center py-14">
      <Button onClick={handleClick} className="hover:text-black">
        Back to top
      </Button>
    </section>
  );
};

export default BottomContainer;
