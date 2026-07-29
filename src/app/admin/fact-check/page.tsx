'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';

export default function FactCheckDashboardPage() {
  const auditLogs = [
    { type: 'Health', topic: 'Cytopan Tablet Uses in Urdu', check: 'Dosage limits / stomach shield mechanism', status: 'VERIFIED', details: 'Matches Searle prescribing sheet: Diclofenac 50mg / Misoprostol 200mcg' },
    { type: 'Finance', topic: 'Warren Buffett Wealth Profile', check: 'Berkshire Hathaway Q3 SEC Form 13F holdings', status: 'NEEDS_REVIEW', details: 'SEC filing refresh available since last crawling date.' },
    { type: 'Beauty', topic: 'Is Nivea a Good Starting Brand Compared to Garnier?', check: 'Salicylic Acid pH constraints', status: 'VERIFIED', details: 'Formulation analysis confirms pH range of 3.8 to 4.2' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">AI Fact Checking System</h1>
          <p className="text-xs text-gray-500 mt-1">Cross-reference clinical inserts, corporate registries, and citation authorities.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Audits list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">Vertical</th>
                <th className="px-4 py-3">Topic focus</th>
                <th className="px-4 py-3">Factual check item</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Verification Logs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {auditLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-bold text-gray-900">{log.type}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">{log.topic}</td>
                  <td className="px-4 py-3">{log.check}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      log.status === 'VERIFIED' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
                    }`}>
                      {log.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
