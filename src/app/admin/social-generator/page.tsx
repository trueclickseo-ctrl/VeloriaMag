'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Share2, Sparkles } from 'lucide-react';

export default function SocialGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [socialText, setSocialText] = useState<any>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;

    setSocialText({
      facebook: `How did ${topic} build a modern empire? In our latest guide, we analyze verified assets, business valuations, and career earnings milestones. Read the full authority profile at VeloriaMag.`,
      twitter: `How did ${topic} accumulate their wealth? 📊 We break down the verified investments, holdings, and SEC filings. Read the profile: #VeloriaMag #Billionaire`,
      pinterest: `Discover the wealth secrets of ${topic}. Net worth estimates, stock holdings, and career milestones.`,
      linkedin: `Billionaire wealth profiles represent a unique look at asset compounding and corporate equity value. In our latest piece on ${topic}, we audit verified holdings. #WealthManagement #SEC`
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Share2 className="h-7 w-7 text-amber-500" /> Social Media Content Generator
          </h1>
          <p className="text-xs text-gray-500 mt-1">Compile emotional headlines, hooks, summary paragraphs, and hashtags for published posts.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-fit space-y-4">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 border-b border-gray-50 pb-2">Target Article</h2>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Enter Published Topic Name</label>
              <input
                type="text"
                placeholder="e.g. Elon Musk"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white text-xs transition-colors"
                required
              />
            </div>
            <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded transition-colors flex items-center justify-center gap-1.5">
              <Sparkles className="h-4 w-4" /> Generate Social Captions
            </button>
          </form>
        </div>

        {/* Output */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6 shadow-sm min-h-[300px]">
          {socialText ? (
            <div className="space-y-4">
              <div className="border border-gray-50 rounded-xl p-3 bg-gray-50/50">
                <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Facebook Post Layout</span>
                <p className="text-gray-800 leading-relaxed font-semibold">"{socialText.facebook}"</p>
              </div>
              <div className="border border-gray-50 rounded-xl p-3 bg-gray-50/50">
                <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">X/Twitter Post Layout</span>
                <p className="text-gray-800 leading-relaxed font-semibold">"{socialText.twitter}"</p>
              </div>
              <div className="border border-gray-50 rounded-xl p-3 bg-gray-50/50">
                <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Pinterest Description</span>
                <p className="text-gray-800 leading-relaxed font-semibold">"{socialText.pinterest}"</p>
              </div>
              <div className="border border-gray-50 rounded-xl p-3 bg-gray-50/50">
                <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">LinkedIn Post Summary</span>
                <p className="text-gray-800 leading-relaxed font-semibold">"{socialText.linkedin}"</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[250px] text-center text-gray-400">
              <Share2 className="h-10 w-10 text-gray-200 mb-2" />
              <p className="text-xs font-bold">Waiting for input...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
