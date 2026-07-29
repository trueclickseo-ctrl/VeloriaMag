import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose text-sm text-gray-700 space-y-6 leading-relaxed">
        <p>
          At <strong>VeloriaMag</strong>, we respect the privacy of our readers. This Privacy Policy details how we collect, store, and manage user interactions on our portal.
        </p>
        <h2 className="text-lg font-bold font-serif text-gray-900 mt-8">Cookies & Analytics</h2>
        <p>
          We use analytics tools to monitor traffic flows and optimize readability. These systems collect non-identifiable parameters like browser types, operating systems, and page views.
        </p>
        <h2 className="text-lg font-bold font-serif text-gray-900 mt-4">Data Security</h2>
        <p>
          Any details provided through our contact forms or newsletter subscriptions are stored securely and never sold or shared with third-party advertising brokers.
        </p>
      </div>
    </div>
  );
}
