'use client';

import React from 'react';
import Link from 'next/link';
import { GitMerge, FolderPlus, HelpCircle } from 'lucide-react';

export default function TopicMapPage() {
  const mapData = [
    { cat: 'Health', pillar: 'Medicine Uses in Urdu', articles: ['Cytopan Tablet Uses in Urdu', 'Coldrex Tablet Uses in Urdu', 'Claritek Tablet Uses in Urdu', 'Enflor Sachet Uses in Urdu'], entities: 'Diclofenac Sodium, Misoprostol, Clarithromycin, Probiotic', count: 8, missing: 'Augmentin, Brufen, Panadol' },
    { cat: 'Beauty', pillar: 'Skincare Comparisons', articles: ['Is Nivea a Good Starting Brand Compared to Garnier?', 'How Gentle Are Nivea\'s Creams Compared to Aveeno?', 'Are La Roche-Posay Products Better for Acne Than Neutrogena?'], entities: 'Mineral Oil, Salicylic Acid, Ceramides', count: 5, missing: 'CeraVe vs Cetaphil, Niacinamide guide' },
    { cat: 'Finance', pillar: 'Wealth & Net Worth', articles: ['Warren Buffett Billionaire Wealth Profile'], entities: 'Warren Buffett, Berkshire Hathaway Inc.', count: 2, missing: 'Elon Musk, Zendaya' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">Topic Authority Map</h1>
          <p className="text-xs text-gray-500 mt-1">Visualize category structures, active pillar nodes, sibling articles, and entity maps.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Map Trees */}
      <div className="space-y-6">
        {mapData.map((node, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-gray-50 pb-2">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{node.cat} Category Hub</span>
                <h3 className="text-base font-bold text-gray-900 font-serif mt-1">Pillar: {node.pillar}</h3>
              </div>
              <span className="bg-indigo-50 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded">
                Score: {Math.round((node.articles.length / (node.articles.length + node.missing.split(',').length)) * 100)}% Authority
              </span>
            </div>

            {/* Tree */}
            <div className="pl-4 border-l-2 border-indigo-100 space-y-2">
              <p><strong>Published Articles ({node.articles.length}):</strong></p>
              <div className="flex flex-wrap gap-2 text-[10px] font-medium text-gray-500">
                {node.articles.map((art, artIdx) => (
                  <span key={artIdx} className="bg-gray-100 px-2 py-1 rounded">{art}</span>
                ))}
              </div>
              <p className="mt-2"><strong>Core Entities Mapped:</strong> <code className="bg-gray-50 px-1 py-0.5 rounded">{node.entities}</code></p>
              <p className="text-red-700 font-medium"><strong>Missing Cluster Topics (Gaps):</strong> {node.missing}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
