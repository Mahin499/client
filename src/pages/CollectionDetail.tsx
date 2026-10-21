import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/products';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';

export const CollectionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { products } = useStore();

  const collection = COLLECTIONS_DATA.find((c) => c.slug === slug);

  if (!collection) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#F3F0EB]">
        <h2 className="font-display text-3xl uppercase text-[#111111] mb-2">Collection Not Found</h2>
        <Link to="/collections" className="text-xs uppercase font-bold tracking-wider underline">
          View All Collections
        </Link>
      </div>
    );
  }

  const collectionProducts = products.filter(
    (p) => p.collection === collection.name || p.category === collection.name || p.range === collection.name
  );

  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-[#111111]">Collections</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">{collection.name}</span>
        </div>
      </div>

      {/* Hero Banner for Collection */}
      <div className="relative w-full py-24 sm:py-32 bg-[#171717] overflow-hidden text-white border-b border-[#282828]">
        <div className="absolute inset-0 z-0">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/collections"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-[#A58A63] hover:text-white mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ALL COLLECTIONS</span>
          </Link>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-[0.04em] text-white">
            {collection.name}
          </h1>
          <p className="text-sm sm:text-base text-[#D0D0D0] max-w-2xl font-light leading-relaxed">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Collection Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex items-baseline justify-between border-b border-[#D8D5D0] pb-3">
          <h2 className="font-display text-2xl uppercase tracking-wide">
            AVAILABLE DESIGNS ({collectionProducts.length})
          </h2>
          <span className="text-xs text-[#777777] font-mono">
            Handcrafted in Solid Hardwoods
          </span>
        </div>

        {collectionProducts.length === 0 ? (
          <div className="bg-white p-12 text-center border border-[#D8D5D0]">
            <p className="text-sm text-[#777777]">New pieces for this collection are currently in production.</p>
            <Link to="/beds" className="mt-4 inline-block px-6 py-2.5 bg-[#111111] text-white text-xs uppercase font-bold tracking-wider">
              Browse All Beds
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
