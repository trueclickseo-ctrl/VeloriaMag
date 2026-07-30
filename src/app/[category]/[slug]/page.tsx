import React from 'react';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { MedicalDisclaimerCallout, FinanceDisclaimerCallout, AuthorBox, ArticleCard } from '@/components/SharedComponents';
import SchemaManager from '@/components/seo/SchemaManager';
import Link from 'next/link';

interface Props {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export const revalidate = 60;

export default async function SlugPage({ params }: Props) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;

  // 1. Try to find a Pillar page
  const pillar = await prisma.pillar.findUnique({
    where: { slug },
    include: {
      category: true,
      articles: {
        include: {
          author: true,
        },
      },
    },
  });

  if (pillar) {
    // Render Pillar Page Directory
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-xs text-gray-500 mb-4 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:underline">Home</Link> /{' '}
          <Link href={`/${category}`} className="hover:underline">{category}</Link> /{' '}
          <span className="text-gray-900">{pillar.title}</span>
        </nav>
        
        <div className="border-b border-gray-200 pb-8 mb-12">
          <h1 className="text-4xl font-serif font-extrabold text-gray-900 mb-4">{pillar.title}</h1>
          <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">{pillar.description}</p>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-6 font-serif">Articles in this Cluster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillar.articles.map((art: any) => (
            <ArticleCard
              key={art.id}
              title={art.title}
              slug={art.slug}
              category={category}
              excerpt={art.excerpt}
              date={art.publishedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              authorName={art.author.name}
              hoverColorClass="text-amber-600"
            />
          ))}
        </div>
      </div>
    );
  }

  // 2. Try to find an Article page
  const article = await prisma.article.findUnique({
    where: { slug },
    include: {
      author: true,
      category: true,
      reviewer: true,
    },
  });

  if (!article) {
    notFound();
  }

  const isHealth = category === 'health';

  // Construct JSON-LD schema payload dynamically
  const schemaPayload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://veloriamag.com/${category}/${slug}#webpage`,
        "url": `https://veloriamag.com/${category}/${slug}`,
        "name": article.title,
        "description": article.metaDescription
      },
      {
        "@type": "Article",
        "@id": `https://veloriamag.com/${category}/${slug}#article`,
        "isPartOf": { "@id": `https://veloriamag.com/${category}/${slug}#webpage` },
        "headline": article.title,
        "author": {
          "@type": "Person",
          "name": article.author.name,
          "description": article.author.bio
        },
        "datePublished": article.publishedAt.toISOString(),
        "dateModified": article.updatedAt.toISOString()
      },
      isHealth ? {
        "@type": "Drug",
        "@id": `https://veloriamag.com/${category}/${slug}#drug`,
        "name": article.primaryKeyword,
        "activeIngredient": article.entities.split(',').map((e: string) => ({
          "@type": "ChemicalSubstance",
          "name": e.trim()
        }))
      } : null
    ].filter(Boolean)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SchemaManager data={schemaPayload} />

      {/* Breadcrumbs */}
      <nav className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
        <Link href="/" className="hover:underline">Home</Link> /{' '}
        <Link href={`/${category}`} className="hover:underline">{category}</Link> /{' '}
        <span className="text-gray-900 truncate max-w-[200px] inline-block align-bottom">{article.title}</span>
      </nav>

      {/* Header Section */}
      <header className="mb-8 border-b border-gray-100 pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-6 font-serif leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <span>By {article.author.name}</span>
          </div>
          <span>•</span>
          <span>Published: {article.publishedAt.toLocaleDateString()}</span>
          <span>•</span>
          <span>Updated: {article.updatedAt.toLocaleDateString()}</span>
          {article.reviewer && (
            <>
              <span>•</span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 font-bold text-emerald-800 border border-emerald-200">
                Medical Review: {article.reviewer.name}
              </span>
            </>
          )}
        </div>
      </header>

      {/* Disclaimer Warning Callouts */}
      {isHealth && <MedicalDisclaimerCallout />}
      {category === 'finance' && <FinanceDisclaimerCallout />}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Table of Contents (Client-side anchor helper) */}
        <aside className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-24 p-4 border border-gray-100 rounded-xl bg-white/50">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Sections</h4>
            <ul className="space-y-2 text-xs text-gray-500 font-medium">
              <li><a href="#overview" className="hover:text-amber-600">1. Overview</a></li>
              <li><a href="#details" className="hover:text-amber-600">2. Usage Details</a></li>
              <li><a href="#safety" className="hover:text-amber-600">3. Safety Information</a></li>
            </ul>
          </div>
        </aside>

        {/* Content Body */}
        <div className="lg:col-span-3">
          {/* Key Takeaways Box */}
          <div className="bg-amber-50/40 border border-amber-100/50 rounded-xl p-5 mb-8">
            <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 font-serif">Key Takeaways</h3>
            <ul className="list-disc pl-4 text-xs text-gray-700 space-y-1.5 leading-relaxed">
              <li>Comprehensive coverage of <strong>{article.primaryKeyword}</strong>.</li>
              <li>Authored by domain professionals with strict source checking.</li>
              <li>Contains clinical safety profiles and active entity maps.</li>
            </ul>
          </div>

          {/* Render HTML article body */}
          <div 
            className="prose max-w-none text-sm text-gray-800 leading-relaxed font-normal space-y-6"
            dangerouslySetInnerHTML={{ __html: article.markdownContent }}
          />

          {/* Author Bio Section */}
          <AuthorBox
            name={article.author.name}
            bio={article.author.bio}
            qualifications={article.author.qualifications}
            expertise={article.author.expertise}
          />

          {/* Citations / Sources Footer */}
          {article.citations && (
            <div className="mt-12 pt-6 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Sources & References</h4>
              <ul className="list-disc pl-4 text-xs text-gray-500 space-y-1 leading-relaxed">
                {article.citations.split(',').map((cite: string, index: number) => (
                  <li key={index}>{cite.trim()}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
