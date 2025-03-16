"use client";

import Button from "../Button";

export const BottomContainer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="flex justify-center py-16">
        <Button
          onClick={handleClick}
          icon={<span>↑</span>}
          className="hover:text-secondary"
        >
          Back to top
        </Button>
      </div>

      <div className="flex justify-center py-16">
        <p>Powered by Adobe Portfolio</p>
      </div>
    </footer>
  );
};
