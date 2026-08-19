"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "../../../locale-provider";
import { ThemeProvider } from "../../../theme-provider";
import { WalletProvider } from "./wallet-provider";
import { SolanaConnectorProvider } from "./solana-connector-provider";
import { CookiePreferencesProvider } from "../../../cookies";

export function PlatformProviders({ children }: { children: ReactNode }) {
  return (
    <CookiePreferencesProvider>
      <LocaleProvider>
      <ThemeProvider>
        <WalletProvider>
          <SolanaConnectorProvider>{children}</SolanaConnectorProvider>
        </WalletProvider>
      </ThemeProvider>
    </LocaleProvider>
    </CookiePreferencesProvider>
  );
}
