'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, Database, GitMerge, FilePlus, Link2, Clock, Users, BarChart3, 
  CheckCircle, Plus, AlertCircle, TrendingUp, Search 
} from 'lucide-react';

export default function GrowthEnginePage() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'queue' | 'clustering' | 'linking' | 'reminders' | 'authors' | 'seo'>('calendar');

  // 1. Editorial Calendar (3 Articles/Day Rollout Mock)
  const calendarDays = [
    { day: 'Today (July 30)', posts: [
      { id: 'VM-019', title: 'Panadol Tablet Uses in Urdu', category: 'Health', time: '09:00 AM' },
      { id: 'VM-020', title: 'CeraVe vs Cetaphil Cleanser Comparison', category: 'Beauty', time: '01:00 PM' },
      { id: 'VM-021', title: 'Elon Musk Business Empire & Holdings', category: 'Finance', time: '06:00 PM' }
    ]},
    { day: 'Tomorrow (July 31)', posts: [
      { id: 'VM-022', title: 'Surbex Z Uses and Daily Benefits', category: 'Health', time: '09:00 AM' },
      { id: 'VM-023', title: 'Retinol Beginner Guide & Routines', category: 'Beauty', time: '01:00 PM' },
      { id: 'VM-024', title: 'Zendaya Net Worth & Career Earnings', category: 'Celebrity', time: '06:00 PM' }
    ]},
    { day: 'August 01', posts: [
      { id: 'VM-025', title: 'Flagyl Syrup Uses in Urdu', category: 'Health', time: '09:00 AM' },
      { id: 'VM-026', title: 'Hyaluronic Acid vs Glycerin Hydration', category: 'Beauty', time: '01:00 PM' },
      { id: 'VM-027', title: '1111 Biblical Meaning: Complete Guide', category: 'Faith', time: '06:00 PM' }
    ]}
  ];

  // 2. Article Queue Database (Automated VM Numbering)
  const queueDatabase = [
    { num: 'VM-019', topic: 'Panadol Tablet Uses in Urdu', cat: 'Health', intent: 'Info', status: 'Brief Ready' },
    { num: 'VM-020', topic: 'CeraVe vs Cetaphil Cleanser', cat: 'Beauty', intent: 'Comparison', status: 'Writing' },
    { num: 'VM-021', topic: 'Elon Musk Business Empire', cat: 'Finance', intent: 'Profile', status: 'Brief Ready' },
    { num: 'VM-022', topic: 'Surbex Z Benefits & Uses', cat: 'Health', intent: 'Info', status: 'Draft' },
    { num: 'VM-023', topic: 'Retinol Skin Routines', cat: 'Beauty', intent: 'Guide', status: 'Draft' },
    { num: 'VM-024', topic: 'Zendaya Net Worth & Income', cat: 'Celebrity', intent: 'Profile', status: 'Writing' },
  ];

  // 3. Topic Clustering
  const clusters = [
    { name: 'Urdu Medicine Uses (Health)', count: 12, pillar: '/health/medicine-uses-in-urdu/' },
    { name: 'Skincare Product Comparisons (Beauty)', count: 8, pillar: '/beauty/skincare-comparisons/' },
    { name: 'Biblical Meanings (Faith)', count: 5, pillar: '/faith/biblical-meanings/' },
    { name: 'Wealth & Net Worth (Finance)', count: 4, pillar: '/finance/wealth/' }
  ];

  // 4. Internal Link Recommendations Engine
  const linkRecommendations = [
    { source: 'VM-020 (CeraVe vs Cetaphil)', target: 'VM-012 (La Roche-Posay vs Neutrogena)', anchor: 'acne-prone skin routines', reason: 'Contextual bridge for skin concern entities' },
    { source: 'VM-019 (Panadol Uses in Urdu)', target: 'VM-002 (Coldrex Uses in Urdu)', anchor: 'پیراسیٹامول (Paracetamol)', reason: 'Identical chemical entity cross-reference' },
    { source: 'VM-021 (Elon Musk)', target: 'VM-015 (Elisabeth Moss)', anchor: 'celebrity lifestyle profiles', reason: 'Cross-category entertainment bridge' }
  ];

  // 5. Content Update Reminders
  const updateReminders = [
    { title: 'Cytopan Tablet Uses in Urdu', lastUpdated: '185 days ago', status: 'Needs Review', reason: 'YMYL Health page requires standard 6-month check' },
    { title: 'Warren Buffett Wealth Profile', lastUpdated: '92 days ago', status: 'Needs Update', reason: 'Quarterly SEC 13F filing refresh available' }
  ];

  // 6. Author Management Matrix
  const authors = [
    { name: 'Dr. Bilal Hassan', role: 'Medical reviewer', activePosts: 8, rating: 'Pharm.D, RPh' },
    { name: 'Ayesha Khan', role: 'Skincare writer', activePosts: 5, rating: 'Licensed Aesthetician' },
    { name: 'Warren Vance', role: 'Financial writer', activePosts: 1, rating: 'CFA, MBA' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">VeloriaMag Growth Engine</h1>
          <p className="text-xs text-gray-500 mt-1">Operational scaling dashboard for 3-article daily content pipelines.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
            ← Main Admin Panel
          </Link>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-1">
            <Plus className="h-4 w-4" /> Add Topic Brief
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-2">
        <button onClick={() => setActiveTab('calendar')} className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'calendar' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
          <Calendar className="h-4 w-4" /> Editorial Calendar
        </button>
        <button onClick={() => setActiveTab('queue')} className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'queue' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
          <Database className="h-4 w-4" /> Article Database
        </button>
        <button onClick={() => setActiveTab('clustering')} className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'clustering' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
          <GitMerge className="h-4 w-4" /> Topic Clusters
        </button>
        <button onClick={() => setActiveTab('linking')} className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'linking' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
          <Link2 className="h-4 w-4" /> Link Recommender
        </button>
        <button onClick={() => setActiveTab('reminders')} className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'reminders' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
          <Clock className="h-4 w-4" /> Update Reminders
        </button>
        <button onClick={() => setActiveTab('authors')} className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'authors' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
          <Users className="h-4 w-4" /> Authors & Reviewers
        </button>
        <button onClick={() => setActiveTab('seo')} className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeTab === 'seo' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
          <BarChart3 className="h-4 w-4" /> SEO Trackers
        </button>
      </div>

      {/* Tab Panels */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm min-h-[400px]">
        
        {/* Editorial Calendar */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4 flex items-center gap-1">
              <Calendar className="h-5 w-5 text-amber-500" /> Planned 90-Day Rollout Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {calendarDays.map((day, idx) => (
                <div key={idx} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                  <h3 className="text-xs font-bold text-gray-900 mb-3 border-b border-gray-200/50 pb-2">{day.day}</h3>
                  <div className="space-y-3">
                    {day.posts.map((post) => (
                      <div key={post.id} className="bg-white border border-gray-100 rounded-lg p-3 shadow-xs">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[9px] font-bold text-gray-400">{post.id}</span>
                          <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1 py-0.5 rounded">{post.time}</span>
                        </div>
                        <h4 className="text-xs font-bold text-gray-900 mb-1 leading-snug">{post.title}</h4>
                        <span className="text-[9px] font-semibold text-gray-500 uppercase">{post.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Article Queue Database */}
        {activeTab === 'queue' && (
          <div>
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4 flex items-center gap-1">
              <Database className="h-5 w-5 text-amber-500" /> Automated VM Queue Register
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs text-left text-gray-600">
                <thead>
                  <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                    <th className="px-4 py-3">VM Number</th>
                    <th className="px-4 py-3">Topic Title</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Intent</th>
                    <th className="px-4 py-3">Workflow State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {queueDatabase.map((row) => (
                    <tr key={row.num} className="hover:bg-gray-50/50">
                      <td className="px-4 py-3 font-bold text-gray-900">{row.num}</td>
                      <td className="px-4 py-3 font-semibold text-gray-800">{row.topic}</td>
                      <td className="px-4 py-3">{row.cat}</td>
                      <td className="px-4 py-3">{row.intent}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[9px] font-bold">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Topic Clustering */}
        {activeTab === 'clustering' && (
          <div className="space-y-6">
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4 flex items-center gap-1">
              <GitMerge className="h-5 w-5 text-amber-500" /> Topic Clustering Maps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clusters.map((cluster, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 mb-1">{cluster.name}</h3>
                    <p className="text-[10px] text-gray-400">Pillar Slug: <code className="bg-white px-1 py-0.5 border border-gray-100 rounded">{cluster.pillar}</code></p>
                  </div>
                  <span className="bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-100">
                    {cluster.count} posts
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Link Recommender */}
        {activeTab === 'linking' && (
          <div className="space-y-6">
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4 flex items-center gap-1">
              <Link2 className="h-5 w-5 text-amber-500" /> Semantic Link Recommendations
            </h2>
            <div className="space-y-4">
              {linkRecommendations.map((rec, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-4 bg-gray-50/30 flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-gray-500">{rec.source}</span>
                      <span className="text-[9px] font-semibold text-gray-400">➔</span>
                      <span className="text-[10px] font-bold text-amber-600">{rec.target}</span>
                    </div>
                    <p className="text-xs text-gray-800">Anchor: <code className="bg-gray-100 px-1 py-0.5 rounded font-mono font-semibold">"{rec.anchor}"</code></p>
                  </div>
                  <div className="text-right flex flex-col justify-center">
                    <span className="text-[10px] text-gray-400 italic">{rec.reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Update Reminders */}
        {activeTab === 'reminders' && (
          <div className="space-y-6">
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4 flex items-center gap-1">
              <Clock className="h-5 w-5 text-amber-500" /> YMYL Integrity & Freshness Alerts
            </h2>
            <div className="space-y-4">
              {updateReminders.map((reminder, idx) => (
                <div key={idx} className="border border-red-100 rounded-xl p-4 bg-red-50/20 flex justify-between items-center">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 mb-1">{reminder.title}</h3>
                    <p className="text-[10px] text-gray-500">Last Checked: {reminder.lastUpdated} | Reason: {reminder.reason}</p>
                  </div>
                  <span className="bg-red-50 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200 uppercase">
                    {reminder.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Authors & Reviewers */}
        {activeTab === 'authors' && (
          <div className="space-y-6">
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4 flex items-center gap-1">
              <Users className="h-5 w-5 text-amber-500" /> Writer & Reviewer Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {authors.map((author, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                  <h3 className="text-xs font-bold text-gray-900 mb-0.5">{author.name}</h3>
                  <span className="text-[10px] text-gray-400 block mb-2">{author.rating}</span>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="bg-gray-100 px-2 py-0.5 rounded font-semibold text-gray-600">{author.role}</span>
                    <span className="text-gray-500">{author.activePosts} active posts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEO Performance Tracking Placeholders */}
        {activeTab === 'seo' && (
          <div className="space-y-6">
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4 flex items-center gap-1">
              <BarChart3 className="h-5 w-5 text-amber-500" /> GSC Organic Tracker (Placeholders)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/50 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Total Impressions</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">142.8K</h3>
                <span className="text-[9px] text-emerald-600 font-bold flex items-center justify-center gap-0.5 mt-1">
                  <TrendingUp className="h-3 w-3" /> +14.2% (last 28d)
                </span>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/50 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Organic Clicks</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">8.5K</h3>
                <span className="text-[9px] text-emerald-600 font-bold flex items-center justify-center gap-0.5 mt-1">
                  <TrendingUp className="h-3 w-3" /> +8.1%
                </span>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/50 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Average CTR</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">5.95%</h3>
                <span className="text-[9px] text-emerald-600 font-bold flex items-center justify-center gap-0.5 mt-1">
                  <TrendingUp className="h-3 w-3" /> +1.2%
                </span>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/50 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Average Position</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">14.2</h3>
                <span className="text-[9px] text-emerald-600 font-bold flex items-center justify-center gap-0.5 mt-1">
                  <TrendingUp className="h-3 w-3" /> +0.8 points
                </span>
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl p-6 bg-gray-50/50 flex flex-col items-center justify-center min-h-[150px] text-center">
              <Search className="h-8 w-8 text-gray-300 mb-2" />
              <p className="text-xs font-bold text-gray-600">Google Search Console Integration Pending</p>
              <p className="text-[10px] text-gray-400 max-w-sm mt-1 leading-relaxed">Once deployed, add your DNS or html verification tag in `robots.ts` to populate active query and position analytics tables.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
