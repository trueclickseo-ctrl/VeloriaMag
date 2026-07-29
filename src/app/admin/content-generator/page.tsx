'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, FileText, Send, CheckCircle, ArrowRight, CornerDownRight } from 'lucide-react';

export default function ContentGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('Health');
  const [pillar, setPillar] = useState('medicine-uses-in-urdu');
  const [audience, setAudience] = useState('General Public');
  const [type, setType] = useState('Guide');
  const [generatedBrief, setGeneratedBrief] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !keyword) return;

    setLoading(true);
    // Simulate Brief Generation Engine logic based on input category
    setTimeout(() => {
      let intent = 'Informational';
      let entity = topic.split(' ')[0] || 'Target Product';
      let supports = ['FDA Guidelines', 'Patient Safety'];
      let gaps = ['Specific child dosing limits', 'Stomach irritation triggers'];
      let outline = ['H1: ' + topic, 'H2: What is ' + entity + '?', 'H2: Key Benefits & Uses', 'H3: Dosing Safeguards', 'H2: Warnings & Drug Interactions'];

      if (category === 'Beauty') {
        intent = 'Comparison';
        supports = ['Skin moisture barrier', 'Active ingredients'];
        gaps = ['Booster usage with retinoids', 'Acid pH compatibility'];
        outline = ['H1: ' + topic, 'H2: Brand Product Comparison', 'H2: Formulations & Ingredients', 'H3: Skin Type Suitability', 'H2: Pros and Cons Table'];
      } else if (category === 'Finance') {
        intent = 'Profile';
        supports = ['SEC filing data', 'Corporate valuations'];
        gaps = ['Long-term tax drag charts', 'Compound expense ratios'];
        outline = ['H1: ' + topic, 'H2: Asset Accumulation History', 'H2: Major Portfolios & Holdings', 'H3: Risk Assessment', 'H2: Financial Disclaimer Box'];
      }

      setGeneratedBrief({
        title: topic + ': Editorial Content Brief',
        primaryKeyword: keyword,
        intent,
        audience,
        category,
        pillar,
        slug: keyword.toLowerCase().replace(/ /g, '-'),
        entities: {
          primary: entity,
          supporting: supports.join(', ')
        },
        serpGap: gaps,
        outline,
        links: [
          { anchor: 'Uses in Urdu', target: `/health/${keyword.toLowerCase().replace(/ /g, '-')}/` },
          { anchor: 'Dosage limits', target: '/health/medicine-uses-in-urdu/' }
        ]
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-amber-500" /> AI Editorial Content Brief Generator
          </h1>
          <p className="text-xs text-gray-500 mt-1">Input target keywords to automatically output SEO content briefs, competitor gaps, and structural blueprints.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg text-xs transition-colors">
          ← Return to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form Panel */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Target Brief Variables</h2>
          <form onSubmit={handleGenerate} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Topic Title / Focus</label>
              <input 
                type="text" 
                placeholder="e.g. Augmentin Tablet Uses in Urdu" 
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
                placeholder="e.g. augmentin uses in urdu" 
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
                  <option value="Health">Health</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Celebrity">Celebrity</option>
                  <option value="Finance">Finance</option>
                  <option value="Faith">Faith</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1">Article Type</label>
                <select 
                  value={type} 
                  onChange={(e) => setType(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                >
                  <option value="Guide">Guide</option>
                  <option value="Comparison">Comparison</option>
                  <option value="Profile">Profile</option>
                  <option value="Review">Review</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1">Target Pillar</label>
              <input 
                type="text" 
                value={pillar} 
                onChange={(e) => setPillar(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1">Target Audience</label>
              <input 
                type="text" 
                value={audience} 
                onChange={(e) => setAudience(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white rounded-lg py-2.5 font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              {loading ? 'Analyzing SERPs...' : <><Send className="h-3.5 w-3.5" /> Compile Brief</>}
            </button>
          </form>
        </div>

        {/* Right Output Brief Panel */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6 shadow-sm min-h-[400px]">
          {generatedBrief ? (
            <div className="space-y-6 text-xs text-gray-600">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h2 className="text-base font-bold text-gray-900 font-serif">{generatedBrief.title}</h2>
                  <p className="text-[10px] text-gray-400">Slug: <code className="bg-gray-100 px-1 rounded">/{generatedBrief.category.toLowerCase()}/{generatedBrief.slug}/</code></p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[9px] font-bold">Brief Compiled</span>
              </div>

              {/* SERP Audit Details */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[10px]">SERP Competitor Gaps</h3>
                <div className="space-y-2">
                  {generatedBrief.serpGap.map((gap: string, i: number) => (
                    <div key={i} className="bg-red-50/20 border border-red-100/50 p-2.5 rounded-lg text-gray-700 flex gap-1.5 items-start">
                      <AlertIcon className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entities Mapped */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Primary Entity</span>
                  <span className="font-bold text-gray-900">{generatedBrief.entities.primary}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Supporting Entities</span>
                  <span className="font-bold text-gray-900">{generatedBrief.entities.supporting}</span>
                </div>
              </div>

              {/* Suggested Structure */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[10px]">Suggested Article Outline</h3>
                <div className="space-y-1 bg-gray-50/30 border border-gray-100 rounded-lg p-3">
                  {generatedBrief.outline.map((line: string, i: number) => (
                    <div key={i} className="flex gap-2 items-center text-gray-800 py-1">
                      <CornerDownRight className="h-3.5 w-3.5 text-gray-400" />
                      <span className="font-medium">{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Linking recommendations */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[10px]">Automatic Linking recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {generatedBrief.links.map((link: any, i: number) => (
                    <div key={i} className="border border-gray-100 rounded-lg p-3 bg-white flex justify-between items-center shadow-xs">
                      <div>
                        <span className="font-bold text-gray-900 block">Anchor: "{link.anchor}"</span>
                        <span className="text-[9px] text-gray-400">{link.target}</span>
                      </div>
                      <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Active Link</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[350px] text-center text-gray-400">
              <FileText className="h-10 w-10 text-gray-200 mb-2" />
              <p className="text-xs font-bold">No brief generated yet</p>
              <p className="text-[10px] text-gray-300 max-w-xs mt-1">Fill out the left form and hit "Compile Brief" to query the SEO brief assistant.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
