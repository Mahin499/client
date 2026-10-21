import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Hammer, Box, Headphones, ArrowRight } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'MODERN DESIGN',
      desc: 'Architectural lines engineered for quiet visual harmony and timeless presence.',
      linkText: 'EXPLORE STORY',
      linkUrl: '/about',
    },
    {
      icon: Hammer,
      title: 'THOUGHTFUL CRAFT',
      desc: 'FSC-certified kiln-dried solid hardwoods with zero-creak acoustic joinery.',
      linkText: 'DISCOVER CRAFT',
      linkUrl: '/about',
    },
    {
      icon: Box,
      title: 'STORAGE SOLUTIONS',
      desc: 'Smooth German hydraulic gas-lift mechanisms with up to 850L dust-sealed space.',
      linkText: 'EXPLORE STORAGE',
      linkUrl: '/beds?storage=Hydraulic+Lift-Up',
    },
    {
      icon: Headphones,
      title: 'CONCIERGE SUPPORT',
      desc: 'Complimentary Pan-India white-glove delivery with certified room assembly.',
      linkText: 'CONTACT US',
      linkUrl: '/contact',
    },
  ];

  return (
    <section className="bg-[#171717] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#282828]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#282828]">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`pt-6 lg:pt-0 ${idx !== 0 ? 'lg:pl-6' : ''} flex flex-col justify-between group`}
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#222222] border border-[#333333] flex items-center justify-center mb-4 text-[#A58A63] group-hover:text-white group-hover:border-[#555555] transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display tracking-[0.15em] text-base uppercase text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#999999] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <Link
                  to={item.linkUrl}
                  className="inline-flex items-center space-x-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#CCCCCC] group-hover:text-white transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
