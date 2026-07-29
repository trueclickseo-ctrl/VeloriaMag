'use client';

import React from 'react';
import { DollarSign, ShieldCheck, ShoppingCart } from 'lucide-react';

// Top Banner Ad Placeholder
export function ArticleTopAd() {
  return (
    <div className="my-6 bg-gray-100 border border-gray-200 rounded-lg p-4 text-center text-xs text-gray-400 font-medium tracking-wide">
      <span className="text-[10px] block uppercase text-gray-300 font-bold mb-1">Advertisement</span>
      Responsive Top Banner Ad Unit (320x50, 728x90)
    </div>
  );
}

// In-Article Ad Placeholder
export function ArticleMiddleAd() {
  return (
    <div className="my-8 bg-gray-100 border border-gray-200 rounded-lg p-6 text-center text-xs text-gray-400 font-medium tracking-wide">
      <span className="text-[10px] block uppercase text-gray-300 font-bold mb-1">Advertisement</span>
      Responsive Mid-Article Ad Unit (300x250, 336x280)
    </div>
  );
}

// Sidebar Square Ad Placeholder
export function SidebarAd() {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center text-xs text-gray-400 font-medium tracking-wide sticky top-6">
      <span className="text-[10px] block uppercase text-gray-300 font-bold mb-2">Advertisement</span>
      Sidebar Sticky Ad Unit (300x250, 300x600)
    </div>
  );
}

// Related Content Recommended Box
export function RelatedContentBox({ category }: { category: string }) {
  return (
    <div className="bg-amber-50/20 border border-amber-100/50 rounded-xl p-5 my-8">
      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 font-serif flex items-center gap-1">
        <ShieldCheck className="h-4 w-4 text-amber-600" /> Promoted Content
      </h4>
      <p className="text-xs text-gray-700 leading-relaxed mb-3">
        Looking for more verified guides? Read our in-depth category reviews on <strong>{category}</strong>.
      </p>
      <a href={`/${category}`} className="text-xs font-semibold text-amber-600 hover:underline">
        Explore Recommended Guides →
      </a>
    </div>
  );
}

// Affiliate Product Mention Card
export interface ProductType {
  brand: string;
  name: string;
  category: string;
  affiliateUrl: string;
  disclosureStatus: string;
}

export function AffiliateProductCard({ product }: { product: ProductType }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 my-6 bg-white shadow-xs hover:border-gray-300 transition-colors">
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
            Affiliate Recommendation
          </span>
          <h4 className="text-sm font-bold text-gray-900 mb-0.5">
            {product.brand} - {product.name}
          </h4>
          <span className="text-[10px] text-gray-500 font-medium uppercase">{product.category}</span>
        </div>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg px-4 py-2 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <ShoppingCart className="h-3.5 w-3.5" /> Buy Now
        </a>
      </div>
      <div className="border-t border-gray-100 mt-4 pt-3 text-[10px] text-gray-400 leading-relaxed flex items-center gap-1">
        <DollarSign className="h-3.5 w-3.5 text-gray-300" />
        <span>VeloriaMag earns a small commission on purchases made through this link at no extra cost to you.</span>
      </div>
    </div>
  );
}
