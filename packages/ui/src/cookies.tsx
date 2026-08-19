"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Button } from "./components/button";

const COOKIE_NAME = "powerchain_cookie_preferences";
const RETENTION_DAYS = 27;

type Preferences = { essential: true; preferences: boolean; analytics: boolean; decided: boolean };
const defaults: Preferences = { essential: true, preferences: false, analytics: false, decided: false };
const CookieContext = createContext<{ preferences: Preferences; save(next: Omit<Preferences, "essential" | "decided">): void } | null>(null);

function readCookie(): Preferences {
  if (typeof document === "undefined") return defaults;
  const prefix = `${COOKIE_NAME}=`;
  const raw = document.cookie.split("; ").find((part) => part.startsWith(prefix))?.slice(prefix.length);
  if (!raw) return defaults;
  try { return { essential: true, decided: true, ...(JSON.parse(decodeURIComponent(raw)) as Omit<Preferences, "essential" | "decided">) }; }
  catch { return defaults; }
}

export function CookiePreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(defaults);
  useEffect(() => setPreferences(readCookie()), []);
  function save(next: Omit<Preferences, "essential" | "decided">) {
    const stored: Preferences = { essential: true, decided: true, ...next };
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(next))}; Path=/; Max-Age=${RETENTION_DAYS * 86400}; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    setPreferences(stored);
  }
  const value = useMemo(() => ({ preferences, save }), [preferences]);
  return <CookieContext.Provider value={value}>{children}<CookieBanner /></CookieContext.Provider>;
}

export function useCookiePreferences() {
  const value = useContext(CookieContext);
  if (!value) throw new Error("useCookiePreferences must be used inside CookiePreferencesProvider.");
  return value;
}

export function CookieBanner() {
  const context = useContext(CookieContext);
  if (!context || context.preferences.decided) return null;
  return <div className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xl dark:border-neutral-800 dark:bg-neutral-950 sm:p-5"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><div className="text-sm font-bold">Cookie preferences</div><p className="mt-1 max-w-xl text-xs leading-5 text-neutral-500">Essential cookies keep sign-in and security working. Optional preferences are stored only after you choose. PowerChain does not use this banner to retain your raw IP address.</p></div><div className="flex shrink-0 gap-2"><Button variant="outline" size="sm" onClick={() => context.save({ preferences: false, analytics: false })}>Essential only</Button><Button size="sm" onClick={() => context.save({ preferences: true, analytics: false })}>Allow preferences</Button></div></div></div>;
}
