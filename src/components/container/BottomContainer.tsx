"use client";

import { Button } from "@/components/ui";

export const BottomContainer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className='flex justify-center py-16'>
      <Button
        onClick={handleClick}
        icon={<span>↑</span>}
        className='hover:text-secondary'
        variant='ghost'
      >
        Back to top
      </Button>
    </footer>
  );
};
