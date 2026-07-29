'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Sparkles } from 'lucide-react';

export default function DiscoverDashboard() {
  const discoverData = [
    { original: 'Taylor Swift Net Worth 2026', optimized: 'How Taylor Swift Built a Billion-Dollar Empire: The Asset Audit', hook: 'Discover the verified concert dividends and master catalog acquisitions.', score: '95% Discover Opportunity' },
    { original: 'Best Moisturizer for Dry Skin', optimized: 'Dermatologists Explain the Skincare Difference that Blocks Dry Skin', hook: 'The chemical ingredient barrier missing from cheap drugstores.', score: '91%' },
    { original: 'Claritek Tablet Uses in Urdu', optimized: 'Why Taking This Antibiotic for Common Cold Fails: What Patients Must Know', hook: 'How antibacterial resistance triggers from early dose stops.', score: '88%' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Flame className="h-7 w-7 text-amber-500" /> Google Discover Optimizer
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit headlines and hook descriptions to maximize Google Discover click rates without clickbait.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Discover Optimizations list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {discoverData.map((row, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 space-y-2">
              <div className="flex justify-between items-center border-b border-gray-100 pb-1.5 mb-1.5">
                <span className="text-[10px] text-gray-400 font-bold">Standard Title: "{row.original}"</span>
                <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">{row.score}</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-gray-400 uppercase block mb-0.5">Discover Optimized Headline</span>
                <p className="font-bold text-gray-950 leading-snug">"{row.optimized}"</p>
              </div>
              <div>
                <span className="text-[9px] font-bold text-gray-400 uppercase block mb-0.5">Emotional Hook / Description</span>
                <p className="text-gray-600 italic">"{row.hook}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
