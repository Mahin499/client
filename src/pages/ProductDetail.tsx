import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
  Maximize2,
  X,
  MapPin,
  Clock,
  Layers,
  Wrench,
  CheckCircle,
  Tag,
  Sparkles,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { ProductVariant } from '../types';
import { ProductCard } from '../components/ProductCard';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { buildWhatsAppUrl, APEX_PHONE_DISPLAY } from '../utils/whatsapp';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products, getProductBySlug, checkPinCode } = useStore();

  const product = getProductBySlug(slug || '');

  // Active gallery image
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Variant selections
  const [selectedSize, setSelectedSize] = useState<string>('King');
  const [selectedDimension, setSelectedDimension] = useState<string>('');
  const [selectedThickness, setSelectedThickness] = useState<string>('');
  const [selectedCover, setSelectedCover] = useState<string>('');

  // PIN code checker state
  const [pinInput, setPinInput] = useState('400018');
  const [pinResult, setPinResult] = useState(() => checkPinCode('400018'));
  const [pinLoading, setPinLoading] = useState(false);

  // Accordion open states
  const [openAccordion, setOpenAccordion] = useState<string | null>('dimensions');

  // Initialize variant selections when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product && product.variants && product.variants.length > 0) {
      // Pick a popular default variant (e.g. King or Queen, or first)
      const defaultVar =
        product.variants.find((v) => v.size === 'King' || v.size === 'Queen') ||
        product.variants[0];
      setSelectedSize(defaultVar.size);
      setSelectedDimension(defaultVar.code || `${defaultVar.lengthInches} x ${defaultVar.widthInches}`);
      setSelectedThickness(defaultVar.thickness || '');
      setSelectedCover(defaultVar.cover || defaultVar.finish || '');
      setActiveImageIndex(0);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#F3F0EB]">
        <h2 className="font-display text-3xl uppercase text-[#111111] mb-2">
          Product Not Found
        </h2>
        <p className="text-sm text-[#777777] mb-6">
          The requested product model may have been archived or relocated.
        </p>
        <Link
          to="/beds"
          className="px-6 py-3 bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  // Available unique options for this product
  const availableSizes = Array.from(new Set(product.variants.map((v) => v.size))).filter(Boolean);
  
  // Dimensions available for the currently selected standard size
  const dimensionsForSize = Array.from(
    new Set(
      product.variants
        .filter((v) => !selectedSize || v.size === selectedSize)
        .map((v) => v.code || `${v.lengthInches} x ${v.widthInches}`)
    )
  ).filter(Boolean);

  // Thicknesses available for selected size & dimension
  const thicknessesForDim = Array.from(
    new Set(
      product.variants
        .filter((v) => (!selectedSize || v.size === selectedSize) && (!selectedDimension || (v.code === selectedDimension || `${v.lengthInches} x ${v.widthInches}` === selectedDimension)))
        .map((v) => v.thickness || '')
    )
  ).filter(Boolean);

  // Covers available for selected size, dimension & thickness
  const coversForVariant = Array.from(
    new Set(
      product.variants
        .filter(
          (v) =>
            (!selectedSize || v.size === selectedSize) &&
            (!selectedDimension || (v.code === selectedDimension || `${v.lengthInches} x ${v.widthInches}` === selectedDimension)) &&
            (!selectedThickness || v.thickness === selectedThickness)
        )
        .map((v) => v.cover || v.finish || '')
    )
  ).filter(Boolean);

  // Find exact matching variant based on current selections
  const matchedVariant: ProductVariant = useMemo(() => {
    // 1. Exact match all
    let match = product.variants.find(
      (v) =>
        v.size === selectedSize &&
        (v.code === selectedDimension || `${v.lengthInches} x ${v.widthInches}` === selectedDimension) &&
        (!selectedThickness || v.thickness === selectedThickness) &&
        (!selectedCover || v.cover === selectedCover || v.finish === selectedCover)
    );
    if (match) return match;

    // 2. Match size and dimension
    match = product.variants.find(
      (v) =>
        v.size === selectedSize &&
        (v.code === selectedDimension || `${v.lengthInches} x ${v.widthInches}` === selectedDimension) &&
        (!selectedThickness || v.thickness === selectedThickness)
    );
    if (match) return match;

    // 3. Match dimension
    match = product.variants.find(
      (v) => v.code === selectedDimension || `${v.lengthInches} x ${v.widthInches}` === selectedDimension
    );
    if (match) return match;

    // 4. Match size
    match = product.variants.find((v) => v.size === selectedSize);
    if (match) return match;

    // Fallback to first
    return product.variants[0];
  }, [product, selectedSize, selectedDimension, selectedThickness, selectedCover]);

  // Exact 30% discount calculation
  const originalMrp = matchedVariant.originalPrice;
  const sellingPrice = matchedVariant.price;
  const savings = Math.max(0, originalMrp - sellingPrice);

  const handleSizeChange = (newSize: string) => {
    setSelectedSize(newSize);
    const validVariants = product.variants.filter((v) => v.size === newSize);
    if (validVariants.length > 0) {
      const nextVar = validVariants[0];
      setSelectedDimension(nextVar.code || `${nextVar.lengthInches} x ${nextVar.widthInches}`);
      if (nextVar.thickness) setSelectedThickness(nextVar.thickness);
      if (nextVar.cover) setSelectedCover(nextVar.cover);
    }
  };

  const handleDimensionChange = (newDim: string) => {
    setSelectedDimension(newDim);
    const validVariants = product.variants.filter(
      (v) => (v.code === newDim || `${v.lengthInches} x ${v.widthInches}` === newDim)
    );
    if (validVariants.length > 0) {
      const nextVar = validVariants[0];
      if (nextVar.thickness) setSelectedThickness(nextVar.thickness);
      if (nextVar.cover) setSelectedCover(nextVar.cover);
    }
  };

  const handlePinCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setPinLoading(true);
    setTimeout(() => {
      setPinResult(checkPinCode(pinInput));
      setPinLoading(false);
    }, 300);
  };

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // Formatted WhatsApp Order Link according to prompt section 8
  const whatsappOrderUrl = buildWhatsAppUrl({
    productName: product.name,
    range: product.range || product.category,
    manufacturer: product.manufacturer || 'M.M. Foam',
    size: matchedVariant.size,
    dimensionsCm: matchedVariant.dimensionsCm,
    thickness: matchedVariant.thickness,
    code: matchedVariant.code,
    cover: matchedVariant.cover,
    originalPrice: originalMrp,
    discountPercentage: 30,
    price: sellingPrice,
    savings: savings,
  });

  return (
    <div className="bg-[#F3F0EB] text-[#111111] min-h-screen">
      
      {/* 1. Breadcrumbs & Discount Alert Bar */}
      <div className="bg-[#111111] text-[#F3F0EB] py-2 px-4 text-center text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2">
        <Sparkles className="w-3.5 h-3.5 text-[#A58A63]" />
        <span>SPECIAL AUTHORIZED OFFER: 30% DISCOUNT APPLIED TO ALL SOURCE MRPs</span>
        <Sparkles className="w-3.5 h-3.5 text-[#A58A63]" />
      </div>

      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/beds" className="hover:text-[#111111] transition-colors">Catalog</Link>
          <span>/</span>
          <Link to={`/beds?category=${encodeURIComponent(product.category)}`} className="hover:text-[#111111] transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* 2. Main 3-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ========================================================
              LEFT COLUMN (~42% -> 5 cols on lg): GALLERY
             ======================================================== */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            
            {/* Main Primary Image with Lightbox Trigger */}
            <div className="relative aspect-[4/3] bg-white border border-[#D8D5D0] overflow-hidden group shadow-sm">
              <img
                src={product.images[activeImageIndex] || '/images/hero-bed.jpg'}
                alt={`${product.name} visual preview`}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Badge: 30% OFF */}
              <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-10">
                <span className="px-3 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-[0.2em] font-bold shadow-md">
                  30% OFF
                </span>
                {product.warranty && (
                  <span className="px-2.5 py-1 bg-[#A58A63] text-white text-[9px] uppercase tracking-[0.15em] font-bold shadow-md">
                    {product.warranty}
                  </span>
                )}
              </div>

              {/* Lightbox zoom button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-3 right-3 p-2 bg-white/90 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors shadow-sm"
                title="View Full Resolution Image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Gallery (Extracted from Source PDF) */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[4/3] border overflow-hidden transition-all bg-white ${
                      activeImageIndex === idx
                        ? 'border-[#111111] ring-2 ring-[#111111]'
                        : 'border-[#D8D5D0] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 text-[8px] px-1 bg-black/60 text-white font-mono">
                      {idx === 0 ? 'MATTRESS' : 'CORE LAYERS'}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Natural Materials & Authentic Manufacture Callout */}
            <div className="p-4 bg-[#EAE6DF]/70 border border-[#D8D5D0] space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-[#111111] font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-[#A58A63]" />
                <span className="uppercase text-[11px] tracking-wider">
                  ORIGINAL {product.manufacturer || 'M.M. FOAM'} CATALOG
                </span>
              </div>
              <p className="text-[#666666] leading-relaxed">
                Extracted from the official 2025 Manufacturer Price List. Guaranteed 100% genuine latex & materials, delivered pan-India with white-glove logistics coordinated by APEX.
              </p>
            </div>
          </div>

          {/* ========================================================
              CENTER COLUMN (~33% -> 4 cols on lg): DETAILS & SPECS
             ======================================================== */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Header / Brand / Category */}
            <div className="border-b border-[#D8D5D0] pb-5">
              <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-[#777777] mb-1 font-semibold">
                <span>{product.manufacturer || 'M.M. FOAM'}</span>
                <span>•</span>
                <span>{product.range || product.category}</span>
              </div>

              <h1 className="font-display text-2xl sm:text-3xl uppercase tracking-wide leading-tight text-[#111111]">
                {product.name}
              </h1>

              {product.firmness && (
                <div className="inline-flex items-center space-x-2 mt-2 px-2.5 py-1 bg-[#111111] text-white text-[10px] uppercase tracking-wider font-semibold">
                  <span>FIRMNESS: {product.firmness}</span>
                </div>
              )}

              <p className="text-xs text-[#555555] mt-3 leading-relaxed font-light">
                {product.tagline}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2.5 border-b border-[#D8D5D0] pb-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#111111]">
                KEY SPECIFICATIONS & BENEFITS
              </h3>
              <ul className="space-y-2 text-xs text-[#444444]">
                {product.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-[#A58A63] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials & Construction */}
            {product.materials && (
              <div className="border-b border-[#D8D5D0] pb-6 space-y-2">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#111111]">
                  CONSTRUCTION & LAYERS
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {product.materials}
                </p>
              </div>
            )}

            {/* Expandable Technical Specs Accordions */}
            <div className="space-y-2 pt-1">
              
              {/* Dimensions & Sizing */}
              <div className="border border-[#D8D5D0] bg-white">
                <button
                  onClick={() => toggleAccordion('dimensions')}
                  className="w-full px-4 py-3 text-left flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#111111]"
                >
                  <div className="flex items-center space-x-2">
                    <Layers className="w-3.5 h-3.5 text-[#777777]" />
                    <span>Dimensions & Sizing</span>
                  </div>
                  {openAccordion === 'dimensions' ? (
                    <ChevronUp className="w-4 h-4 text-[#777777]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#777777]" />
                  )}
                </button>
                {openAccordion === 'dimensions' && (
                  <div className="p-4 border-t border-[#EAE6DF] text-xs text-[#555555] space-y-2 bg-[#FAF8F5]">
                    <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                      <span className="text-[#888888]">Selected Size:</span>
                      <span className="font-semibold text-[#111111]">{matchedVariant.size}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                      <span className="text-[#888888]">Inch Code:</span>
                      <span className="font-mono text-[#111111]">{matchedVariant.code || `${matchedVariant.lengthInches} x ${matchedVariant.widthInches}`} inches</span>
                    </div>
                    {matchedVariant.dimensionsCm && (
                      <div className="flex justify-between py-1 border-b border-[#EAE6DF]">
                        <span className="text-[#888888]">Metric Dimensions:</span>
                        <span className="font-mono text-[#111111]">{matchedVariant.dimensionsCm}</span>
                      </div>
                    )}
                    {matchedVariant.thickness && (
                      <div className="flex justify-between py-1">
                        <span className="text-[#888888]">Core Thickness:</span>
                        <span className="font-semibold text-[#111111]">{matchedVariant.thickness}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Warranty & Guarantee */}
              <div className="border border-[#D8D5D0] bg-white">
                <button
                  onClick={() => toggleAccordion('warranty')}
                  className="w-full px-4 py-3 text-left flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-[#111111]"
                >
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#777777]" />
                    <span>Warranty & Certification</span>
                  </div>
                  {openAccordion === 'warranty' ? (
                    <ChevronUp className="w-4 h-4 text-[#777777]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#777777]" />
                  )}
                </button>
                {openAccordion === 'warranty' && (
                  <div className="p-4 border-t border-[#EAE6DF] text-xs text-[#555555] space-y-2 bg-[#FAF8F5]">
                    <p className="leading-relaxed">
                      <strong>Official Warranty:</strong> {product.warranty || 'Official Manufacturer Warranty'} backed by M.M. Rubber Company Ltd.
                    </p>
                    <p className="leading-relaxed text-[11px] text-[#777777]">
                      Manufactured according to Bureau of Indian Standards BIS IS: 1741-2019. 100% GOLS Certified Organic Latex where applicable.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* PIN Code Delivery Checker */}
            <div className="p-4 bg-white border border-[#D8D5D0] space-y-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider font-bold text-[#111111]">
                <div className="flex items-center space-x-1.5">
                  <Truck className="w-4 h-4 text-[#A58A63]" />
                  <span>Check Delivery To Your Pin Code</span>
                </div>
              </div>
              <form onSubmit={handlePinCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter 6-digit PIN"
                  className="flex-1 px-3 py-2 border border-[#D8D5D0] text-xs font-mono focus:outline-none focus:border-[#111111]"
                />
                <button
                  type="submit"
                  disabled={pinLoading}
                  className="px-4 py-2 bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#333333] transition-colors"
                >
                  {pinLoading ? '...' : 'Check'}
                </button>
              </form>
              {pinResult && (
                <p className="text-[11px] text-[#15803d] font-medium flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Available for {pinResult.city} ({pinResult.state}) — Est. delivery: {pinResult.deliveryDate}</span>
                </p>
              )}
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN (~25% -> 3 cols on lg): PRICING & ORDER
             ======================================================== */}
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            
            {/* Price Box */}
            <div className="bg-white border-2 border-[#111111] p-5 shadow-lg space-y-5">
              
              {/* Discount Callout Banner */}
              <div className="bg-[#B91C1C] text-white p-2.5 text-center -mx-5 -mt-5">
                <div className="text-xs uppercase tracking-[0.2em] font-black">
                  30% OFF SPECIAL DISCOUNT
                </div>
                <div className="text-[10px] tracking-wider opacity-90 mt-0.5">
                  Applied to Original M.M. Foam MRP
                </div>
              </div>

              {/* Price Details */}
              <div className="space-y-1 pt-1">
                <div className="text-[10px] uppercase tracking-wider text-[#777777] font-semibold">
                  Original Reference MRP:
                </div>
                <div className="text-sm font-mono text-[#888888] line-through">
                  ₹{originalMrp.toLocaleString('en-IN')}
                </div>

                <div className="pt-2">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#111111] font-bold">
                    Discounted Selling Price:
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-[#111111] tracking-tight">
                    ₹{sellingPrice.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-block px-2.5 py-1 bg-[#dcfce7] text-[#15803d] text-xs font-mono font-bold tracking-wider border border-[#bbf7d0]">
                    30% OFF — You Save ₹{savings.toLocaleString('en-IN')}
                  </span>
                </div>

                <span className="text-[10px] text-[#888888] block pt-1">
                  Inclusive of all taxes & free dispatch coordination
                </span>
              </div>

              {/* Variant Selectors */}
              <div className="space-y-4 pt-4 border-t border-[#EAE6DF]">
                
                {/* 1. Standard Size Selector */}
                {availableSizes.length > 1 && (
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-[#111111] block mb-2">
                      1. Standard Size
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {availableSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeChange(size)}
                          className={`py-2 px-3 text-xs uppercase tracking-wider font-semibold border transition-all text-center ${
                            selectedSize === size
                              ? 'bg-[#111111] text-white border-[#111111]'
                              : 'bg-[#F3F0EB] text-[#333333] border-[#D8D5D0] hover:border-[#111111]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Specific Dimension (Length x Width) */}
                {dimensionsForSize.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-bold text-[#111111]">
                        2. Mattress Dimensions
                      </label>
                      <span className="text-[9px] text-[#777777] font-mono">Length x Width (Inches)</span>
                    </div>
                    <select
                      value={selectedDimension}
                      onChange={(e) => handleDimensionChange(e.target.value)}
                      className="w-full px-3 py-2 border border-[#D8D5D0] text-xs font-mono bg-white focus:outline-none focus:border-[#111111]"
                    >
                      {dimensionsForSize.map((dim) => (
                        <option key={dim} value={dim}>
                          {dim} inches
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* 3. Core Thickness */}
                {thicknessesForDim.length > 0 && thicknessesForDim[0] !== '' && (
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-[#111111] block mb-1.5">
                      3. Mattress Thickness
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      {thicknessesForDim.map((th) => (
                        <button
                          key={th}
                          onClick={() => setSelectedThickness(th)}
                          className={`py-2 px-2 text-[11px] font-mono font-medium border transition-all text-center ${
                            selectedThickness === th
                              ? 'bg-[#111111] text-white border-[#111111]'
                              : 'bg-white text-[#333333] border-[#D8D5D0] hover:border-[#111111]'
                          }`}
                        >
                          {th}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Cover / Finish */}
                {coversForVariant.length > 1 && (
                  <div>
                    <label className="text-[11px] uppercase tracking-wider font-bold text-[#111111] block mb-1.5">
                      4. Fabric Cover / Feel
                    </label>
                    <select
                      value={selectedCover}
                      onChange={(e) => setSelectedCover(e.target.value)}
                      className="w-full px-3 py-2 border border-[#D8D5D0] text-xs bg-white focus:outline-none focus:border-[#111111]"
                    >
                      {coversForVariant.map((cov) => (
                        <option key={cov} value={cov}>
                          {cov}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Order via WhatsApp Direct Button */}
              <div className="pt-2">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-5 py-3.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#20ba5a] transition-all shadow-md active:scale-98"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>ORDER ON WHATSAPP</span>
                </a>
                <p className="text-[10px] text-center text-[#777777] mt-2">
                  Direct WhatsApp concierge with APEX representative: {APEX_PHONE_DISPLAY}
                </p>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="bg-[#FAF8F5] border border-[#D8D5D0] p-4 text-xs space-y-2.5">
              <div className="flex items-center space-x-2 text-[#111111] font-semibold">
                <Truck className="w-4 h-4 text-[#A58A63]" />
                <span>Pan-India Safe Transit</span>
              </div>
              <div className="flex items-center space-x-2 text-[#111111] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#A58A63]" />
                <span>100% Genuine M.M. Foam Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-[#111111] font-semibold">
                <RotateCcw className="w-4 h-4 text-[#A58A63]" />
                <span>Manufacturer Inspection & Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#D8D5D0]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#777777] block mb-1">
                  EXPLORE ALTERNATE CONFIGURATIONS
                </span>
                <h2 className="font-display text-2xl uppercase tracking-wide text-[#111111]">
                  Complementary M.M. Foam Models
                </h2>
              </div>
              <Link
                to="/beds"
                className="text-xs uppercase tracking-widest font-semibold text-[#111111] hover:underline"
              >
                View Full Catalog →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:opacity-70 transition-opacity"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={product.images[activeImageIndex]}
            alt={product.name}
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
