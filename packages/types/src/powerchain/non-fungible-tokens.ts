export interface NonFungibleTokenMetadata {
  name: string;
  symbol?: string;
  description?: string;
  image?: string;
  externalUrl?: string;
  attributes?: ReadonlyArray<{ traitType: string; value: string | number }>;
}
export interface NonFungibleTokenRecord {
  mint: string;
  owner: string;
  network: "devnet" | "mainnet-beta";
  metadataUri?: string;
  metadata?: NonFungibleTokenMetadata;
  standard: "NFT" | "TOKEN_2022_NFT" | "CERTIFICATE";
}
