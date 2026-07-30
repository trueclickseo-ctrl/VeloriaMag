import React from 'react';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ArticleCard } from '@/components/SharedComponents';

import { Category } from '@/types';

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export const revalidate = 60;

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;

  const category = (await prisma.category.findUnique({
    where: { slug: categorySlug },
    include: {
      pillars: true,
      articles: {
        include: {
          author: true,
        },
      },
    },
  })) as Category | null;

  if (!category) {
    notFound();
  }

  const categoryStyles: Record<string, { color: string; border: string; text: string; bg: string; hover: string }> = {
    health: { color: 'border-emerald-500 text-emerald-800', border: 'border-emerald-100', text: 'text-emerald-800', bg: 'bg-emerald-50/50', hover: 'text-emerald-700' },
    beauty: { color: 'border-rose-500 text-rose-800', border: 'border-rose-100', text: 'text-rose-800', bg: 'bg-rose-50/50', hover: 'text-rose-700' },
    celebrity: { color: 'border-slate-500 text-slate-800', border: 'border-slate-100', text: 'text-slate-800', bg: 'bg-slate-50/50', hover: 'text-slate-700' },
    finance: { color: 'border-blue-500 text-blue-800', border: 'border-blue-100', text: 'text-blue-800', bg: 'bg-blue-50/50', hover: 'text-blue-700' },
    faith: { color: 'border-amber-500 text-amber-800', border: 'border-amber-100', text: 'text-amber-800', bg: 'bg-amber-50/50', hover: 'text-amber-700' },
  };

  const style = categoryStyles[categorySlug] || { color: 'border-gray-500 text-gray-800', border: 'border-gray-100', text: 'text-gray-800', bg: 'bg-gray-50/50', hover: 'text-amber-600' };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Category Header */}
      <div className={`border-l-4 ${style.color} pl-6 py-4 mb-12`}>
        <h1 className="text-3xl font-extrabold tracking-tight font-serif text-gray-900 mb-2 uppercase">
          {category.name} Hub
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">{category.description}</p>
      </div>

      {/* Pillars Section */}
      {category.pillars && category.pillars.length > 0 && (
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-6 font-serif">Pillars & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.pillars.map((p) => (
              <div key={p.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 mb-2 font-serif">{p.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{p.description}</p>
                <a href={`/${categorySlug}/${p.slug}`} className="text-xs font-semibold text-amber-600 hover:underline">
                  View Full Directory →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Articles Feed */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-6 font-serif">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.articles?.map((art) => (
            <ArticleCard
              key={art.id}
              title={art.title}
              slug={art.slug}
              category={categorySlug}
              excerpt={art.excerpt}
              date={art.publishedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              authorName={art.author?.name || 'VeloriaMag Staff'}
              hoverColorClass={style.hover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
