'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, HelpCircle, ShieldCheck } from 'lucide-react';

export default function AffiliateDashboard() {
  const affProducts = [
    { name: 'Hydrating Facial Cleanser', brand: 'CeraVe', cat: 'Beauty', url: 'https://amazon.com/dp/B01MSSDEPK?tag=veloriamag-20', commission: '8%', related: 'la-roche-posay-vs-neutrogena' },
    { name: 'Effaclar Duo Dual Action Acne Treatment', brand: 'La Roche-Posay', cat: 'Beauty', url: 'https://amazon.com/dp/B004L8O8BE?tag=veloriamag-20', commission: '8%', related: 'la-roche-posay-vs-neutrogena' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <ShoppingBag className="h-7 w-7 text-amber-500" /> Affiliate Content Manager
          </h1>
          <p className="text-xs text-gray-500 mt-1">Manage active product tags, configure commission structures, and review disclosure alerts.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Disclaimers check */}
      <div className="bg-amber-50/20 border border-amber-100/50 p-4 rounded-xl mb-8 flex gap-2 items-start">
        <ShieldCheck className="h-5 w-5 text-amber-600 mt-0.5" />
        <div>
          <p className="font-bold text-amber-900">Automatic Disclosure System Active</p>
          <p className="text-amber-700 text-[10px] mt-0.5">Every article dynamically requesting affiliate blocks automatically appends Amazon Associate disclosures at the footer.</p>
        </div>
      </div>

      {/* Products list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left text-gray-600">
            <thead>
              <tr className="bg-gray-50 text-[10px] uppercase font-bold text-gray-400 border-b border-gray-100">
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">Brand</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Amazon URL</th>
                <th className="px-4 py-3">Commission Rate</th>
                <th className="px-4 py-3 text-right">Related Article</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {affProducts.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.name}</td>
                  <td className="px-4 py-3">{row.brand}</td>
                  <td className="px-4 py-3 font-bold text-gray-500 uppercase">{row.cat}</td>
                  <td className="px-4 py-3 text-blue-600 truncate max-w-[200px]">
                    <a href={row.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{row.url}</a>
                  </td>
                  <td className="px-4 py-3 font-bold text-amber-600">{row.commission}</td>
                  <td className="px-4 py-3 text-right font-semibold text-gray-700">{row.related}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
