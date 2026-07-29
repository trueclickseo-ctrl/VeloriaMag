'use client';

import React from 'react';
import Link from 'next/link';
import { Award, Users, DollarSign } from 'lucide-react';

export default function MembershipPage() {
  const plans = [
    { name: 'VeloriaMag Reader (Free)', price: 0.0, users: 1420, access: 'Standard article catalog' },
    { name: 'VeloriaMag Premium Insider', price: 9.99, users: 85, access: 'Exclusive financial deep dives, medical reviewer sheets, and ad-free viewing' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-xs text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-serif font-extrabold text-gray-900 flex items-center gap-2">
            <Award className="h-7 w-7 text-indigo-600" /> Membership & Paywall Architecture
          </h1>
          <p className="text-xs text-gray-500 mt-1">Audit active subscription tires, configure price points, and review payment logs.</p>
        </div>
        <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors">
          ← Return to Admin
        </Link>
      </div>

      {/* Plans list */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          {plans.map((plan, idx) => (
            <div key={idx} className="border border-gray-50 rounded-xl p-4 bg-gray-50/50 flex justify-between items-center">
              <div>
                <h3 className="text-xs font-bold text-gray-900">{plan.name}</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">{plan.access}</p>
                <span className="text-[10px] text-gray-500 font-medium">Active Members: {plan.users}</span>
              </div>
              <span className="font-bold text-emerald-600 text-sm">
                {plan.price === 0.0 ? 'Free' : `$${plan.price}/mo`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
