"use client";

import { useEffect, useState } from "react";
import { Card, Icon, StatusBadge, useLocale } from "@powerchain/ui";
import type { ContributorRank } from "@powerchain/activity";

type Envelope = { data?: ContributorRank[]; error?: { message: string } };

export function OnchainLeaderboard({ campaignId = "cmp_flood_2026" }: { campaignId?: string }) {
  const { locale } = useLocale();
  const es = locale === "es";
  const [rows, setRows] = useState<ContributorRank[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    fetch(`/api/v1/campaigns/${encodeURIComponent(campaignId)}/leaderboard`, { cache: "no-store" })
      .then(async (response) => ({ response, payload: await response.json() as Envelope }))
      .then(({ response, payload }) => { if (!active) return; if (!response.ok || payload.error) setError(payload.error?.message ?? (es ? "Clasificación no disponible" : "Leaderboard unavailable")); else setRows(payload.data ?? []); })
      .catch(() => { if (active) setError(es ? "Clasificación no disponible" : "Leaderboard unavailable"); });
    return () => { active = false; };
  }, [campaignId]);
  return <Card className="overflow-hidden"><div className="flex items-center justify-between border-b p-4"><div><h3 className="font-bold">{es ? "Clasificación on-chain" : "On-chain leaderboard"}</h3><p className="mt-1 text-xs text-neutral-500">{es ? "Top 3 de cuentas contribuyentes del programa/indexador de colaboradores de PowerChain." : "Top 3 contributor accounts from the PowerChain contributors program/indexer."}</p></div><Icon name="star" className="h-5 w-5 text-emerald-900"/></div>{error?<div className="p-5 text-sm text-neutral-600">{error}</div>:<div className="divide-y divide-neutral-200">{rows.map((row)=><div key={row.rank} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 p-4"><span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${row.rank===1?"bg-amber-100 text-amber-900":row.rank===2?"bg-neutral-200 text-neutral-700":"bg-orange-100 text-orange-900"}`}>#{row.rank}</span><div><div className="font-mono text-sm font-bold">{row.contributor}</div><div className="mt-1 text-xs text-neutral-500">{es ? "Campaña" : "Campaign"} {row.campaign}</div></div><StatusBadge tone="success">{Number(row.amountBaseUnits)/1_000_000} {es ? "unidades" : "units"}</StatusBadge></div>)}</div>}</Card>;
}
