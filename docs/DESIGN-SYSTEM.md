# Design System

**Revision:** `1.3.0`

PowerChain uses a dark-green institutional palette instead of legacy blue accents.

```text
Primary        #0B4F35
Primary strong #063823
Light bg       #F7FAF8
Light surface  #FFFFFF
Dark bg        #07110D
Dark surface   #0D1A14
```

`@powerchain/ui` provides the shared app shell, footer, theme control, button, input, select, textarea, cards, badges and progress components. Theme selection supports light, dark and system modes and persists locally in the browser.

Financial UI rules:

- green communicates primary actions and verified/satisfied controls;
- amber communicates attention or pending verification;
- red is reserved for blocked, rejected or failed states;
- funding progress and treasury availability must remain separate metrics;
- dark mode must preserve contrast for warnings, evidence status and treasury gates.
