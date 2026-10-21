import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const ShippingPage: React.FC = () => {
  const { checkPinCode } = useStore();
  const [pin, setPin] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) return;
    setResult(checkPinCode(pin));
  };

  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">White-Glove Shipping & Setup</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block">
            LOGISTICS PROTOCOL
          </span>
          <h1 className="font-display text-4xl uppercase tracking-wide text-[#111111]">
            COMPLIMENTARY WHITE-GLOVE SERVICE
          </h1>
          <p className="text-xs text-[#666666] font-light">
            Every APEX bed includes two-person in-room placement, complete assembly, and packaging recycling across India.
          </p>
        </div>

        {/* PIN Serviceability Checker */}
        <div className="bg-white border border-[#D8D5D0] p-8 shadow-sm space-y-4">
          <h3 className="font-display text-xl uppercase tracking-wide text-[#111111]">
            CHECK ESTIMATED DELIVERY WINDOW FOR YOUR POSTAL CODE
          </h3>
          <p className="text-xs text-[#666666]">
            Enter your 6-digit Indian PIN code to view delivery schedules for your region:
          </p>
          <form onSubmit={handleCheck} className="flex max-w-md space-x-2">
            <input
              type="text"
              value={pin}
              maxLength={6}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="e.g. 400001, 110001, 560001"
              className="w-full bg-[#F3F0EB] border border-[#D8D5D0] px-3.5 py-2.5 text-xs font-mono text-[#111111] focus:outline-none focus:border-[#111111]"
            />
            <button
              type="submit"
              className="px-6 bg-[#111111] text-white text-xs uppercase font-bold tracking-widest hover:bg-[#333333]"
            >
              VERIFY
            </button>
          </form>

          {result && (
            <div
              className={`p-4 text-xs border animate-fade-in ${
                result.serviceable
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-red-50 border-red-200 text-red-900'
              }`}
            >
              <p className="font-bold">{result.message}</p>
              {result.serviceable && (
                <p className="text-[11px] text-emerald-700 mt-1">
                  Region: {result.city}, {result.state} • Dedicated Logistics Corridor
                </p>
              )}
            </div>
          )}
        </div>

        {/* Protocol Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#D8D5D0] p-6 space-y-2">
            <Clock className="w-5 h-5 text-[#A58A63]" />
            <h4 className="font-display text-sm uppercase text-[#111111]">
              1. PRE-SCHEDULED CALL
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Our delivery concierge calls 24 to 48 hours prior to arrange an exact 2-hour delivery window that suits your schedule.
            </p>
          </div>

          <div className="bg-white border border-[#D8D5D0] p-6 space-y-2">
            <Truck className="w-5 h-5 text-[#A58A63]" />
            <h4 className="font-display text-sm uppercase text-[#111111]">
              2. IN-ROOM PLACEMENT
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              We carry all structural packages up elevators or stairs directly to your master bedroom.
            </p>
          </div>

          <div className="bg-white border border-[#D8D5D0] p-6 space-y-2">
            <CheckCircle className="w-5 h-5 text-[#A58A63]" />
            <h4 className="font-display text-sm uppercase text-[#111111]">
              3. EXPERT ASSEMBLY
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Our factory-trained technicians assemble your bed in 45 minutes, calibrate the hydraulic gas pistons, and clean the space.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
