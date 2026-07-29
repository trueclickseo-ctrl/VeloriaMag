import React from 'react';
import { Shield } from 'lucide-react';

export default function MedicalDisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="h-8 w-8 text-emerald-700" />
        <h1 className="text-3xl font-serif font-extrabold text-gray-900">Medical Disclaimer</h1>
      </div>
      <div className="prose text-sm text-gray-700 space-y-6 leading-relaxed">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
          <p className="text-xs text-red-950 font-semibold uppercase tracking-wider mb-1">Important Legal Notice</p>
          <p className="text-xs text-red-900 leading-relaxed">
            Please read this disclaimer carefully. The content provided on VeloriaMag is purely for informational and educational purposes.
          </p>
        </div>
        <p>
          The medical information, including medicine translation guides, uses, dosage limits, side effects, and precautions, is compiled for educational reference. It does <strong>not</strong> constitute medical advice and should not be used as a substitute for professional diagnosis or treatment.
        </p>
        <p>
          Never delay seeking medical advice or disregard professional clinical recommendations due to information found on this portal. Always consult a licensed doctor or pharmacist before starting any new medication or skincare regimen.
        </p>
      </div>
    </div>
  );
}
