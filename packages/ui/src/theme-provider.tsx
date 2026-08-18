"use client";

import { useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark" | "system";

function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const resolved = resolveTheme(theme);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const saved = (localStorage.getItem("powerchain-theme") as Theme | null) ?? "system";
    applyTheme(saved);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => {
      if ((localStorage.getItem("powerchain-theme") ?? "system") === "system") applyTheme("system");
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);
  return children;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    setTheme((localStorage.getItem("powerchain-theme") as Theme | null) ?? "system");
  }, []);

  const cycle = () => {
    const next: Theme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    localStorage.setItem("powerchain-theme", next);
    setTheme(next);
    applyTheme(next);
  };

  const label = theme === "dark" ? "Dark" : theme === "light" ? "Light" : "System";
  return (
    <button
      type="button"
      onClick={cycle}
      className="inline-flex h-9 items-center gap-2 rounded-xl border bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
      aria-label={`Theme: ${label}. Change theme`}
      title={`Theme: ${label}`}
    >
      <span aria-hidden="true">{theme === "dark" ? "☾" : theme === "light" ? "☀" : "◐"}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
