import type { ReactNode } from "react";
import { Web3NetworkIcon, Web3TokenIcon, type Web3IconVariant } from "./web3-icons";

type CoinProps = {
  symbol: string;
  name?: string;
  network?: string;
  amount?: ReactNode;
  fiatValue?: ReactNode;
  variant?: Web3IconVariant;
  size?: number;
  className?: string;
};

/**
 * Canonical PowerChain token row. Token/network identity comes from Web3 Icons;
 * balance and pricing data remain application/domain responsibilities.
 */
export function Coin({
  symbol,
  name,
  network,
  amount,
  fiatValue,
  variant = "mono",
  size = 34,
  className = "",
}: CoinProps) {
  return (
    <div className={`flex min-w-0 items-center gap-3 ${className}`}>
      <span className="relative flex shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-emerald-950 shadow-sm" style={{ width: size, height: size }}>
        <Web3TokenIcon symbol={symbol} size={Math.max(18, size - 12)} variant={variant} />
        {network ? (
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-sm">
            <Web3NetworkIcon network={network} size={11} variant="mono" />
          </span>
        ) : null}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="font-bold text-neutral-950">{symbol}</span>
          {network ? <span className="truncate text-[10px] font-semibold uppercase tracking-[.08em] text-neutral-400">{network}</span> : null}
        </span>
        {name ? <span className="mt-0.5 block truncate text-xs text-neutral-500">{name}</span> : null}
      </span>
      {amount !== undefined || fiatValue !== undefined ? (
        <span className="shrink-0 text-right">
          {amount !== undefined ? <span className="block text-sm font-bold text-neutral-950">{amount}</span> : null}
          {fiatValue !== undefined ? <span className="mt-0.5 block text-xs text-neutral-500">{fiatValue}</span> : null}
        </span>
      ) : null}
    </div>
  );
}
