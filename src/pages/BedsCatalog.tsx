import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';

export const BedsCatalog: React.FC = () => {
  const { products } = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial query params
  const categoryParam = searchParams.get('category') || 'All';
  const sizeParam = searchParams.get('size') || 'All';
  const firmnessParam = searchParams.get('firmness') || 'All';
  const sortParam = searchParams.get('sort') || 'featured';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedSize, setSelectedSize] = useState(sizeParam);
  const [selectedFirmness, setSelectedFirmness] = useState(firmnessParam);
  const [selectedSort, setSelectedSort] = useState(sortParam);
  const [priceRange, setPriceRange] = useState<number>(250000);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  React.useEffect(() => {
    if (searchParams.get('category')) setSelectedCategory(searchParams.get('category')!);
    if (searchParams.get('firmness')) setSelectedFirmness(searchParams.get('firmness')!);
    if (searchParams.get('size')) setSelectedSize(searchParams.get('size')!);
    if (searchParams.get('sort')) setSelectedSort(searchParams.get('sort')!);
  }, [searchParams]);

  const categories = [
    'All',
    'Natural Latex Mattresses',
    'Organic Latex Mattresses',
    'Orthopedic Mattresses',
    'Dual Feel Reversible',
    'PU Foam Mattresses',
    'Mattress Toppers',
    'Pillows',
    'Mattress Protectors & Accessories'
  ];
  const sizes = ['All', 'King', 'Queen', 'Double', 'Single'];
  const firmnessOptions = ['All', 'Soft', 'Medium', 'Firm', 'Hard'];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
        if (selectedSize !== 'All' && !product.variants.some((v) => v.size === selectedSize)) return false;
        if (selectedFirmness !== 'All') {
          if (!product.firmness || !product.firmness.toLowerCase().includes(selectedFirmness.toLowerCase())) {
            return false;
          }
        }
        if (product.basePrice > priceRange) return false;
        return true;
      })
      .sort((a, b) => {
        if (selectedSort === 'price-low') return a.basePrice - b.basePrice;
        if (selectedSort === 'price-high') return b.basePrice - a.basePrice;
        if (selectedSort === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      });
  }, [products, selectedCategory, selectedSize, selectedFirmness, priceRange, selectedSort]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedSize('All');
    setSelectedFirmness('All');
    setPriceRange(250000);
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedSize !== 'All' ||
    selectedFirmness !== 'All' ||
    priceRange < 250000;

  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">M.M. Foam Mattress Catalog</span>
        </div>
      </div>

      {/* Catalog Title Banner */}
      <div className="border-b border-[#D8D5D0] py-12 px-4 sm:px-6 lg:px-8 bg-[#F3F0EB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777]">
              OFFICIAL 2025 APEX CATALOG
            </span>
            <span className="px-2 py-0.5 bg-emerald-700 text-white text-[9px] font-bold uppercase tracking-wider rounded">
              30% OFF APPLIED
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-[0.03em] leading-none text-[#111111]">
                M.M. FOAM MATTRESSES
              </h1>
              <p className="text-xs sm:text-sm text-[#666666] mt-2 max-w-2xl font-light">
                Discover genuine 100% natural latex mattresses, spine-supporting orthopedic models, reversible dual-firmness designs, luxury toppers, and accessories. All products include an exclusive 30% discount off official MRP.
              </p>
            </div>
            <p className="text-xs font-mono text-[#777777] uppercase tracking-wider">
              {filteredProducts.length} DESIGNS AVAILABLE
            </p>
          </div>
        </div>
      </div>

      {/* Main Catalog Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D8D5D0] mb-8">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-[#D8D5D0] text-xs uppercase font-semibold tracking-wider"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters {hasActiveFilters && '(Active)'}</span>
          </button>

          {/* Active filter count */}
          <div className="hidden lg:flex items-center space-x-2 text-xs text-[#666666]">
            <span>Showing {filteredProducts.length} of {products.length} models</span>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="ml-3 flex items-center space-x-1 text-[11px] font-semibold text-red-600 hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Sorting */}
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-[#777777] uppercase tracking-wider text-[10px] hidden sm:inline">Sort By:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
              className="bg-white border border-[#D8D5D0] px-3 py-2 text-xs text-[#111111] uppercase tracking-wider font-medium focus:outline-none focus:border-[#111111]"
            >
              <option value="featured">Featured / Signatures</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">New Arrivals First</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* DESKTOP FILTERS */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-white p-6 border border-[#D8D5D0]">
            <div className="flex items-center justify-between border-b border-[#EAE6DF] pb-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#111111] flex items-center space-x-2">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter By</span>
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-[10px] uppercase font-bold text-[#A58A63] hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[#444444] block">
                Category
              </label>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors cursor-pointer flex items-center justify-between ${
                      selectedCategory === cat
                        ? 'bg-[#111111] text-white font-semibold'
                        : 'text-[#555555] hover:bg-[#F3F0EB]'
                    }`}
                  >
                    <span className="truncate">{cat}</span>
                    {selectedCategory === cat && <span className="text-[10px]">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Mattress Size */}
            <div className="space-y-2 border-t border-[#EAE6DF] pt-4">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[#444444] block">
                Standard Size
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-1.5 text-xs font-mono border text-center transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? 'border-[#111111] bg-[#111111] text-white font-bold'
                        : 'border-[#D8D5D0] text-[#555555] hover:border-[#111111]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Firmness / Feel */}
            <div className="space-y-2 border-t border-[#EAE6DF] pt-4">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[#444444] block">
                Firmness Level
              </label>
              <div className="space-y-1">
                {firmnessOptions.map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFirmness(f)}
                    className={`w-full text-left px-2.5 py-1.5 text-xs transition-colors cursor-pointer flex items-center justify-between ${
                      selectedFirmness === f
                        ? 'bg-[#111111] text-white font-semibold'
                        : 'text-[#555555] hover:bg-[#F3F0EB]'
                    }`}
                  >
                    <span>{f}</span>
                    {selectedFirmness === f && <span className="text-[10px]">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-2 border-t border-[#EAE6DF] pt-4">
              <div className="flex justify-between items-center text-xs">
                <label className="text-[10px] uppercase tracking-wider font-bold text-[#444444]">
                  Max Price:
                </label>
                <span className="font-mono font-bold text-[#111111]">
                  ₹{priceRange.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={2000}
                max={250000}
                step={5000}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#111111] cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-[#888888] font-mono">
                <span>₹2,000</span>
                <span>₹2,50,000+</span>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-[#D8D5D0] p-12 text-center space-y-4">
                <h3 className="font-display text-2xl uppercase text-[#111111]">
                  No Matching Products
                </h3>
                <p className="text-xs text-[#777777] max-w-md mx-auto">
                  We could not find any models matching your filter criteria. Try clearing the size, category, or firmness filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-[#111111] text-white text-xs uppercase font-semibold tracking-wider cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            )}
          </main>

        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="w-full max-w-sm bg-[#F3F0EB] h-full overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-[#D8D5D0] pb-4">
              <h3 className="font-display text-xl uppercase text-[#111111]">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)} className="p-1 cursor-pointer">
                <X className="w-5 h-5 text-[#111111]" />
              </button>
            </div>

            {/* Mobile Category */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider">Category</label>
              <div className="grid grid-cols-1 gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-3 py-2 text-xs border ${
                      selectedCategory === cat ? 'bg-[#111111] text-white font-semibold' : 'bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Size */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider">Size</label>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-mono border text-center ${
                      selectedSize === sz ? 'bg-[#111111] text-white font-bold' : 'bg-white'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Firmness */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider">Firmness</label>
              <div className="grid grid-cols-3 gap-2">
                {firmnessOptions.map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFirmness(f)}
                    className={`py-2 text-xs font-mono border text-center ${
                      selectedFirmness === f ? 'bg-[#111111] text-white font-bold' : 'bg-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-3.5 bg-[#111111] text-white text-xs uppercase font-bold tracking-widest mt-6 cursor-pointer"
            >
              APPLY FILTERS ({filteredProducts.length} RESULTS)
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
