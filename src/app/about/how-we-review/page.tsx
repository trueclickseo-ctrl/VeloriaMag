import React from 'react';
import Link from 'next/link';

export default function HowWeReviewPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-xs text-gray-600 leading-relaxed space-y-6">
      <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-4 border-b border-gray-100 pb-4">Our Medical & Finance Review Process</h1>
      <p className="text-sm text-gray-700 font-medium">
        To uphold E-E-A-T trust signals and protect our readers, every YMYL guide published on VeloriaMag undergoes a multi-layer evaluation protocol.
      </p>

      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-2 font-serif">1. Medical Peer-Review Protocol</h3>
        <p>
          Health guides referencing prescription drugs, tablet uses, or clinical applications are reviewed by certified pharmacists or physicians. Every drug insert reference is mapped directly to authoritative repositories like the FDA, WHO, and official corporate manufacturing sheets.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-2 font-serif">2. Financial Verification Standards</h3>
        <p>
          Corporate assets, billionaire portfolios, and investing timelines are compiled strictly from official regulatory statements, SEC filings, and quarterly earnings statements. We treat all asset estimates as variable projections.
        </p>
      </div>

      <div className="border-t border-gray-100 pt-6">
        <Link href="/" className="text-amber-600 font-semibold hover:underline">
          ← Return to Homepage
        </Link>
      </div>
    </div>
  );
}
