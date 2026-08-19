"use client";

import type { ReactNode } from "react";
import { ConnectorProvider, useConnector } from "@solana-commerce/connector";

export function SolanaConnectorProvider({ children }: { children: ReactNode }) {
  return (
    <ConnectorProvider
      config={{
        autoConnect: true,
        debug: process.env.NODE_ENV !== "production" && process.env.NEXT_PUBLIC_WALLET_DEBUG === "true",
        accountPollingIntervalMs: 2_000,
      }}
    >
      {children}
    </ConnectorProvider>
  );
}

export { useConnector as useSolanaConnector };
