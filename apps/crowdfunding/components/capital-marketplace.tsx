"use client";

import { useMemo, useState } from "react";
import { Card, Icon, ProgressBar, StatusBadge } from "@powerchain/ui";
import { useLocale } from "@powerchain/ui/locale-provider";
import { capitalText } from "@powerchain/i18n";
import type { ListingFixture } from "../lib/listings";

function euro(value: number) { return new Intl.NumberFormat(undefined, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value); }

export function CapitalMarketplace({ listings }: { listings: ListingFixture[] }) {
  const { locale } = useLocale();
  const t = capitalText(locale);
  const [query, setQuery] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [matchPreferences, setMatchPreferences] = useState(true);
  const [category, setCategory] = useState("ALL");
  const [sort, setSort] = useState<"match" | "goal" | "name">("match");
  const [watchlist, setWatchlist] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return listings
      .filter((item) => !verifiedOnly || item.verified)
      .filter((item) => category === "ALL" || item.category === category)
      .filter((item) => !matchPreferences || item.matchScore >= 75)
      .filter((item) => !needle || [item.productName, item.tagline, item.category, item.location].some((field) => field.toLowerCase().includes(needle)))
      .sort((a, b) => sort === "match" ? b.matchScore - a.matchScore : sort === "name" ? a.productName.localeCompare(b.productName) : b.tranches.reduce((n,x)=>n+x.amount,0)-a.tranches.reduce((n,x)=>n+x.amount,0));
  }, [listings, query, verifiedOnly, matchPreferences, category, sort]);

  return <div>
    <div className="grid gap-3 rounded-[20px] border border-neutral-200 bg-white p-4 shadow-sm lg:grid-cols-[1fr_auto_auto_auto_auto]">
      <label className="relative block"><span className="sr-only">Search</span><Icon name="search" className="pc-start-icon absolute left-3.5 top-3.5 h-4 w-4 text-neutral-400"/><input value={query} onChange={(event)=>setQuery(event.target.value)} className="h-11 w-full rounded-xl border border-neutral-200 bg-white pc-has-start-icon pl-10 pr-3 text-sm outline-none focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10" placeholder={locale === "es" ? "Buscar producto, sector o ubicación" : "Search product, sector or location"}/></label>
      <select value={category} onChange={(event)=>setCategory(event.target.value)} className="h-11 rounded-xl border border-neutral-200 bg-white px-3 text-sm font-semibold"><option value="ALL">{locale === "es" ? "Todos los sectores" : "All sectors"}</option>{Array.from(new Set(listings.map((item)=>item.category))).map((item)=><option key={item} value={item}>{item}</option>)}</select>
      <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 text-sm font-semibold"><input type="checkbox" checked={verifiedOnly} onChange={(event)=>setVerifiedOnly(event.target.checked)} className="h-4 w-4 accent-emerald-900"/>{t.verifiedOnly}</label>
      <label className="flex h-11 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 text-sm font-semibold"><input type="checkbox" checked={matchPreferences} onChange={(event)=>setMatchPreferences(event.target.checked)} className="h-4 w-4 accent-emerald-900"/>{locale === "es" ? "Coincidir preferencias" : "Match preferences"}</label>
      <select value={sort} onChange={(event)=>setSort(event.target.value as typeof sort)} className="h-11 rounded-xl border border-neutral-200 bg-white px-3 text-sm font-semibold"><option value="match">{locale === "es" ? "Mejor coincidencia" : "Best match"}</option><option value="goal">{locale === "es" ? "Objetivo mayor" : "Largest raise"}</option><option value="name">A–Z</option></select>
    </div>
    <div className="mt-5 grid gap-5 xl:grid-cols-3">
      {filtered.map((listing) => {
        const goal = listing.tranches.reduce((total, tranche) => total + tranche.amount, 0);
        const funded = listing.tranches.filter((tranche) => tranche.status !== "FUTURE").reduce((total, tranche) => total + tranche.amount, 0);
        const saved = watchlist.includes(listing.id);
        return <Card key={listing.id} className="overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg">
          <div className="border-b border-neutral-200 bg-gradient-to-br from-emerald-950 to-neutral-900 p-5 text-white">
            <div className="flex items-center justify-between gap-3"><StatusBadge tone={listing.verified ? "success" : "warning"}>{listing.verified ? (locale === "es" ? "Empresa verificada" : "Business verified") : (locale === "es" ? "Verificación pendiente" : "Verification pending")}</StatusBadge><button type="button" onClick={()=>setWatchlist((current)=>saved ? current.filter((id)=>id!==listing.id) : [...current, listing.id])} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white" aria-label={t.watchlist}><Icon name="star" className={`h-4 w-4 ${saved ? "fill-current" : ""}`}/></button></div>
            <h2 className="mt-5 text-xl font-bold tracking-tight">{listing.productName}</h2><p className="mt-1 text-sm leading-6 text-white/70">{listing.tagline}</p>
          </div>
          <div className="p-5">
            <div className="flex flex-wrap gap-2"><StatusBadge>{listing.category}</StatusBadge><StatusBadge>{listing.stage}</StatusBadge><StatusBadge tone="success">{listing.matchScore}% match</StatusBadge></div>
            <div className="mt-5 flex items-end justify-between gap-3"><div><div className="text-xs font-semibold uppercase tracking-[.08em] text-neutral-500">{t.raiseGoal}</div><div className="mt-1 text-2xl font-bold tracking-tight">{euro(goal)}</div></div><div className="text-right text-xs text-neutral-500">{listing.tranches.length} {locale === "es" ? "tramos" : "tranches"}</div></div>
            <div className="mt-3"><ProgressBar value={goal ? funded/goal*100 : 0}/></div>
            <div className="mt-5 grid grid-cols-2 gap-2"><a href={`/listings/${listing.slug}`} className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white text-sm font-bold">{t.dueDiligence}</a><a href={`/deal-room/room_${listing.id}`} className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-950 text-sm font-bold text-white">{t.expressInterest}</a></div>
          </div>
        </Card>;
      })}
    </div>
  </div>;
}
