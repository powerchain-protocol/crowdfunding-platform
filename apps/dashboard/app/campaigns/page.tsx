import { AppShell, Card, PageHeader, ProgressBar, StatusBadge } from "@powerchain/ui";
const items=[
  ["Flood Emergency Response","Disaster relief",147200,250000,"Evidence required","/campaigns/cmp_flood/milestones/m2/evidence"],
  ["Mobile Medical Clinics","Humanitarian",84200,120000,"Operational","#"],
  ["Community Solar Microgrid","Renewables",128500,200000,"Procurement milestone","#"],
  ["Clean Energy Community Event","Public good / ticket",32800,50000,"Funding","#"],
] as const;
export default function Page(){return <AppShell appName="Campaigns" nav={[{label:"Dashboard",href:"/"},{label:"Treasury",href:"http://localhost:3005"}]}><PageHeader eyebrow="Organizer" title="Active campaigns" description="Funding progress, milestone state and evidence attention across the organization."/><div className="mt-7 grid gap-4 md:grid-cols-2">{items.map(([title,type,raised,goal,state,href])=><Card key={title} className="p-5"><div className="flex items-start justify-between gap-4"><div><h2 className="font-bold">{title}</h2><p className="mt-1 text-xs text-slate-500">{type}</p></div><StatusBadge tone={state.includes("Evidence")?"warning":"success"}>{state}</StatusBadge></div><div className="mt-5 flex justify-between text-sm"><strong>€{raised.toLocaleString()}</strong><span className="text-slate-500">€{goal.toLocaleString()}</span></div><div className="mt-3"><ProgressBar value={raised/goal*100}/></div>{href!=="#"?<a href={href} className="mt-4 inline-flex text-sm font-bold text-emerald-900">Open milestone evidence →</a>:null}</Card>)}</div></AppShell>}
