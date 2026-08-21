import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-md border border-line bg-paper px-4 text-base text-ink placeholder:text-muted shadow-[var(--shadow-border)] transition-[border-color,box-shadow] duration-150",
        "focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40",
        className,
      )}
      {...props}
    />
  );
}
