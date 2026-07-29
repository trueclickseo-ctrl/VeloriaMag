import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { CategoryCard, ArticleCard } from '@/components/SharedComponents';

export const revalidate = 60; // ISR cache revalidation rate: 60s

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      articles: true,
    },
  });

  const featuredArticles = await prisma.article.findMany({
    take: 6,
    orderBy: {
      publishedAt: 'desc',
    },
    include: {
      author: true,
      category: true,
    },
  });

  // Category visual configurations
  const categoryStyles: Record<string, { colorClass: string; hoverColor: string }> = {
    health: { colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100', hoverColor: 'text-emerald-700' },
    beauty: { colorClass: 'bg-rose-50 text-rose-700 border-rose-100', hoverColor: 'text-rose-700' },
    celebrity: { colorClass: 'bg-slate-50 text-slate-700 border-slate-100', hoverColor: 'text-slate-700' },
    finance: { colorClass: 'bg-blue-50 text-blue-700 border-blue-100', hoverColor: 'text-blue-700' },
    faith: { colorClass: 'bg-amber-50 text-amber-700 border-amber-100', hoverColor: 'text-amber-700' },
  };

  return (
    <div className="bg-gray-50/30">
      {/* Hero Brand Section */}
      <section className="bg-gradient-to-br from-gray-900 to-slate-950 text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-3">Topical Authority Publishing</h2>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif mb-6 leading-tight">
            Veloria<span className="text-amber-500">Mag</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            In-depth medicine guides, skincare scientific formulation comparisons, Hollywood bios, and biblical symbolisms curated under strict editorial standards.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-xl font-bold tracking-tight font-serif text-gray-900 mb-8 border-b border-gray-100 pb-2">
            Explore Content Hubs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const style = categoryStyles[cat.slug] || { colorClass: 'bg-gray-50 text-gray-700', hoverColor: 'text-gray-700' };
              return (
                <CategoryCard
                  key={cat.id}
                  title={cat.name}
                  slug={cat.slug}
                  count={cat.articles.length}
                  description={cat.description}
                  colorClass={style.colorClass}
                />
              );
            })}
          </div>
        </div>

        {/* Latest Publications Section */}
        <div>
          <h2 className="text-xl font-bold tracking-tight font-serif text-gray-900 mb-8 border-b border-gray-100 pb-2">
            Latest Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((art) => {
              const style = categoryStyles[art.category.slug] || { hoverColor: 'text-amber-600' };
              return (
                <ArticleCard
                  key={art.id}
                  title={art.title}
                  slug={art.slug}
                  category={art.category.slug}
                  excerpt={art.excerpt}
                  date={art.publishedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  authorName={art.author.name}
                  hoverColorClass={style.hoverColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
