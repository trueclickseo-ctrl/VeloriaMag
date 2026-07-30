export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  pillars?: Pillar[];
  articles?: Article[];
}

export interface Pillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  categoryId: string;
  category?: Category;
  articles?: Article[];
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  photo?: string | null;
  bio: string;
  expertise: string;
  qualifications: string;
  credentials?: string | null;
  expertiseAreas?: string | null;
  yearsExperience: number;
  socialProfiles?: string | null;
  publishedCount: number;
  reviewedCount: number;
  articles?: Article[];
  reviewed?: Article[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  markdownContent: string;
  featuredImage?: string | null;
  categoryId: string;
  category?: Category;
  pillarId?: string | null;
  pillar?: Pillar | null;
  topicCluster: string;
  primaryKeyword: string;
  secondaryKeywords: string;
  searchIntent: string;
  schemaType: string;
  citations: string;
  entities: string;
  authorId: string;
  author?: Author;
  reviewerId?: string | null;
  reviewer?: Author | null;
  metaTitle: string;
  metaDescription: string;
  readingTime: number;
  status: string;
  publishedAt: Date;
  
  // Google Discover
  discoverTitle?: string | null;
  emotionalHook?: string | null;
  trendingTopic?: string | null;
  featuredAngle?: string | null;
  discoverImage?: string | null;
  socialHeadline?: string | null;
  
  // Image Briefs
  imageConcept?: string | null;
  imageStyle?: string | null;
  imageComposition?: string | null;
  imageElements?: string | null;
  imageAlt?: string | null;
  imageCaption?: string | null;
  
  // Quality Scores
  seoScore: number;
  contentScore: number;
  trustScore: number;
  
  updatedAt: Date;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  disclosureStatus: string;
}

export interface Entity {
  id: string;
  name?: string;
  type?: string;
}
