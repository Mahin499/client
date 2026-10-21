import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { APEX_WHATSAPP_NUMBER, APEX_PHONE_DISPLAY } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  const whatsappDirectUrl = `https://wa.me/${APEX_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi APEX, I am interested in your luxury beds. Please share your catalog and ordering details.'
  )}`;

  return (
    <footer className="bg-[#111111] text-[#A0A0A0] pt-20 pb-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <span className="font-display text-4xl uppercase tracking-[0.18em] text-white block">
                APEX
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#A58A63] block -mt-1 font-semibold">
                ARCHITECTURAL BED STORE
              </span>
            </Link>
            <p className="text-xs text-[#888888] leading-relaxed max-w-sm font-light">
              APEX crafts timeless, architectural beds engineered for restorative sleep. Built with solid kiln-dried hardwoods, silent German joinery, and couture French bouclé. Orders and bespoke inquiries are coordinated directly on WhatsApp.
            </p>
            <div className="flex items-center space-x-3 text-xs text-[#888888] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#A58A63]" />
              <span>10-Year Comprehensive Structural Guarantee</span>
            </div>
          </div>

          {/* Collections (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/collections/signature-collection" className="hover:text-white transition-colors">
                  Signature Wingback
                </Link>
              </li>
              <li>
                <Link to="/collections/storage-collection" className="hover:text-white transition-colors">
                  Hydraulic Storage
                </Link>
              </li>
              <li>
                <Link to="/collections/essential-collection" className="hover:text-white transition-colors">
                  Essential Platform
                </Link>
              </li>
              <li>
                <Link to="/collections/contemporary-collection" className="hover:text-white transition-colors">
                  Imperial Canopy
                </Link>
              </li>
              <li>
                <Link to="/beds" className="hover:text-white transition-colors font-medium text-[#C0C0C0]">
                  View All Beds →
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Concierge & WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              CLIENT CONCIERGE
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/shipping" className="hover:text-white transition-colors">
                  White-Glove Delivery & Setup
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Dedicated Concierge
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#1F1F1F] border border-[#333333] text-white hover:border-[#A58A63] transition-colors rounded-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-[11px] font-mono">WhatsApp: {APEX_PHONE_DISPLAY}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              PRIVATE JOURNAL
            </h4>
            <p className="text-xs text-[#888888] leading-relaxed font-light">
              Subscribe for private collection releases and bedroom design publications.
            </p>

            {subscribed ? (
              <div className="bg-[#1C1C1C] border border-[#333333] p-3 text-xs text-emerald-400 flex items-center space-x-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>You are now subscribed to the APEX Private Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-[#1C1C1C] border border-[#2E2E2E] px-3.5 py-2.5 text-xs text-white placeholder-[#666666] focus:outline-none focus:border-[#A58A63] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#A58A63] text-[#111111] hover:bg-white transition-colors text-xs font-bold"
                    title="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#666666] block">
                  We respect your privacy. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p>© {new Date().getFullYear()} APEX Bed Store. All rights reserved.</p>
            <div className="flex items-center space-x-4 text-[11px]">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link to="/shipping" className="hover:text-white transition-colors">Shipping Information</Link>
            </div>
          </div>

          <div className="text-[10px] uppercase tracking-wider text-[#888888] font-mono">
            Direct WhatsApp Ordering: {APEX_PHONE_DISPLAY}
          </div>
        </div>

      </div>
    </footer>
  );
};
