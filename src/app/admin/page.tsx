import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { 
  Settings, RefreshCw, FileText, CheckCircle, AlertTriangle, Users, Database, 
  TrendingUp, Search, Image as ImageIcon, Flame, DollarSign, Award, ArrowUpRight 
} from 'lucide-react';

export const revalidate = 0; // Dynamic rendering always

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Author {
  id: string;
  name: string;
  qualifications?: string;
  expertise?: string;
  bio?: string;
  slug?: string;
  articles?: Article[];
}

interface Article {
  id: string;
  title: string;
  slug: string;
  publishedAt: Date;
  seoScore?: number | null;
  contentScore?: number | null;
  trustScore?: number | null;
  discoverTitle?: string | null;
  emotionalHook?: string | null;
  topicCluster?: string | null;
  imageConcept?: string | null;
  imageStyle?: string | null;
  imageAlt?: string | null;
  author?: Author;
  category?: Category;
}

interface Entity {
  id: string;
}

interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  disclosureStatus: string;
}


export default async function AdminDashboard() {
  // Fetch real articles from SQLite
  const articles = (await prisma.article.findMany({
    include: {
      author: true,
      category: true,
    },
    orderBy: {
      publishedAt: 'desc',
    },
  })) as Article[];

  const entities = (await prisma.entity.findMany({})) as Entity[];
  const authors = (await prisma.author.findMany({
    include: {
      articles: true,
    },
  })) as Author[];

  const products = (await prisma.product.findMany({})) as Product[];

  // 1. Keyword Opportunity Scoring System Data
  const keywordPriorities = [
    { keyword: 'Surbex Z Tablet Uses in Urdu', volume: 8500, difficulty: 18, intent: 'Info', score: 92, status: 'APPROVED' },
    { keyword: 'CeraVe vs Cetaphil for Sensitive Skin', volume: 5400, difficulty: 24, intent: 'Comparison', score: 86, status: 'APPROVED' },
    { keyword: 'Index Funds vs ETFs for Beginners', volume: 12000, difficulty: 42, intent: 'Info', score: 81, status: 'PENDING_APPROVAL' },
    { keyword: 'Zendaya Net Worth 2026', volume: 22000, difficulty: 38, intent: 'Profile', score: 79, status: 'PENDING_APPROVAL' },
    { keyword: 'Waking Up at 3 AM Biblical Meaning', volume: 4600, difficulty: 15, intent: 'Info', score: 85, status: 'APPROVED' },
  ];

  // 2. Competitor Content Gap Tracking
  const contentGaps = [
    { category: 'Beauty & Skincare', competitorUrl: 'https://competitorbeauty.com/best-cleansers', keyword: 'best hydrating cleanser for flaky skin', gapTopic: 'How to clean skin barrier without peeling', difficulty: 'LOW' },
    { category: 'Health & Medicine', competitorUrl: 'https://healthweb.com/gtn-ointment', keyword: 'GTN ointment alternative', gapTopic: 'Non-prescription sphincter relaxation methods', difficulty: 'MEDIUM' },
    { category: 'Finance', competitorUrl: 'https://financeworld.com/investing-guide', keyword: 'ETF vs Index Fund fee drag', gapTopic: 'Calculating long-term expense ratio compound costs', difficulty: 'LOW' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 tracking-tight">VeloriaMag Editorial Control Center</h1>
          <p className="text-xs text-gray-500 mt-1">Scale dynamic publishing, monitor E-E-A-T scores, check keyword opportunities, and review competitor gaps.</p>
        </div>
        <div className="flex gap-2 text-xs">
          <Link href="/admin/growth" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all flex items-center gap-1">
            <TrendingUp className="h-4 w-4" /> View Growth Dashboard
          </Link>
          <Link href="/seo-checklist" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2.5 rounded-lg transition-colors">
            Launch Checklist
          </Link>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Analytics, Keywords, Gaps */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section 1: Editorial Analytics */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <BarChartIcon className="h-5 w-5 text-indigo-600" />
              <h2 className="text-base font-bold text-gray-900 font-serif">Editorial Analytics</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Publications</span>
                <span className="text-xl font-bold text-gray-900 mt-1 block">{articles.length}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Target Word Count</span>
                <span className="text-xl font-bold text-gray-900 mt-1 block">1,500+</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Affiliate Registry</span>
                <span className="text-xl font-bold text-gray-900 mt-1 block">{products.length} Items</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Entity Nodes</span>
                <span className="text-xl font-bold text-gray-900 mt-1 block">{entities.length}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Keyword Opportunity Scoring System */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-amber-500" />
                <h2 className="text-base font-bold text-gray-900 font-serif">Keyword Opportunity Scoring</h2>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs text-left text-gray-600">
                <thead>
                  <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                    <th className="px-4 py-3">Keyword</th>
                    <th className="px-4 py-3">Search Volume</th>
                    <th className="px-4 py-3">Difficulty (KD)</th>
                    <th className="px-4 py-3">Intent</th>
                    <th className="px-4 py-3">Priority Score</th>
                    <th className="px-4 py-3 text-right">Approval</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {keywordPriorities.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{row.keyword}</td>
                      <td className="px-4 py-3">{row.volume.toLocaleString()}</td>
                      <td className="px-4 py-3">{row.difficulty}%</td>
                      <td className="px-4 py-3">{row.intent}</td>
                      <td className="px-4 py-3 font-bold text-amber-600">{row.score}/100</td>
                      <td className="px-4 py-3 text-right">
                        {row.status === 'APPROVED' ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[9px] font-bold">APPROVED</span>
                        ) : (
                          <button className="bg-amber-600 hover:bg-amber-700 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full transition-colors">
                            APPROVE
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Competitor Content Gap Tracking */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <h2 className="text-base font-bold text-gray-900 font-serif">Competitor Content Gap Alerts</h2>
            </div>
            <div className="space-y-4">
              {contentGaps.map((gap, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-4 bg-gray-50/50 flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                      {gap.category} | Target KD Gap
                    </span>
                    <h4 className="text-xs font-bold text-gray-900 mb-1">
                      Competitor fails to cover: <span className="text-amber-700">"{gap.gapTopic}"</span>
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      Tracking Competitor: <a href={gap.competitorUrl} target="_blank" className="underline">{gap.competitorUrl}</a> | Target Keyword: "{gap.keyword}"
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-[9px] font-bold px-2 py-1 rounded transition-colors whitespace-nowrap">
                    Generate Brief
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: E-E-A-T Audit, Discover, Image briefs, Monetization */}
        <div className="space-y-8">
          
          {/* Section 4: YMYL & E-E-A-T Quality Scores */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-indigo-600" />
              <h2 className="text-base font-bold text-gray-900 font-serif">E-E-A-T Quality Audit</h2>
            </div>
            <div className="space-y-4">
              {articles.map((art) => {
                const totalScore = Math.round(((art.seoScore || 0) + (art.contentScore || 0) + (art.trustScore || 0)) / 3);
                let statusColor = 'bg-emerald-50 text-emerald-800';
                let statusText = 'Ready To Publish';
                
                if (totalScore < 80) {
                  statusColor = 'bg-red-50 text-red-800';
                  statusText = 'Needs Improvement';
                } else if (totalScore < 90) {
                  statusColor = 'bg-amber-50 text-amber-800';
                  statusText = 'Editor Review';
                }

                return (
                  <div key={art.id} className="border border-gray-50 rounded-xl p-3 bg-gray-50/50">
                    <h3 className="text-xs font-bold text-gray-900 truncate mb-2">{art.title}</h3>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] mb-3">
                      <div className="bg-white p-1.5 rounded border border-gray-100">
                        <span className="text-gray-400 block font-bold uppercase tracking-wider text-[8px]">SEO</span>
                        <span className="font-bold text-gray-800 text-xs">{art.seoScore}/100</span>
                      </div>
                      <div className="bg-white p-1.5 rounded border border-gray-100">
                        <span className="text-gray-400 block font-bold uppercase tracking-wider text-[8px]">Content</span>
                        <span className="font-bold text-gray-800 text-xs">{art.contentScore}/100</span>
                      </div>
                      <div className="bg-white p-1.5 rounded border border-gray-100">
                        <span className="text-gray-400 block font-bold uppercase tracking-wider text-[8px]">Trust</span>
                        <span className="font-bold text-gray-800 text-xs">{art.trustScore}/100</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-gray-400 font-medium">Composite: {totalScore}%</span>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${statusColor}`}>
                        {statusText}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 5: Google Discover Optimization Hub */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-5 w-5 text-orange-500" />
              <h2 className="text-base font-bold text-gray-900 font-serif">Google Discover Hooks</h2>
            </div>
            <div className="space-y-4">
              {articles.filter(art => art.discoverTitle).map((art) => (
                <div key={art.id} className="border border-gray-50 rounded-xl p-3 bg-gray-50/50 text-xs space-y-2">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-1.5 mb-1.5">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">{art.topicCluster}</span>
                    <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">Discover Ready</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase block mb-0.5">Discover Title Suggestion</span>
                    <p className="font-bold text-gray-900 leading-snug">"{art.discoverTitle}"</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase block mb-0.5">Emotional Hook</span>
                    <p className="text-gray-600 italic">"{art.emotionalHook}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: AI Image Brief System */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="h-5 w-5 text-indigo-500" />
              <h2 className="text-base font-bold text-gray-900 font-serif">AI Image Generation Briefs</h2>
            </div>
            <div className="space-y-4">
              {articles.filter(art => art.imageConcept).map((art) => (
                <div key={art.id} className="border border-gray-50 rounded-xl p-3 bg-gray-50/50 text-xs space-y-2">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-1">
                    <span className="text-[10px] text-gray-400 font-bold">{art.slug}.webp</span>
                    <span className="text-[9px] text-gray-400 font-semibold">{art.imageStyle}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase block mb-0.5">Concept Brief</span>
                    <p className="text-gray-700 leading-relaxed font-medium">"{art.imageConcept}"</p>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    <span className="font-semibold text-gray-500">Alt Text:</span> {art.imageAlt}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Monetization & Affiliate Registry */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-5 w-5 text-emerald-600" />
              <h2 className="text-base font-bold text-gray-900 font-serif">Affiliate & Ad Placements</h2>
            </div>
            <div className="space-y-3">
              {products.map((prod) => (
                <div key={prod.id} className="border border-gray-100 rounded-lg p-3 bg-gray-50/50 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-bold text-gray-900 block">{prod.brand} - {prod.name}</span>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">{prod.category}</span>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-100">
                    {prod.disclosureStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// Icon helper wrapper
function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
