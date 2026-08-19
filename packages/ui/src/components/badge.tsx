import * as React from "react";
import { cn } from "../lib/utils";

export type BadgeVariant = "default" | "secondary" | "outline" | "success" | "warning" | "destructive";

const variants: Record<BadgeVariant, string> = {
  default: "border-transparent bg-primary text-primary-foreground",
  secondary: "border-transparent bg-secondary text-secondary-foreground",
  outline: "border-border bg-transparent text-foreground",
  success: "border-emerald-900/10 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-200",
  warning: "border-amber-300/70 bg-amber-50 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200",
  destructive: "border-red-300/70 bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-200",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold leading-none", variants[variant], className)} {...props} />;
}
