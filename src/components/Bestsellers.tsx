import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from './ProductCard';

export const Bestsellers: React.FC = () => {
  const { products } = useStore();
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <section className="bg-[#F3F0EB] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D8D5D0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-[#D8D5D0] pb-4 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block mb-1">
              PROVEN COMFORT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#111111] tracking-[0.05em]">
              FEATURED BED DESIGNS
            </h2>
          </div>
          <Link
            to="/beds?sort=featured"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] hover:text-[#777777] transition-colors group"
          >
            <span>VIEW FULL CATALOG</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
