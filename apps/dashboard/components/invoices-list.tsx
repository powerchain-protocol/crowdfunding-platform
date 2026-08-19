"use client";
import { useInvoices } from "@powerchain/hooks";
import { Card, Icon, StatusBadge } from "@powerchain/ui";

export function InvoicesList(){
  const { invoices, loading, error, refresh } = useInvoices();
  if (loading) return <div className="grid gap-3">{[1,2,3].map((item)=><div key={item} className="h-20 animate-pulse rounded-2xl bg-neutral-100 dark:bg-neutral-900"/>)}</div>;
  if (error) return <Card className="p-5"><div className="font-bold text-red-700">Invoices unavailable</div><p className="mt-2 text-sm text-neutral-500">{error}</p><button onClick={() => void refresh()} className="mt-4 rounded-xl border px-3 py-2 text-sm font-bold">Retry</button></Card>;
  return <Card className="divide-y divide-neutral-200 dark:divide-neutral-800">{invoices.map((invoice)=><div key={invoice.id} className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between"><div className="min-w-0"><div className="flex items-center gap-2"><span className="font-mono text-sm font-bold">{invoice.number}</span><StatusBadge tone={invoice.status === "PAID" ? "success" : invoice.status === "OVERDUE" ? "warning" : "neutral"}>{invoice.status.toLowerCase()}</StatusBadge></div><div className="mt-1 truncate text-sm text-neutral-500">{invoice.customer.name} · due {invoice.dueAt}</div></div><a href="/tools/invoice-preview" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-950 dark:text-emerald-300">Preview <Icon name="arrow-right"/></a></div>)}{invoices.length === 0 ? <div className="p-8 text-center text-sm text-neutral-500">No invoices yet.</div> : null}</Card>;
}
