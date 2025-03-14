"use client";

import Button from "../Button";

export const BottomContainer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <section className="flex justify-center py-16">
        <Button
          onClick={handleClick}
          icon={<span>↑</span>}
          className="hover:text-[#666666]"
        >
          Back to top
        </Button>
      </section>

      <section className="flex justify-center py-16">
        <p>Powered by Adobe Portfolio</p>
      </section>
    </footer>
  );
};
