import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export interface EmptyStateProps {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed bg-card p-8 text-center", className)}>
      {icon ? <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">{icon}</div> : null}
      <h3 className="text-base font-semibold text-card-foreground">{title}</h3>
      {description ? <div className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{description}</div> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
