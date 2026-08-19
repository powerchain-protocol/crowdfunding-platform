import type { ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@powerchain/common";
import { PLATFORM_VERSION } from "@powerchain/config";
import { ThemeToggle } from "./theme-provider";
import { NotificationBell } from "./notification-bell";
import { DashboardWalletControl, WalletSignInButton } from "./wallet-session";
import { DashboardAccountControl, DashboardHelpRail } from "./account-controls";
import { LanguageToggle, LocalizedText } from "./locale-provider";
import { CurrencySelector, NetworkSelector } from "./shared/components/provider/wallet-provider";
export { LanguageToggle, LocalizedText, useLocale } from "./locale-provider";

import { Icon, type IconName } from "./icons";
export { Icon, IconButton, type IconName } from "./icons";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="group inline-flex items-center gap-2.5 rounded-lg font-semibold tracking-tight text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800/30">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-950/10 bg-white shadow-sm transition group-hover:shadow-md"><img src="/assets/brand/powerchain.png" alt="" className="h-7 w-7 object-contain" /></span>
      {compact ? null : <span className="leading-none"><span className="block text-[15px] font-bold">PowerChain</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.19em] text-emerald-900">Crowdfunding</span></span>}
    </a>
  );
}

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-950 px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-px hover:bg-emerald-900 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-900/15 disabled:pointer-events-none disabled:opacity-50", className)} {...props} />;
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-950 shadow-[0_1px_2px_rgba(0,0,0,.03)] outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("min-h-28 w-full rounded-xl border border-neutral-200 bg-white p-3.5 text-sm leading-6 text-neutral-950 shadow-[0_1px_2px_rgba(0,0,0,.03)] outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn("h-11 w-full rounded-xl border border-neutral-200 bg-white px-3.5 text-sm text-neutral-950 shadow-[0_1px_2px_rgba(0,0,0,.03)] outline-none transition hover:border-neutral-300 focus:border-emerald-800 focus:ring-4 focus:ring-emerald-900/10", className)} {...props} />;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-[20px] border border-neutral-200/80 bg-white shadow-[0_1px_2px_rgba(0,0,0,.03),0_12px_34px_rgba(0,0,0,.035)]", className)} {...props} />;
}

export function StatusBadge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" | "warning" | "danger" }) {
  const toneClass = { neutral: "border-neutral-200 bg-neutral-50 text-neutral-700", success: "border-emerald-200 bg-emerald-50 text-emerald-900", warning: "border-amber-200 bg-amber-50 text-amber-900", danger: "border-red-200 bg-red-50 text-red-800" }[tone];
  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-bold leading-none tracking-tight", toneClass)}>{children}</span>;
}

export function MetricCard({ label, value, detail, trend }: { label: string; value: string; detail?: string; trend?: string }) {
  return (
    <Card className="group p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(0,0,0,.07)]">
      <div className="flex items-start justify-between gap-3"><div className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500">{label}</div>{trend ? <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-900">{trend}</span> : null}</div>
      <div className="mt-3 text-2xl font-bold tracking-[-0.03em] text-neutral-950">{value}</div>
      {detail ? <div className="mt-1.5 text-xs leading-5 text-neutral-500">{detail}</div> : null}
    </Card>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  const bounded = Math.min(100, Math.max(0, value));
  return <div className={cn("h-2 overflow-hidden rounded-full bg-neutral-100", className)}><div className="h-full rounded-full bg-emerald-950 transition-all duration-500" style={{ width: `${bounded}%` }} /></div>;
}

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: ReactNode; title: ReactNode; description?: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-5 border-b border-neutral-200 pb-7 md:flex-row md:items-end">
      <div>
        {eyebrow ? <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.17em] text-emerald-900">{eyebrow}</div> : null}
        <h1 className="max-w-4xl text-3xl font-bold tracking-[-0.035em] text-neutral-950 md:text-4xl">{title}</h1>
        {description ? <p className="mt-2.5 max-w-3xl text-sm leading-6 text-neutral-600 md:text-base">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function AppShell({ appName, nav = [], children, notificationCount = 0, notificationHref = "http://localhost:3004/notifications", accountMode = "none", authHref = "http://localhost:3000/auth/login", homeHref, dashboardHref = "http://localhost:3004" }: { appName: ReactNode; nav?: Array<{ label: ReactNode; href: string }>; children: ReactNode; notificationCount?: number; notificationHref?: string; accountMode?: "none" | "website" | "dashboard"; authHref?: string; homeHref?: string; dashboardHref?: string }) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-950">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white shadow-[0_1px_0_rgba(0,0,0,.02)] backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95 dark:text-white">
        <div className="mx-auto grid min-h-[68px] max-w-[1440px] grid-cols-[1fr_auto] items-center gap-3 px-4 py-2 sm:px-6 xl:grid-cols-[1fr_auto_1fr] lg:px-8">
          <div className="flex min-w-0 items-center gap-3.5 justify-self-start"><Logo /><span className="hidden h-5 w-px bg-neutral-200 dark:bg-neutral-800 sm:block" /><span className="hidden max-w-40 truncate rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 2xl:block">{appName}</span></div>
          <nav aria-label="Primary" className="hidden max-w-[720px] items-center justify-center gap-1 xl:flex">{nav.map((item) => <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white">{item.label}</a>)}</nav>
          <div className="flex min-w-0 items-center justify-self-end gap-2">
            <div className="hidden items-center gap-2 lg:flex"><NetworkSelector compact /><CurrencySelector compact /></div>
            {accountMode === "website" ? <div className="hidden items-center gap-2 sm:flex"><a href={authHref} className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-950 px-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-px hover:bg-emerald-900 hover:shadow-md">Sign in</a><WalletSignInButton compact redirectOnConnect={dashboardHref} /></div> : null}
            {accountMode === "dashboard" ? <><DashboardWalletControl homeHref={homeHref} /><DashboardAccountControl homeHref={homeHref} /></> : null}
            {accountMode === "website" ? <div className="sm:hidden"><WalletSignInButton compact redirectOnConnect={dashboardHref} /></div> : null}
            <NotificationBell href={notificationHref} unread={notificationCount} />
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-neutral-200 px-4 py-2 dark:border-neutral-800 lg:hidden"><NetworkSelector compact /><CurrencySelector compact /></div>
        {accountMode === "website" ? <div className="border-t border-neutral-200 px-4 py-2 dark:border-neutral-800 sm:hidden"><a href={authHref} className="inline-flex h-9 w-full items-center justify-center rounded-xl bg-emerald-950 px-4 text-sm font-bold text-white">Sign in</a></div> : null}
      </header>
      <main className="mx-auto min-h-[calc(100vh-260px)] max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">{accountMode === "dashboard" ? <div className="flex gap-6"><DashboardHelpRail/><div className="min-w-0 flex-1">{children}</div></div> : children}</main>
      <footer className="mt-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:px-8">
          <div><Logo /><p className="mt-4 max-w-xl text-xs leading-5 text-neutral-500"><LocalizedText en="Goal-based crowdfunding and founder capital workflows built around verified identity, milestone escrow, controlled releases and evidence-backed accountability." es="Crowdfunding por objetivos y financiación para fundadores con identidad verificada, escrow por hitos, liberaciones controladas y rendición de cuentas basada en evidencia." /></p><div className="mt-4 flex flex-wrap gap-2"><StatusBadge tone="success"><LocalizedText en="Verified trust checks" es="Verificaciones de confianza" /></StatusBadge><StatusBadge><LocalizedText en="Evidence-gated releases" es="Liberación según evidencia" /></StatusBadge><StatusBadge><LocalizedText en="Hash-linked audit" es="Auditoría enlazada por hash" /></StatusBadge><StatusBadge>v{PLATFORM_VERSION}</StatusBadge></div></div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3"><div><div className="text-xs font-bold uppercase tracking-[.12em] text-neutral-400"><LocalizedText en="Platform" es="Plataforma" /></div><div className="mt-3 grid gap-2 text-neutral-600"><a href="http://localhost:3001/explore"><LocalizedText en="Explore" es="Explorar" /></a><a href="http://localhost:3001/marketplace"><LocalizedText en="Investor marketplace" es="Mercado de inversión" /></a><a href="http://localhost:3007"><LocalizedText en="Explorer" es="Explorador" /></a></div></div><div><div className="text-xs font-bold uppercase tracking-[.12em] text-neutral-400"><LocalizedText en="Account" es="Cuenta" /></div><div className="mt-3 grid gap-2 text-neutral-600"><a href="http://localhost:3000/auth/login"><LocalizedText en="Sign in" es="Iniciar sesión" /></a><a href="http://localhost:3000/auth/sign-up"><LocalizedText en="Sign up" es="Registrarse" /></a><a href="http://localhost:3004"><LocalizedText en="Dashboard" es="Panel" /></a></div></div><div><div className="text-xs font-bold uppercase tracking-[.12em] text-neutral-400"><LocalizedText en="Resources" es="Recursos" /></div><div className="mt-3 grid gap-2 text-neutral-600"><a href="http://localhost:3008"><LocalizedText en="Docs" es="Documentación" /></a><a href="http://localhost:3000/privacy"><LocalizedText en="Privacy" es="Privacidad" /></a><a href="http://localhost:3000/terms"><LocalizedText en="Terms" es="Términos" /></a></div></div></div>
        </div>
        <div className="border-t border-neutral-200"><div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-4 text-[11px] text-neutral-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><span><LocalizedText en="© 2026 PowerChain. All rights reserved." es="© 2026 PowerChain. Todos los derechos reservados." /></span><span><LocalizedText en="Financial state is authoritative only after verification and reconciliation." es="El estado financiero solo es autoritativo después de la verificación y conciliación." /></span></div></div>
      </footer>
    </div>
  );
}

export function Section({ title, description, action, children }: { title: ReactNode; description?: ReactNode; action?: ReactNode; children: ReactNode }) {
  return <section className="mt-10"><div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><h2 className="text-lg font-bold tracking-[-0.02em] text-neutral-950">{title}</h2>{description ? <p className="mt-1.5 max-w-3xl text-sm leading-6 text-neutral-500">{description}</p> : null}</div>{action}</div>{children}</section>;
}

export function FeatureIcon({ name }: { name: IconName }) {
  return <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-900/10 bg-emerald-50 text-emerald-950"><Icon name={name} className="h-5 w-5" /></span>;
}

export { WalletConnectModal, WalletSignInButton, DashboardWalletControl, useWalletSession, shortWalletAddress, type WalletSession, type WalletProviderName } from "./wallet-session";

export { Counter } from "./counter";
export { Countdown } from "./countdown";
export { FundingProgress } from "./funding-progress";

export { Modal, ConfirmationModal, TransactionReviewModal, type ModalProps, type ModalSize, type TransactionReviewItem } from "./modals";

export { CurrencySelector, NetworkSelector, WalletProvider, useWalletPreferences, type DisplayCurrency, type SolanaNetworkMode } from "./shared/components/provider/wallet-provider";
export { PlatformProviders } from "./shared/components/provider/platform-provider";
export { CardAction, CardIcon, CardStatusDot } from "./components/card";

export { SolanaConnectorProvider, useSolanaConnector } from "./shared/components/provider/solana-connector-provider";

export { CookiePreferencesProvider, CookieBanner, useCookiePreferences } from "./cookies";
export { SavedPrompts, MessagesWorkspace } from "./components/messages";

export { DashboardAccountControl, DashboardHelpRail } from "./account-controls";
