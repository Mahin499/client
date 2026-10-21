import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

// Pages
import { Home } from './pages/Home';
import { BedsCatalog } from './pages/BedsCatalog';
import { CollectionsPage } from './pages/CollectionsPage';
import { CollectionDetail } from './pages/CollectionDetail';
import { ProductDetail } from './pages/ProductDetail';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { ShippingPage } from './pages/ShippingPage';
import { ReturnsPage } from './pages/ReturnsPage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';
import { Navigate } from 'react-router-dom';

// Scroll to top on route change helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Route wrapper for Layout
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F0EB]">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <SearchModal />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/beds" element={<BedsCatalog />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:slug" element={<CollectionDetail />} />
            <Route path="/categories/:slug" element={<BedsCatalog />} />
            <Route path="/products/:slug" element={<ProductDetail />} />

            {/* Informational Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Clean redirects for removed cart / checkout / wishlist paths */}
            <Route path="/cart" element={<Navigate to="/beds" replace />} />
            <Route path="/checkout" element={<Navigate to="/beds" replace />} />
            <Route path="/wishlist" element={<Navigate to="/beds" replace />} />
            <Route path="/account/*" element={<Navigate to="/contact" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/beds" replace />} />
          </Routes>
        </AppLayout>
      </Router>
    </StoreProvider>
  );
};

export default App;
