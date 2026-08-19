export interface Project {
  id: string;
  slug: string;
  campaignId?: string;
  title: string;
  category: string;
  country?: string;
  logoUrl?: string;
  ownerAvatarUrl?: string;
  coverImageUrl?: string;
  ownerId: string;
  ownerName?: string;
  publishedAt?: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
}
