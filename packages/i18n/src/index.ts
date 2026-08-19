export const SUPPORTED_LOCALES = ["en", "es"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export type TextDirection = "ltr" | "rtl";

export const RTL_LOCALES = new Set(["ar", "he", "fa", "ur"]);

export function isSupportedLocale(input: string | null | undefined): input is SupportedLocale {
  return input === "en" || input === "es";
}

export function localeDirection(locale: string): TextDirection {
  return RTL_LOCALES.has(locale.split("-")[0]?.toLowerCase() ?? "") ? "rtl" : "ltr";
}

export const capitalDictionary = {
  en: {
    marketplace: "Investor marketplace",
    marketplaceDescription: "Discover verified founder listings with structured milestone raises and transparent escrow terms.",
    founder: "Founder",
    investor: "Investor",
    watchlist: "Watchlist",
    verifiedOnly: "Verified only",
    expressInterest: "Express interest",
    makeOffer: "Make an offer",
    dueDiligence: "Due diligence",
    dealRoom: "Deal room",
    raiseGoal: "Derived raise goal",
    milestones: "Milestone tranches",
    team: "Team",
    dealTerms: "Deal terms",
    pitchDeck: "Pitch deck",
    demoVideo: "Demo video",
    proof: "Milestone proof",
    approveRelease: "Approve tranche release",
  },
  es: {
    marketplace: "Mercado de inversión",
    marketplaceDescription: "Descubre proyectos verificados de fundadores con rondas estructuradas por hitos y condiciones de depósito transparentes.",
    founder: "Fundador",
    investor: "Inversor",
    watchlist: "Lista de seguimiento",
    verifiedOnly: "Solo verificados",
    expressInterest: "Mostrar interés",
    makeOffer: "Hacer una oferta",
    dueDiligence: "Debida diligencia",
    dealRoom: "Sala de negociación",
    raiseGoal: "Objetivo derivado de la ronda",
    milestones: "Tramos por hitos",
    team: "Equipo",
    dealTerms: "Términos de la operación",
    pitchDeck: "Presentación",
    demoVideo: "Video de demostración",
    proof: "Prueba del hito",
    approveRelease: "Aprobar liberación del tramo",
  },
} as const;

export function capitalText(locale: SupportedLocale) {
  return capitalDictionary[locale];
}
