import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: string;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled = false,
}) => {
  return (
    <button className={cn(className)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
