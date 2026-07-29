'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ShieldAlert, Award } from 'lucide-react';

export default function ContentHealthPage() {
  const decays = [
    { title: 'Cytopan Tablet Uses in Urdu', cat: 'Health', age: '185 days', lastUpdated: '185 days ago', trafficChange: '-12%', rankingChange: 'Pos 3 to Pos 6', priority: 'HIGH' },
    { title: 'Warren Buffett Wealth Profile', cat: 'Finance', age: '92 days', lastUpdated: '92 days ago', trafficChange: '-4%', rankingChange: 'Stable', priority: 'MEDIUM' },
    { title: 'Is Nivea a Good Starting Brand Compared to Garnier?', cat: 'Beauty', age: '12 days', lastUpdated: '12 days ago', trafficChange: '+22%', rankingChange: 'New Index', priority: 'LOW' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">Content Decay & Health Monitor</h1>
          <p className="text-xs text-gray-500 mt-1">Audit published YMYL freshness (180d for Health/Beauty, 90d for Finance/Net worth).</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Decay Register */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">Topic Title</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Age</th>
                <th className="px-4 py-3">Last Checked</th>
                <th className="px-4 py-3">Traffic change (28d)</th>
                <th className="px-4 py-3">Ranking Position</th>
                <th className="px-4 py-3 text-right">Update Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {decays.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.title}</td>
                  <td className="px-4 py-3 font-bold text-gray-500 uppercase">{row.cat}</td>
                  <td className="px-4 py-3">{row.age}</td>
                  <td className="px-4 py-3">{row.lastUpdated}</td>
                  <td className="px-4 py-3 font-semibold text-red-600">{row.trafficChange}</td>
                  <td className="px-4 py-3">{row.rankingChange}</td>
                  <td className="px-4 py-3 text-right">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      row.priority === 'HIGH' ? 'bg-red-50 text-red-800' :
                      row.priority === 'MEDIUM' ? 'bg-amber-50 text-amber-800' : 'bg-gray-50 text-gray-600'
                    }`}>
                      {row.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
