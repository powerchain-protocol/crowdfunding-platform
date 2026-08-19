import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@powerchain/common";
import { PLATFORM_VERSION } from "@powerchain/config";
import { ThemeToggle } from "./theme-provider";
import { NotificationBell } from "./notification-bell";

export type IconName = "arrow-right" | "bank" | "bell" | "building" | "chart" | "check" | "file" | "file-check" | "flag" | "globe" | "id-card" | "leaf" | "lock" | "shield" | "signature" | "sparkles" | "ticket" | "vault" | "wallet";

export function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, ReactNode> = {
    "arrow-right": <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    bank: <><path d="m3 10 9-6 9 6"/><path d="M5 10h14"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8"/><path d="M4 20h16"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    building: <><path d="M4 21V4h10v17"/><path d="M14 9h6v12"/><path d="M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1"/><path d="M2 21h20"/></>,
    chart: <><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h5"/></>,
    "file-check": <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="m9 15 2 2 4-4"/></>,
    flag: <><path d="M5 21V4"/><path d="M5 5h11l-2 4 2 4H5"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    "id-card": <><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16c.7-1.5 1.6-2.2 2.5-2.2s1.8.7 2.5 2.2M13 9h5M13 13h5"/></>,
    leaf: <><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z"/><path d="M5 20c2-5 6-8 11-11"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    shield: <><path d="M12 3 20 6v6c0 5-3.3 8-8 9-4.7-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/></>,
    signature: <><path d="M4 17c2-3 4-7 6-7 1.5 0 .2 5 1.8 5 1.2 0 2.4-3 3.5-3 1 0 .4 3 1.7 3 1 0 1.8-1 3-2"/><path d="M4 20h16"/></>,
    sparkles: <><path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3z"/><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z"/><path d="m5 13 .8 2.2L8 16l-2.2.8L5 19l-.8-2.2L2 16l2.2-.8z"/></>,
    ticket: <><path d="M4 7h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4z"/><path d="M12 7v12"/></>,
    vault: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M12 9V7M12 17v-2M9 12H7M17 12h-2"/></>,
    wallet: <><path d="M4 6h14a2 2 0 0 1 2 2v10H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/><path d="M15 11h6v4h-6a2 2 0 1 1 0-4Z"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...common}>{paths[name]}</svg>;
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="group inline-flex items-center gap-2.5 rounded-lg font-semibold tracking-tight text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-950/10 bg-white shadow-sm transition group-hover:shadow-md"><img src="/assets/brand/powerchain.png" alt="" className="h-7 w-7 object-contain" /></span>
      {compact ? null : <span className="leading-none"><span className="block text-[15px] font-bold">PowerChain</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.19em] text-emerald-900">Crowdfunding</span></span>}
    </a>
  );
}

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-950 px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-px hover:bg-emerald-900 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-900/15 disabled:pointer-events-none disabled:opacity-50", className)} {...props} />;
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,.03)] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("min-h-28 w-full rounded-xl border border-slate-200 bg-white p-3.5 text-sm leading-6 text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,.03)] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn("h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,.03)] outline-none transition hover:border-slate-300 focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-[20px] border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,.03),0_12px_34px_rgba(15,23,42,.035)]", className)} {...props} />;
}

export function StatusBadge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" }) {
  const toneClass = { neutral: "border-slate-200 bg-slate-50 text-slate-700", success: "border-emerald-200 bg-emerald-50 text-emerald-900", warning: "border-amber-200 bg-amber-50 text-amber-900", danger: "border-red-200 bg-red-50 text-red-800" }[tone];
  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold leading-none tracking-tight", toneClass)}>{children}</span>;
}

export function MetricCard({ label, value, detail, trend }: { label: string; value: string; detail?: string; trend?: string }) {
  return (
    <Card className="group p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(15,23,42,.07)]">
      <div className="flex items-start justify-between gap-3"><div className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{label}</div>{trend ? <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-900">{trend}</span> : null}</div>
      <div className="mt-3 text-2xl font-bold tracking-[-0.03em] text-slate-950">{value}</div>
      {detail ? <div className="mt-1.5 text-xs leading-5 text-slate-500">{detail}</div> : null}
    </Card>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  const bounded = Math.min(100, Math.max(0, value));
  return <div className={cn("h-2 overflow-hidden rounded-full bg-slate-100", className)}><div className="h-full rounded-full bg-emerald-950 transition-all duration-500" style={{ width: `${bounded}%` }} /></div>;
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 md:flex-row md:items-end">
      <div>
        {eyebrow ? <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.17em] text-emerald-900">{eyebrow}</div> : null}
        <h1 className="max-w-4xl text-3xl font-bold tracking-[-0.035em] text-slate-950 md:text-4xl">{title}</h1>
        {description ? <p className="mt-2.5 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function AppShell({ appName, nav = [], children, notificationCount = 0, notificationHref = "http://localhost:3004/notifications" }: { appName: string; nav?: Array<{ label: string; href: string }>; children: ReactNode; notificationCount?: number; notificationHref?: string }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,.02)] backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3.5"><Logo /><span className="hidden h-5 w-px bg-slate-200 sm:block" /><span className="hidden max-w-48 truncate rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 sm:block">{appName}</span></div>
          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex">{nav.map((item) => <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">{item.label}</a>)}</nav>
            <div className="mx-1 hidden h-5 w-px bg-slate-200 lg:block" />
            <NotificationBell href={notificationHref} unread={notificationCount} />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto min-h-[calc(100vh-260px)] max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">{children}</main>
      <footer className="mt-16 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
          <div><Logo /><p className="mt-4 max-w-xl text-xs leading-5 text-slate-500">Goal-based crowdfunding for humanitarian response, disaster relief, renewables, public-good projects and ticketed utility campaigns—built around verified trust checks, verifiable settlement, policy-controlled treasury operations, tranche releases and evidence-backed impact.</p><div className="mt-4 flex flex-wrap gap-2"><StatusBadge tone="success">Verified trust checks</StatusBadge><StatusBadge>Evidence-gated releases</StatusBadge><StatusBadge>Hash-linked audit</StatusBadge><StatusBadge>v{PLATFORM_VERSION}</StatusBadge></div></div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3"><div><div className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">Platform</div><div className="mt-3 grid gap-2 text-slate-600"><a href="http://localhost:3001/explore">Explore</a><a href="http://localhost:3001/create">Create campaign</a><a href="http://localhost:3007">Explorer</a></div></div><div><div className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">Account</div><div className="mt-3 grid gap-2 text-slate-600"><a href="http://localhost:3000/auth/login">Sign in</a><a href="http://localhost:3000/auth/sign-up">Sign up</a><a href="http://localhost:3004">Dashboard</a></div></div><div><div className="text-xs font-bold uppercase tracking-[.12em] text-slate-400">Resources</div><div className="mt-3 grid gap-2 text-slate-600"><a href="http://localhost:3008">Docs</a><a href="http://localhost:3000/privacy">Privacy</a><a href="http://localhost:3000/terms">Terms</a></div></div></div>
        </div>
        <div className="border-t border-slate-200"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-4 text-[11px] text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><span>© 2026 PowerChain. All rights reserved.</span><span>Financial state is authoritative only after verification and reconciliation.</span></div></div>
      </footer>
    </div>
  );
}

export function Section({ title, description, action, children }: { title: string; description?: string; action?: ReactNode; children: ReactNode }) {
  return <section className="mt-10"><div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><h2 className="text-lg font-bold tracking-[-0.02em] text-slate-950">{title}</h2>{description ? <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-500">{description}</p> : null}</div>{action}</div>{children}</section>;
}

export function FeatureIcon({ name }: { name: IconName }) {
  return <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-900/10 bg-emerald-50 text-emerald-950"><Icon name={name} className="h-5 w-5" /></span>;
}
