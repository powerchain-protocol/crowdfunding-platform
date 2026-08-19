"use client";

import { useWalletData } from "@powerchain/hooks";
import { AppShell, Card, CardIcon, CardStatusDot, Icon, PageHeader, StatusBadge, useWalletPreferences, useWalletSession } from "@powerchain/ui";

export function WalletOverview() {
  const session = useWalletSession();
  const { network } = useWalletPreferences();
  const { data, loading, error } = useWalletData(session?.address, network);

  return <AppShell accountMode="dashboard" appName="Wallet" notificationCount={3} nav={[{ label: "Dashboard", href: "/" }, { label: "Wallet", href: "/wallet" }, { label: "Treasury", href: "http://localhost:3005" }]}>
    <PageHeader eyebrow="Wallet data" title="Connected wallet" description="Read-only balances and recent signatures are fetched server-side from the selected Solana network. Signing remains in the wallet." />
    {!session ? <Card className="mt-7 p-6"><div className="flex items-center gap-3"><CardIcon><Icon name="wallet" /></CardIcon><div><div className="font-bold">Connect a wallet</div><div className="mt-1 text-sm text-neutral-500">Use the header wallet control to connect before loading on-chain data.</div></div></div></Card> : null}
    {session ? <div className="mt-7 grid gap-4 lg:grid-cols-3"><Card className="p-5"><div className="flex items-start justify-between"><CardIcon><Icon name="wallet" /></CardIcon><StatusBadge tone="success">{network}</StatusBadge></div><div className="mt-4 break-all font-mono text-xs text-neutral-600">{session.address}</div><div className="mt-4"><CardStatusDot active label="Connected" /></div></Card><Card className="p-5"><div className="text-xs font-bold uppercase tracking-[.1em] text-neutral-400">SOL balance</div><div className="mt-3 text-3xl font-bold">{loading ? "…" : data?.sol ?? "—"}</div><div className="mt-1 text-xs text-neutral-500">{data ? `${data.lamports} lamports` : "Selected network balance"}</div></Card><Card className="p-5"><div className="text-xs font-bold uppercase tracking-[.1em] text-neutral-400">Token accounts</div><div className="mt-3 text-3xl font-bold">{loading ? "…" : data?.tokens.length ?? "—"}</div><div className="mt-1 text-xs text-neutral-500">SPL Token + Token-2022</div></Card></div> : null}
    {error ? <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div> : null}
    {data ? <Card className="mt-4 overflow-hidden"><div className="border-b border-neutral-200 p-5"><div className="font-bold">Recent activity</div><div className="mt-1 text-xs text-neutral-500">Latest signatures from {network}.</div></div><div className="divide-y divide-neutral-200">{data.signatures.length ? data.signatures.map((item) => <div key={item.signature} className="flex items-center justify-between gap-4 p-4"><code className="min-w-0 truncate text-xs">{item.signature}</code><StatusBadge tone={item.err ? "danger" : "success"}>{item.err ? "Failed" : "Confirmed"}</StatusBadge></div>) : <div className="p-5 text-sm text-neutral-500">No recent signatures returned.</div>}</div></Card> : null}
  </AppShell>;
}
