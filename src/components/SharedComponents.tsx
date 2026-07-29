'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, BookOpen, User, Calendar, ExternalLink, DollarSign } from 'lucide-react';

// Navbar Component
export function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 font-serif">
              Veloria<span className="text-amber-600">Mag</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/health" className="text-sm font-semibold text-emerald-800 hover:text-emerald-950 hover:underline">
                Health
              </Link>
              <Link href="/beauty" className="text-sm font-semibold text-rose-800 hover:text-rose-950 hover:underline">
                Beauty
              </Link>
              <Link href="/celebrity" className="text-sm font-semibold text-slate-800 hover:text-slate-950 hover:underline">
                Celebrity
              </Link>
              <Link href="/finance" className="text-sm font-semibold text-blue-800 hover:text-blue-950 hover:underline">
                Finance
              </Link>
              <Link href="/faith" className="text-sm font-semibold text-amber-800 hover:text-amber-950 hover:underline">
                Faith
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 sm:w-60 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs focus:border-amber-500 focus:bg-white focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Footer Component
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold font-serif mb-4">VeloriaMag</h3>
            <p className="text-xs leading-relaxed">
              A premium, search-optimized publication built on semantic topical authority and high-integrity information pathways.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Content Hubs</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/health" className="hover:text-white transition-colors">Health & Medicine</Link></li>
              <li><Link href="/beauty" className="hover:text-white transition-colors">Beauty & Skincare</Link></li>
              <li><Link href="/celebrity" className="hover:text-white transition-colors">Celebrity Profiles</Link></li>
              <li><Link href="/finance" className="hover:text-white transition-colors">Finance & Money</Link></li>
              <li><Link href="/faith" className="hover:text-white transition-colors">Faith & Spirit</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Trust Policies</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-white transition-colors">Editorial Policy</Link></li>
              <li><Link href="/medical-disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Form</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-xs mb-3">Join our community for semantic-rich updates.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email"
                className="bg-gray-800 border border-gray-700 rounded px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 w-full"
              />
              <button className="bg-amber-600 text-white rounded px-3 py-1.5 text-xs font-semibold hover:bg-amber-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} VeloriaMag. All rights reserved. Medical content is for educational use only.</p>
        </div>
      </div>
    </footer>
  );
}

// Category Card Component
export function CategoryCard({ title, slug, count, description, colorClass }: {
  title: string;
  slug: string;
  count: number;
  description: string;
  colorClass: string;
}) {
  return (
    <Link href={`/${slug}`} className="group block bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
          {title}
        </span>
        <span className="text-xs text-gray-400 group-hover:text-gray-600">{count} Articles</span>
      </div>
      <p className="text-sm text-gray-600 mb-2 leading-relaxed">{description}</p>
      <span className="text-xs font-semibold text-amber-600 group-hover:underline">Explore Hub →</span>
    </Link>
  );
}

// Article Card Component
export function ArticleCard({ title, slug, category, excerpt, date, authorName, hoverColorClass }: {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  authorName: string;
  hoverColorClass: string;
}) {
  return (
    <Link href={`/${category}/${slug}`} className="group block bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-all hover:border-gray-200">
      <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-600 mb-2 block">{category}</span>
      <h3 className={`text-base font-bold text-gray-900 mb-2 font-serif group-hover:${hoverColorClass} leading-snug`}>
        {title}
      </h3>
      <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{excerpt}</p>
      <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium">
        <span>By {authorName}</span>
        <span>{date}</span>
      </div>
    </Link>
  );
}

// Medical Disclaimer Warning Callout
export function MedicalDisclaimerCallout() {
  return (
    <div className="bg-emerald-50/50 border-l-4 border-emerald-600 p-4 rounded-r-lg mb-8">
      <div className="flex gap-3">
        <Shield className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-1">طبی دستبرداری (Medical Disclaimer)</h4>
          <p className="text-xs text-emerald-900 leading-relaxed">
            ہمارے آرٹیکلز میں فراہم کردہ معلومات صرف عام معلومات اور آگہی کے لیے ہیں۔ یہ کسی بھی طرح سے پیشہ ورانہ طبی مشورے، تشخیص، یا علاج کا متبادل نہیں ہیں۔ کسی بھی دوا کے استعمال سے پہلے ہمیشہ اپنے ڈاکٹر سے رجوع کریں۔
          </p>
        </div>
      </div>
    </div>
  );
}

// Author Profile Box
export function AuthorBox({ name, bio, qualifications, expertise }: {
  name: string;
  bio: string;
  qualifications: string;
  expertise: string;
}) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex gap-4 my-8">
      <div className="bg-amber-100 text-amber-800 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
        {name.split(' ').pop()?.charAt(0) || 'A'}
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-0.5">Written by: {name}</h4>
        <div className="flex gap-2 text-[10px] font-semibold text-gray-500 mb-2">
          <span>Credentials: {qualifications}</span>
          <span>•</span>
          <span>Focus: {expertise}</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

// Finance Disclaimer Warning Callout
export function FinanceDisclaimerCallout() {
  return (
    <div className="bg-blue-50/50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
      <div className="flex gap-3">
        <DollarSign className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-1">Financial Disclaimer (مالیاتی معلوماتی تنبیہ)</h4>
          <p className="text-xs text-blue-900 leading-relaxed">
            The content provided on this page is for educational and general informational purposes only. We do not provide licensed financial, investment, or legal advice. Please consult with a certified financial planner or advisor before making any financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
