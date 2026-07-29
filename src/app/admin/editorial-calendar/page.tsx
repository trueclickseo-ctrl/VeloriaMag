'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, Sparkles, LayoutGrid, CheckCircle } from 'lucide-react';

export default function EditorialCalendarPage() {
  const editorialDays = [
    {
      date: 'Thursday, July 30, 2026',
      items: [
        { slot: 'Morning (09:00 AM)', demand: 'High Demand', title: 'Cytopan Tablet Uses in Urdu', cat: 'Health', status: 'PUBLISHED', score: 94 },
        { slot: 'Afternoon (01:00 PM)', demand: 'Supporting Authority', title: 'Is Nivea a Good Starting Brand Compared to Garnier?', cat: 'Beauty', status: 'PUBLISHED', score: 96 },
        { slot: 'Evening (06:00 PM)', demand: 'Discovery/Trending', title: 'Warren Buffett Billionaire Wealth Profile', cat: 'Finance', status: 'PUBLISHED', score: 98 }
      ]
    },
    {
      date: 'Friday, July 31, 2026',
      items: [
        { slot: 'Morning (09:00 AM)', demand: 'High Demand', title: 'Claritek Tablet Uses in Urdu', cat: 'Health', status: 'FACT_CHECK', score: 92 },
        { slot: 'Afternoon (01:00 PM)', demand: 'Supporting Authority', title: 'How Gentle Are Nivea\'s Creams Compared to Aveeno?', cat: 'Beauty', status: 'EDITING', score: 88 },
        { slot: 'Evening (06:00 PM)', demand: 'Discovery/Trending', title: 'Zendaya Net Worth & Career Earnings', cat: 'Celebrity', status: 'WRITING', score: 85 }
      ]
    },
    {
      date: 'Saturday, August 01, 2026',
      items: [
        { slot: 'Morning (09:00 AM)', demand: 'High Demand', title: 'Surbex Z Benefits & Uses', cat: 'Health', status: 'DRAFT', score: 0 },
        { slot: 'Afternoon (01:00 PM)', demand: 'Supporting Authority', title: 'Retinol Skincare Routines for Beginners', cat: 'Beauty', status: 'DRAFT', score: 0 },
        { slot: 'Evening (06:00 PM)', demand: 'Discovery/Trending', title: '1111 Biblical Meaning: Complete Guide', cat: 'Faith', status: 'DRAFT', score: 0 }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Calendar className="h-7 w-7 text-amber-500" /> Daily Editorial Calendar
          </h1>
          <p className="text-xs text-gray-500 mt-1">3-Article daily publishing slots (Morning, Afternoon, Evening) grouped by category and workflow status.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg transition-colors">
            ← Return to Admin
          </Link>
        </div>
      </div>

      {/* Calendar Rollout Grid */}
      <div className="space-y-8">
        {editorialDays.map((day, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span> {day.date}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {day.items.map((item, itemIdx) => {
                let statusColor = 'bg-gray-50 text-gray-600';
                if (item.status === 'PUBLISHED') statusColor = 'bg-emerald-50 text-emerald-800';
                if (item.status === 'FACT_CHECK') statusColor = 'bg-blue-50 text-blue-800';
                if (item.status === 'EDITING') statusColor = 'bg-amber-50 text-amber-800';
                if (item.status === 'WRITING') statusColor = 'bg-purple-50 text-purple-800';

                return (
                  <div key={itemIdx} className="border border-gray-100 rounded-xl p-4 bg-gray-50/30 flex flex-col justify-between min-h-[160px]">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-bold text-gray-400 uppercase flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {item.slot}
                        </span>
                        <span className="text-[9px] font-semibold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                          {item.demand}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-gray-900 mb-1 leading-snug">{item.title}</h3>
                      <span className="text-[9px] font-bold text-gray-400 uppercase">{item.cat}</span>
                    </div>

                    <div className="border-t border-gray-100 mt-4 pt-3 flex justify-between items-center">
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${statusColor}`}>
                        {item.status}
                      </span>
                      {item.score > 0 && (
                        <span className="text-[9px] font-semibold text-gray-500">
                          Score: <span className="font-bold text-emerald-600">{item.score}%</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
