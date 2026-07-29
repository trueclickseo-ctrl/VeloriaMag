'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Globe, AlertTriangle, HelpCircle, FileText, ArrowRight } from 'lucide-react';

export default function ResearchAssistantPage() {
  const [query, setQuery] = useState('');
  const [research, setResearch] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setTimeout(() => {
      setResearch({
        query,
        summary: `Search results for "${query}" show high informational demand. Competitors focus primarily on generalized definitions, missing detailed pharmacological structures and verified citation sheets.`,
        gaps: [
          'No competitor details child safety dosage boundaries.',
          'Missing explanations of drug combinations for stomach lining protection.'
        ],
        entities: ['Active Ingredient', 'Dosage Limits', 'FDA Guidelines', 'Safety Warnings'],
        questions: [
          'What are the side effects of this tablet?',
          'Can I take this medicine during pregnancy?',
          'Is this drug safe for kidney patients?'
        ],
        sources: [
          { name: 'Food and Drug Administration (FDA)', url: 'https://fda.gov' },
          { name: 'World Health Organization (WHO)', url: 'https://who.int' }
        ]
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Search className="h-7 w-7 text-amber-500" /> AI Research Assistant
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit ranking competitors, scrape entity structures, and find content gaps before generating briefs.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg text-xs transition-colors">
          ← Return to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form Panel */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Scraper Form</h2>
          <form onSubmit={handleSearch} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Target Search Query</label>
              <input 
                type="text" 
                placeholder="e.g. augmentin tablet uses in urdu" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white rounded-lg py-2.5 font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              {loading ? 'Auditing SERPs...' : 'Search SERPs'}
            </button>
          </form>
        </div>

        {/* Right Output Panel */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6 shadow-sm min-h-[400px]">
          {research ? (
            <div className="space-y-6 text-xs text-gray-600">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h2 className="text-base font-bold text-gray-900 font-serif">Research Audit: {research.query}</h2>
                  <p className="text-[10px] text-gray-400">Scraped data synced to active ResearchBrief model.</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[9px] font-bold">Research Complete</span>
              </div>

              {/* SERP Summary */}
              <div>
                <h3 className="font-bold text-gray-900 mb-1 uppercase tracking-wider text-[9px]">SERP Competitor Summary</h3>
                <p className="text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {research.summary}
                </p>
              </div>

              {/* Competitor Gaps */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[9px] flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4 text-red-500" /> Detected Competitor Content Gaps
                </h3>
                <div className="space-y-2">
                  {research.gaps.map((gap: string, i: number) => (
                    <div key={i} className="border-l-2 border-red-500 bg-red-50/10 p-2.5 pl-3 rounded-r-lg text-gray-800">
                      {gap}
                    </div>
                  ))}
                </div>
              </div>

              {/* Entities Mapped */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[9px]">Entities Discovered</h3>
                <div className="flex flex-wrap gap-2">
                  {research.entities.map((ent: string, i: number) => (
                    <span key={i} className="bg-blue-50 text-blue-800 border border-blue-100 rounded px-2.5 py-1 font-semibold text-[9px]">
                      {ent}
                    </span>
                  ))}
                </div>
              </div>

              {/* Questions Found */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[9px] flex items-center gap-1">
                  <HelpCircle className="h-4 w-4 text-indigo-500" /> People Also Ask (PAA) Questions
                </h3>
                <div className="space-y-1.5">
                  {research.questions.map((q: string, i: number) => (
                    <div key={i} className="bg-gray-50 border border-gray-100 p-2 rounded-lg text-gray-800 font-medium">
                      {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sources Found */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[9px] flex items-center gap-1">
                  <Globe className="h-4 w-4 text-emerald-500" /> Authoritative Source Recommendations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {research.sources.map((src: any, i: number) => (
                    <a key={i} href={src.url} target="_blank" className="border border-gray-100 rounded-lg p-3 bg-white hover:border-gray-300 transition-colors flex justify-between items-center">
                      <div>
                        <span className="font-bold text-gray-900 block">{src.name}</span>
                        <span className="text-[9px] text-gray-400">{src.url}</span>
                      </div>
                      <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">HIGH TRUST</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[350px] text-center text-gray-400">
              <Search className="h-10 w-10 text-gray-200 mb-2" />
              <p className="text-xs font-bold">No research scraped yet</p>
              <p className="text-[10px] text-gray-300 max-w-xs mt-1">Submit the left search bar to parse active competitor rankings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
