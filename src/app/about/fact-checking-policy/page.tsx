import React from 'react';
import Link from 'next/link';

export default function FactCheckingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-xs text-gray-600 leading-relaxed space-y-6">
      <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-4 border-b border-gray-100 pb-4">Fact-Checking Policy</h1>
      <p className="text-sm text-gray-700 font-medium">
        Accuracy is our primary editorial standard. VeloriaMag does not publish unverified gossip, unconfirmed clinical claims, or speculative investment advice.
      </p>

      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-2 font-serif">1. Direct-Source Verifications</h3>
        <p>
          Our researchers verify all historical biographical details, career milestones, corporate affiliations, and financial valuations against direct primary documentation (e.g. SEC reports, official statements, interviews in verified publications).
        </p>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-2 font-serif">2. Double-Blind Auditing</h3>
        <p>
          Any numerical metric or clinical statement undergoes secondary reviewer sign-off prior to CMS markdown export. If a claim cannot be verified through multiple primary links, it is excised from the draft.
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
