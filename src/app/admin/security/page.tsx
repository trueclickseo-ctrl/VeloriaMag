'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Key, History } from 'lucide-react';

export default function SecurityManagementPage() {
  const auditLogs = [
    { user: 'admin@veloriamag.com', role: 'Owner', action: 'Approved Article: Cytopan Uses in Urdu', ip: '192.168.1.1', date: 'Just now' },
    { user: 'writer1@veloriamag.com', role: 'Writer', action: 'Updated Draft: CeraVe vs Cetaphil', ip: '192.168.1.15', date: '10 minutes ago' },
    { user: 'reviewer1@veloriamag.com', role: 'Reviewer', action: 'Signed off fact-check logs', ip: '192.168.1.22', date: '1 hour ago' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Shield className="h-7 w-7 text-indigo-600" /> Security & Role management
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit administrative action tables, content change logs, and IP login histories.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Security logs */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Administrative Audit Trail</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">User Profile</th>
                <th className="px-4 py-3">Role permissions</th>
                <th className="px-4 py-3">Action logged</th>
                <th className="px-4 py-3">IP Address</th>
                <th className="px-4 py-3 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {auditLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{log.user}</td>
                  <td className="px-4 py-3 font-bold text-gray-500 uppercase">{log.role}</td>
                  <td className="px-4 py-3">{log.action}</td>
                  <td className="px-4 py-3 font-mono">{log.ip}</td>
                  <td className="px-4 py-3 text-right text-gray-400">{log.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
