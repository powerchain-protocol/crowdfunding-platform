"use client";
import type { ReactNode } from "react";
import { Modal } from "./modal";

const base = "inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50";

export function ConfirmationModal({ open, onClose, onConfirm, title, description, children, confirmLabel = "Confirm", cancelLabel = "Cancel", busy = false, destructive = false }: { open: boolean; onClose: () => void; onConfirm: () => void | Promise<void>; title: ReactNode; description?: ReactNode; children?: ReactNode; confirmLabel?: string; cancelLabel?: string; busy?: boolean; destructive?: boolean }) {
  return <Modal open={open} onClose={onClose} title={title} description={description} size="sm" dismissible={!busy} footer={<>
    <button type="button" onClick={onClose} disabled={busy} className={`${base} border border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50 focus-visible:ring-neutral-900/10 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900`}>{cancelLabel}</button>
    <button type="button" onClick={() => void onConfirm()} disabled={busy} className={`${base} text-white focus-visible:ring-emerald-900/15 ${destructive ? "bg-red-700 hover:bg-red-800" : "bg-emerald-950 hover:bg-emerald-900"}`}>{busy ? "Working…" : confirmLabel}</button>
  </>}><div className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">{children}</div></Modal>;
}
