export type OrganizationEntityType =
  | "COMPANY"
  | "FOUNDATION"
  | "NONPROFIT"
  | "ASSOCIATION"
  | "SOLE_PROPRIETOR"
  | "OTHER";

export type SocialNetwork =
  | "LINKEDIN"
  | "X"
  | "INSTAGRAM"
  | "YOUTUBE"
  | "FACEBOOK"
  | "GITHUB"
  | "OTHER";

export interface CompanySocialLink {
  network: SocialNetwork;
  url: string;
  label?: string;
}

export interface CompanyAddress {
  line1: string;
  line2?: string;
  postalCode: string;
  city: string;
  region?: string;
  countryCode: string;
}

export interface CompanyProfile {
  id: string;
  legalName: string;
  tradingName?: string;
  entityType: OrganizationEntityType;
  registrationNumber?: string;
  taxId?: string;
  foundationNumber?: string;
  foundationPurpose?: string;
  foundedAt?: string;
  website?: string;
  billingEmail?: string;
  phone?: string;
  logoUrl?: string;
  description?: string;
  registeredAddress?: CompanyAddress;
  socialLinks: CompanySocialLink[];
  verification: {
    business: "UNVERIFIED" | "PENDING" | "VERIFIED" | "REJECTED";
    tax: "UNVERIFIED" | "PENDING" | "VERIFIED" | "REJECTED";
    bank: "UNVERIFIED" | "PENDING" | "VERIFIED" | "REJECTED";
    treasury: "UNVERIFIED" | "PENDING" | "VERIFIED" | "REJECTED";
  };
  updatedAt: string;
}
