# PowerChain Color & Icon System

**Canonical platform version:** `1.0.0`

## Core palette

The product UI uses a restrained institutional palette:

```text
White       #FFFFFF
Light gray  #F7F8F7 / #F0F2F1 / #E3E6E4
Black       #080A09 / #141816
Dark green  #0A3525 / #06271B
```

Primary navigation, calls to action, progress, focus treatment and brand emphasis use dark green. Backgrounds and surfaces use white/light gray in light mode and black/near-black neutral surfaces in dark mode.

There is no blue brand/accent palette. Warning and destructive colors remain semantically reserved for warning/error states only.

## Themes

`ThemeProvider` supports:

```text
LIGHT
DARK
SYSTEM
```

The selected mode is persisted under `powerchain-theme`. System mode follows `prefers-color-scheme` changes.

## Icons

All shared product icons live in:

```text
packages/ui/src/icons.tsx
```

Usage:

```tsx
import { Icon, IconButton } from "@powerchain/ui";

<Icon name="invoice" />
<Icon name="company" />
<IconButton icon="settings" label="Open settings" />
```

Icons use `currentColor`, so they automatically inherit dark-green, black/gray and dark-theme text colors. Directional icons mirror automatically in RTL layouts.

Do not add random emoji, icon fonts, blue SVG fills or one-off icon components to individual applications. Add reusable icons to `icons.tsx` instead.
