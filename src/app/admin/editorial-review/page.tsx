'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, CheckCircle, XCircle, RefreshCcw, FileText } from 'lucide-react';

export default function EditorialReviewPage() {
  const [notes, setNotes] = useState('');
  const [reviews, setReviews] = useState([
    { id: 'VM-001', title: 'Cytopan Tablet Uses in Urdu', cat: 'Health', author: 'Dr. Bilal Hassan', reviewer: 'Pending Review', seo: 94, eeat: 98, entity: 95, citation: 90, quality: 92 },
    { id: 'VM-009', title: 'Is Nivea a Good Starting Brand Compared to Garnier?', cat: 'Beauty', author: 'Ayesha Khan', reviewer: 'Pending Review', seo: 96, eeat: 95, entity: 92, citation: 93, quality: 91 }
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">Editorial Review Center</h1>
          <p className="text-xs text-gray-500 mt-1">Audit draft content before scheduling public indexing.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Queue */}
        <div className="lg:col-span-2 space-y-6">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
              <div className="flex justify-between items-start border-b border-gray-50 pb-3">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">{rev.id} | {rev.cat}</span>
                  <h3 className="text-sm font-bold text-gray-900 font-serif mt-1">{rev.title}</h3>
                  <p className="text-[10px] text-gray-400 mt-1">Author: {rev.author} | Reviewer: {rev.reviewer}</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[9px] uppercase tracking-wider">
                  Needs Review
                </span>
              </div>

              {/* Scores Grid */}
              <div className="grid grid-cols-5 gap-2 text-center">
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-[9px] text-gray-400 block font-bold">SEO</span>
                  <span className="text-xs font-bold text-gray-800">{rev.seo}%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-[9px] text-gray-400 block font-bold">E-E-A-T</span>
                  <span className="text-xs font-bold text-gray-800">{rev.eeat}%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-[9px] text-gray-400 block font-bold">Entities</span>
                  <span className="text-xs font-bold text-gray-800">{rev.entity}%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-[9px] text-gray-400 block font-bold">Citations</span>
                  <span className="text-xs font-bold text-gray-800">{rev.citation}%</span>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-[9px] text-gray-400 block font-bold">Quality</span>
                  <span className="text-xs font-bold text-gray-800">{rev.quality}%</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded transition-colors flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" /> Approve & Publish
                </button>
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded transition-colors flex items-center gap-1">
                  <RefreshCcw className="h-4 w-4" /> Request Revision
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded transition-colors flex items-center gap-1">
                  <XCircle className="h-4 w-4" /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Editor Notes Panel */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm h-fit space-y-4">
          <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-wider border-b border-gray-50 pb-2 flex items-center gap-1.5">
            <FileText className="h-4 w-4 text-indigo-500" /> Reviewer Notes
          </h3>
          <textarea
            placeholder="Type revision request guidelines or validation logs..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-36 border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white text-xs transition-colors"
          />
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded transition-colors">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}
