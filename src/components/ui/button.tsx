import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

const variants = {
  primary:
    "bg-primary text-milk-white hover:bg-primary-hover active:bg-primary-active",
  secondary:
    "bg-secondary text-primary hover:bg-secondary-hover active:bg-secondary-active",
  light:
    "bg-light-off-white text-primary hover:bg-light-hover active:bg-light-active",
  outline:
    "border border-primary text-primary hover:bg-primary-light/20 active:bg-primary-light/30",
  ghost: "text-primary hover:bg-primary-light/20 active:bg-primary-light/30",
};

const sizes = {
  default: "h-10 py-2 px-4",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  icon,
  className,
  disabled = false,
  type = "button",
  variant = "primary",
  size = "default",
  ...props
}) => {
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

Button.displayName = "Button";
