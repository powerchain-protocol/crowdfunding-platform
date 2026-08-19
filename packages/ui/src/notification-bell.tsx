"use client";

import * as React from "react";
import { Icon } from "./icons";
import { useLocale } from "./locale-provider";

export function NotificationBell({ href = "http://localhost:3004/notifications", unread = 0 }: { href?: string; unread?: number }) {
  const [open, setOpen] = React.useState(false);
  const { locale } = useLocale();
  const es = locale === "es";
  return (
    <div className="relative">
      <button type="button" aria-label={es ? "Notificaciones" : "Notifications"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 shadow-sm transition hover:border-emerald-900/20 hover:bg-emerald-50 hover:text-emerald-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-950/10">
        <Icon name="bell" className="h-[18px] w-[18px]" />
        {unread > 0 ? <span className="pc-notification-count absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-emerald-950 px-1 text-[9px] font-bold text-white">{unread > 9 ? "9+" : unread}</span> : null}
      </button>
      {open ? <div className="pc-notification-menu absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.18)]"><div className="border-b border-neutral-200 px-4 py-3"><div className="text-sm font-bold text-neutral-950">{es ? "Notificaciones" : "Notifications"}</div><div className="mt-0.5 text-xs text-neutral-500">{es ? "Actualizaciones de identidad, acuerdos, evidencia y tesorería." : "Identity, agreements, evidence and treasury updates."}</div></div><div className="p-2"><a href={href} className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50"><span>{es ? "Abrir centro de notificaciones" : "Open notification center"}</span><Icon name="arrow-right" className="h-4 w-4" /></a></div></div> : null}
    </div>
  );
}
