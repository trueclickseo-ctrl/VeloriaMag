'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Terminal, FileText, Send } from 'lucide-react';

export default function AssistantPage() {
  const [response, setResponse] = useState<any>(null);

  const askAssistant = () => {
    setResponse({
      p1: 'Elon Musk Net Worth 2026',
      r1: 'High search volume signals + missing node in Finance Wealth cluster tree.',
      p2: 'Best Sunscreens for Sensitive Skin',
      r2: 'Expands Beauty vertical under ingredient comparisons.'
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-amber-500" /> AI Editorial Assistant
          </h1>
          <p className="text-xs text-gray-500 mt-1">Ask the publisher assistant to identify seasonal trends and high-demand keyword opportunities.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ask Prompt */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-fit space-y-4">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 border-b border-gray-50 pb-2 flex items-center gap-1">
            <Terminal className="h-4 w-4 text-indigo-500" /> Assistant Terminal
          </h2>
          <p className="text-gray-500">Query the assistant about what topics to schedule next based on dynamic coverage scores.</p>
          <button onClick={askAssistant} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded transition-colors">
            Ask: "What should VeloriaMag publish next?"
          </button>
        </div>

        {/* Output */}
        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6 shadow-sm min-h-[300px]">
          {response ? (
            <div className="space-y-6">
              <div>
                <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Priority Target 1</span>
                <h3 className="text-sm font-bold text-gray-900">Topic: "{response.p1}"</h3>
                <p className="text-gray-600 mt-1">Reasoning: {response.r1}</p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <span className="text-[9px] uppercase font-bold text-gray-400 block mb-1">Priority Target 2</span>
                <h3 className="text-sm font-bold text-gray-900">Topic: "{response.p2}"</h3>
                <p className="text-gray-600 mt-1">Reasoning: {response.r2}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[250px] text-center text-gray-400">
              <FileText className="h-10 w-10 text-gray-200 mb-2" />
              <p className="text-xs font-bold">Waiting for query...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
