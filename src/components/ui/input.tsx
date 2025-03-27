import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.RefObject<HTMLInputElement>;
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  label,
  error,
  ref,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus-visible:ring-red-500",
          className,
        )}
        ref={ref}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

Input.displayName = "Input";

export { Input };
