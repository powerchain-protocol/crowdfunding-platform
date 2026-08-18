import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@powerchain/common";
import { ThemeToggle } from "./theme-provider";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-slate-950">
      <img src="/assets/brand/powerchain.png" alt="PowerChain" className="h-9 w-9 object-contain" />
      {compact ? null : <span>PowerChain</span>}
    </a>
  );
}

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("inline-flex h-10 items-center justify-center rounded-xl bg-emerald-950 px-4 text-sm font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-50", className)} {...props} />;
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-11 w-full rounded-xl border bg-white px-3 text-sm outline-none transition focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("min-h-28 w-full rounded-xl border bg-white p-3 text-sm outline-none transition focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn("h-11 w-full rounded-xl border bg-white px-3 text-sm outline-none transition focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border bg-white shadow-sm", className)} {...props} />;
}

export function StatusBadge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" }) {
  const toneClass = { neutral: "bg-slate-100 text-slate-700", success: "bg-emerald-50 text-emerald-800", warning: "bg-amber-50 text-amber-800", danger: "bg-red-50 text-red-800" }[tone];
  return <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-semibold", toneClass)}>{children}</span>;
}

export function MetricCard({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <Card className="p-5">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-bold tracking-tight">{value}</div>
      {detail ? <div className="mt-1 text-xs text-slate-500">{detail}</div> : null}
    </Card>
  );
}

export function ProgressBar({ value }: { value: number }) {
  const bounded = Math.min(100, Math.max(0, value));
  return <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-900" style={{ width: `${bounded}%` }} /></div>;
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-4 border-b pb-7 md:flex-row md:items-end">
      <div>
        {eyebrow ? <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">{eyebrow}</div> : null}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        {description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function AppShell({ appName, nav = [], children }: { appName: string; nav?: Array<{ label: string; href: string }>; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b bg-white backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4"><Logo /><span className="hidden h-5 w-px bg-slate-200 sm:block" /><span className="hidden truncate text-sm font-medium text-slate-600 sm:block">{appName}</span></div>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-5 lg:flex">{nav.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-emerald-900">{item.label}</a>)}</nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">{children}</main>
      <footer className="mt-12 border-t bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-9 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <Logo />
            <p className="mt-3 max-w-xl text-xs leading-5 text-slate-500">Transparent crowdfunding for humanitarian, disaster-response, renewable-energy, public-good and ticketed utility campaigns. Financial state becomes authoritative only after verification and reconciliation.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-xs font-medium text-slate-600 sm:grid-cols-4">
            <a href="http://localhost:3001/explore">Explore</a>
            <a href="http://localhost:3001/create">Create</a>
            <a href="http://localhost:3007">Explorer</a>
            <a href="http://localhost:3008">Docs</a>
            <a href="http://localhost:3000/auth/login">Sign in</a>
            <a href="http://localhost:3000/auth/sign-up">Sign up</a>
            <a href="http://localhost:3000/privacy">Privacy</a>
            <a href="http://localhost:3000/terms">Terms</a>
          </div>
        </div>
        <div className="border-t"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-[11px] text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><span>© 2026 PowerChain · Platform v1.3.0</span><span>Dark-green institutional interface · light and dark themes</span></div></div>
      </footer>
    </div>
  );
}

export function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return <section className="mt-8"><div className="mb-4"><h2 className="text-lg font-bold">{title}</h2>{description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}</div>{children}</section>;
}
