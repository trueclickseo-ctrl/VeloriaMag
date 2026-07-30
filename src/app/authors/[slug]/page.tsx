import React from 'react';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ArticleCard } from '@/components/SharedComponents';
import Link from 'next/link';
import { Author } from '@/types';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 60;

export default async function AuthorProfilePage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const author = (await prisma.author.findUnique({
    where: { slug },
    include: {
      articles: {
        include: {
          category: true,
        },
      },
    },
  })) as Author | null;

  if (!author) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Author Profile Header */}
      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center mb-12">
        <div className="bg-amber-100 text-amber-800 rounded-full h-24 w-24 flex items-center justify-center font-bold text-3xl flex-shrink-0">
          {author.name.split(' ').pop()?.charAt(0) || 'A'}
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-2">{author.name}</h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs font-semibold text-gray-500 mb-4">
            <span className="bg-gray-100 px-2 py-0.5 rounded">Credentials: {author.qualifications}</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded">Domain: {author.expertise}</span>
          </div>
          <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">{author.bio}</p>
        </div>
      </div>

      {/* Published Articles List */}
      <div>
        <h2 className="text-xl font-bold font-serif text-gray-900 mb-8 border-b border-gray-100 pb-2">
          Articles Authored by {author.name}
        </h2>
        
        {!author.articles || author.articles.length === 0 ? (
          <p className="text-sm text-gray-500">No articles published yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {author.articles.map((art) => (
              <ArticleCard
                key={art.id}
                title={art.title}
                slug={art.slug}
                category={art.category?.slug || ''}
                excerpt={art.excerpt}
                date={art.publishedAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                authorName={author.name}
                hoverColorClass="text-amber-600"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
