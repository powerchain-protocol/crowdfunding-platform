"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { isSupportedLocale, localeDirection, type SupportedLocale } from "@powerchain/i18n";

const LocaleContext = createContext<{ locale: SupportedLocale; setLocale: (locale: SupportedLocale) => void }>({ locale: "en", setLocale: () => undefined });

function applyLocale(locale: SupportedLocale) {
  document.documentElement.lang = locale;
  const forced = process.env.NEXT_PUBLIC_FORCE_RTL === "true";
  document.documentElement.dir = forced ? "rtl" : localeDirection(locale);
  document.documentElement.dataset.locale = locale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("powerchain-locale");
    const initial: SupportedLocale = isSupportedLocale(stored) ? stored : "en";
    setLocaleState(initial);
    applyLocale(initial);
  }, []);

  const setLocale = (next: SupportedLocale) => {
    localStorage.setItem("powerchain-locale", next);
    setLocaleState(next);
    applyLocale(next);
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const next = locale === "en" ? "es" : "en";
  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      className="inline-flex h-9 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 text-xs font-semibold text-neutral-700 shadow-sm transition hover:-translate-y-px hover:bg-neutral-50 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-900/10"
      aria-label={locale === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"}
      title={locale === "en" ? "Español" : "English"}
    >
      <span aria-hidden="true">{locale.toUpperCase()}</span>
      <span className="hidden sm:inline">{locale === "en" ? "Español" : "English"}</span>
    </button>
  );
}

export function LocalizedText({ en, es }: { en: string; es: string }) {
  const { locale } = useLocale();
  return <>{locale === "es" ? es : en}</>;
}
