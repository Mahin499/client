import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const ReturnsPage: React.FC = () => {
  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">30-Night Trial & Returns</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block">
            CONFIDENCE GUARANTEED
          </span>
          <h1 className="font-display text-4xl uppercase tracking-wide text-[#111111]">
            30-NIGHT TRIAL & 10-YEAR WARRANTY
          </h1>
          <p className="text-xs text-[#666666] font-light">
            Sleep on your APEX bed for 30 nights in your own home. If you are not completely enchanted, we arrange full collection and a 100% refund.
          </p>
        </div>

        <div className="bg-white border border-[#D8D5D0] p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 border-b border-[#EAE6DF] pb-4">
            <RotateCcw className="w-6 h-6 text-[#A58A63]" />
            <h2 className="font-display text-2xl uppercase text-[#111111]">
              HOW THE 30-NIGHT TRIAL WORKS
            </h2>
          </div>

          <div className="space-y-4 text-xs text-[#444444] leading-relaxed">
            <p>
              1. <strong>Delivery & Assembly:</strong> Your 30-night comfort trial commences on the exact day our white-glove team completes installation in your home.
            </p>
            <p>
              2. <strong>Experience in Real Life:</strong> Test the acoustics of the bouclé wingback, the smoothness of the hydraulic gas lift, and the stability of the solid hardwood frame with your daily routine.
            </p>
            <p>
              3. <strong>Hassle-Free Return:</strong> If you decide to initiate a return, contact our concierge on WhatsApp at <code>+91 90370 98706</code> or email <code>concierge@apexbeds.com</code>. We will dispatch our logistics team to disassemble and collect the bed at zero cost to you.
            </p>
            <p>
              4. <strong>100% Refund:</strong> Once collected, the full purchase amount is refunded to your original payment method (UPI / Bank / Card) within 3–5 business days.
            </p>
          </div>
        </div>

        {/* 10-Year Warranty Specification */}
        <div className="bg-white border border-[#D8D5D0] p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 border-b border-[#EAE6DF] pb-4">
            <ShieldCheck className="w-6 h-6 text-[#A58A63]" />
            <h2 className="font-display text-2xl uppercase text-[#111111]">
              10-YEAR STRUCTURAL WARRANTY COVERAGE
            </h2>
          </div>

          <div className="space-y-3 text-xs text-[#555555]">
            <p className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full structural integrity of solid kiln-dried Oak and Sheesham internal framing.</span>
            </p>
            <p className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero-creak mortise and tenon joint stability against structural loosening.</span>
            </p>
            <p className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>5-Year dedicated replacement warranty on German pneumatic Suspa® hydraulic pistons.</span>
            </p>
            <p className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Birch sprung slat core resilience against sagging or breakage.</span>
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            to="/beds"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#111111] text-white text-xs uppercase font-bold tracking-widest hover:bg-[#333333]"
          >
            <span>SHOP WITH 30-NIGHT TRIAL</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
