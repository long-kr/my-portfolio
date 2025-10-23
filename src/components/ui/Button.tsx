import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const baseStyles = `inline-flex items-center justify-center rounded-md 
  transition-all
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
  disabled:opacity-50 disabled:pointer-events-none 
  ring-offset-background`;

const variants = {
  primary: `inline-flex items-center justify-center whitespace-nowrap 
    outline-none 
    bg-primary text-white
    hover:bg-secondary rounded-md gap-1.5 has-[>svg]:px-2.5 flex items-center gap-2
    disabled:pointer-events-none disabled:opacity-50 
    [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 
    focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive 
    `,
  secondary: `bg-secondary text-primary 
    hover:bg-secondary-hover active:bg-secondary-active`,
  light: `bg-white inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border
    text-foreground outline-none
    hover:bg-secondary focus-visible:ring-[3px] 
    disabled:pointer-events-none disabled:opacity-50 
    has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`,
  outline:
    "border border-primary text-primary hover:bg-primary-light/20 active:bg-primary-light/30",
  ghost: "text-primary hover:bg-primary-light/20 active:bg-primary-light/30",
};

const sizes = {
  default: "h-6 md:h-10 py-2 px-4 text-sm font-medium",
  sm: "h-5 md:h-9 px-3 text-sm font-small",
  lg: "h-10 md:h-11 px-8",
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
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

Button.displayName = "Button";
