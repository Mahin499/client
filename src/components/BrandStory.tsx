import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section className="bg-[#F3F0EB] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#D8D5D0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typography & Story */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#777777] block">
                THE STORY
              </span>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase text-[#111111] leading-[0.95] tracking-[0.02em]">
                COMFORT.<br />
                DESIGN.<br />
                CHARACTER.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-light">
              A bedroom should feel like your own private retreat. At APEX, we believe the bed is not merely furniture — it is the grounding architectural center of your home. We marry traditional joinery techniques with modern pneumatic storage systems and couture upholstery to craft pieces that endure for decades.
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-3 px-8 py-3.5 bg-[#111111] text-white text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#333333] transition-all shadow-md group active:scale-95"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick stats counter */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#D8D5D0]">
              <div>
                <p className="font-display text-2xl text-[#111111]">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-[#777777] mt-0.5">Kiln-Dried Hardwood</p>
              </div>
              <div>
                <p className="font-display text-2xl text-[#111111]">10 YRS</p>
                <p className="text-[10px] uppercase tracking-wider text-[#777777] mt-0.5">Frame Warranty</p>
              </div>
              <div>
                <p className="font-display text-2xl text-[#111111]">PAN-INDIA</p>
                <p className="text-[10px] uppercase tracking-wider text-[#777777] mt-0.5">White-Glove Setup</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bedroom Photograph */}
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden border border-[#D8D5D0] shadow-2xl">
              <img
                src="/images/story-bedroom.jpg"
                alt="APEX Architectural Master Bedroom Suite"
                className="w-full h-[420px] sm:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#A58A63] font-semibold block">
                    PROJECT ARCHIVE
                  </span>
                  <p className="font-display text-xl sm:text-2xl tracking-wide uppercase mt-1">
                    THE HORIZON MASTER SUITE
                  </p>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B0ACA5]">
                  MUMBAI, 2026
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
