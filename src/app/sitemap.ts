import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { Category, Pillar, Article, Author } from '@/types';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://veloriamag.com';

  // 1. Core Pages
  const routes = ['', '/about', '/contact', '/editorial-policy', '/medical-disclaimer', '/privacy-policy', '/seo-checklist'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.5,
  }));

  try {
    // 2. Fetch Category slugs
    const categories: Category[] = (await prisma.category.findMany({})) as Category[];
    const categoryRoutes = categories.map((cat) => ({
      url: `${baseUrl}/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    // 3. Fetch Pillar slugs
    const pillars: Pillar[] = (await prisma.pillar.findMany({
      include: { category: true },
    })) as Pillar[];
    const pillarRoutes = pillars.map((pil) => ({
      url: `${baseUrl}/${pil.category?.slug || ''}/${pil.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    // 4. Fetch Article slugs
    const articles: Article[] = (await prisma.article.findMany({
      where: { status: 'PUBLISHED' },
      include: { category: true },
    })) as Article[];
    const articleRoutes = articles.map((art) => ({
      url: `${baseUrl}/${art.category?.slug || ''}/${art.slug}`,
      lastModified: art.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    // 5. Fetch Author profiles
    const authors: Author[] = (await prisma.author.findMany({})) as Author[];
    const authorRoutes = authors.map((aut) => ({
      url: `${baseUrl}/authors/${aut.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    }));

    return [...routes, ...categoryRoutes, ...pillarRoutes, ...articleRoutes, ...authorRoutes];
  } catch (error) {
    console.error('Failed to generate dynamic sitemap:', error);
    return routes;
  }
}
