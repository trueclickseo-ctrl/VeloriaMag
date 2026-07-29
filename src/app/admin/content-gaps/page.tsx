'use client';

import React from 'react';
import Link from 'next/link';
import { GitBranch, Sparkles } from 'lucide-react';

export default function ContentGapsPage() {
  const gaps = [
    { cat: 'Health', current: 'Claritek, Coldrex, Cytopan uses explained in Urdu', missing: 'Augmentin uses in Urdu, Brufen uses in Urdu, Panadol uses in Urdu', rec: 'Produce: Augmentin Tablet Uses in Urdu (High search demand)' },
    { cat: 'Beauty', current: 'Nivea starting brand skincare comparison', missing: 'CeraVe vs Cetaphil, Niacinamide benefits, Skin barrier guidelines', rec: 'Produce: CeraVe vs Cetaphil for Acne-Prone Skin' },
    { cat: 'Finance', current: 'Warren Buffett wealth profile', missing: 'Elon Musk business profile, ETFs for beginners', rec: 'Produce: Elon Musk Net Worth 2026 Holdings analysis' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-amber-500" /> AI Content Gap Finder
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit existing pillars to discover entity voids and competitor opportunities.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Gaps List */}
      <div className="space-y-6">
        {gaps.map((gap, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{gap.cat} Cluster Void</span>
              <h3 className="text-sm font-bold text-gray-950">Current Covered Nodes: {gap.current}</h3>
              <p className="text-red-700 font-medium">Missing Entity Gaps: {gap.missing}</p>
            </div>
            <div className="md:text-right flex flex-col justify-center items-start md:items-end">
              <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">AI Recommendation</span>
              <p className="font-bold text-amber-700">{gap.rec}</p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-[9px] px-3 py-1 rounded mt-2 transition-colors">
                Generate brief
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
