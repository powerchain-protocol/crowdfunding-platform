# Shared UI Architecture

PowerChain keeps application UI primitives in one workspace package: `@powerchain/ui`.

## Canonical styles

`packages/ui/src/styles/globals.css` is the single Tailwind v4 + shadcn global stylesheet. It imports Tailwind, the PowerChain theme contract, shadcn-compatible semantic variables, light/dark theme mappings and shared UI source discovery.

Every Next.js application keeps a tiny `app/globals.css` entrypoint that imports:

```css
@import "@powerchain/ui/styles/globals.css";
@source "../";
```

This allows each app to keep normal Next.js CSS entrypoints while sharing one visual system.

## Canonical components

Reusable primitives live in `packages/ui/src/components/` and are exported through `@powerchain/ui/components`.

Initial shared component set:

- Button
- Card and card sections
- Input
- Textarea
- Label
- Badge
- Separator
- Skeleton
- Progress
- Alert
- Table
- EmptyState
- FormField
- Counter
- Countdown
- FundingProgress

New shadcn components should be installed into the shared UI workspace rather than copied into individual applications.

```bash
pnpm dlx shadcn@latest info -c packages/ui
pnpm dlx shadcn@latest add button -c packages/ui
```

## Validation

```bash
pnpm ui:check
pnpm shadcn:check
```

The validator confirms that the canonical stylesheet, shared components and app imports remain intact.

## PostCSS runtime

All workspace PostCSS resolution is pinned to `8.5.23` through the root dependency and `pnpm-workspace.yaml` override. Run `pnpm postcss:check` after dependency changes.
