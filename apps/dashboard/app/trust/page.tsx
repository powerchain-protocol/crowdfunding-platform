import { AppShell, Card, Icon, PageHeader, Section, StatusBadge } from "@powerchain/ui";
import { IdentityDocumentUpload } from "../../components/identity-upload";

const checks = [
  ["Identity document", "VERIFIED", "Government-issued ID", "2026-08-18"],
  ["Proof of address", "UNDER_REVIEW", "Recent address document", "Submitted today"],
  ["Business registry", "VERIFIED", "Organization registration", "2026-08-17"],
  ["Beneficial owner", "PENDING", "Ownership/control check", "Action required"],
  ["Bank account", "VERIFIED", "Settlement account ownership", "2026-08-18"],
  ["Treasury control", "VERIFIED", "Campaign Safe owner policy", "2026-08-18"],
];

export default function Page(){return <AppShell appName="Identity & Trust" notificationCount={3} nav={[{label:"Dashboard",href:"/"},{label:"Agreements",href:"/agreements"},{label:"Notifications",href:"/notifications"}]}><PageHeader eyebrow="Organization trust center" title="Identity and business verification" description="Track every trust check independently so campaigns can show exactly what has—and has not—been verified."/><div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{checks.map(([name,status,copy,date])=><Card key={name} className="p-5"><div className="flex items-start justify-between gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-950"><Icon name={name.includes("Business")?"building":name.includes("Treasury")?"vault":"id-card"}/></span><StatusBadge tone={status==="VERIFIED"?"success":status==="UNDER_REVIEW"?"warning":"neutral"}>{status.replaceAll("_"," ")}</StatusBadge></div><h2 className="mt-4 font-bold">{name}</h2><p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p><div className="mt-3 text-[10px] font-semibold uppercase tracking-[.1em] text-slate-400">{date}</div></Card>)}</div><Section title="Document submission" description="Upload only documents requested by a verification check. A document upload never means a check has passed."><Card className="p-6"><IdentityDocumentUpload/></Card></Section></AppShell>}
