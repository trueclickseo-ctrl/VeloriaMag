'use client';

import React from 'react';
import Link from 'next/link';
import { GitMerge, Sparkles } from 'lucide-react';

export default function RecommendationsDashboard() {
  const recommendations = [
    { title: 'Elon Musk Net Worth 2026', cat: 'Finance', next: ['Tesla Business Profile', 'SpaceX Overview', 'Billionaire Wealth Rankings'] },
    { title: 'Cytopan Tablet Uses in Urdu', cat: 'Health', next: ['Paracetamol safety warnings', 'Searle Pharma listings', 'Gastroprotective agents'] },
    { title: 'Is Nivea a Good Starting Brand Compared to Garnier?', cat: 'Beauty', next: ['Aveeno gentle creams comparison', 'Skincare pH factors', 'Sensitive skin moisturizers'] }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-amber-500" /> Content Recommendation Engine
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit dynamic semantic links, secondary read next slots, and newsletter CTA mappings.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Recommendations Cards */}
      <div className="space-y-6">
        {recommendations.map((rec, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-3">
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{rec.cat} Category Hub</span>
                <h3 className="text-sm font-bold text-gray-900 font-serif mt-1">Article: "{rec.title}"</h3>
              </div>
              <span className="bg-amber-50 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded">
                4 Nodes Mapped
              </span>
            </div>
            <div className="pl-4 border-l-2 border-amber-500 space-y-1">
              <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Recommended Read Next</span>
              {rec.next.map((n, i) => (
                <div key={i} className="text-gray-800 font-semibold py-0.5">• {n}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
