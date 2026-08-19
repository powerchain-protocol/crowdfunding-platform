export const DISPLAY_CURRENCIES = ["USD", "EUR", "GBP"] as const;
export type DisplayCurrency = (typeof DISPLAY_CURRENCIES)[number];
export const DEFAULT_DISPLAY_CURRENCY: DisplayCurrency = "USD";

export const CURRENCY_SYMBOLS: Record<DisplayCurrency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};
