'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, HelpCircle } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    // Simulated db full text + entity search indexer
    const allItems = [
      { title: 'Cytopan Tablet Uses in Urdu', cat: 'Health', url: '/health/cytopan-tablet-uses-in-urdu/', entity: 'Diclofenac Sodium', excerpt: 'سائٹوپین گولی کے فائدے، نقصان، اور خوراک کے بارے میں تفصیلی معلومات۔' },
      { title: 'Is Nivea a Good Starting Brand Compared to Garnier?', cat: 'Beauty', url: '/beauty/nivea-vs-garnier/', entity: 'Mineral Oil', excerpt: 'Comparing Nivea and Garnier skincare products for beginners.' },
      { title: 'Warren Buffett Billionaire Wealth Profile', cat: 'Finance', url: '/finance/warren-buffett-wealth-profile/', entity: 'Warren Buffett', excerpt: 'Comprehensive corporate asset analysis and wealth profile.' }
    ];

    const filtered = allItems.filter(item => {
      const matchQuery = item.title.toLowerCase().includes(query.toLowerCase()) || 
                          item.entity.toLowerCase().includes(query.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchCat = category === 'All' || item.cat === category;
      return matchQuery && matchCat;
    });

    setResults(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-xs text-gray-600 leading-relaxed">
      <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-8 border-b border-gray-100 pb-4 flex items-center gap-2">
        <Search className="h-7 w-7 text-amber-500" /> Advanced Search Engine
      </h1>

      {/* Search Input */}
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search keywords, entities (e.g. Vitamin D, Metformin)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500 text-xs text-gray-800"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-200 rounded-lg bg-white px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            <option value="All">All Categories</option>
            <option value="Health">Health</option>
            <option value="Beauty">Beauty</option>
            <option value="Finance">Finance</option>
          </select>
          <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg px-6 py-2 transition-colors">
            Search
          </button>
        </div>
      </form>

      {/* Search Results */}
      <div className="space-y-6">
        {results.length > 0 ? (
          results.map((res, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-5 bg-white shadow-xs hover:border-gray-300 transition-colors">
              <div className="flex justify-between items-start gap-4 mb-2">
                <div>
                  <Link href={res.url} className="text-sm font-bold text-gray-900 hover:underline">{res.title}</Link>
                  <span className="text-[9px] uppercase font-bold text-gray-400 block mt-0.5">{res.cat}</span>
                </div>
                <span className="bg-amber-50 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded">
                  Entity: {res.entity}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{res.excerpt}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[200px] text-gray-400 text-center">
            <HelpCircle className="h-10 w-10 text-gray-200 mb-2" />
            <p className="font-bold">No results found</p>
            <p className="text-[10px] text-gray-300 max-w-xs mt-1">Try querying topics like "Cytopan", "Nivea", or "Warren Buffett".</p>
          </div>
        )}
      </div>
    </div>
  );
}
