import React from 'react';
import { Hero } from '../components/Hero';
import { FeatureStrip } from '../components/FeatureStrip';
import { BrandStory } from '../components/BrandStory';
import { BenefitsRow } from '../components/BenefitsRow';
import { FeaturedCollections } from '../components/FeaturedCollections';
import { PromoBanner } from '../components/PromoBanner';
import { Bestsellers } from '../components/Bestsellers';

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <FeatureStrip />
      <BrandStory />
      <BenefitsRow />
      <FeaturedCollections />
      <PromoBanner />
      <Bestsellers />
    </main>
  );
};
