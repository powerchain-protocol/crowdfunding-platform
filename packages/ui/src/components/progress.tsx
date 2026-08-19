import * as React from "react";
import { cn } from "../lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

export function Progress({ className, value = 0, max = 100, ...props }: ProgressProps) {
  const safeMax = max > 0 ? max : 100;
  const bounded = Math.min(safeMax, Math.max(0, value));
  const percent = (bounded / safeMax) * 100;
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={bounded}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <div className="h-full bg-primary transition-[width] duration-300" style={{ width: `${percent}%` }} />
    </div>
  );
}
