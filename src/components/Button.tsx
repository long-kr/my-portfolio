import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: string;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  icon,
  className,
  disabled = false,
}) => {
  return (
    <button className={cn(className)} onClick={onClick} disabled={disabled}>
      {icon} {children}
    </button>
  );
};

export default Button;
