'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart3, Users, Eye, Clock, MousePointer } from 'lucide-react';

export default function AnalyticsDashboardPage() {
  const articlesPerformance = [
    { title: 'Cytopan Tablet Uses in Urdu', cat: 'Health', views: 8400, engagement: '88%', source: 'Google Search', rec: 'Keep updated' },
    { title: 'Is Nivea a Good Starting Brand Compared to Garnier?', cat: 'Beauty', views: 3200, engagement: '76%', source: 'Pinterest', rec: 'Embed internal links to Aveeno comparison' },
    { title: 'Warren Buffett Billionaire Wealth Profile', cat: 'Finance', views: 850, engagement: '64%', source: 'Newsletter', rec: 'Refresh quarterly holdings' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">Reader Analytics</h1>
          <p className="text-xs text-gray-500 mt-1">Audit page views, average reading time, scroll depth, and traffic distributions.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 text-center">
        <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-xs">
          <Eye className="h-6 w-6 text-indigo-600 mx-auto mb-1" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Total Views</span>
          <span className="text-xl font-bold text-gray-900 mt-1 block">12.4K</span>
        </div>
        <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-xs">
          <Users className="h-6 w-6 text-indigo-600 mx-auto mb-1" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Unique Visitors</span>
          <span className="text-xl font-bold text-gray-900 mt-1 block">9.2K</span>
        </div>
        <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-xs">
          <Clock className="h-6 w-6 text-indigo-600 mx-auto mb-1" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Avg Reading Time</span>
          <span className="text-xl font-bold text-gray-900 mt-1 block">3m 42s</span>
        </div>
        <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-xs">
          <MousePointer className="h-6 w-6 text-indigo-600 mx-auto mb-1" />
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Newsletter Conv.</span>
          <span className="text-xl font-bold text-gray-900 mt-1 block">4.85%</span>
        </div>
      </div>

      {/* Article Performance Table */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Individual Post Metrics</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">Article Title</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Total Views</th>
                <th className="px-4 py-3">Engagement</th>
                <th className="px-4 py-3">Primary Traffic Source</th>
                <th className="px-4 py-3">Editorial Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {articlesPerformance.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.title}</td>
                  <td className="px-4 py-3 font-bold text-gray-500 uppercase">{row.cat}</td>
                  <td className="px-4 py-3">{row.views.toLocaleString()}</td>
                  <td className="px-4 py-3 font-bold text-emerald-600">{row.engagement}</td>
                  <td className="px-4 py-3">{row.source}</td>
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
