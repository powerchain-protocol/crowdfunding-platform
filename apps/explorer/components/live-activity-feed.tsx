"use client";

import { useEffect, useMemo, useState } from "react";
import { Card, Icon, StatusBadge, useLocale } from "@powerchain/ui";
import { normalizePollIntervalMs, type PublicActivityItem } from "@powerchain/activity";

type Envelope = { data?: PublicActivityItem[]; error?: { code: string; message: string } };

export function LiveActivityFeed() {
  const { locale } = useLocale();
  const es = locale === "es";
  const interval = useMemo(() => normalizePollIntervalMs(process.env.NEXT_PUBLIC_ACTIVITY_POLL_INTERVAL_MS), []);
  const [items, setItems] = useState<PublicActivityItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/api/v1/activity", { headers: { accept: "application/json" }, cache: "no-store" });
        const payload = await response.json() as Envelope;
        if (!active) return;
        if (!response.ok || payload.error) {
          setError(payload.error?.message ?? (es ? "La actividad no está disponible." : "Activity feed unavailable."));
          return;
        }
        setItems(payload.data ?? []);
        setError(null);
        setLastUpdated(new Date());
      } catch {
        if (active) setError(es ? "La actividad no está disponible." : "Activity feed unavailable.");
      }
    };
    void load();
    const timer = window.setInterval(load, interval);
    return () => { active = false; window.clearInterval(timer); };
  }, [interval]);

  return <Card className="overflow-hidden">
    <div className="flex items-center justify-between border-b p-4"><div><h3 className="font-bold">{es ? "Actividad on-chain en vivo" : "Live on-chain activity"}</h3><p className="mt-1 text-xs text-neutral-500">{es ? `Se actualiza cada ${Math.round(interval/1000)}s · solo etiquetas públicas de wallet` : `Refreshes every ${Math.round(interval/1000)}s · public wallet labels only`}</p></div><StatusBadge tone={error ? "warning" : "success"}>{error ? (es ? "Degradado" : "Degraded") : (es ? "En vivo" : "Live")}</StatusBadge></div>
    {error ? <div className="p-5 text-sm text-neutral-600">{error}</div> : <div className="divide-y divide-neutral-200">{items.map((item)=><div key={item.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-950"><Icon name={item.kind === "CONTRIBUTION" ? "wallet" : item.kind === "TRANCHE_RELEASED" ? "vault" : "chart"}/></span><div><div className="text-sm font-bold">{item.kind.replaceAll("_"," ").toLowerCase()}</div><div className="mt-1 text-xs text-neutral-500">{item.publicActor ?? (es ? "Actor público" : "Public actor")}{item.amount ? ` · ${item.amount} ${item.asset ?? ""}` : ""}</div></div></div><div className="text-right"><div className="font-mono text-xs font-semibold">{item.transactionHash ?? "—"}</div><div className="mt-1 text-[10px] text-neutral-400">{new Date(item.createdAt).toLocaleTimeString()}</div></div></div>)}</div>}
    <div className="border-t bg-neutral-50 px-4 py-2 text-[10px] text-neutral-400">{lastUpdated ? (es ? `Última actualización ${lastUpdated.toLocaleTimeString()}` : `Last updated ${lastUpdated.toLocaleTimeString()}`) : (es ? "Esperando la primera actualización" : "Waiting for first update")}</div>
  </Card>;
}
