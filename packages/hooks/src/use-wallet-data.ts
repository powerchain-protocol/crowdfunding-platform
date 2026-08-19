"use client";

import { useEffect, useState } from "react";
import { fetchWalletData, type WalletData, type SolanaNetworkId } from "@powerchain/data";

export function useWalletData(address: string | null | undefined, network: SolanaNetworkId) {
  const [data, setData] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState(Boolean(address));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address) { setData(null); setLoading(false); setError(null); return; }
    const controller = new AbortController();
    setLoading(true); setError(null);
    void fetchWalletData(address, network, { signal: controller.signal })
      .then(setData)
      .catch((cause) => { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : "Wallet data unavailable."); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [address, network]);

  return { data, loading, error } as const;
}
