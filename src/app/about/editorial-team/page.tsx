import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export const revalidate = 3600;

export default async function EditorialTeamPage() {
  let authors: any[] = [];
  try {
    authors = await prisma.author.findMany({});
  } catch (error) {
    console.error('Failed to fetch authors for editorial team page:', error);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-xs text-gray-600 leading-relaxed">
      <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-4 border-b border-gray-100 pb-4">Our Editorial Team</h1>
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        VeloriaMag is written and reviewed by licensed medical practitioners, professional cosmetic chemists, and credentialed finance experts to ensure authority, precision, and adherence to YMYL standards.
      </p>

      <div className="space-y-8">
        {authors.map((author) => (
          <div key={author.id} className="border border-gray-100 rounded-xl p-6 bg-gray-50/50 flex flex-col md:flex-row gap-4 items-start">
            <div className="h-16 w-16 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
              {author.name.split(' ').pop()?.charAt(0)}
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">{author.name}</h3>
              <div className="flex gap-2 text-[10px] font-semibold text-gray-400 mt-0.5 mb-2">
                <span>Credentials: {author.qualifications}</span>
                <span>|</span>
                <span>Focus: {author.expertise}</span>
              </div>
              <p className="text-gray-600">{author.bio}</p>
              <Link href={`/authors/${author.slug}`} className="text-amber-600 font-semibold hover:underline mt-2 inline-block">
                View Published Articles & Reviews →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
