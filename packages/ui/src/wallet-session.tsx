"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useConnector } from "@solana-commerce/connector";
import { Modal } from "./modals";
import { Icon } from "./icons";
import { Web3WalletIcon } from "./web3-icons";
import { useWalletPreferences } from "./shared/components/provider/wallet-provider";

const SESSION_KEY = "powerchain-wallet-session";
const COOKIE_ADDRESS = "powerchain_wallet_address";
const COOKIE_PROVIDER = "powerchain_wallet_provider";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_WALLET_COOKIE_DOMAIN?.trim();

export type WalletProviderName = "phantom" | "solflare" | "backpack" | "solana" | "embedded";

export interface WalletSession {
  address: string;
  provider: WalletProviderName;
  connectedAt: string;
}

type KnownWallet = {
  id: Exclude<WalletProviderName, "solana" | "embedded">;
  label: string;
  officialHost: string;
  installUrl: string;
};

const KNOWN_WALLETS: readonly KnownWallet[] = [
  { id: "phantom", label: "Phantom", officialHost: "phantom.com", installUrl: "https://phantom.com/download" },
  { id: "solflare", label: "Solflare", officialHost: "www.solflare.com", installUrl: "https://www.solflare.com/" },
  { id: "backpack", label: "Backpack", officialHost: "backpack.app", installUrl: "https://backpack.app/" },
];

function providerId(name: string): WalletProviderName {
  const normalized = name.toLowerCase();
  if (normalized.includes("phantom")) return "phantom";
  if (normalized.includes("solflare")) return "solflare";
  if (normalized.includes("backpack")) return "backpack";
  return "solana";
}

function safeInstallUrl(wallet: KnownWallet): string {
  const parsed = new URL(wallet.installUrl);
  if (parsed.protocol !== "https:" || parsed.hostname !== wallet.officialHost) throw new Error("Wallet installation URL failed allowlist validation.");
  return parsed.toString();
}

function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const prefix = `${name}=`;
  const row = document.cookie.split("; ").find((item) => item.startsWith(prefix));
  return row ? decodeURIComponent(row.slice(prefix.length)) : null;
}

function writeCookie(name: string, value: string, maxAge = SESSION_MAX_AGE_SECONDS) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${COOKIE_DOMAIN ? `; Domain=${COOKIE_DOMAIN}` : ""}`;
}

function clearCookie(name: string) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax${COOKIE_DOMAIN ? `; Domain=${COOKIE_DOMAIN}` : ""}`;
}

function readSession(): WalletSession | null {
  if (typeof window === "undefined") return null;
  const cookieAddress = getCookie(COOKIE_ADDRESS);
  const cookieProvider = getCookie(COOKIE_PROVIDER) as WalletProviderName | null;
  if (cookieAddress && cookieProvider) return { address: cookieAddress, provider: cookieProvider, connectedAt: new Date(0).toISOString() };
  try {
    const stored = window.localStorage.getItem(SESSION_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as WalletSession;
    return parsed?.address && parsed?.provider ? parsed : null;
  } catch { return null; }
}

function persistSession(session: WalletSession) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  writeCookie(COOKIE_ADDRESS, session.address);
  writeCookie(COOKIE_PROVIDER, session.provider);
  window.dispatchEvent(new Event("powerchain-wallet-change"));
}

function clearSession() {
  window.localStorage.removeItem(SESSION_KEY);
  clearCookie(COOKIE_ADDRESS);
  clearCookie(COOKIE_PROVIDER);
  window.dispatchEvent(new Event("powerchain-wallet-change"));
}

export function shortWalletAddress(address: string) {
  return address.length <= 12 ? address : `${address.slice(0, 4)}…${address.slice(-4)}`;
}

export function useWalletSession() {
  const { connected, selectedAccount, selectedWallet } = useConnector();
  const [session, setSession] = useState<WalletSession | null>(null);
  useEffect(() => {
    const sync = () => setSession(readSession());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("powerchain-wallet-change", sync);
    return () => { window.removeEventListener("storage", sync); window.removeEventListener("powerchain-wallet-change", sync); };
  }, []);
  useEffect(() => {
    if (connected && selectedAccount) {
      const next: WalletSession = {
        address: selectedAccount,
        provider: providerId(selectedWallet?.name ?? "solana"),
        connectedAt: new Date().toISOString(),
      };
      persistSession(next);
      setSession(next);
    }
  }, [connected, selectedAccount, selectedWallet]);
  return session;
}

export function WalletConnectModal({ open, onClose, onConnected }: { open: boolean; onClose: () => void; onConnected?: (session: WalletSession) => void }) {
  const { network } = useWalletPreferences();
  const { wallets, select, connecting, selectedAccount, selectedWallet } = useConnector();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const discovered = useMemo(() => new Map(wallets.map((entry) => [entry.name.toLowerCase(), entry])), [wallets]);
  const detectedByKnown = useCallback((known: KnownWallet) => wallets.find((entry) => entry.name.toLowerCase().includes(known.id)), [wallets]);

  useEffect(() => { if (open) setError(null); }, [open]);
  useEffect(() => {
    if (!busy || busy === "embedded" || !selectedAccount || !selectedWallet) return;
    const session: WalletSession = { address: selectedAccount, provider: providerId(selectedWallet.name), connectedAt: new Date().toISOString() };
    persistSession(session);
    onConnected?.(session);
    setBusy(null);
    onClose();
  }, [busy, selectedAccount, selectedWallet, onConnected, onClose]);

  async function connectWallet(name: string) {
    setBusy(name); setError(null);
    try {
      await select(name);
    } catch (cause) {
      setBusy(null);
      setError(cause instanceof Error ? cause.message : "Wallet connection was cancelled or failed.");
    }
  }

  async function connectEmbedded() {
    setBusy("embedded"); setError(null);
    try {
      const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3010";
      const response = await fetch(`${base}/api/v1/wallets/embedded/session`, {
        method: "POST", credentials: "include", headers: { "content-type": "application/json" },
        body: JSON.stringify({ network, returnUrl: window.location.href }),
      });
      const body = await response.json() as { data?: { startUrl?: string }; error?: { message?: string } };
      if (!response.ok || !body.data?.startUrl) throw new Error(body.error?.message ?? "Embedded wallet is not configured.");
      const target = new URL(body.data.startUrl);
      if (target.protocol !== "https:") throw new Error("Embedded wallet provider returned an insecure URL.");
      window.location.assign(target.toString());
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Embedded wallet session could not be started.");
      setBusy(null);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Connect wallet" description="Wallet Standard discovery is provided by Solana Commerce Kit. PowerChain never receives your private key or signs transactions for you." size="sm">
      <div className="grid gap-3">
        {KNOWN_WALLETS.map((known) => {
          const wallet = detectedByKnown(known);
          return (
            <div key={known.id} className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
              <div className="flex items-center justify-between gap-4">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-emerald-950 dark:bg-neutral-900 dark:text-emerald-300"><Web3WalletIcon name={known.id} size={22} variant="mono" /></span>
                  <span><span className="block text-sm font-bold">{known.label}</span><span className="mt-1 block text-xs text-neutral-500">{wallet ? "Detected · Wallet Standard" : "Not installed in this browser"}</span></span>
                </span>
                {wallet ? (
                  <button type="button" disabled={connecting || busy !== null || wallet.connectable === false} onClick={() => void connectWallet(wallet.name)} className="inline-flex h-9 items-center rounded-xl bg-emerald-950 px-3 text-xs font-bold text-white disabled:opacity-50">{busy === wallet.name ? "Connecting…" : "Connect"}</button>
                ) : (
                  <a href={safeInstallUrl(known)} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-neutral-200 px-3 text-xs font-bold text-neutral-800 dark:border-neutral-700 dark:text-white">Install <Icon name="external-link" className="h-3.5 w-3.5" /></a>
                )}
              </div>
            </div>
          );
        })}
        {[...discovered.values()].filter((wallet) => !KNOWN_WALLETS.some((known) => wallet.name.toLowerCase().includes(known.id))).map((wallet) => (
          <button key={wallet.name} type="button" disabled={connecting || busy !== null || wallet.connectable === false} onClick={() => void connectWallet(wallet.name)} className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 text-left dark:border-neutral-800 dark:bg-neutral-950">
            <span><span className="block text-sm font-bold">{wallet.name}</span><span className="mt-1 block text-xs text-neutral-500">Detected Wallet Standard wallet</span></span><span className="text-xs font-bold text-emerald-900">Connect</span>
          </button>
        ))}
        {process.env.NEXT_PUBLIC_EMBEDDED_WALLET_ENABLED === "true" ? (
          <button type="button" onClick={() => void connectEmbedded()} disabled={busy !== null} className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white p-4 text-left dark:border-neutral-800 dark:bg-neutral-950"><span><span className="block text-sm font-bold">Embedded wallet</span><span className="mt-1 block text-xs text-neutral-500">Hosted provider · user-owned signing</span></span><Icon name="chevron-right" /></button>
        ) : null}
      </div>
      {error ? <div role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">{error}</div> : null}
      <div className="mt-5 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-[11px] leading-5 text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">Only install wallets from the official domains shown by these links. Wallet connection is separate from PowerChain account authentication, roles, KYC and treasury authorization.</div>
    </Modal>
  );
}

export function WalletSignInButton({ className = "", compact = false, onConnected, redirectOnConnect }: { className?: string; compact?: boolean; onConnected?: (session: WalletSession) => void; redirectOnConnect?: string }) {
  const session = useWalletSession(); const [open, setOpen] = useState(false);
  return <><button type="button" onClick={() => setOpen(true)} className={`inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm font-bold text-neutral-900 shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white ${className}`}><Icon name="wallet" className="h-4 w-4"/><span>{session ? (compact ? "Connected" : `Connected · ${shortWalletAddress(session.address)}`) : "Wallet sign in"}</span></button><WalletConnectModal open={open} onClose={() => setOpen(false)} onConnected={(connected) => { onConnected?.(connected); if (redirectOnConnect) window.location.assign(redirectOnConnect); }} /></>;
}

export function DashboardWalletControl({ homeHref }: { homeHref?: string }) {
  const session = useWalletSession(); const { disconnect } = useConnector(); const [open, setOpen] = useState(false);
  const targetHome = useMemo(() => homeHref ?? process.env.NEXT_PUBLIC_WEB_URL ?? "http://localhost:3000", [homeHref]);
  const handleDisconnect = useCallback(async () => { await disconnect(); clearSession(); window.location.assign(targetHome); }, [disconnect, targetHome]);
  if (!session) return <><button type="button" onClick={() => setOpen(true)} className="inline-flex h-10 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3.5 text-sm font-bold dark:border-neutral-800 dark:bg-neutral-950"><Icon name="wallet"/><span className="hidden sm:inline">Connect wallet</span></button><WalletConnectModal open={open} onClose={() => setOpen(false)} /></>;
  return <div className="flex items-center gap-2"><span className="inline-flex h-10 items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 text-xs font-bold text-emerald-950 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200" title={session.address}><span className="h-2 w-2 rounded-full bg-emerald-700"/><span>Connected</span><span className="hidden font-mono text-[10px] opacity-70 md:inline">{shortWalletAddress(session.address)}</span></span><button type="button" onClick={() => void handleDisconnect()} className="inline-flex h-10 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 text-xs font-bold dark:border-neutral-800 dark:bg-neutral-950"><Icon name="log-out"/><span className="hidden sm:inline">Disconnect</span></button></div>;
}
