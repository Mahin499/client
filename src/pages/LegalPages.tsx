import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-[#D8D5D0] p-8 sm:p-12 shadow-sm space-y-6 text-xs text-[#444444] leading-relaxed">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block">
          GOVERNANCE & TRUST
        </span>
        <h1 className="font-display text-3xl sm:text-4xl uppercase text-[#111111]">
          PRIVACY POLICY
        </h1>
        <p className="text-[#777777] text-[11px]">Last Updated: October 2026</p>

        <p>
          At APEX ("we", "our", or "us"), we value and protect the confidentiality of our discerning patrons. This Privacy Policy outlines how your personal information is gathered, utilized, and safeguarded when visiting or placing an inquiry on our platform.
        </p>

        <h3 className="font-bold text-sm uppercase text-[#111111] pt-2">1. INFORMATION WE COLLECT</h3>
        <p>
          When you place an enquiry or order via WhatsApp or schedule white-glove installation, we collect your name, Indian shipping address, contact phone number, and delivery specifications. APEX never stores or requests sensitive banking passwords or payment PINs.
        </p>

        <h3 className="font-bold text-sm uppercase text-[#111111] pt-2">2. PURPOSE OF DATA UTILIZATION</h3>
        <p>
          We utilize customer data strictly to:
          • Dispatch and coordinate white-glove in-room assembly teams to your registered address.
          • Register and activate your 10-Year Comprehensive Frame Warranty.
          • Coordinate order logistics and provide delivery window updates via WhatsApp.
        </p>

        <h3 className="font-bold text-sm uppercase text-[#111111] pt-2">3. ZERO THIRD-PARTY MONETIZATION</h3>
        <p>
          We never rent, sell, or trade client personal information to advertisers or external data brokers. Your bedroom specifications remain entirely confidential.
        </p>

        <div className="pt-6 border-t border-[#D8D5D0]">
          <Link to="/" className="text-xs uppercase font-bold text-[#111111] hover:underline">
            ← Return to APEX Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-[#D8D5D0] p-8 sm:p-12 shadow-sm space-y-6 text-xs text-[#444444] leading-relaxed">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block">
          PURCHASE AGREEMENT
        </span>
        <h1 className="font-display text-3xl sm:text-4xl uppercase text-[#111111]">
          TERMS & CONDITIONS OF SALE
        </h1>
        <p className="text-[#777777] text-[11px]">Last Updated: October 2026</p>

        <p>
          By acquiring an architectural bed or custom suite from APEX, you accede to the terms and specifications set forth herein.
        </p>

        <h3 className="font-bold text-sm uppercase text-[#111111] pt-2">1. PRODUCT CRAFTSMANSHIP & WOOD GRAIN</h3>
        <p>
          Because our platform beds are crafted from genuine kiln-dried solid European Oak, American Walnut, and Indian Sheesham, natural variations in wood grain, figure, and micro-hues are inherent characteristics of real wood and testify to its authentic craftsmanship.
        </p>

        <h3 className="font-bold text-sm uppercase text-[#111111] pt-2">2. WHITE-GLOVE INSTALLATION REQUIREMENTS</h3>
        <p>
          Clients are responsible for ensuring that entryways, staircases, and elevators provide adequate clearance for king and queen bed frames. Our delivery technicians will exercise maximum care during in-room installation.
        </p>

        <h3 className="font-bold text-sm uppercase text-[#111111] pt-2">3. 10-YEAR FRAME GUARANTEE</h3>
        <p>
          Warranty coverage is non-transferable and applies to normal domestic residential usage. Structural failure resulting from unauthorized modifications or inappropriate dynamic overloads exceeding rated thresholds is excluded.
        </p>

        <div className="pt-6 border-t border-[#D8D5D0]">
          <Link to="/" className="text-xs uppercase font-bold text-[#111111] hover:underline">
            ← Return to APEX Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
