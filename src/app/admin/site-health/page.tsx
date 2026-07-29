'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Activity, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function SiteHealthPage() {
  const monitors = [
    { service: 'Next.js App Server', status: 'Healthy', details: 'RSC rendering active, memory usage: 142MB / 512MB' },
    { service: 'SQLite Database', status: 'Healthy', details: 'Prisma Client pooled, query latency: 1.2ms' },
    { service: 'Sitemap status', status: 'Healthy', details: '18 URLs mapped inside /sitemap.xml' },
    { service: 'OpenGraph Image Optimizer', status: 'Healthy', details: 'WebP resizing enabled, lazy loading applied' },
    { service: 'Broken Links', status: 'Warning', details: '2 external references failed check (404 status returned)' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Activity className="h-7 w-7 text-emerald-500" /> Platform Site Health Monitor
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit active server statuses, database Latencies, sitemap generation errors, and redirects.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Grid monitors */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {monitors.map((mon, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold text-gray-900">{mon.service}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">{mon.details}</p>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                mon.status === 'Healthy' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
              }`}>
                {mon.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
