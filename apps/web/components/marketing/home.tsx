import { AppShell, Card, FeatureIcon, Icon, ProgressBar, Section, StatusBadge } from "@powerchain/ui";
import { PowerChainWeb3Rail } from "@powerchain/ui/web3-icons";

const features = [
  { icon: "briefcase" as const, title: "Founder raises", copy: "Build investor-ready listings with pitch materials, team bios, deal terms and a raise derived from 3–5 milestone tranches." },
  { icon: "users" as const, title: "Investor marketplace", copy: "Search, filter, match to preferences, watch opportunities and move qualified conversations into private deal rooms." },
  { icon: "bank" as const, title: "Bank-first EUR", copy: "Supporters can contribute through familiar SEPA flows while settlement and reconciliation remain visible behind the scenes." },
  { icon: "id-card" as const, title: "Identity & business trust", copy: "KYC, business, bank, beneficiary and treasury-control checks appear as independent verified badges—not one vague trust score." },
  { icon: "signature" as const, title: "Native agreements", copy: "Counsel-approved templates are filled from verified deal terms, reviewed in-app and signed against an exact document hash." },
  { icon: "vault" as const, title: "Proof-gated escrow", copy: "Reserve funding and release it tranche-by-tranche only after proof, agreement and treasury-policy gates are satisfied." },
  { icon: "shield" as const, title: "Policy-controlled treasury", copy: "Campaign funds move through explicit approval rules, milestone gates and auditable treasury proposals." },
  { icon: "file-check" as const, title: "Evidence before release", copy: "Invoices, receipts and field proof can be verified before the next disbursement is made available." },
  { icon: "bell" as const, title: "Workflow notifications", copy: "In-app and email alerts surface signatures, identity checks, evidence reviews, releases and moderation events." },
  { icon: "leaf" as const, title: "Renewables-ready", copy: "Use milestone-based funding for solar, storage, microgrid and community-energy projects." },
];

const categories = ["Disaster relief", "Humanitarian", "Medical", "Renewables", "Public good", "Community", "Ticketed utility"];

export function MarketingHome() {
  return <AppShell appName="Funding & Capital Infrastructure" nav={[{label:"Explore projects",href:"http://localhost:3001/explore"},{label:"Investor marketplace",href:"http://localhost:3001/marketplace"},{label:"How it works",href:"/how-it-works"},{label:"About",href:"/about"},{label:"Docs",href:"http://localhost:3008"},{label:"Sign in",href:"/auth/login"}]}>
    <section className="pc-grid-bg relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white px-6 py-10 shadow-[0_24px_70px_rgba(0,0,0,.06)] sm:px-10 lg:px-14 lg:py-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-900/[.06] blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[1.06fr_.94fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2"><StatusBadge tone="success">Transparent funding infrastructure</StatusBadge><StatusBadge>Platform v1.0.0</StatusBadge></div>
          <h1 className="mt-6 max-w-4xl text-[44px] font-bold leading-[1.02] tracking-[-0.055em] text-neutral-950 sm:text-5xl lg:text-[64px]">Fund the mission.<br/><span className="text-emerald-950">Verify what happens next.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">PowerChain connects goal-based crowdfunding and structured founder raises to verified identity, deal rooms, milestone escrow, transparent treasury controls and evidence-gated releases.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="http://localhost:3001/marketplace" className="inline-flex h-11 items-center gap-2 rounded-xl bg-emerald-950 px-5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-px hover:bg-emerald-900 hover:shadow-md">Investor marketplace <Icon name="arrow-right" /></a><a href="http://localhost:3001/explore" className="inline-flex h-11 items-center gap-2 rounded-xl bg-emerald-950 px-5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-px hover:bg-emerald-900 hover:shadow-md">Explore projects</a><a href="http://localhost:3001/create" className="inline-flex h-11 items-center rounded-xl border border-neutral-200 bg-white px-5 text-sm font-bold text-neutral-950 transition hover:-translate-y-px hover:border-neutral-300 hover:shadow-sm">Create campaign</a></div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-neutral-500">{["Verified organization checks","Reconciled funding totals","Evidence-gated releases","Tamper-evident audit trail"].map((item)=><span key={item} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-950"><Icon name="check" className="h-3 w-3" /></span>{item}</span>)}</div>
        </div>

        <div className="relative lg:pl-5">
          <Card className="relative overflow-hidden p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4"><div><div className="text-[11px] font-bold uppercase tracking-[.14em] text-neutral-400">Campaign transparency</div><h2 className="mt-2 text-xl font-bold tracking-tight">Flood Emergency Response</h2><p className="mt-1 text-sm text-neutral-500">Humanitarian · Northern Europe</p></div><StatusBadge tone="success">Treasury verified</StatusBadge></div>
            <div className="mt-7 flex items-end justify-between"><div><div className="text-3xl font-bold tracking-[-.04em]">€147,200</div><div className="mt-1 text-xs text-neutral-500">reconciled funding</div></div><div className="text-right"><div className="text-sm font-bold">€250,000</div><div className="mt-1 text-xs text-neutral-500">target</div></div></div>
            <div className="mt-4"><ProgressBar value={59}/></div>
            <div className="mt-6 grid grid-cols-3 gap-2">{[["€84.2k","Available"],["2 of 3","Approvals"],["2 / 4","Milestones"]].map(([value,label])=><div key={label} className="rounded-xl border border-neutral-200 bg-neutral-50 p-3"><div className="text-sm font-bold">{value}</div><div className="mt-1 text-[10px] font-medium text-neutral-500">{label}</div></div>)}</div>
            <div className="mt-6 border-t border-neutral-200 pt-5"><div className="flex items-center justify-between gap-3"><div><div className="text-sm font-bold">Next release · M2</div><div className="mt-1 text-xs text-neutral-500">Evidence review required before €30,000 disbursement</div></div><StatusBadge tone="warning">Pending proof</StatusBadge></div></div>
          </Card>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg sm:block"><div className="flex items-center gap-3"><FeatureIcon name="shield"/><div><div className="text-xs font-bold">Policy gate active</div><div className="mt-1 text-[10px] text-neutral-500">No automatic fund release</div></div></div></div>
        </div>
      </div>
    </section>

    <div className="mt-6 grid gap-4 border-y border-neutral-200 py-4 lg:grid-cols-[1fr_auto] lg:items-center"><div className="flex flex-wrap items-center gap-2"><span className="mr-2 text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400">Campaign types</span>{categories.map((category)=><span key={category} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-neutral-600 shadow-sm ring-1 ring-neutral-200">{category}</span>)}</div><div><div className="mb-2 text-[10px] font-bold uppercase tracking-[.14em] text-neutral-400 lg:text-right">Supported settlement infrastructure</div><PowerChainWeb3Rail/></div></div>

    <Section title="Built for accountable funding" description="The supporter journey stays familiar while treasury controls, evidence and reconciliation become more visible after payment.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{features.map(({icon,title,copy})=><Card key={title} className="group p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,.08)]"><FeatureIcon name={icon}/><h3 className="mt-5 font-bold tracking-tight">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{copy}</p></Card>)}</div>
    </Section>

    <Section title="One funding lifecycle, not disconnected features" description="Every rail ultimately resolves into the same campaign, settlement and evidence model.">
      <Card className="overflow-hidden"><div className="grid divide-y lg:grid-cols-4 lg:divide-x lg:divide-y-0">{[
        ["01","Support","Bank, wallet, QR or checkout"],
        ["02","Settle","EURe, USDC and supported networks"],
        ["03","Control","Treasury policy + approvals"],
        ["04","Prove","Milestones, evidence and impact"],
      ].map(([number,title,copy])=><div key={number} className="p-6"><div className="text-[11px] font-bold text-emerald-900">{number}</div><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{copy}</p></div>)}</div></Card>
    </Section>

    <section className="mt-12 overflow-hidden rounded-[26px] bg-emerald-950 px-6 py-9 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8"><div><div className="text-[11px] font-bold uppercase tracking-[.16em] text-emerald-200">Start with transparency built in</div><h2 className="mt-3 text-2xl font-bold tracking-[-.03em] sm:text-3xl">Create a campaign or founder raise with verification, milestone terms and escrow controls from day one.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">Founders and campaign operators get structured workflows while investors/supporters see verified terms, proof gates and transparent fund movement.</p></div><a href="http://localhost:3001/create" className="mt-6 inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-emerald-950 shadow-sm transition hover:-translate-y-px lg:mt-0">Create campaign <Icon name="arrow-right"/></a></section>
  </AppShell>;
}
