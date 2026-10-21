import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export const FeaturedCollections: React.FC = () => {
  const editions = [
    {
      id: 'pincore',
      badge: 'SIGNATURE 100% LATEX',
      title: 'PINCORE NATURAL LATEX',
      subtitle: '100% GOLS Certified Organic Natural Latex Core with pin-core micro-ventilation.',
      features: ['100% Organic Natural Latex Core', 'IS: 1741-2019 Certified', '17-Year Official Warranty'],
      price: '₹19,530',
      image: '/images/products/pincore-main.jpg',
      link: '/products/mm-foam-pincore',
    },
    {
      id: 'hardcore',
      badge: 'MAX FIRMNESS',
      title: 'HARDCORE ORTHOPEDIC',
      subtitle: 'High-density natural latex engineered for maximum spinal support and heavy-duty durability.',
      features: ['High Density Firm Latex Core', 'Full Orthopedic Alignment', '10-Year Official Warranty'],
      price: '₹18,522',
      image: '/images/products/hardcore-main.jpg',
      link: '/products/mm-foam-hardcore',
    },
    {
      id: 'dual-harmony',
      badge: 'REVERSIBLE DUAL-FEEL',
      title: 'DUAL HARMONY REVERSIBLE',
      subtitle: 'Dual comfort mattress combining soft natural latex with high-density bonded support.',
      features: ['Soft Latex & Firm Core Sides', 'Reversible Dual Comfort', '5-Year Official Warranty'],
      price: '₹9,800',
      image: '/images/products/dual-harmony-main.jpg',
      link: '/products/mm-foam-dual-harmony',
    },
    {
      id: 'spine-line',
      badge: null,
      title: 'SPINE LINE ORTHO',
      subtitle: 'Rubberized coir and natural latex orthopedic mattress for targeted lumbar support.',
      features: ['Natural Coir & Latex Layers', 'Zero Sag Spine Support', '5-Year Official Warranty'],
      price: '₹10,500',
      image: '/images/products/spine-line-main.jpg',
      link: '/products/mm-foam-spine-line',
    },
  ];

  return (
    <section className="bg-[#F3F0EB] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D8D5D0]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-10 border-b border-[#D8D5D0] pb-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777]">
                CURATED ARCHITECTURE
              </span>
              <span className="px-2 py-0.5 bg-emerald-700 text-white text-[9px] font-bold uppercase tracking-wider rounded">
                30% OFF
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#111111] tracking-[0.05em]">
              FLAGSHIP M.M. FOAM RANGES
            </h2>
          </div>
          <Link
            to="/beds"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:text-[#777777] transition-colors group"
          >
            <span>VIEW ALL EDITIONS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editions.map((item) => (
            <div
              key={item.id}
              className={`bg-[#171717] text-white flex flex-col justify-between border ${
                item.badge ? 'border-[#A58A63] ring-1 ring-[#A58A63]' : 'border-[#282828]'
              } relative group hover:border-[#666666] transition-all duration-300 shadow-xl`}
            >
              {item.badge && (
                <div className="absolute top-0 left-0 right-0 bg-[#A58A63] text-[#111111] text-[9px] uppercase tracking-[0.25em] font-bold py-1 px-3 text-center z-10 flex items-center justify-center space-x-1">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  <span>{item.badge}</span>
                </div>
              )}

              {/* Card Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#0E0E0E] mt-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display tracking-[0.14em] text-lg uppercase text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#AAAAAA] leading-relaxed line-clamp-2 mb-4 font-light">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-1.5 mb-6 border-t border-[#262626] pt-3">
                    {item.features.map((feat, fidx) => (
                      <li key={fidx} className="text-[10px] text-[#888888] flex items-center space-x-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#A58A63]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Price & Button */}
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#777777] block">Starting at</span>
                    <span className="text-base font-semibold font-mono text-white">{item.price}</span>
                  </div>
                  <Link
                    to={item.link}
                    className="px-4 py-2 bg-[#262626] text-white text-[10px] uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-[#111111] transition-all border border-[#3A3A3A]"
                  >
                    EXPLORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
