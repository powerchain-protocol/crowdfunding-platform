"use client";

import * as React from "react";

export function NotificationBell({ href = "http://localhost:3004/notifications", unread = 0 }: { href?: string; unread?: number }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button type="button" aria-label="Notifications" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-emerald-900/20 hover:bg-emerald-50 hover:text-emerald-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-900/10">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>
        {unread > 0 ? <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-950 px-1 text-[9px] font-bold text-white">{unread > 9 ? "9+" : unread}</span> : null}
      </button>
      {open ? <div className="absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.18)]"><div className="border-b border-slate-200 px-4 py-3"><div className="text-sm font-bold text-slate-950">Notifications</div><div className="mt-0.5 text-xs text-slate-500">Identity, agreements, evidence and treasury updates.</div></div><div className="p-2"><a href={href} className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"><span>Open notification center</span><span aria-hidden="true">→</span></a></div></div> : null}
    </div>
  );
}
