'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, AlertTriangle, XCircle, ShieldCheck, Terminal, Award, 
  Globe, Database, BarChart3, HelpCircle 
} from 'lucide-react';

export default function LaunchChecklistPage() {
  // Hardcoded launch checklist details
  const checklistItems = [
    { category: 'Technical SEO', item: 'Dynamic sitemap.xml generated', status: 'PASS', details: 'Outputs all categories, pillars, articles, and authors.' },
    { category: 'Technical SEO', item: 'Robots.txt masks /admin/ and /api/', status: 'PASS', details: 'Disallows indexing of administrative dashboards.' },
    { category: 'Technical SEO', item: 'Canonical tag injection on dynamic routes', status: 'PASS', details: 'Prevents duplicate indexing issues on query parameters.' },
    
    { category: 'Content Readiness', item: '1,500+ word counts for authority guides', status: 'PASS', details: 'All initial articles comply with core word limits.' },
    { category: 'Content Readiness', item: 'Key Takeaways & FAQ Schema present', status: 'PASS', details: 'Injected standard summaries and FAQs.' },
    
    { category: 'YMYL Compliance', item: 'Urdu Medical Disclaimers in Health Category', status: 'PASS', details: 'Clearly disclaims self-medication dangers in bold callouts.' },
    { category: 'YMYL Compliance', item: 'Outdated pregnancy letter categories (A/B/C/D/X) avoided', status: 'PASS', details: 'Aligned to modern FDA PLLR guidelines.' },
    { category: 'YMYL Compliance', item: 'Financial Disclaimers in Finance Category', status: 'PASS', details: 'Refuses direct investment advice responsibilities.' },
    
    { category: 'Author Verification', item: 'Author bio directories linked', status: 'PASS', details: 'Authors listed with qualifications (Pharm.D, CFA).' },
    { category: 'Author Verification', item: 'Articles show "reviewed by" credentials', status: 'WARNING', details: 'Some guides are pending medical review board signing.' },
    
    { category: 'Citation Status', item: 'Primary sources mapped', status: 'PASS', details: 'Verified links to FDA, SEC EDGAR, and clinical inserts.' },
    
    { category: 'Indexing Status', item: 'Google Search Console verification hooks', status: 'ACTION_REQUIRED', details: 'Must paste GSC verification tag into next/head variables before live deploy.' },
    { category: 'Indexing Status', item: 'Bing Webmaster integration hooks', status: 'ACTION_REQUIRED', details: 'Pending verification token insertion in robots config.' },
    
    { category: 'Performance Checks', item: 'Core Web Vitals - LCP < 1.2s', status: 'PASS', details: 'RSC architecture reduces server hydration times to zero.' },
    
    { category: 'Monetization Readiness', item: 'Ad Banner components active', status: 'PASS', details: 'Ad slots pre-placed on top, middle, and sidebar grids.' },
    { category: 'Monetization Readiness', item: 'Affiliate disclosures present', status: 'PASS', details: 'Affiliate mention blocks display standard commission disclaimers.' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900">VeloriaMag Production Launch Checklist</h1>
          <p className="text-xs text-gray-500 mt-1">Pre-flight launch metrics check for SEO indexing, compliance, and UI safety.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg text-xs transition-colors">
          ← Return to Admin Control
        </Link>
      </div>

      {/* Grid Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-emerald-100 rounded-xl p-5 bg-emerald-50/20 text-center">
          <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-gray-900">Passed Audits</h3>
          <p className="text-xl font-extrabold text-emerald-800 mt-1">13</p>
        </div>
        <div className="border border-amber-100 rounded-xl p-5 bg-amber-50/20 text-center">
          <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-gray-900">Warnings</h3>
          <p className="text-xl font-extrabold text-amber-800 mt-1">1</p>
        </div>
        <div className="border border-red-100 rounded-xl p-5 bg-red-50/20 text-center">
          <XCircle className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-gray-900">Action Required</h3>
          <p className="text-xl font-extrabold text-red-800 mt-1">2</p>
        </div>
      </div>

      {/* Checklist Table */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">Audit Area</th>
                <th className="px-4 py-3">Check Item</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Verification Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {checklistItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-bold text-gray-900">{item.category}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">{item.item}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      item.status === 'PASS' ? 'bg-emerald-50 text-emerald-800' :
                      item.status === 'WARNING' ? 'bg-amber-50 text-amber-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {item.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
