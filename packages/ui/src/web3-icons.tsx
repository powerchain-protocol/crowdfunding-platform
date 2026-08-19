"use client";

import type { ReactNode } from "react";
import {
  NetworkIcon,
  TokenIcon,
  WalletIcon,
} from "@web3icons/react/dynamic";

export type Web3IconVariant = "mono" | "branded" | "background";

type SharedWeb3IconProps = {
  size?: number | string;
  variant?: Web3IconVariant;
  color?: string;
  className?: string;
  fallback?: ReactNode;
  label?: string;
};

function TextFallback({ value }: { value: string }) {
  const text = value.trim().slice(0, 4).toUpperCase() || "WEB3";
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-full min-h-5 min-w-5 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 px-1 text-[8px] font-black tracking-tight text-neutral-500"
    >
      {text}
    </span>
  );
}

/**
 * Dynamic token icon for registry-driven asset UIs.
 * Defaults to the monochrome variant so token identity does not introduce
 * blue/brand colors into PowerChain's dark-green/neutral design system.
 */
export function Web3TokenIcon({
  symbol,
  size = 20,
  variant = "mono",
  color = "currentColor",
  className,
  fallback,
  label,
}: SharedWeb3IconProps & { symbol: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      aria-label={label ?? `${symbol} token`}
      role="img"
    >
      <TokenIcon
        symbol={symbol}
        size={size}
        variant={variant}
        color={color}
        className={className}
        fallback={fallback ?? <TextFallback value={symbol} />}
      />
    </span>
  );
}

/** Registry-driven network icon. */
export function Web3NetworkIcon({
  network,
  size = 20,
  variant = "mono",
  color = "currentColor",
  className,
  fallback,
  label,
}: SharedWeb3IconProps & { network: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      aria-label={label ?? `${network} network`}
      role="img"
    >
      <NetworkIcon
        network={network}
        size={size}
        variant={variant}
        color={color}
        className={className}
        fallback={fallback ?? <TextFallback value={network} />}
      />
    </span>
  );
}

/** Registry-driven wallet icon. */
export function Web3WalletIcon({
  name,
  size = 20,
  variant = "mono",
  color = "currentColor",
  className,
  fallback,
  label,
}: SharedWeb3IconProps & { name: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      aria-label={label ?? `${name} wallet`}
      role="img"
    >
      <WalletIcon
        name={name}
        size={size}
        variant={variant}
        color={color}
        className={className}
        fallback={fallback ?? <TextFallback value={name} />}
      />
    </span>
  );
}

export function Web3IconBadge({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 text-[11px] font-bold text-neutral-700 shadow-sm ${className}`}
    >
      <span className="inline-flex h-5 w-5 items-center justify-center text-emerald-950">
        {children}
      </span>
      {label}
    </span>
  );
}

/**
 * Compact infrastructure identity row for known PowerChain settlement rails.
 * Uses monochrome icons to preserve the product's no-blue visual system.
 */
export function PowerChainWeb3Rail() {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Supported blockchain infrastructure">
      <Web3IconBadge label="USDC">
        <Web3TokenIcon symbol="USDC" size={18} />
      </Web3IconBadge>
      <Web3IconBadge label="Solana">
        <Web3NetworkIcon network="solana" size={18} />
      </Web3IconBadge>
      <Web3IconBadge label="Sui">
        <Web3NetworkIcon network="sui" size={18} />
      </Web3IconBadge>
      <Web3IconBadge label="Safe">
        <Web3WalletIcon name="safe" size={18} />
      </Web3IconBadge>
    </div>
  );
}
