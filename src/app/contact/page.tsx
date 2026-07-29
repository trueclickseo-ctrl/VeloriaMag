'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-serif font-extrabold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        Have questions regarding our editorial policies, medical validation pathways, or sponsorship models? Reach out directly through the form below.
      </p>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Name</label>
          <input
            type="text"
            className="w-full border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-amber-500 bg-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-amber-500 bg-white"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Message</label>
          <textarea
            rows={5}
            className="w-full border border-gray-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-amber-500 bg-white"
            placeholder="Your message here..."
          />
        </div>
        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded px-6 py-2.5 text-xs tracking-wider uppercase transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
