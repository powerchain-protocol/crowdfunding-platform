import type { ReactNode } from "react";
import { cn } from "../lib/utils";
import { Label } from "./label";

export interface FormFieldProps {
  label: ReactNode;
  htmlFor?: string;
  description?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function FormField({ label, htmlFor, description, error, required = false, children, className }: FormFieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={htmlFor}>
        {label}{required ? <span className="ms-1 text-destructive" aria-hidden="true">*</span> : null}
      </Label>
      {children}
      {error ? <p className="text-xs font-medium text-destructive">{error}</p> : description ? <p className="text-xs leading-5 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
