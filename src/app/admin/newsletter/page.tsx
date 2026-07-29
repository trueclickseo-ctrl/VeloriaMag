'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Users, Send } from 'lucide-react';

export default function NewsletterDashboard() {
  const subscribers = [
    { email: 'reader1@example.com', joined: 'July 28, 2026', interests: 'Health, Finance' },
    { email: 'reader2@example.com', joined: 'July 29, 2026', interests: 'Beauty, Celebrity' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">Newsletter Growth Center</h1>
          <p className="text-xs text-gray-500 mt-1">Manage subscriber preferences, view interest graphs, and draft campaigns.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Subscribers list */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Active Subscribers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs text-left text-gray-600">
              <thead>
                <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                  <th className="px-4 py-3">Email Address</th>
                  <th className="px-4 py-3">Joined Date</th>
                  <th className="px-4 py-3">Interests</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {subscribers.map((sub, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{sub.email}</td>
                    <td className="px-4 py-3">{sub.joined}</td>
                    <td className="px-4 py-3 font-semibold text-amber-700">{sub.interests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Campaign panel */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-fit space-y-4">
          <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-wider border-b border-gray-50 pb-2 flex items-center gap-1.5">
            <Mail className="h-4 w-4 text-amber-500" /> Dispatch Campaign
          </h3>
          <input
            type="text"
            placeholder="Campaign Subject Line..."
            className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white text-xs transition-colors"
          />
          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded transition-colors flex items-center justify-center gap-1.5">
            <Send className="h-3.5 w-3.5" /> Dispatch Weekly Digest
          </button>
        </div>
      </div>
    </div>
  );
}
