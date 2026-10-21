import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#171717] overflow-hidden border-b border-[#282828] text-white">
      {/* Background panoramic bedroom photography with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bed-canopy.jpg"
          alt="APEX Master Suite"
          className="w-full h-full object-cover object-center opacity-30 filter grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#A58A63] block">
            SUSTAINED ELEGANCE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.03em] leading-tight text-white">
            MAKE ROOM FOR<br />BETTER LIVING.
          </h2>
          <p className="text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed">
            Every APEX bed is engineered to transform your nightly ritual into an architectural experience. Experience the fusion of master woodwork, precision German engineering, and sensory upholstery fabrics.
          </p>
          <div className="pt-2">
            <Link
              to="/beds"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-[#111111] text-xs uppercase tracking-[0.22em] font-bold hover:bg-[#F3F0EB] transition-all shadow-xl group active:scale-95"
            >
              <span>EXPLORE BEDS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
