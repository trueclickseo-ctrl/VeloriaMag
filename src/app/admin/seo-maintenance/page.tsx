'use client';

import React from 'react';
import Link from 'next/link';
import { Settings, CheckCircle, AlertTriangle } from 'lucide-react';

export default function SeoMaintenancePage() {
  const recommendations = [
    { type: 'Technical', target: 'La Roche-Posay vs Neutrogena', issue: 'Missing Product FAQ schema', rec: 'Inject dynamic FAQPage markup array' },
    { type: 'Content', target: 'Warren Buffett Wealth Profile', issue: 'Old last-crawled date (> 90 days)', rec: 'Refresh financial holdings from Q3 Form 13F' },
    { type: 'Linking', target: 'Nivea starting brand skincare comparison', issue: 'Missing 1 cross-category authority link', rec: 'Bridge to Cytopan uses on key phrase pain conditions' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Settings className="h-7 w-7 text-amber-500" /> Automated SEO Maintenance
          </h1>
          <p className="text-xs text-gray-500 mt-1">Generate automated audit summaries for structural data errors, broken schema, and keyword cannibalization.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Recommendations List */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {recommendations.map((row, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{row.type} Audit | {row.target}</span>
                <h3 className="text-xs font-bold text-red-700 mt-1">Issue: {row.issue}</h3>
                <p className="text-[10px] text-gray-500 mt-0.5">Recommendation: {row.rec}</p>
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white text-[9px] font-bold px-3 py-1 rounded transition-colors whitespace-nowrap">
                Apply Fix
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
