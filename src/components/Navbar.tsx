import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { APEX_WHATSAPP_NUMBER } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const { setIsSearchOpen } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'STORY', path: '/about' },
    { name: 'COLLECTIONS', path: '/collections' },
    { name: 'BEDS', path: '/beds' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const whatsappDirectUrl = `https://wa.me/${APEX_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi APEX, I am interested in your luxury beds. Please share your catalog and ordering details.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F3F0EB]/90 backdrop-blur-md border-b border-[#D8D5D0] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111111] hover:opacity-70 transition-opacity"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Left Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase font-medium tracking-[0.2em] transition-colors duration-200 py-1 relative ${
                isActive(link.path)
                  ? 'text-[#111111] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#111111]'
                  : 'text-[#555555] hover:text-[#111111]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Center Brand Logo: APEX */}
        <div className="flex-1 lg:flex-none text-center">
          <Link to="/" className="inline-block group">
            <span className="font-display text-3xl sm:text-4xl tracking-[0.18em] text-[#111111] leading-none block">
              APEX
            </span>
            <span className="text-[8px] uppercase tracking-[0.45em] text-[#777777] block -mt-0.5 group-hover:text-[#111111] transition-colors font-semibold">
              ARCHITECTURAL BEDS
            </span>
          </Link>
        </div>

        {/* Right Actions: Search + Direct WhatsApp Contact */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center space-x-1.5 text-[#333333] hover:text-[#111111] transition-colors group cursor-pointer px-2 py-1"
            title="Search Catalog"
          >
            <Search className="w-4 h-4" />
            <span className="hidden md:inline text-xs uppercase tracking-wider font-medium text-[#555555] group-hover:text-[#111111]">
              SEARCH
            </span>
          </button>

          {/* WhatsApp Direct Action Button */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#111111] text-white text-xs uppercase tracking-[0.16em] font-bold hover:bg-[#333333] transition-all shadow-sm active:scale-95"
            title="Direct WhatsApp with APEX Concierge"
          >
            <svg
              className="w-3.5 h-3.5 fill-current shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">WHATSAPP</span>
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D8D5D0] bg-[#F3F0EB] px-6 py-6 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm uppercase tracking-[0.2em] font-medium py-2 ${
                isActive(link.path) ? 'text-[#111111] font-bold border-l-2 border-[#111111] pl-3' : 'text-[#666666]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#D8D5D0]">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center space-x-2"
            >
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
