import * as React from "react";
import { ChevronRightIcon, DotFilledIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function Card(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn("rounded-2xl border border-neutral-200/80 bg-card text-card-foreground shadow-sm dark:border-neutral-800", className)} {...props} />;
});

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function CardHeader(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />;
});

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(function CardTitle(
  { className, ...props },
  ref,
) {
  return <h3 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />;
});

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(function CardDescription(
  { className, ...props },
  ref,
) {
  return <p ref={ref} className={cn("text-sm leading-6 text-muted-foreground", className)} {...props} />;
});

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function CardContent(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
});

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function CardFooter(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />;
});

export function CardIcon({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-900/10 bg-emerald-50 text-emerald-950 dark:border-emerald-300/10 dark:bg-emerald-950/40 dark:text-emerald-200", className)}>
      {children ?? <InfoCircledIcon aria-hidden className="h-4 w-4" />}
    </span>
  );
}

export function CardAction({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={cn("inline-flex h-9 items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-3 text-xs font-bold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-950/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-900", className)} {...props}>
      {children}<ChevronRightIcon aria-hidden className="h-3.5 w-3.5" />
    </button>
  );
}

export function CardStatusDot({ active = true, label }: { active?: boolean; label: string }) {
  return <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-500"><DotFilledIcon aria-hidden className={cn("h-4 w-4", active ? "text-emerald-700" : "text-neutral-300")} />{label}</span>;
}
