import * as React from "react";
import { cn } from "../lib/utils";

export type AlertVariant = "default" | "success" | "warning" | "destructive";

const variants: Record<AlertVariant, string> = {
  default: "border-border bg-card text-card-foreground",
  success: "border-emerald-900/10 bg-emerald-50 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100",
  warning: "border-amber-300/70 bg-amber-50 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100",
  destructive: "border-red-300/70 bg-red-50 text-red-900 dark:bg-red-950/30 dark:text-red-100",
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
}

export function Alert({ className, variant = "default", ...props }: AlertProps) {
  return <div role="alert" className={cn("relative w-full rounded-xl border p-4 text-sm", variants[variant], className)} {...props} />;
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn("mb-1 font-semibold leading-none tracking-tight", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-sm leading-6 opacity-80", className)} {...props} />;
}
