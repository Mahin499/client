import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/products';

export const CollectionsPage: React.FC = () => {
  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">Collections</span>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-[#D8D5D0] py-16 px-4 sm:px-6 lg:px-8 bg-[#F3F0EB]">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block mb-2">
            DESIGN NARRATIVES
          </span>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-[0.03em] leading-none text-[#111111]">
            APEX BED COLLECTIONS
          </h1>
          <p className="text-sm text-[#555555] mt-4 font-light leading-relaxed">
            Each APEX collection represents a distinct architectural philosophy — from low-slung Japanese minimalism and pneumatic storage to couture bouclé wingbacks.
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {COLLECTIONS_DATA.map((col) => (
            <div
              key={col.slug}
              className="bg-white border border-[#D8D5D0] overflow-hidden group hover:border-[#111111] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0E0E0E]">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6 right-6 text-white flex justify-between items-end">
                  <span className="text-xs uppercase font-mono tracking-wider text-[#A58A63]">
                    From ₹{col.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-2xl uppercase text-[#111111] tracking-wide mb-2">
                    {col.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#555555] uppercase tracking-wider mb-2">
                    {col.subtitle}
                  </p>
                  <p className="text-xs text-[#777777] leading-relaxed font-light">
                    {col.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between">
                  <Link
                    to={`/collections/${col.slug}`}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold text-[#111111] hover:text-[#555555] transition-colors group"
                  >
                    <span>EXPLORE THIS COLLECTION</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
