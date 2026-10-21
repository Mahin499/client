import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, products } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.variants.some((v) => v.finish.toLowerCase().includes(query.toLowerCase())) ||
          p.highlights.some((h) => h.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelectProduct = (slug: string) => {
    setIsSearchOpen(false);
    navigate(`/products/${slug}`);
  };

  const popularSearches = ['Hydraulic Storage', 'Bouclé', 'King Size', 'Low Platform', 'Walnut Wood', 'Canopy'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-[#F3F0EB] border border-[#D8D5D0] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#D8D5D0] flex items-center space-x-3 bg-white">
          <Search className="w-5 h-5 text-[#888888] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by bed style, fabric (bouclé), size, or storage..."
            className="w-full text-base sm:text-lg text-[#111111] placeholder-[#888888] focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#888888] hover:text-[#111111]"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-[#555555] hover:text-[#111111] text-xs uppercase tracking-wider font-semibold border-l border-[#D8D5D0] pl-3"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#888888]">
                POPULAR DISCOVERIES
              </p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-white border border-[#D8D5D0] text-xs text-[#333333] hover:border-[#111111] hover:text-[#111111] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length > 0 ? (
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#888888]">
                {filtered.length} ARCHITECTURAL PIECES FOUND
              </p>
              <div className="divide-y divide-[#D8D5D0]">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.slug)}
                    className="py-3 flex items-center justify-between hover:bg-white/60 p-2 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-14 h-14 object-cover border border-[#D8D5D0] shrink-0"
                      />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#777777] block">
                          {product.category}
                        </span>
                        <h4 className="font-display text-sm uppercase text-[#111111] group-hover:underline">
                          {product.name}
                        </h4>
                        <p className="text-[11px] font-mono font-semibold text-[#111111] mt-0.5">
                          ₹{product.basePrice.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#111111] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center space-y-2">
              <p className="font-display text-lg uppercase text-[#111111]">
                No beds found matching "{query}"
              </p>
              <p className="text-xs text-[#777777]">
                Try searching for "Storage", "Bouclé", "King", or "Platform"
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#EAE6DF] border-t border-[#D8D5D0] text-center text-[10px] text-[#777777] uppercase tracking-wider">
          All beds include Free Pan-India White-Glove Installation & 10-Year Warranty
        </div>
      </div>
    </div>
  );
};
