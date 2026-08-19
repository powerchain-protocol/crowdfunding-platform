export interface WalletActionBoundary {
  walletAddress: string;
  network: "devnet" | "mainnet-beta";
  action: "CONNECT" | "SIGN_MESSAGE" | "SIGN_TRANSACTION" | "SEND_TRANSACTION";
  userApprovalRequired: true;
  serverMaySign: false;
}

export function createWalletActionBoundary(
  walletAddress: string,
  network: "devnet" | "mainnet-beta",
  action: WalletActionBoundary["action"],
): WalletActionBoundary {
  return { walletAddress, network, action, userApprovalRequired: true, serverMaySign: false };
}
