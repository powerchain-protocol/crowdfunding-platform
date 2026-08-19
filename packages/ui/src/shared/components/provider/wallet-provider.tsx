"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ChevronDownIcon, GlobeIcon } from "@radix-ui/react-icons";
import { cn } from "../../../lib/utils";

export type DisplayCurrency = "USD" | "EUR" | "GBP";
export type SolanaNetworkMode = "devnet" | "mainnet-beta";

const CURRENCY_KEY = "powerchain-display-currency";
const NETWORK_KEY = "powerchain-solana-network";
const CURRENCY_COOKIE = "powerchain_currency";
const NETWORK_COOKIE = "powerchain_solana_network";

export const SUPPORTED_CURRENCIES: readonly DisplayCurrency[] = ["USD", "EUR", "GBP"];
export const SUPPORTED_SOLANA_NETWORKS: readonly SolanaNetworkMode[] = ["devnet", "mainnet-beta"];
export const DEFAULT_DISPLAY_CURRENCY: DisplayCurrency = "USD";
export const DEFAULT_SOLANA_NETWORK: SolanaNetworkMode = "devnet";

interface WalletPreferencesContextValue {
  currency: DisplayCurrency;
  network: SolanaNetworkMode;
  setCurrency(currency: DisplayCurrency): void;
  setNetwork(network: SolanaNetworkMode): void;
}

const WalletPreferencesContext = createContext<WalletPreferencesContextValue | null>(null);

function isCurrency(value: string | null): value is DisplayCurrency {
  return value !== null && SUPPORTED_CURRENCIES.includes(value as DisplayCurrency);
}

function isNetwork(value: string | null): value is SolanaNetworkMode {
  return value !== null && SUPPORTED_SOLANA_NETWORKS.includes(value as SolanaNetworkMode);
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const prefix = `${name}=`;
  const item = document.cookie.split("; ").find((row) => row.startsWith(prefix));
  return item ? decodeURIComponent(item.slice(prefix.length)) : null;
}

function persist(name: string, key: string, value: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, value);
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

async function syncPreference(patch: { defaultCurrency?: DisplayCurrency; solanaNetwork?: SolanaNetworkMode }) {
  const api = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3010";
  try {
    await fetch(`${api}/api/v1/users/preferences`, {
      method: "PATCH",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(patch),
    });
  } catch {
    // Local preference persistence remains available when the API/database is offline.
  }
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<DisplayCurrency>(DEFAULT_DISPLAY_CURRENCY);
  const [network, setNetworkState] = useState<SolanaNetworkMode>(DEFAULT_SOLANA_NETWORK);

  useEffect(() => {
    const storedCurrency = window.localStorage.getItem(CURRENCY_KEY) ?? readCookie(CURRENCY_COOKIE);
    const storedNetwork = window.localStorage.getItem(NETWORK_KEY) ?? readCookie(NETWORK_COOKIE);
    if (isCurrency(storedCurrency)) setCurrencyState(storedCurrency);
    if (isNetwork(storedNetwork)) setNetworkState(storedNetwork);

    const api = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3010";
    const controller = new AbortController();
    void fetch(`${api}/api/v1/users/preferences`, { credentials: "include", cache: "no-store", signal: controller.signal })
      .then(async (response) => response.ok ? response.json() as Promise<{ data?: { defaultCurrency?: string; solanaNetwork?: string } }> : null)
      .then((body) => {
        const serverCurrency = body?.data?.defaultCurrency ?? null;
        const serverNetwork = body?.data?.solanaNetwork ?? null;
        if (isCurrency(serverCurrency)) { setCurrencyState(serverCurrency); persist(CURRENCY_COOKIE, CURRENCY_KEY, serverCurrency); }
        if (isNetwork(serverNetwork)) { setNetworkState(serverNetwork); persist(NETWORK_COOKIE, NETWORK_KEY, serverNetwork); }
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const setCurrency = useCallback((next: DisplayCurrency) => {
    setCurrencyState(next);
    persist(CURRENCY_COOKIE, CURRENCY_KEY, next);
    window.dispatchEvent(new CustomEvent("powerchain-currency-change", { detail: next }));
    void syncPreference({ defaultCurrency: next });
  }, []);

  const setNetwork = useCallback((next: SolanaNetworkMode) => {
    setNetworkState(next);
    persist(NETWORK_COOKIE, NETWORK_KEY, next);
    window.dispatchEvent(new CustomEvent("powerchain-network-change", { detail: next }));
    void syncPreference({ solanaNetwork: next });
  }, []);

  const value = useMemo(() => ({ currency, network, setCurrency, setNetwork }), [currency, network, setCurrency, setNetwork]);
  return <WalletPreferencesContext.Provider value={value}>{children}</WalletPreferencesContext.Provider>;
}

export function useWalletPreferences(): WalletPreferencesContextValue {
  const value = useContext(WalletPreferencesContext);
  if (!value) throw new Error("useWalletPreferences must be used inside WalletProvider.");
  return value;
}

export function CurrencySelector({ compact = false }: { compact?: boolean }) {
  const { currency, setCurrency } = useWalletPreferences();
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Display currency</span>
      <select
        aria-label="Display currency"
        value={currency}
        onChange={(event) => setCurrency(event.target.value as DisplayCurrency)}
        className={cn(
          "h-9 appearance-none rounded-xl border border-neutral-200 bg-white pl-3 pr-8 text-xs font-bold text-neutral-700 outline-none transition hover:border-neutral-300 focus:border-emerald-800 focus:ring-4 focus:ring-emerald-950/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200",
          compact ? "w-[72px]" : "w-[84px]",
        )}
      >
        {SUPPORTED_CURRENCIES.map((code) => <option key={code} value={code}>{code}</option>)}
      </select>
      <ChevronDownIcon aria-hidden className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-neutral-400" />
    </label>
  );
}

export function NetworkSelector({ compact = false }: { compact?: boolean }) {
  const { network, setNetwork } = useWalletPreferences();
  return (
    <label className="relative inline-flex items-center">
      <span className="sr-only">Solana network</span>
      <GlobeIcon aria-hidden className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-emerald-800 dark:text-emerald-300" />
      <select
        aria-label="Solana network"
        value={network}
        onChange={(event) => setNetwork(event.target.value as SolanaNetworkMode)}
        className={cn(
          "h-9 appearance-none rounded-xl border border-neutral-200 bg-white pl-8 pr-8 text-xs font-bold text-neutral-700 outline-none transition hover:border-neutral-300 focus:border-emerald-800 focus:ring-4 focus:ring-emerald-950/10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200",
          compact ? "w-[104px]" : "w-[132px]",
        )}
      >
        <option value="devnet">Devnet</option>
        <option value="mainnet-beta">Mainnet</option>
      </select>
      <ChevronDownIcon aria-hidden className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-neutral-400" />
    </label>
  );
}
