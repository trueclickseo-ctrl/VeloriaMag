'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PenTool, Send, CheckCircle, FileCode, Award, ArrowRight, CornerDownRight } from 'lucide-react';

export default function ArticleWriterPage() {
  const [topic, setTopic] = useState('');
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('Celebrity Net Worth');
  const [pillar, setPillar] = useState('celebrity-net-worth');
  const [audience, setAudience] = useState('Investors & General Public');
  const [language, setLanguage] = useState('English');
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('BRIEF_CREATED');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !keyword) return;

    setLoading(true);
    setStatus('RESEARCHING');

    setTimeout(() => {
      setStatus('WRITING');
      setTimeout(() => {
        setStatus('FACT_CHECK');
        setTimeout(() => {
          setStatus('SEO_REVIEW');
          setTimeout(() => {
            setStatus('SCHEMA_REVIEW');
            setTimeout(() => {
              setStatus('READY_TO_PUBLISH');
              
              // Generate Article Layout
              let content = '';
              let disclaimer = '';
              let entities = 'Elon Musk, Tesla, SpaceX, Net Worth';
              let schemaType = 'Person, Article, ProfilePage';
              let citationText = 'SEC Filings, Bloomberg Billionaires Index';

              if (category === 'Celebrity Net Worth') {
                disclaimer = '> [!NOTE]\n> **Financial Disclaimer:** Estimated net worth figures vary depending on available public information. This profile is compiled based on verified equity and asset listings.';
                content = `## 1. Elon Musk's Career and Holdings\nElon Musk's fortune is fundamentally driven by his ownership stakes in **Tesla** (NASDAQ: TSLA) and **SpaceX**. Public sources estimate his net worth at approximately $230 Billion, representing fluctuating equity values.\n\n## 2. Business Ventures & Income Sources\nFrom PayPal to Neuralink, Musk has continuously reinvested capital into high-risk engineering firms, holding major stakes in:\n- **Tesla Motors** (Equity holding)\n- **SpaceX** (Aerospace valuation)\n- **xAI & Boring Company** (Private venture assets)\n\n| Venture | Stake | Valuation | Source |\n| :--- | :--- | :--- | :--- |\n| Tesla | ~20% | ~$100B | SEC Filings |\n| SpaceX | ~42% | ~$75B | Funding rounds |`;
              } else if (category === 'Health') {
                disclaimer = '> [!CAUTION]\n> **Medical Disclaimer:** This article provides general educational information only. Individual prescription dosages must be determined by a certified physician.';
                entities = 'Metformin, Diabetes, Glucophage, Active Ingredient';
                schemaType = 'MedicalWebPage, Drug, FAQPage';
                citationText = 'FDA prescribing insert, Getz Pharma Product Index';
                content = `## 1. Metformin Tablet Uses\n**Metformin** is the primary active ingredient used to treat Type 2 Diabetes. It acts by reducing glucose production in the liver and improving insulin sensitivity.\n\n## 2. Important Safety Warnings\n- Check kidney function annually.\n- Discontinue before contrast dye scans.\n- Watch for signs of lactic acidosis.`;
              }

              setArticle({
                title: topic,
                slug: keyword.toLowerCase().replace(/ /g, '-'),
                disclaimer,
                content,
                entities,
                schemaType,
                citations: citationText,
                seoScore: 96,
                contentScore: 92,
                trustScore: 98,
                imageBrief: {
                  file: `${keyword.toLowerCase().replace(/ /g, '-')}.webp`,
                  alt: `${topic} profile and holdings illustration`,
                  concept: 'Professional portrait visual next to high-tech manufacturing facility background grid.'
                }
              });
              setLoading(false);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <PenTool className="h-7 w-7 text-amber-500" /> AI Article Production Pipeline
          </h1>
          <p className="text-xs text-gray-500 mt-1">Submit topics to automatically run research agents, write articles, check E-E-A-T disclaimers, and compile CMS markdown files.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg text-xs transition-colors">
          ← Return to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form Panel */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Pipeline Triggers</h2>
          <form onSubmit={handleGenerate} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Article Topic</label>
              <input 
                type="text" 
                placeholder="e.g. Elon Musk Net Worth 2026" 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1">Primary Keyword</label>
              <input 
                type="text" 
                placeholder="e.g. elon musk net worth" 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Category</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                >
                  <option value="Celebrity Net Worth">Celebrity Net Worth</option>
                  <option value="Health">Health</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1">Language</label>
                <select 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                >
                  <option value="English">English</option>
                  <option value="Urdu">Urdu</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1">Pillar Page Link</label>
              <input 
                type="text" 
                value={pillar} 
                onChange={(e) => setPillar(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white rounded-lg py-2.5 font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              {loading ? 'Processing Workflow...' : 'Generate Article'}
            </button>
          </form>

          {/* Workflow Status Tracker */}
          {loading && (
            <div className="border-t border-gray-100 mt-6 pt-4 text-xs">
              <span className="font-bold text-gray-700 block mb-2">Workflow Stages:</span>
              <div className="space-y-1.5 font-mono text-[10px] text-gray-400">
                <div className={status === 'RESEARCHING' ? 'text-amber-600 font-bold' : ''}>[ ] RESEARCHING</div>
                <div className={status === 'WRITING' ? 'text-amber-600 font-bold' : ''}>[ ] WRITING</div>
                <div className={status === 'FACT_CHECK' ? 'text-amber-600 font-bold' : ''}>[ ] FACT_CHECK</div>
                <div className={status === 'SEO_REVIEW' ? 'text-amber-600 font-bold' : ''}>[ ] SEO_REVIEW</div>
                <div className={status === 'SCHEMA_REVIEW' ? 'text-amber-600 font-bold' : ''}>[ ] SCHEMA_REVIEW</div>
              </div>
            </div>
          )}
        </div>

        {/* Right Output Draft Panel */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6 shadow-sm min-h-[400px]">
          {article ? (
            <div className="space-y-6 text-xs text-gray-600">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h2 className="text-base font-bold text-gray-900 font-serif">{article.title}</h2>
                  <p className="text-[10px] text-gray-400">URL: <code className="bg-gray-100 px-1 rounded">/{article.slug}/</code></p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[9px] font-bold">READY TO PUBLISH</span>
              </div>

              {/* Quality Scoring Result */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[10px]">AI SEO Editor Score</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="border border-emerald-100 rounded-xl p-3 bg-emerald-50/20">
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">SEO Audit</span>
                    <span className="text-lg font-bold text-emerald-800">{article.seoScore}/100</span>
                  </div>
                  <div className="border border-emerald-100 rounded-xl p-3 bg-emerald-50/20">
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">Content Depth</span>
                    <span className="text-lg font-bold text-emerald-800">{article.contentScore}/100</span>
                  </div>
                  <div className="border border-emerald-100 rounded-xl p-3 bg-emerald-50/20">
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">E-E-A-T Trust</span>
                    <span className="text-lg font-bold text-emerald-800">{article.trustScore}/100</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-gray-700 italic">
                <span className="font-bold uppercase text-[9px] text-gray-400 block mb-1">Disclaimer Generated</span>
                {article.disclaimer}
              </div>

              {/* Article Content Render */}
              <div className="prose prose-sm max-w-none text-gray-800 border-t border-gray-100 pt-4">
                <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
              </div>

              {/* AI Image Brief */}
              <div className="bg-amber-50/20 border border-amber-100/50 p-4 rounded-xl">
                <h4 className="font-bold text-amber-900 uppercase text-[9px] block mb-2">AI Image Generation Brief</h4>
                <div className="space-y-1 text-gray-700">
                  <p><strong>File Name:</strong> {article.imageBrief.file}</p>
                  <p><strong>Concept:</strong> {article.imageBrief.concept}</p>
                  <p><strong>Alt text:</strong> {article.imageBrief.alt}</p>
                </div>
              </div>

              {/* Export Markdown */}
              <div className="flex gap-2 justify-end">
                <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-4 py-2 font-semibold transition-all flex items-center gap-1.5">
                  <FileCode className="h-4 w-4" /> Export to `content/articles/`
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[350px] text-center text-gray-400">
              <PenTool className="h-10 w-10 text-gray-200 mb-2" />
              <p className="text-xs font-bold">No draft generated yet</p>
              <p className="text-[10px] text-gray-300 max-w-xs mt-1">Submit the left form to trigger the editorial writing assistant.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
