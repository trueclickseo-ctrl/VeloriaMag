'use client';

import React from 'react';
import Link from 'next/link';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

export default function MediaManagerPage() {
  const images = [
    { file: 'cytopan-tablet-uses-urdu.webp', size: '24KB', alt: 'Cytopan gastroprotection mechanism illustration', score: '96%' },
    { file: 'nivea-vs-garnier.webp', size: '38KB', alt: 'Nivea cream and Garnier bottles on marble vanity', score: '94%' },
    { file: 'warren-buffett-wealth-profile.webp', size: '42KB', alt: 'Warren Buffett value investor profile asset layout', score: '98%' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <ImageIcon className="h-7 w-7 text-indigo-500" /> Image & Media Asset Manager
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit WebP conversion metrics, alt text tags, file compressions, and index optimization scores.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Images List */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {images.map((img, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold text-gray-900">{img.file}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Size: {img.size} | Alt: "{img.alt}"</p>
              </div>
              <span className="bg-emerald-50 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-100">
                SEO: {img.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
