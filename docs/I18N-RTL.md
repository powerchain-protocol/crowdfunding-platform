# Internationalization & RTL

## Languages

PowerChain's locale infrastructure supports:

```text
en — English
es — Spanish
```

The founder/investor marketplace, founder listing builder, watchlists, offer pipeline, deal-room controls, due-diligence shell, milestone-escrow review, authentication shell, shared footer/notifications and Explorer live-data surfaces include English/Spanish runtime copy through `@powerchain/i18n` and the shared locale provider.

Some legacy humanitarian campaign/operator screens still contain English literals. They must be migrated to translation keys before the platform may be described as *fully* bilingual in production.

## Locale state

The shared `LocaleProvider`:

- stores the selected locale in `localStorage`
- updates `<html lang>`
- updates `<html dir>`
- exposes a shared language switcher in `AppShell`

## RTL

English and Spanish are LTR. The design system nevertheless supports RTL layout for future Arabic/Hebrew/Persian/Urdu localization through logical document direction and RTL-specific directional-icon/input overrides.

For regression testing:

```text
NEXT_PUBLIC_FORCE_RTL=true
```

This setting is for UI testing only; it does not imply that Arabic/Hebrew copy is available.

## Production acceptance

Before claiming complete RTL support:

- eliminate the remaining physical `left/right` layout assumptions outside the shared RTL overrides
- run visual regression tests at phone/tablet/desktop sizes
- test forms, dropdowns, charts, tables, modals and deal-room media
- verify numbers, currencies, hashes and wallet addresses use deliberate LTR isolation where needed
- add real RTL-language translation coverage
