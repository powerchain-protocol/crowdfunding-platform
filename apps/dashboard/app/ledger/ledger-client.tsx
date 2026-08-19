"use client";
import { useEffect, useState } from "react";
import { Card, Icon, StatusBadge } from "@powerchain/ui";

type Posting={id:string;account:string;asset:string;direction:string;amountMinor:string};
type Journal={id:string;reference:string;kind:string;createdAt:string;postings:Posting[]};

export function LedgerClient(){
  const [rows,setRows]=useState<Journal[]>([]); const [loading,setLoading]=useState(true); const [error,setError]=useState<string|null>(null);
  const api=process.env.NEXT_PUBLIC_API_URL||"http://localhost:3010";
  useEffect(()=>{let live=true; void fetch(`${api}/api/v1/ledger/journals?limit=50`,{credentials:"include",cache:"no-store"}).then(async r=>{const b=await r.json().catch(()=>null);if(!r.ok)throw new Error(b?.error?.message||"Ledger could not be loaded.");return b;}).then(b=>{if(live)setRows(b?.data||[])}).catch(e=>{if(live)setError(e instanceof Error?e.message:"Ledger could not be loaded.")}).finally(()=>{if(live)setLoading(false)});return()=>{live=false}},[api]);
  if(loading)return <Card className="p-5 text-sm text-neutral-500">Loading ledger…</Card>;
  if(error)return <Card className="p-5"><div className="flex items-center gap-2 text-sm font-bold"><Icon name="shield"/>Ledger unavailable</div><p className="mt-2 text-sm text-neutral-500">{error}</p></Card>;
  if(!rows.length)return <Card className="p-5"><div className="font-bold">No user-owned journals yet</div><p className="mt-2 text-sm text-neutral-500">Confirmed provider settlements and explicitly self-reported entries will appear here with their accounting classification.</p></Card>;
  return <div className="grid gap-4">{rows.map(row=><Card key={row.id} className="overflow-hidden"><div className="flex flex-col gap-2 border-b border-neutral-200 p-4 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between"><div><div className="font-bold">{row.kind}</div><div className="mt-1 text-xs text-neutral-500">{row.reference} · {new Date(row.createdAt).toLocaleString()}</div></div><StatusBadge tone={row.kind.includes("SELF_REPORTED")?"warning":"success"}>{row.kind.includes("SELF_REPORTED")?"Self-reported":"Recorded"}</StatusBadge></div><div className="divide-y divide-neutral-200 dark:divide-neutral-800">{row.postings.map(posting=><div key={posting.id} className="grid gap-2 p-4 text-xs sm:grid-cols-[1fr_100px_120px_140px]"><span className="font-semibold">{posting.account}</span><span>{posting.asset}</span><span>{posting.direction}</span><span className="font-mono text-neutral-500">{posting.amountMinor}</span></div>)}</div></Card>)}</div>;
}
