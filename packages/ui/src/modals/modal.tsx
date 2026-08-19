"use client";
import { useEffect, useId, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@powerchain/common";
import { IconButton } from "../icons";

export type ModalSize = "sm" | "md" | "lg" | "xl";
export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  dismissible?: boolean;
}

const widths: Record<ModalSize, string> = { sm: "max-w-md", md: "max-w-xl", lg: "max-w-3xl", xl: "max-w-5xl" };

export function Modal({ open, onClose, title, description, children, footer, size = "md", dismissible = true }: ModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const keydown = (event: KeyboardEvent) => { if (event.key === "Escape" && dismissible) onClose(); };
    window.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", keydown); };
  }, [dismissible, onClose, open]);
  if (!open || typeof document === "undefined") return null;
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 p-0 backdrop-blur-[2px] sm:items-center sm:p-5" onMouseDown={(event) => { if (dismissible && event.currentTarget === event.target) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={description ? descriptionId : undefined} className={cn("max-h-[92vh] w-full overflow-hidden rounded-t-[24px] border border-neutral-200 bg-white text-neutral-950 shadow-2xl sm:rounded-[24px] dark:border-neutral-800 dark:bg-neutral-950 dark:text-white", widths[size])}>
        <header className="flex items-start justify-between gap-4 border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
          <div><h2 id={titleId} className="text-lg font-bold tracking-[-0.02em]">{title}</h2>{description ? <p id={descriptionId} className="mt-1 text-sm leading-5 text-neutral-500 dark:text-neutral-400">{description}</p> : null}</div>
          {dismissible ? <IconButton icon="x" label="Close" onClick={onClose} className="shrink-0" /> : null}
        </header>
        <div className="max-h-[calc(92vh-150px)] overflow-y-auto px-5 py-5">{children}</div>
        {footer ? <footer className="flex flex-wrap justify-end gap-2 border-t border-neutral-200 bg-neutral-50 px-5 py-4 dark:border-neutral-800 dark:bg-neutral-900">{footer}</footer> : null}
      </section>
    </div>, document.body);
}
