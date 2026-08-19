export type ListingFixture = {
  id: string;
  slug: string;
  productName: string;
  tagline: string;
  category: string;
  stage: string;
  location: string;
  verified: boolean;
  matchScore: number;
  currency: "EUR" | "USD";
  instrument: string;
  platformFeeBps: number;
  tranches: Array<{ id: string; title: string; amount: number; status: "FUTURE" | "FUNDED" | "APPROVED" | "RELEASED"; proof: string }>;
  team: Array<{ name: string; role: string; bio: string }>;
  traction: string[];
  risks: string[];
  pitchDeckUrl: string;
  demoVideoUrl: string;
  xHandle?: string;
  logoUrl?: string;
  founderAvatarUrl?: string;
};

export const listingFixtures: ListingFixture[] = [
  {
    id: "lst_solarflow",
    slug: "solarflow-grid",
    productName: "SolarFlow Grid",
    tagline: "Modular battery intelligence for community-scale renewable grids.",
    category: "Renewables",
    stage: "Seed",
    location: "Helsinki, Finland",
    verified: true,
    matchScore: 94,
    currency: "EUR",
    instrument: "Equity",
    platformFeeBps: 250,
    tranches: [
      { id: "t1", title: "Prototype certification", amount: 125000, status: "RELEASED", proof: "Certification report + lab results" },
      { id: "t2", title: "Pilot deployment", amount: 175000, status: "APPROVED", proof: "Site photos + installation acceptance" },
      { id: "t3", title: "20-site rollout", amount: 250000, status: "FUTURE", proof: "Customer acceptance + telemetry" },
      { id: "t4", title: "Commercial readiness", amount: 200000, status: "FUTURE", proof: "Revenue + support-readiness evidence" },
    ],
    team: [
      { name: "Elena Martín", role: "CEO", bio: "Energy systems operator with utility-scale deployment experience." },
      { name: "Mika Lehto", role: "CTO", bio: "Power electronics and distributed systems engineer." },
      { name: "Sofia Ramos", role: "COO", bio: "Manufacturing, compliance and European market operations." },
    ],
    traction: ["3 paid pilots", "18 MWh managed in field trials", "LOIs covering 20 additional sites"],
    risks: ["Hardware certification schedule", "Battery supply-chain concentration", "Utility procurement cycles"],
    pitchDeckUrl: "https://example.invalid/solarflow-deck.pdf",
    demoVideoUrl: "https://example.invalid/solarflow-demo",
    xHandle: "solarflowgrid",
    logoUrl: "/assets/brand/powerchain.png",
  },
  {
    id: "lst_medroute",
    slug: "medroute-ai",
    productName: "MedRoute AI",
    tagline: "Clinical logistics software for mobile health operators.",
    category: "Health technology",
    stage: "Pre-seed",
    location: "Madrid, Spain",
    verified: true,
    matchScore: 89,
    currency: "EUR",
    instrument: "Convertible note",
    platformFeeBps: 250,
    tranches: [
      { id: "t1", title: "Clinical workflow validation", amount: 80000, status: "RELEASED", proof: "Validation protocol + partner sign-off" },
      { id: "t2", title: "Security certification", amount: 120000, status: "FUNDED", proof: "Independent security assessment" },
      { id: "t3", title: "Five-provider rollout", amount: 180000, status: "FUTURE", proof: "Signed deployment acceptance" },
    ],
    team: [
      { name: "Lucía Ortega", role: "CEO", bio: "Former mobile-clinic operations lead." },
      { name: "Daniel Ruiz", role: "CTO", bio: "Healthcare software and privacy engineering." },
    ],
    traction: ["2 health-system pilots", "41% scheduling-time reduction in test cohort", "ISO roadmap underway"],
    risks: ["Healthcare procurement", "Regulatory classification", "Integration complexity"],
    pitchDeckUrl: "https://example.invalid/medroute-deck.pdf",
    demoVideoUrl: "https://example.invalid/medroute-demo",
    xHandle: "medrouteai",
  },
  {
    id: "lst_watermesh",
    slug: "watermesh",
    productName: "WaterMesh",
    tagline: "Low-cost networked sensors for rural water-quality operations.",
    category: "Climate infrastructure",
    stage: "Seed",
    location: "Valencia, Spain",
    verified: false,
    matchScore: 78,
    currency: "EUR",
    instrument: "SAFE note",
    platformFeeBps: 250,
    tranches: [
      { id: "t1", title: "Manufacturing run", amount: 100000, status: "FUNDED", proof: "Production invoice + QA report" },
      { id: "t2", title: "Field network", amount: 140000, status: "FUTURE", proof: "GPS deployment set + telemetry" },
      { id: "t3", title: "Utility integration", amount: 160000, status: "FUTURE", proof: "Integration acceptance" },
    ],
    team: [
      { name: "Nora Silva", role: "Founder", bio: "Environmental engineering and sensor-network product development." },
    ],
    traction: ["120 prototype sensors", "Municipal trial agreement", "Two NGO distribution partners"],
    risks: ["Hardware margin", "Long field maintenance cycles", "Small-team execution risk"],
    pitchDeckUrl: "https://example.invalid/watermesh-deck.pdf",
    demoVideoUrl: "https://example.invalid/watermesh-demo",
    xHandle: "watermesh",
  },
];

export function listingGoal(listing: ListingFixture): number {
  return listing.tranches.reduce((total, tranche) => total + tranche.amount, 0);
}
