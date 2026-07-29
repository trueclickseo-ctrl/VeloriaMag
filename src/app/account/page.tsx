'use client';

import React from 'react';
import Link from 'next/link';
import { User, Bookmark, History, Mail } from 'lucide-react';

export default function ReaderAccountPage() {
  const saved = [
    { title: 'Cytopan Tablet Uses in Urdu', cat: 'Health', url: '/health/cytopan-tablet-uses-in-urdu/' },
    { title: 'Is Nivea a Good Starting Brand Compared to Garnier?', cat: 'Beauty', url: '/beauty/nivea-vs-garnier/' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-xs text-gray-600 leading-relaxed">
      {/* Profile Header */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-center gap-4 mb-8">
        <div className="h-12 w-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-lg">
          U
        </div>
        <div>
          <h2 className="text-base font-bold text-gray-900">User Account Profile</h2>
          <p className="text-[10px] text-gray-400">Manage saved articles, followed category hubs, and weekly newsletter campaigns.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Saved articles */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-1.5 border-b border-gray-50 pb-2">
              <Bookmark className="h-4 w-4 text-amber-600" /> Saved Articles ({saved.length})
            </h3>
            <div className="space-y-3">
              {saved.map((art, idx) => (
                <div key={idx} className="flex justify-between items-center bg-gray-50/50 border border-gray-100 rounded-lg p-3">
                  <div>
                    <Link href={art.url} className="font-bold text-gray-900 hover:underline">{art.title}</Link>
                    <span className="text-[9px] text-gray-400 block mt-0.5 uppercase font-bold">{art.cat}</span>
                  </div>
                  <span className="text-[10px] text-amber-600 font-semibold cursor-pointer">Remove</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Newsletter preferences */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-fit space-y-4">
          <h3 className="text-sm font-bold text-gray-900 mb-2 border-b border-gray-50 pb-2 flex items-center gap-1.5">
            <Mail className="h-4 w-4 text-amber-600" /> Subscription Preferences
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
              <span>Health Newsletter</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
              <span>Beauty Comparisons</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
              <span>Billionaire Wealth Alerts</span>
            </label>
          </div>
          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded transition-colors mt-2">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
