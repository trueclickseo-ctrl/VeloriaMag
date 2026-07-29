'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Globe, TrendingUp } from 'lucide-react';

export default function SearchPerformancePage() {
  const perfData = [
    { url: '/health/cytopan-tablet-uses-in-urdu', keyword: 'Cytopan tablet uses in urdu', clicks: 420, impressions: 8400, ctr: '5.0%', position: 4.2, rec: 'Good performance' },
    { url: '/beauty/nivea-vs-garnier', keyword: 'nivea vs garnier starting brand', clicks: 80, impressions: 3200, ctr: '2.5%', position: 12.8, rec: 'Position 12: Expand content & build entities' },
    { url: '/finance/warren-buffett-wealth-profile', keyword: 'Warren Buffett net worth holdings', clicks: 12, impressions: 850, ctr: '1.4%', position: 18.5, rec: 'High impressions + low CTR: Improve Discover title' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">Google Search Console Integration</h1>
          <p className="text-xs text-gray-500 mt-1">Placeholder API integrations tracking organic CTR, impressions, and crawler indexing rates.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Query stats table */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">Target Slug</th>
                <th className="px-4 py-3">Organic Keyword</th>
                <th className="px-4 py-3">Clicks</th>
                <th className="px-4 py-3">Impressions</th>
                <th className="px-4 py-3">CTR</th>
                <th className="px-4 py-3">Avg Position</th>
                <th className="px-4 py-3">Editorial Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {perfData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.url}</td>
                  <td className="px-4 py-3">{row.keyword}</td>
                  <td className="px-4 py-3">{row.clicks}</td>
                  <td className="px-4 py-3">{row.impressions}</td>
                  <td className="px-4 py-3">{row.ctr}</td>
                  <td className="px-4 py-3 font-bold text-amber-600">{row.position}</td>
                  <td className="px-4 py-3 text-gray-500 font-medium">{row.rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
