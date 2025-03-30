"use client";

import { useState } from "react";

interface ScrollTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}

export const ScrollText: React.FC<ScrollTextProps> = ({
  text = "Name",
  ...props
}) => {
  const [visibleText, setVisibleText] = useState(text.charAt(0)); // Initially show "L"

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      // Update the visible text
      setVisibleText((prev) => {
        if (prev.length < text.length) {
          return prev + text.charAt(prev.length);
        }
        return prev;
      });
    }

    if (event.deltaY < 0) {
      setVisibleText((prev) => {
        if (prev.length > 1) {
          return prev.slice(0, -1);
        }
        return prev;
      });
    }
    return false;
  };

  return (
    <div {...props} onWheel={handleScroll}>
      {visibleText}
    </div>
  );
};
