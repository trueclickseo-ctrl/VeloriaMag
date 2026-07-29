'use client';

import React from 'react';
import Link from 'next/link';
import { Database, Clock, RefreshCw } from 'lucide-react';

export default function BackupsPage() {
  const backups = [
    { type: 'Prisma SQLite Database (dev.db)', size: '1.4MB', last: '2 hours ago', status: 'Healthy' },
    { type: 'Media Assets (content/images)', size: '42.5MB', last: '24 hours ago', status: 'Healthy' },
    { type: 'Markdown CMS Content (content/articles)', size: '245KB', last: 'Just now', status: 'Healthy' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Database className="h-7 w-7 text-amber-500" /> Backup & Recovery System
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit SQLite database backup schedules, media asset targets, and article CMS rollbacks.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Backup list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {backups.map((bk, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold text-gray-900">{bk.type}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Size: {bk.size} | Last Completed: {bk.last}</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-amber-600 hover:bg-amber-700 text-white text-[9px] font-bold px-3 py-1.5 rounded transition-colors flex items-center gap-1">
                  <RefreshCw className="h-3 w-3" /> Restore Backup
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
