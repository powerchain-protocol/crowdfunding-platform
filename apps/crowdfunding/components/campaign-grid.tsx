import { Card, Icon, ProgressBar, StatusBadge } from "@powerchain/ui";
import { campaigns } from "../lib/campaigns";

const categoryIcon = (type: string) => type.toLowerCase().includes("renew") || type.toLowerCase().includes("energy") ? "leaf" : type.toLowerCase().includes("event") ? "ticket" : "shield";

export function CampaignGrid() {
  return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{campaigns.map((campaign) => {
    const pct = Math.round(campaign.raised / campaign.goal * 100);
    const icon = categoryIcon(campaign.type) as "leaf" | "ticket" | "shield";
    return <Card key={campaign.slug} className="group overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,.08)]">
      <div className="relative h-40 overflow-hidden bg-emerald-950 p-5 text-white"><div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-white/10 blur-2xl"/><div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"/><div className="relative flex items-start justify-between gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10"><Icon name={icon} className="h-5 w-5"/></span><span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white/90">{campaign.mode}</span></div><div className="relative mt-5"><div className="text-[10px] font-bold uppercase tracking-[.12em] text-white/55">{campaign.type}</div><h2 className="mt-1.5 line-clamp-2 text-lg font-bold leading-6 tracking-tight">{campaign.title}</h2><p className="mt-1 text-xs text-white/60">{campaign.region}</p></div></div>
      <div className="p-5"><p className="line-clamp-3 min-h-[72px] text-sm leading-6 text-slate-600">{campaign.summary}</p><div className="mt-5 flex items-end justify-between"><div><div className="text-lg font-bold">€{campaign.raised.toLocaleString()}</div><div className="mt-0.5 text-[10px] font-medium text-slate-500">reconciled funding</div></div><div className="text-right"><div className="text-xs font-semibold text-slate-600">{pct}%</div><div className="mt-0.5 text-[10px] text-slate-500">of €{campaign.goal.toLocaleString()}</div></div></div><div className="mt-3"><ProgressBar value={pct}/></div><div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4"><StatusBadge tone="success">Verified treasury</StatusBadge><a href={`/campaigns/${campaign.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-950 transition group-hover:gap-2">View project <Icon name="arrow-right" className="h-3.5 w-3.5"/></a></div></div>
    </Card>;
  })}</div>;
}
