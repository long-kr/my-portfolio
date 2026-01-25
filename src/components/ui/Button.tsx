import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md whitespace-nowrap transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background " +
  "disabled:opacity-50 disabled:pointer-events-none " +
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-primary hover:bg-secondary/90",
  light: "bg-white border text-foreground hover:bg-muted",
  outline: "border border-primary text-primary hover:bg-primary/10",
  ghost: "text-primary hover:bg-primary/10",
} as const;

const sizes = {
  default: "h-10 px-4 text-sm font-medium",
  sm: "h-9 px-3 text-sm font-medium",
  lg: "h-11 px-6 text-base font-medium",
} as const;

export const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  className,
  type = "button",
  variant = "primary",
  size = "default",
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

Button.displayName = "Button";
