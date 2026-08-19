import { AppShell, Card, Icon, PageHeader, Section, StatusBadge } from "@powerchain/ui";
const events=[
  ["#18421","moderation.resource.suspended","org_unknown_44","hash 8d4c…e91a","05:06:22"],
  ["#18420","agreement.signature.requested","agr_flood_01","hash 451e…1e0f","05:02:09"],
  ["#18419","identity.check.verified","org_nrf_01","hash 09da…b770","04:58:41"],
  ["#18418","evidence.verified","cmp_flood_2026/m2","hash ce3a…7991","04:56:08"],
];
export default function Page(){return <AppShell appName="Audit" nav={[{label:"Admin",href:"/"},{label:"Moderation",href:"/moderation"},{label:"Audit",href:"/audit"}]}><PageHeader eyebrow="Append-only audit ledger" title="Every privileged action leaves a tamper-evident trail" description="Events are sequence-ordered and hash-linked. The log is designed to reveal alteration; production storage should add immutable/WORM retention controls."/><Section title="Recent events"><Card className="divide-y divide-slate-200">{events.map(([seq,type,resource,hash,time])=><div key={seq} className="grid gap-3 p-5 md:grid-cols-[90px_1fr_210px_90px] md:items-center"><StatusBadge>{seq}</StatusBadge><div><div className="text-sm font-bold">{type}</div><div className="mt-1 font-mono text-[10px] text-slate-400">{resource}</div></div><code className="font-mono text-xs text-slate-500">{hash}</code><div className="text-xs text-slate-400">{time}</div></div>)}</Card></Section></AppShell>}
