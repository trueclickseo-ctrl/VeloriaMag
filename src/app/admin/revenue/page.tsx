'use client';

import React from 'react';
import Link from 'next/link';
import { DollarSign, BarChart3, TrendingUp } from 'lucide-react';

export default function RevenueDashboard() {
  const earningsData = [
    { url: '/beauty/la-roche-posay-vs-neutrogena', cat: 'Beauty', traffic: 3200, revenue: 142.50, rpm: 44.53 },
    { url: '/health/cytopan-tablet-uses-in-urdu', cat: 'Health', traffic: 8400, revenue: 68.00, rpm: 8.09 },
    { url: '/finance/warren-buffett-wealth-profile', cat: 'Finance', traffic: 850, revenue: 110.00, rpm: 129.41 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <DollarSign className="h-7 w-7 text-emerald-500" /> Revenue Intelligence
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit ad impression revenues, affiliate commission distributions, and total page RPM indexes.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
        <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-xs">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Estimated Earnings</span>
          <span className="text-xl font-bold text-gray-900 mt-1 block">$320.50</span>
          <span className="text-[9px] text-emerald-600 font-bold flex items-center justify-center gap-0.5 mt-1">
            <TrendingUp className="h-3 w-3" /> +18.2% (last 28d)
          </span>
        </div>
        <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-xs">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Affiliate Commission</span>
          <span className="text-xl font-bold text-gray-900 mt-1 block">$142.50</span>
        </div>
        <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-xs">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Average RPM</span>
          <span className="text-xl font-bold text-gray-900 mt-1 block">$25.84</span>
        </div>
      </div>

      {/* Revenue Table */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Revenue Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">Article Slug</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Total Traffic</th>
                <th className="px-4 py-3">Earnings</th>
                <th className="px-4 py-3 text-right">Page RPM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {earningsData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.url}</td>
                  <td className="px-4 py-3 font-bold text-gray-500 uppercase">{row.cat}</td>
                  <td className="px-4 py-3">{row.traffic.toLocaleString()}</td>
                  <td className="px-4 py-3 font-bold text-emerald-600">${row.revenue.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right font-bold text-gray-950">${row.rpm.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
