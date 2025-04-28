import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: React.Ref<HTMLTextAreaElement>;
  label?: string;
  error?: string;
}

const Textarea = ({
  className,
  label,
  error,
  ref,
  ...props
}: TextareaProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-primary",
          "dark:bg-slate-100 dark:text-primary",
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

Textarea.displayName = "Textarea";

export { Textarea };
