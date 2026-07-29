'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, FileText } from 'lucide-react';

export default function ContentImprovementPage() {
  const suggestions = [
    { title: 'Is Nivea a Good Starting Brand Compared to Garnier?', cat: 'Beauty', improvement: 'Add ceramide segment, update drug comparisons, insert aesthetician quote.' },
    { title: 'Cytopan Tablet Uses in Urdu', cat: 'Health', improvement: 'Add gastroprotection mechanism diagram, verify searches for side effects.' },
    { title: 'Warren Buffett Wealth Profile', cat: 'Finance', improvement: 'Integrate interactive expense ratioCompound fee calculator.' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-amber-500" /> AI Content Improvement Engine
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit published articles to discover entity additions, user intent matching, and updates needed.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Improvement list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {suggestions.map((row, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{row.cat} Category | {row.title}</span>
                <h3 className="text-xs font-semibold text-gray-800 mt-1">Recommended Adjustments: "{row.improvement}"</h3>
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white text-[9px] font-bold px-3 py-1 rounded transition-colors whitespace-nowrap">
                Refine Draft
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
