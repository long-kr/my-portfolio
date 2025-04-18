import React from "react";
import { cn } from "@/lib/utils";

const colorSchemes = {
  rainbow: {
    border: "border-t-[#FF6B6B]",
    shadow: "shadow-[0_0_15px_rgba(255,107,107,0.5)]",
  },
  ocean: {
    border: "border-t-[#4ECDC4]",
    shadow: "shadow-[0_0_15px_rgba(78,205,196,0.5)]",
  },
  sunset: {
    border: "border-t-[#FF9F43]",
    shadow: "shadow-[0_0_15px_rgba(255,159,67,0.5)]",
  },
  forest: {
    border: "border-t-[#2ECC71]",
    shadow: "shadow-[0_0_15px_rgba(46,204,113,0.5)]",
  },
};

interface AnimatedCircleProps {
  containerClassName?: string;
  colorScheme?: "rainbow" | "ocean" | "sunset" | "forest";
}

export const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
  containerClassName,
  colorScheme = "sunset",
}) => {
  return (
    <div
      className={cn("animate-[spin_10s_linear_infinite]", containerClassName)}
    >
      <div className="relative h-full w-full">
        <div
          className={cn(
            "absolute inset-0 animate-[spin_3s_linear_infinite,pulse_2s_ease-in-out_infinite,morphRadius_8s_ease-in-out_infinite,colorCycle_8s_ease-in-out_infinite] rounded-full border-4 border-transparent",
            colorSchemes[colorScheme].border,
            colorSchemes[colorScheme].shadow,
          )}
        />
        <div
          className={cn(
            "absolute inset-1 animate-[spin_3s_linear_infinite_reverse,pulse_2s_ease-in-out_infinite,morphRadius_8s_ease-in-out_infinite_reverse,colorCycle_9s_ease-in-out_infinite] rounded-full border-4 border-transparent",
            colorSchemes[colorScheme].border,
            colorSchemes[colorScheme].shadow,
          )}
        />
      </div>
    </div>
  );
};
