import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../data/products';

interface PinCheckResult {
  serviceable: boolean;
  city?: string;
  state?: string;
  deliveryDate: string;
  message: string;
}

interface StoreContextType {
  products: Product[];
  getProductBySlug: (slug: string) => Product | undefined;
  getProductById: (id: string) => Product | undefined;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  checkPinCode: (pin: string) => PinCheckResult;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
  const getProductById = (id: string) => products.find((p) => p.id === id);

  const checkPinCode = (pin: string): PinCheckResult => {
    const cleaned = pin.trim();
    if (!/^\d{6}$/.test(cleaned)) {
      return {
        serviceable: false,
        deliveryDate: '',
        message: 'Please enter a valid 6-digit Indian PIN code.',
      };
    }

    const firstTwo = cleaned.substring(0, 2);
    let city = 'Metro Region';
    let state = 'India';

    if (firstTwo === '11') { city = 'New Delhi'; state = 'Delhi'; }
    else if (firstTwo === '40') { city = 'Mumbai'; state = 'Maharashtra'; }
    else if (firstTwo === '56') { city = 'Bengaluru'; state = 'Karnataka'; }
    else if (firstTwo === '50') { city = 'Hyderabad'; state = 'Telangana'; }
    else if (firstTwo === '60') { city = 'Chennai'; state = 'Tamil Nadu'; }
    else if (firstTwo === '70') { city = 'Kolkata'; state = 'West Bengal'; }
    else if (firstTwo === '41') { city = 'Pune'; state = 'Maharashtra'; }
    else if (firstTwo === '38') { city = 'Ahmedabad'; state = 'Gujarat'; }
    else if (firstTwo === '30') { city = 'Jaipur'; state = 'Rajasthan'; }
    else if (firstTwo === '20') { city = 'Noida / Ghaziabad'; state = 'Uttar Pradesh'; }
    else if (firstTwo === '12') { city = 'Gurugram'; state = 'Haryana'; }

    const deliveryDays = firstTwo === '40' || firstTwo === '56' || firstTwo === '11' ? 3 : 5;
    const estDate = new Date(Date.now() + deliveryDays * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    return {
      serviceable: true,
      city,
      state,
      deliveryDate: estDate,
      message: `Delivering to ${city}, ${cleaned} by ${estDate}. Complimentary White-Glove Installation included.`,
    };
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        getProductBySlug,
        getProductById,
        isSearchOpen,
        setIsSearchOpen,
        checkPinCode,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
