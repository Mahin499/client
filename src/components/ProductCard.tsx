import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  variantStyle?: 'light' | 'dark';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, variantStyle = 'light' }) => {
  const isDark = variantStyle === 'dark';
  const defaultVariant = product.variants[0];
  const savings = Math.max(0, product.originalPrice - product.basePrice);

  return (
    <div
      className={`group relative flex flex-col justify-between transition-all duration-300 border ${
        isDark
          ? 'bg-[#171717] border-[#2A2A2A] text-white hover:border-[#555555]'
          : 'bg-white border-[#D8D5D0] text-[#111111] hover:border-[#111111] shadow-sm hover:shadow-xl'
      }`}
    >
      {/* Top Image Container */}
      <Link to={`/products/${product.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-[#EAE6DF]">
        <img
          src={product.images[0] || '/images/hero-bed.jpg'}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-10">
          <span className="px-2.5 py-1 bg-[#111111] text-white text-[9px] uppercase tracking-[0.2em] font-bold">
            30% OFF
          </span>
          {product.isBestseller && (
            <span className="px-2.5 py-1 bg-[#A58A63] text-white text-[9px] uppercase tracking-[0.2em] font-bold">
              BESTSELLER
            </span>
          )}
          {product.warranty && (
            <span className="px-2 py-0.5 bg-black/80 text-white text-[8px] font-mono tracking-wider">
              {product.warranty.replace(' Official Warranty', '').replace(' Manufacturer Warranty', '')}
            </span>
          )}
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Range & Category */}
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#777777] mb-1.5 font-medium">
            <span>{product.range || product.category}</span>
            <span className="text-[#A58A63] font-semibold">{product.manufacturer || 'M.M. FOAM'}</span>
          </div>

          {/* Product Name */}
          <Link to={`/products/${product.slug}`} className="block">
            <h3 className="font-display text-lg uppercase tracking-wide leading-snug line-clamp-1 group-hover:underline">
              {product.name}
            </h3>
          </Link>

          {/* Micro Tagline */}
          <p className="text-xs text-[#666666] line-clamp-2 mt-1 leading-relaxed font-light">
            {product.tagline}
          </p>

          {/* Available Sizes / Variants Pills */}
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-[#EAE6DF]">
            <span className="text-[10px] uppercase tracking-wider text-[#888888]">Sizes:</span>
            {Array.from(new Set(product.variants.map((v) => v.size))).slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-[10px] font-mono px-1.5 py-0.5 border border-[#D8D5D0] rounded-xs bg-[#F3F0EB]/60 text-[#333333]"
              >
                {size}
              </span>
            ))}
            {product.variants.length > 4 && (
              <span className="text-[9px] text-[#777777] font-mono">
                +{product.variants.length} options
              </span>
            )}
          </div>
        </div>

        {/* Pricing and Action Button */}
        <div className="mt-5 pt-3 border-t border-[#EAE6DF] flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-base sm:text-lg font-bold font-mono tracking-tight text-[#111111]">
                ₹{product.basePrice.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.basePrice && (
                <span className="text-xs line-through text-[#888888] font-mono">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {savings > 0 && (
              <span className="text-[10px] text-[#15803d] font-semibold block">
                Save ₹{savings.toLocaleString('en-IN')} (30% OFF)
              </span>
            )}
            <span className="text-[9px] text-[#888888] block">Inclusive of all taxes</span>
          </div>

          <Link
            to={`/products/${product.slug}`}
            className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold bg-[#111111] text-white hover:bg-[#333333] transition-all flex items-center space-x-1.5 shrink-0"
          >
            <span>VIEW</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
