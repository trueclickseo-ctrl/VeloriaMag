'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Languages } from 'lucide-react';

export default function LocalizationPage() {
  const languages = [
    { code: 'en', name: 'English', target: 'Default', slugPrefix: '/' },
    { code: 'ur', name: 'Urdu (اردو)', target: 'Pakistan Hub', slugPrefix: '/ur/' },
    { code: 'ar', name: 'Arabic (العربية)', target: 'Middle East Hub', slugPrefix: '/ar/' },
    { code: 'es', name: 'Spanish (Español)', target: 'Latin America Hub', slugPrefix: '/es/' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Globe className="h-7 w-7 text-indigo-500" /> AI Translation & Localization
          </h1>
          <p className="text-xs text-gray-500 mt-1">Configure hreflang translation tags, map localized slugs, and verify Arabic/Urdu RTL alignment patterns.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Translations list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {languages.map((lang, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold text-gray-900">{lang.name}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Slug Mapping Prefix: <code className="bg-white px-1 border border-gray-100 rounded">{lang.slugPrefix}</code> | Target Market: {lang.target}</p>
              </div>
              <span className="bg-indigo-50 text-indigo-800 text-[9px] font-bold px-2.5 py-0.5 rounded border border-indigo-100 uppercase">
                Active hreflang
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
