'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Send, Sparkles } from 'lucide-react';

export default function NewsletterCampaignsPage() {
  const campaigns = [
    { subject: '5 Medicine Guides Readers Viewed This Week', cat: 'Health', openRate: '38.5%', sent: 'Sent' },
    { subject: 'Latest Wealth Profiles & Market Insights', cat: 'Finance', openRate: '42.1%', sent: 'Sent' },
    { subject: 'Trending Skincare Comparisons: Garnier vs Nivea', cat: 'Beauty', openRate: '31.2%', sent: 'Sent' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Mail className="h-7 w-7 text-amber-500" /> Newsletter Campaigns
          </h1>
          <p className="text-xs text-gray-500 mt-1">Design automated category newsletters, check open rates, and compile AI subject lines.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Campaigns list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">Campaign Subject Line</th>
                <th className="px-4 py-3">Interest Category</th>
                <th className="px-4 py-3">Average Open Rate</th>
                <th className="px-4 py-3 text-right">Dispatch Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {campaigns.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.subject}</td>
                  <td className="px-4 py-3 font-bold text-gray-500 uppercase">{row.cat}</td>
                  <td className="px-4 py-3 font-bold text-emerald-600">{row.openRate}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-100">
                      {row.sent}
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
