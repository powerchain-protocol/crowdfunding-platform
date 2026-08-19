# Web3 Icons

PowerChain uses [`@web3icons/react`](https://github.com/0xa3k5/web3icons) for token, network and wallet identity icons.

## Version

```text
@web3icons/react 4.1.20
```

The dependency is owned by `@powerchain/ui`; application packages should not import Web3 Icons directly.

```tsx
import {
  Web3TokenIcon,
  Web3NetworkIcon,
  Web3WalletIcon,
} from "@powerchain/ui/web3-icons";
```

## Examples

```tsx
<Web3TokenIcon symbol="USDC" />
<Web3NetworkIcon network="solana" />
<Web3NetworkIcon network="sui" />
<Web3WalletIcon name="safe" />
```

## Design rule

PowerChain defaults to `variant="mono"` with `currentColor` so Web3 identity icons inherit the white / neutral / black / dark-green design system instead of adding unrelated blue UI chrome.

Use `variant="branded"` only when the brand color is essential to wallet/token identification, such as a wallet picker or explicit asset selector.

## Bundle strategy

The upstream library supports two approaches:

- individual static components: server-safe and tree-shakeable;
- dynamic `TokenIcon`, `NetworkIcon`, and `WalletIcon` components: client-side and registry-driven, but not tree-shakeable.

PowerChain uses the documented dynamic entry point only inside the isolated `@powerchain/ui/web3-icons` client boundary because supported assets/networks can come from runtime registries. Static components should be preferred for high-volume, fixed icon sets if bundle profiling shows the dynamic path is too expensive.

## Fallbacks

Every wrapper provides a compact text fallback so a missing icon never creates an empty control or blocks a financial workflow.

## Validation

```bash
pnpm icons:check
```

This ensures:

- the dependency version is pinned;
- the subpath export exists;
- the wrapper remains a client boundary;
- application/domain packages do not bypass the shared UI abstraction.

## Coin component

Use the shared token row when displaying balances or settlement assets:

```tsx
import { Coin } from "@powerchain/ui/coin";

<Coin
  symbol="USDC"
  name="USD Coin"
  network="solana"
  amount="1,250.00"
  fiatValue="$1,250.00"
/>
```

The component is presentation-only. It does not fetch balances, prices, token metadata or determine whether an asset is verified.

## Static components for fixed surfaces

For high-frequency fixed identities, use static wrappers. These follow Web3 Icons' server-safe/tree-shakeable path instead of the dynamic registry entry point:

```tsx
import { SolanaNetworkMark, SafeWalletMark } from "@powerchain/ui/web3-static-icons";

<SolanaNetworkMark size={20} />
<SafeWalletMark size={20} />
```

Use the dynamic wrappers only where the token/network/wallet identifier genuinely comes from runtime data.
