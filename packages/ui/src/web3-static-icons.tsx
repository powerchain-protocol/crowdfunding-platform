import type { ComponentProps } from "react";
import { NetworkSolana, WalletSafe } from "@web3icons/react";

export type StaticWeb3IconProps = Omit<ComponentProps<typeof NetworkSolana>, "variant"> & {
  variant?: "mono" | "branded" | "background";
};

/** Server-safe, tree-shakeable Solana network mark for fixed Solana surfaces. */
export function SolanaNetworkMark({ variant = "mono", color = "currentColor", ...props }: StaticWeb3IconProps) {
  return <NetworkSolana variant={variant} color={color} {...props} />;
}

/** Server-safe, tree-shakeable Safe wallet mark for fixed treasury surfaces. */
export function SafeWalletMark({ variant = "mono", color = "currentColor", ...props }: StaticWeb3IconProps) {
  return <WalletSafe variant={variant} color={color} {...props} />;
}
