"use client";
import type { ReactNode } from "react";
import { Modal } from "./modal";

export interface TransactionReviewItem { label: string; value: string; mono?: boolean }

function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "warning" }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold ${tone === "warning" ? "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200" : "border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"}`}>{children}</span>;
}

export function TransactionReviewModal({ open, onClose, onContinue, title = "Review transaction", items, fee, network, busy = false }: { open: boolean; onClose: () => void; onContinue: () => void | Promise<void>; title?: string; items: readonly TransactionReviewItem[]; fee?: string; network?: string; busy?: boolean }) {
  return <Modal open={open} onClose={onClose} title={title} description="Verify the exact recipients, amounts and network before opening your wallet." size="lg" dismissible={!busy} footer={<>
    <button type="button" onClick={onClose} disabled={busy} className="h-10 rounded-xl border border-neutral-200 bg-white px-4 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900">Cancel</button>
    <button type="button" onClick={() => void onContinue()} disabled={busy} className="h-10 rounded-xl bg-emerald-950 px-4 text-sm font-semibold text-white transition hover:bg-emerald-900 disabled:opacity-50">{busy ? "Preparing…" : "Continue to wallet"}</button>
  </>}>
    <div className="flex flex-wrap gap-2">{network ? <Badge>{network}</Badge> : null}{fee ? <Badge>Fee {fee}</Badge> : null}<Badge tone="warning">Wallet signature required</Badge></div>
    <div className="mt-4 overflow-hidden rounded-[20px] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">{items.map((item) => <div key={`${item.label}:${item.value}`} className="grid gap-1 border-b border-neutral-200 px-4 py-3 last:border-b-0 dark:border-neutral-800 sm:grid-cols-[180px_1fr]"><div className="text-xs font-bold uppercase tracking-[.08em] text-neutral-500">{item.label}</div><div className={item.mono ? "break-all font-mono text-xs" : "text-sm font-semibold"}>{item.value}</div></div>)}</div>
    <p className="mt-4 text-xs leading-5 text-neutral-500">This screen prepares a transaction review only. PowerChain does not sign on your behalf; final authorization happens in the connected wallet.</p>
  </Modal>;
}
