import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#F3F0EB] select-none pt-8 pb-10 px-4 sm:px-8 lg:px-12 border-b border-[#D8D5D0]">
      
      {/* LAYER 1: Background Subtle Warm Lighting */}
      <div className="absolute inset-0 z-0 bg-radial from-white/40 via-transparent to-transparent pointer-events-none" />

      {/* TOP SECTION: Top-left micro editorial text & Top-right badge */}
      <div className="relative z-30 flex items-start justify-between w-full max-w-7xl mx-auto">
        <div className="space-y-1 max-w-xs">
          <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase font-bold text-[#111111]">
            COMFORT IS A STATEMENT.
          </p>
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-medium text-[#666666]">
            DESIGNED FOR REST.
          </p>
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-medium text-[#888888]">
            CRAFTED FOR LIFE.
          </p>
        </div>

        <div className="text-right hidden sm:block">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-semibold text-[#888888] border-b border-[#B0ACA5] pb-0.5">
            HAUTE LIVING EDITION
          </span>
        </div>
      </div>

      {/* LAYER 2: APEX OVERSIZED WORDMARK (Middle layer, z-10) */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 -mt-16 sm:-mt-20 lg:-mt-24 overflow-hidden"
        aria-hidden="true"
      >
        <span 
          className="font-display font-black text-[#111111] uppercase tracking-[0.06em] leading-none text-[26vw] sm:text-[24vw] lg:text-[22vw] opacity-[0.98] select-none transform scale-y-105"
          style={{ textRendering: 'geometricPrecision' }}
        >
          APEX
        </span>
      </div>

      {/* LAYER 3: FOREGROUND BED OBJECT (Highest layer, z-20) */}
      <div className="absolute inset-x-0 bottom-4 sm:bottom-8 lg:bottom-10 flex justify-center items-end pointer-events-none z-20">
        <div className="relative w-[92%] sm:w-[80%] lg:w-[65%] max-w-5xl flex justify-center items-end">
          {/* Subtle realistic ground shadow */}
          <div className="absolute bottom-1 w-[85%] h-8 bg-black/15 blur-xl rounded-full" />
          
          <img
            src="/images/hero-bed-cutout.png"
            alt="APEX Signature Wingback Bouclé Bed"
            className="w-full h-auto object-contain relative drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)] transform transition-transform duration-700 hover:scale-[1.01]"
            loading="eager"
          />
        </div>
      </div>

      {/* BOTTOM SECTION: Left CTAs & Right Season/Year label (z-30) */}
      <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-end justify-between w-full max-w-7xl mx-auto pt-16 sm:pt-24 gap-6">
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <Link
            to="/beds"
            className="px-8 py-3.5 bg-[#111111] text-white text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#2b2b2b] hover:shadow-xl transition-all duration-300 text-center shadow-md active:scale-95"
          >
            EXPLORE BEDS
          </Link>

          <Link
            to="/collections"
            className="inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#111111] hover:text-[#555555] transition-colors group py-2"
          >
            <span>EXPLORE COLLECTIONS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Right Season/Year */}
        <div className="text-left sm:text-right">
          <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase font-bold text-[#111111]">
            NEW COLLECTION
          </p>
          <p className="text-xs font-mono tracking-widest text-[#777777] mt-0.5">
            2026
          </p>
        </div>
      </div>

    </section>
  );
};
