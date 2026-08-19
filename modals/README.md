# Modals

The canonical reusable modal implementation lives in `@powerchain/ui/modals`. The root `modals/` directory is reserved for composition notes and legacy migration; new shared modal primitives should be added to the UI package rather than duplicated per app.

Available shared patterns include a base accessible modal, confirmation modal, and transaction-review modal.

## UX requirements

- focus-visible controls and keyboard dismissal where safe
- backdrop/escape behavior appropriate to transaction criticality
- scroll locking without layout jumps
- responsive mobile/full-width behavior
- light/dark theme compatibility
- explicit pending/success/error states
- no success state before authoritative completion

Financial confirmation modals should show exact assets, amounts, fees, recipients, network, and user-signature boundary before the wallet/provider handoff.
