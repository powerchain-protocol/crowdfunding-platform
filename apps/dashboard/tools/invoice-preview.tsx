"use client";

import * as React from "react";
import type { Invoice } from "@powerchain/types";
import { Card, Icon } from "@powerchain/ui";
import { PowerChainInvoice } from "../components/powerchain-invoice";

const DEFAULT_INVOICE: Invoice = {
  id: "invoice_preview",
  number: "PC-2026-0043",
  status: "DRAFT",
  issuer: { name: "PowerChain Foundation", tradingName: "PowerChain", entityType: "FOUNDATION", email: "billing@powerchain.example", website: "https://powerchain.ventures", logoUrl: "/assets/brand/powerchain.png", address: { line1: "Example Street 1", postalCode: "00100", city: "Helsinki", countryCode: "FI" } },
  customer: { name: "Customer organization", email: "finance@example.org", address: { line1: "Customer Road 5", postalCode: "1000", city: "Brussels", countryCode: "BE" } },
  currency: "EUR",
  issuedAt: new Date().toISOString().slice(0, 10),
  dueAt: new Date(Date.now() + 14 * 86_400_000).toISOString().slice(0, 10),
  lines: [{ id: "line_1", description: "Campaign platform service", quantity: "1", unitPrice: "1250.00", taxRateBps: 0 }],
  fees: [],
  notes: "Thank you. This preview is not a fiscal document until it is issued by the authenticated invoice service.",
  paymentTerms: "14 days",
  settlement: { rail: "SEPA_INSTANT", asset: "EUR", network: "BANK", paymentReference: "PC-INV-PREVIEW" },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export function InvoicePreviewTool() {
  const [invoice, setInvoice] = React.useState(DEFAULT_INVOICE);
  const update = <K extends keyof Invoice>(key: K, value: Invoice[K]) => setInvoice((current) => ({ ...current, [key]: value, updatedAt: new Date().toISOString() }));
  const updateLine = (index: number, patch: Partial<Invoice["lines"][number]>) => update("lines", invoice.lines.map((line, itemIndex) => itemIndex === index ? { ...line, ...patch } : line));
  const addLine = () => update("lines", [...invoice.lines, { id: crypto.randomUUID(), description: "New line item", quantity: "1", unitPrice: "0.00", taxRateBps: 0 }]);
  const removeLine = (index: number) => update("lines", invoice.lines.filter((_, itemIndex) => itemIndex !== index));

  return <div className="grid gap-6 2xl:grid-cols-[420px_1fr]">
    <Card className="h-fit p-5 2xl:sticky 2xl:top-24"><div className="flex items-center justify-between"><div><h2 className="font-bold">Invoice controls</h2><p className="mt-1 text-xs text-neutral-500">Edit fields and review the PowerChain invoice live.</p></div><button type="button" onClick={() => setInvoice(DEFAULT_INVOICE)} className="rounded-lg border border-neutral-200 px-3 py-2 text-xs font-bold dark:border-neutral-700">Reset</button></div>
      <div className="mt-5 grid gap-4"><label className="grid gap-1.5 text-xs font-bold">Invoice number<input value={invoice.number} onChange={(event) => update("number", event.target.value)} className="h-10 rounded-lg border border-neutral-200 bg-white px-3 font-normal dark:border-neutral-700 dark:bg-neutral-950"/></label><div className="grid grid-cols-2 gap-3"><label className="grid gap-1.5 text-xs font-bold">Issue date<input type="date" value={invoice.issuedAt} onChange={(event) => update("issuedAt", event.target.value)} className="h-10 rounded-lg border border-neutral-200 bg-white px-3 font-normal dark:border-neutral-700 dark:bg-neutral-950"/></label><label className="grid gap-1.5 text-xs font-bold">Due date<input type="date" value={invoice.dueAt} onChange={(event) => update("dueAt", event.target.value)} className="h-10 rounded-lg border border-neutral-200 bg-white px-3 font-normal dark:border-neutral-700 dark:bg-neutral-950"/></label></div><label className="grid gap-1.5 text-xs font-bold">Customer<input value={invoice.customer.name} onChange={(event) => update("customer", { ...invoice.customer, name: event.target.value })} className="h-10 rounded-lg border border-neutral-200 bg-white px-3 font-normal dark:border-neutral-700 dark:bg-neutral-950"/></label><label className="grid gap-1.5 text-xs font-bold">Customer email<input type="email" value={invoice.customer.email ?? ""} onChange={(event) => update("customer", { ...invoice.customer, email: event.target.value })} className="h-10 rounded-lg border border-neutral-200 bg-white px-3 font-normal dark:border-neutral-700 dark:bg-neutral-950"/></label></div>
      <div className="mt-6 flex items-center justify-between"><h3 className="text-xs font-black uppercase tracking-[0.14em] text-neutral-400">Line items</h3><button type="button" onClick={addLine} className="text-xs font-bold text-emerald-900 dark:text-emerald-300">+ Add item</button></div><div className="mt-3 space-y-3">{invoice.lines.map((line, index) => <div key={line.id} className="rounded-xl bg-neutral-50 p-3 dark:bg-neutral-900"><input value={line.description} onChange={(event) => updateLine(index, { description: event.target.value })} className="h-9 w-full rounded-lg border border-neutral-200 bg-white px-2 text-sm font-medium dark:border-neutral-700 dark:bg-neutral-950"/><div className="mt-2 grid grid-cols-[70px_1fr_70px_auto] gap-2"><input value={line.quantity} onChange={(event) => updateLine(index, { quantity: event.target.value })} className="h-9 rounded-lg border border-neutral-200 bg-white px-2 text-xs dark:border-neutral-700 dark:bg-neutral-950" aria-label="Quantity"/><input value={line.unitPrice} onChange={(event) => updateLine(index, { unitPrice: event.target.value })} className="h-9 rounded-lg border border-neutral-200 bg-white px-2 text-xs dark:border-neutral-700 dark:bg-neutral-950" aria-label="Unit price"/><input value={String(line.taxRateBps / 100)} onChange={(event) => updateLine(index, { taxRateBps: Math.max(0, Math.round(Number(event.target.value || 0) * 100)) })} className="h-9 rounded-lg border border-neutral-200 bg-white px-2 text-xs dark:border-neutral-700 dark:bg-neutral-950" aria-label="Tax percent"/><button type="button" onClick={() => removeLine(index)} className="h-9 rounded-lg px-2 text-xs font-bold text-red-700">×</button></div></div>)}</div>
      <label className="mt-4 grid gap-1.5 text-xs font-bold">Notes<textarea value={invoice.notes ?? ""} onChange={(event) => update("notes", event.target.value)} className="min-h-24 rounded-xl border border-neutral-200 bg-white p-3 font-normal dark:border-neutral-700 dark:bg-neutral-950"/></label>
      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900 dark:border-amber-900 dark:bg-amber-950/20 dark:text-amber-200">Preview only. Issuing, numbering, tax validation, immutable snapshots and audit hashes must come from the authenticated invoice backend.</div>
    </Card>
    <div className="min-w-0"><PowerChainInvoice invoice={invoice}/></div>
  </div>;
}
