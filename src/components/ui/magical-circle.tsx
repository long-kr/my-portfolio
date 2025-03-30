import { cn } from "@/lib/utils";

interface MagicalCircleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  spinSpeed?: "slow" | "normal" | "fast";
  pulseSpeed?: "slow" | "normal" | "fast";
  morphSpeed?: "slow" | "normal" | "fast";
  colorScheme?: "rainbow" | "ocean" | "sunset" | "forest";
  layers?: number;
}

export function MagicalCircle({
  className,
  size = "md",
  spinSpeed = "normal",
  pulseSpeed = "normal",
  morphSpeed = "normal",
  colorScheme = "rainbow",
  layers = 1,
}: MagicalCircleProps) {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  const speedClasses = {
    slow: {
      spin: "animate-[spin_15s_linear_infinite]",
      pulse: "animate-[pulse_3s_ease-in-out_infinite]",
      morph: "animate-[morphRadius_12s_ease-in-out_infinite]",
      color: "animate-[colorCycle_12s_ease-in-out_infinite]",
    },
    normal: {
      spin: "animate-[spin_10s_linear_infinite]",
      pulse: "animate-[pulse_2s_ease-in-out_infinite]",
      morph: "animate-[morphRadius_8s_ease-in-out_infinite]",
      color: "animate-[colorCycle_8s_ease-in-out_infinite]",
    },
    fast: {
      spin: "animate-[spin_5s_linear_infinite]",
      pulse: "animate-[pulse_1s_ease-in-out_infinite]",
      morph: "animate-[morphRadius_4s_ease-in-out_infinite]",
      color: "animate-[colorCycle_4s_ease-in-out_infinite]",
    },
  };

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

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {Array.from({ length: layers }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "absolute rounded-full border-4 border-transparent",
            index % 2 === 0 ? "inset-0" : "inset-1",
            index % 2 === 0
              ? "animate-[spin_3s_linear_infinite,pulse_2s_ease-in-out_infinite,morphRadius_8s_ease-in-out_infinite,colorCycle_8s_ease-in-out_infinite]"
              : "animate-[spin_3s_linear_infinite_reverse,pulse_2s_ease-in-out_infinite,morphRadius_8s_ease-in-out_infinite_reverse,colorCycle_9s_ease-in-out_infinite]",
            colorSchemes[colorScheme].border,
            colorSchemes[colorScheme].shadow,
          )}
        />
      ))}
    </div>
  );
}
