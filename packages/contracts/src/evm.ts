export type EvmAddress = `0x${string}`;

export interface SafeReference {
  chainId: number;
  address: EvmAddress | null;
  threshold?: number;
  owners?: readonly EvmAddress[];
}

export function isEvmAddress(value: string): value is EvmAddress {
  return /^0x[a-fA-F0-9]{40}$/.test(value);
}

export function requireSafeAddress(reference: SafeReference): EvmAddress {
  if (!reference.address || !isEvmAddress(reference.address)) {
    throw new Error(`Safe address is not configured for EVM chain ${reference.chainId}`);
  }
  return reference.address;
}
