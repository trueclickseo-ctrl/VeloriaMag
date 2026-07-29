import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-6">About VeloriaMag</h1>
      <div className="prose text-sm text-gray-700 space-y-6 leading-relaxed">
        <p>
          Welcome to <strong>VeloriaMag</strong>, a premium, modern magazine platform built from the ground up to establish semantic topical authority across diverse content verticals.
        </p>
        <p>
          We cover Health & Medicine, Beauty & Skincare, Celebrity Profiles, and Faith & Spirituality. Our primary mission is to deliver high-quality, research-backed, and localized information to our global readership.
        </p>
        <h2 className="text-lg font-bold font-serif text-gray-900 mt-8">Our Publishing Standards</h2>
        <p>
          Unlike generic websites that scrape surface-level details, our operational framework is designed around scientific verification, clinical safety (especially for medicine and health products), and theological accuracy. Every content piece is reviewed, referenced, and structured to offer maximum clarity and utility.
        </p>
      </div>
    </div>
  );
}
