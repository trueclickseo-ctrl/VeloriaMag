import matter from 'gray-matter';
import { marked } from 'marked';
import { prisma } from '@/lib/prisma';

export interface SEOValidationResult {
  passed: boolean;
  score: number;
  warnings: string[];
  readingTime: number;
}

// 1. SEO Content Quality Checker
export function validateSEOContent(
  title: string,
  content: string,
  metaDescription: string,
  primaryKeyword: string,
  citations: string,
  schemaType: string,
  featuredImage?: any,
  contentImages?: any[]
): SEOValidationResult {
  const warnings: string[] = [];
  let score = 100;

  // Check Primary Keyword Placement in Title
  if (!title.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    warnings.push('Primary keyword not found in the Title.');
    score -= 15;
  }

  // Check Primary Keyword in Introduction (first 300 characters of clean content)
  const cleanContent = content.replace(/<[^>]*>/g, '');
  const introText = cleanContent.slice(0, 300);
  if (!introText.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    warnings.push('Primary keyword not found in the introductory paragraph.');
    score -= 15;
  }

  // Heading Structure Check (Ensure H2 tags exist)
  const h2Count = (content.match(/<h2>/gi) || []).length;
  if (h2Count < 2) {
    warnings.push('Heading structure warning: Add more H2 sections to improve readability.');
    score -= 10;
  }

  // Meta Description Length Check (120 to 160 characters ideal)
  if (metaDescription.length < 120 || metaDescription.length > 160) {
    warnings.push(`Meta description length is ${metaDescription.length} characters (ideal: 120-160).`);
    score -= 10;
  }

  // Citations check for YMYL authority
  if (!citations || citations.split(',').length < 2) {
    warnings.push('YMYL Authority: Include at least 2 high-quality citation sources.');
    score -= 15;
  }

  // Schema availability
  if (!schemaType) {
    warnings.push('SEO Schema Type is missing.');
    score -= 10;
  }

  // Image Quality & Quantity Checks
  const hasFeatured = featuredImage && featuredImage.url;
  const contentImagesCount = contentImages ? contentImages.length : 0;
  const totalImages = (hasFeatured ? 1 : 0) + contentImagesCount;

  if (totalImages < 2) {
    warnings.push(`Visual Content System Alert: Article has ${totalImages} images (minimum of 2 required).`);
    score -= 20;
  }

  if (hasFeatured && !featuredImage.alt) {
    warnings.push('Image Metadata Warning: Featured hero image is missing SEO alt text.');
    score -= 5;
  }

  // Reading time calculations
  const wordCount = cleanContent.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200) || 1; // 200 words per minute average

  return {
    passed: score >= 70,
    score,
    warnings,
    readingTime,
  };
}

// 2. AI Markdown Import Pipeline
export async function importArticleFromMarkdown(markdownFileContent: string) {
  const { data, content } = matter(markdownFileContent);
  const htmlContent = await marked.parse(content);

  // Run SEO Quality Checker
  const seoCheck = validateSEOContent(
    data.title,
    htmlContent,
    data.metaDescription || data.excerpt || '',
    data.primaryKeyword || '',
    data.citations || '',
    data.schemaType || '',
    data.featuredImage,
    data.contentImages
  );

  // Get or Create Author
  let author = await prisma.author.findUnique({
    where: { slug: data.authorSlug || 'editorial-team' },
  });

  if (!author) {
    author = await prisma.author.create({
      data: {
        name: data.authorName || 'Editorial Team',
        slug: data.authorSlug || 'editorial-team',
        bio: 'Editorial desk writer tracking health, finance, and culture topics.',
        expertise: 'General Editing',
        qualifications: 'Editor',
      },
    });
  }

  // Get Category
  const category = await prisma.category.findUnique({
    where: { slug: data.categorySlug },
  });

  if (!category) {
    throw new Error(`Category matching slug '${data.categorySlug}' does not exist.`);
  }

  // Check if Pillar exists
  let pillarId = null;
  if (data.pillarSlug) {
    const pillar = await prisma.pillar.findUnique({
      where: { slug: data.pillarSlug },
    });
    if (pillar) {
      pillarId = pillar.id;
    }
  }

  // Create Article
  return await prisma.article.create({
    data: {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt || data.title,
      markdownContent: htmlContent,
      categoryId: category.id,
      pillarId,
      topicCluster: data.topicCluster || 'General',
      primaryKeyword: data.primaryKeyword || '',
      secondaryKeywords: data.secondaryKeywords || '',
      searchIntent: data.searchIntent || 'Informational',
      schemaType: data.schemaType || 'Article',
      citations: data.citations || '',
      entities: data.entities || '',
      authorId: author.id,
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription || data.excerpt || '',
      readingTime: seoCheck.readingTime,
      status: 'PUBLISHED',
    },
  });
}
