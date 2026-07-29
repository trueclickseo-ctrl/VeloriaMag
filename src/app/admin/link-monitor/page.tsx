'use client';

import React from 'react';
import Link from 'next/link';
import { Link2, AlertCircle } from 'lucide-react';

export default function LinkMonitorPage() {
  const issues = [
    { source: '/health/cytopan-tablet-uses-in-urdu', type: 'External Citation', url: 'https://expired-manufacturer-prescribing-sheet.pdf', error: '404 Broken Link', fix: 'Replace with active Searle pakistan insert index URL' },
    { source: '/beauty/la-roche-posay-vs-neutrogena', type: 'Affiliate URL', url: 'https://amazon.com/dp/B004L8O8BE?tag=veloriamag-20', error: 'Changed Target', fix: 'Amazon indicates product stockout; redirect to active seller' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Link2 className="h-7 w-7 text-amber-500" /> Broken Link & Citation Monitor
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit external citations, affiliate redirects, and internal linking chains for dead URLs.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Issues list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {issues.map((row, idx) => (
            <div key={idx} className="border border-red-100 rounded-xl p-4 bg-red-50/10 space-y-2">
              <div className="flex justify-between items-center border-b border-red-200/40 pb-1.5 mb-1.5">
                <span className="text-[10px] text-gray-400 font-bold">Source Article: {row.source}</span>
                <span className="text-[9px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">{row.error}</span>
              </div>
              <p className="text-gray-800">Dead Link: <code className="bg-white px-1 border border-gray-100 rounded break-all">{row.url}</code></p>
              <p className="text-[10px] text-gray-500 font-medium">Recommended Fix: {row.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
