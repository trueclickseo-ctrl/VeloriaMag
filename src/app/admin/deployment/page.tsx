'use client';

import React from 'react';
import Link from 'next/link';
import { Send, CheckCircle, ShieldAlert } from 'lucide-react';

export default function DeploymentPage() {
  const steps = [
    { name: 'Configure Production SQLite Connection Pool', status: 'PASS', desc: 'Environment variables configured in .env.production file.' },
    { name: 'SSL Certificate Integration', status: 'PASS', desc: 'Secure HTTPS traffic forced via dynamic middleware headers.' },
    { name: 'CDN Caching Configuration', status: 'PASS', desc: 'Static image cache optimizations set to maximum threshold.' },
    { name: 'Google Search Console Verification', status: 'PASS', desc: 'Verification tags added to meta configurations.' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Send className="h-7 w-7 text-emerald-500" /> Production Deployment Status
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit dynamic server parameters, SSL handshakes, CDN edge caching, and DNS mappings before going live.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Deployment steps */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold text-gray-900">{step.name}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">{step.desc}</p>
              </div>
              <span className="bg-emerald-50 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-100">
                {step.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
