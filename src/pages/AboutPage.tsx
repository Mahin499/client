import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Compass, Hammer, Shield } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">The Story & Craft</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-[#171717] text-white overflow-hidden border-b border-[#282828]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/story-bedroom.jpg"
            alt="APEX Master Bedroom"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#A58A63] block">
            OUR MANIFESTO
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[0.03em] leading-tight text-white max-w-3xl">
            DESIGNED FOR COMFORT.<br />BUILT FOR LIVING.
          </h1>
          <p className="text-sm sm:text-base text-[#C0C0C0] max-w-2xl font-light leading-relaxed">
            APEX was founded on a singular conviction: the bed is not merely a place to sleep, but the architectural grounding stone of the modern primary suite.
          </p>
        </div>
      </section>

      {/* Philosophy Split */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block">
              THE APEX ETHOS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-[#111111] leading-tight">
              HONEST MATERIALS, TIMELESS PROPORTIONS
            </h2>
            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed font-light">
              In an era of mass-produced, flat-pack furniture built from disposable particle board, APEX restores integrity to the craft. Every frame is constructed using kiln-dried solid hardwoods, precision mortise and tenon joinery, and heavy-gauge steel supports engineered to eliminate every creak and vibration.
            </p>
            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed font-light">
              We complement structural permanence with sensory tactile materials — French bouclé weaves, vegetable-tanned full-grain leathers, and breathable organic Belgian linens.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#D8D5D0] overflow-hidden shadow-xl">
              <img
                src="/images/bed-detail.jpg"
                alt="APEX Tactile Bouclé Craftsmanship"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="bg-[#EAE6DF] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#D8D5D0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block mb-1">
              THE FOUNDATION
            </span>
            <h2 className="font-display text-3xl uppercase tracking-wider text-[#111111]">
              OUR THREE CORE PILLARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F3F0EB] p-8 border border-[#D8D5D0] space-y-4">
              <div className="w-10 h-10 bg-[#111111] text-[#A58A63] flex items-center justify-center">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg uppercase text-[#111111] tracking-wide">
                1. SOLID STRUCTURAL CORE
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                FSC-certified kiln-dried European Oak and Indian Sheesham. We reject particle board, flimsy brackets, and cheap veneers entirely.
              </p>
            </div>

            <div className="bg-[#F3F0EB] p-8 border border-[#D8D5D0] space-y-4">
              <div className="w-10 h-10 bg-[#111111] text-[#A58A63] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg uppercase text-[#111111] tracking-wide">
                2. ACOUSTIC TRANQUILITY
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Our curved wingback headboards are padded with dense acoustic sound-dampening insulation to create an intimate auditory cocoon.
              </p>
            </div>

            <div className="bg-[#F3F0EB] p-8 border border-[#D8D5D0] space-y-4">
              <div className="w-10 h-10 bg-[#111111] text-[#A58A63] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg uppercase text-[#111111] tracking-wide">
                3. WHITE-GLOVE SERVICE
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Every bed includes our certified two-person delivery team who places, builds, and inspects the bed inside your bedroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-[#F3F0EB]">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
            EXPERIENCE THE ARCHITECTURE OF REST
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-light">
            Explore our curated catalog or speak with our bedroom design concierge.
          </p>
          <div className="pt-2">
            <Link
              to="/beds"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-all shadow-md"
            >
              <span>EXPLORE ALL BEDS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
