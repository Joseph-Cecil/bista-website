import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90",
          variant === "outline" && "border border-[var(--color-border)] bg-[var(--color-background)] hover:bg-[var(--color-accent)]",
          variant === "ghost" && "hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)]",
          variant === "destructive" && "bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)]",
          size === "default" && "h-10 px-4 py-2 text-sm",
          size === "sm" && "h-9 px-3 text-sm",
          size === "lg" && "h-11 px-8 text-base",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
