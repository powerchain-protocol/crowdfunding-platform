import type { Invoice } from "@powerchain/types";

export const demoInvoices: Invoice[] = [
  {
    id: "inv_2026_0042",
    number: "PC-2026-0042",
    status: "ISSUED",
    issuer: {
      name: "PowerChain Foundation",
      tradingName: "PowerChain",
      entityType: "FOUNDATION",
      registrationNumber: "FI-DEMO-2026",
      foundationNumber: "FOUND-DEMO-01",
      taxId: "VAT-DEMO",
      email: "billing@powerchain.example",
      website: "https://powerchain.ventures",
      logoUrl: "/assets/brand/powerchain.png",
      address: {
        line1: "Example Street 1",
        postalCode: "00100",
        city: "Helsinki",
        countryCode: "FI"
      },
      socialLinks: [
        { network: "LINKEDIN", url: "https://linkedin.com/company/powerchain" },
        { network: "X", url: "https://x.com/powerchain" }
      ]
    },
    customer: {
      name: "Demo Relief Organization",
      entityType: "NONPROFIT",
      email: "finance@relief.example",
      address: {
        line1: "Humanitarian Road 12",
        postalCode: "10000",
        city: "Brussels",
        countryCode: "BE"
      }
    },
    campaignId: "cmp_flood_2026",
    currency: "EUR",
    issuedAt: "2026-08-19",
    dueAt: "2026-09-02",
    lines: [
      { id: "line_1", description: "Platform service fee · Flood Emergency Response", quantity: "1", unitPrice: "1250.00", taxRateBps: 0 },
      { id: "line_2", description: "Verified milestone escrow administration", quantity: "1", unitPrice: "350.00", taxRateBps: 0 }
    ],
    fees: [],
    notes: "Demo invoice for UI development. Not a fiscal document.",
    paymentTerms: "14 days",
    settlement: {
      rail: "SEPA_INSTANT",
      asset: "EUR",
      network: "BANK",
      paymentReference: "PC-INV-2026-0042",
      ibanMasked: "FI•• •••• •••• ••42"
    },
    auditHash: "sha256:demo-only",
    createdAt: "2026-08-19T06:00:00.000Z",
    updatedAt: "2026-08-19T06:00:00.000Z"
  }
];
