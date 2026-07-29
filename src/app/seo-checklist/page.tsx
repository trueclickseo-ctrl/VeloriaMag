'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckSquare, Square, Shield, Terminal, Globe, Award, Sparkles } from 'lucide-react';

export default function SeoChecklistPage() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    sitemap: true,
    robots: true,
    canonicals: true,
    schema: true,
    vitals: false,
    links: true,
    authors: true,
    citations: true,
    freshness: true,
    medReview: true,
    finDisclaimer: true,
    gsc: false,
    bing: false,
  });

  const toggle = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const total = Object.keys(checkedItems).length;
  const completed = Object.values(checkedItems).filter(Boolean).length;
  const percent = Math.round((completed / total) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="border-b border-gray-100 pb-6 mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-2">SEO Launch Checklist</h1>
        <p className="text-xs text-gray-500">Pre-flight SEO, E-E-A-T, and YMYL verification before VeloriaMag public launch.</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Launch Readiness</span>
          <span className="text-xs font-bold text-amber-600">{percent}% Completed</span>
        </div>
        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
          <div className="bg-amber-500 h-full transition-all duration-300" style={{ width: `${percent}%` }}></div>
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-8">
        {/* Technical SEO */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-2">
            <Terminal className="h-5 w-5 text-blue-600" />
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider font-serif">1. Technical SEO Audit</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('sitemap')}>
              {checkedItems.sitemap ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">XML Sitemap Configured</p>
                <p className="text-[10px] text-gray-500">Dynamic sitemap available at `/sitemap.xml` mapping categories, pillars, and articles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('robots')}>
              {checkedItems.robots ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Robots.txt Configured</p>
                <p className="text-[10px] text-gray-500">Allows search engines but disallows private admin folders.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('canonicals')}>
              {checkedItems.canonicals ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Canonical Tag Injection</p>
                <p className="text-[10px] text-gray-500">Every route automatically serves a canonical tag matching `generateMetadata` rules.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('schema')}>
              {checkedItems.schema ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Structured Data Graph Validation</p>
                <p className="text-[10px] text-gray-500">JSON-LD structures inject clean graph maps for articles, drugs, and products.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content SEO */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-2">
            <Award className="h-5 w-5 text-emerald-600" />
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider font-serif">2. Content SEO & E-E-A-T Integrity</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('links')}>
              {checkedItems.links ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Horizontal Internal Linking</p>
                <p className="text-[10px] text-gray-500">Articles link to siblings sharing target entity concepts to distribute PageRank.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('authors')}>
              {checkedItems.authors ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Author Profile Pages Active</p>
                <p className="text-[10px] text-gray-500">Dynamic author bio layout at `/authors/[slug]` displays credentials and full bibliographies.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('citations')}>
              {checkedItems.citations ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Primary References Listed</p>
                <p className="text-[10px] text-gray-500">Articles list academic, corporate, or governmental sources at the footer.</p>
              </div>
            </div>
          </div>
        </div>

        {/* YMYL Security */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-2">
            <Shield className="h-5 w-5 text-red-600" />
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider font-serif">3. YMYL Trust Protection</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('medReview')}>
              {checkedItems.medReview ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Medical Peer Reviews Active</p>
                <p className="text-[10px] text-gray-500">Health articles show "reviewed by" tags linking to licensed pharmacists or clinical experts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('finDisclaimer')}>
              {checkedItems.finDisclaimer ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Finance Disclaimers Active</p>
                <p className="text-[10px] text-gray-500">Finance directory guides display standard warning modules rejecting investment advice responsibilities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Console Integrations */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-2">
            <Globe className="h-5 w-5 text-indigo-600" />
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider font-serif">4. Webmaster Indexing Integration</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('gsc')}>
              {checkedItems.gsc ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Google Search Console Verification Tag</p>
                <p className="text-[10px] text-gray-500">HTML verification meta tag injected inside layout parameters.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 cursor-pointer" onClick={() => toggle('bing')}>
              {checkedItems.bing ? <CheckSquare className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" /> : <Square className="h-4 w-4 text-gray-300 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-xs font-bold text-gray-900">Bing Webmaster Console Verification Tag</p>
                <p className="text-[10px] text-gray-500">Verification tag ready in config for index submission.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-xs font-semibold text-amber-600 hover:underline">
          ← Return to Homepage
        </Link>
      </div>
    </div>
  );
}
