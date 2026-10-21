import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the White-Glove in-room installation work?',
      a: 'Every APEX bed order includes complimentary white-glove setup. Our dedicated two-person logistics crew transports the bed directly to your bedroom of choice, unpacks all components, installs the sprung slats or hydraulic lift mechanisms, positions your mattress, and removes all packaging debris for recycling.',
    },
    {
      q: 'How difficult is it to operate the Hydraulic Lift-up storage with a heavy mattress?',
      a: 'We utilize dual calibrated German Suspa® 1200N pneumatic gas struts specifically rated for heavy luxury mattresses (including 10-12 inch memory foam or natural latex). Even with a 65kg mattress and bedding, the mechanism lifts effortlessly with gentle upward guidance.',
    },
    {
      q: 'Will the bed creak or squeak over time?',
      a: 'No. Traditional beds squeak due to loose metal bracket screws flexing in soft composite wood. APEX uses kiln-dried solid hardwood joinery, heavy-duty mortise-and-tenon construction, and internal acoustic dampening pads that eliminate all vibration and squeaking permanently.',
    },
    {
      q: 'What is covered under the 10-Year Warranty?',
      a: 'Our 10-Year Comprehensive Warranty covers structural hardwood frames, corner joinery, support beams, and steel substructures against manufacturing defects, warping, cracking, or sagging. The German pneumatic hydraulic gas struts include a dedicated 5-year replacement guarantee.',
    },
    {
      q: 'How does the 30-Night Sleep Trial work?',
      a: 'Once your bed is assembled in your home, you have 30 nights to live with it. If you decide the height, fabric, or dimensions do not harmonize with your bedroom, simply contact our concierge desk for a full refund and hassle-free return pickup.',
    },
    {
      q: 'What mattress sizes fit APEX beds?',
      a: 'All our beds follow standard Indian and International mattress dimensions: King Size fits standard 78" x 72" mattresses; Queen Size fits 78" x 60" mattresses; Single fits 78" x 36" mattresses. Custom dimensions can be ordered upon request via WhatsApp.',
    },
  ];

  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">Frequently Asked Questions</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block mb-2">
            CLIENT GUIDANCE
          </span>
          <h1 className="font-display text-4xl uppercase tracking-wide text-[#111111]">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-xs text-[#666666] mt-2 font-light">
            Answers regarding our solid hardwood joinery, German hydraulic pistons, and white-glove setup.
          </p>
        </div>

        <div className="bg-white border border-[#D8D5D0] divide-y divide-[#D8D5D0] shadow-sm">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between text-sm font-bold uppercase tracking-wider text-[#111111] hover:bg-[#F3F0EB]/40 transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-[#555555] leading-relaxed font-light animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 bg-[#EAE6DF] border border-[#D8D5D0] space-y-3">
          <h3 className="font-display text-lg uppercase text-[#111111]">
            Have a Specific Question?
          </h3>
          <p className="text-xs text-[#666666]">
            Our master carpenters and bedroom consultants are available daily.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2.5 bg-[#111111] text-white text-xs uppercase font-bold tracking-wider"
          >
            Contact Dedicated Concierge
          </Link>
        </div>
      </div>

    </div>
  );
};
