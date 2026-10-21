export type BedSize = 'King' | 'Queen' | 'Double' | 'Single' | string;
export type BedFinish = string;
export type StorageType = 'Hydraulic Lift-Up' | 'Dual Drawer' | 'Platform (No Storage)' | string;

export interface ProductVariant {
  id: string;
  sku: string;
  code?: string;
  dimensionsCm?: string;
  lengthInches?: number;
  widthInches?: number;
  size: BedSize;
  thickness?: string;
  cover?: string;
  finish: string;
  storage: StorageType;
  price: number; // 70% of MRP (30% discount applied)
  originalPrice: number; // original reference MRP
  mrp?: number;
  discountPercentage?: number;
  stock: number;
  image?: string;
}

export interface ProductSpecification {
  bedSize?: string;
  outerDimensions?: string;
  mattressSize?: string;
  frameMaterial?: string;
  upholsteryOrFinish?: string;
  storageCapacity?: string;
  weightCapacity?: string;
  assembly?: string;
  warranty?: string;
  countryOfOrigin?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  manufacturer?: string;
  range?: string;
  tagline: string;
  description: string;
  story: string;
  category: string;
  collection: string;
  basePrice: number;
  originalPrice: number;
  discountPercentage: number;
  firmness?: string;
  warranty?: string;
  materials?: string;
  effectiveDate?: string;
  images: string[];
  variants: ProductVariant[];
  highlights: string[];
  specifications: ProductSpecification;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  inStock: boolean;
}

export interface Collection {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  startingPrice: number;
}
