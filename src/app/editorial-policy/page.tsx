import React from 'react';

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-6">Editorial Policy</h1>
      <div className="prose text-sm text-gray-700 space-y-6 leading-relaxed">
        <p>
          At <strong>VeloriaMag</strong>, we are committed to absolute editorial integrity, correctness, and transparency.
        </p>
        <h2 className="text-lg font-bold font-serif text-gray-900 mt-8">Fact-Checking & Source Integrity</h2>
        <p>
          Our writing team refers directly to primary medical guides, research journals (such as PubMed, NCBI), and official manufacturer leaflets. We never cite secondary blogs or unverified online assertions for critical data.
        </p>
        <h2 className="text-lg font-bold font-serif text-gray-900 mt-4">Corrections & Updates</h2>
        <p>
          Information changes, especially in pharmacology and beauty formulations. We review our databases periodically to incorporate newly discovered side effects, warnings, and guidelines. Correcting historical inaccuracies is a priority.
        </p>
      </div>
    </div>
  );
}
