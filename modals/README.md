# Shared modal patterns

Reusable modal primitives live in `@powerchain/ui/modals`. The root `modals/` directory is documentation/migration space only; do not fork shared modal implementations into apps.

Shared patterns cover accessible base dialogs, confirmations, and transaction review. Critical financial confirmation surfaces must show the exact asset, amount, fees, recipient, network, and user-signature boundary before provider/wallet handoff.

A modal may display prepared/submitted/pending states, but it must not show success before authoritative completion.
