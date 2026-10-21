import React from 'react';
import { ShieldCheck, Truck, Clock, Award, Lock } from 'lucide-react';

export const BenefitsRow: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: 'SOLID HARDWOOD',
      subtitle: 'FSC-Certified Teak & Oak',
    },
    {
      icon: Lock,
      title: 'SECURE CHECKOUT',
      subtitle: 'UPI & 256-Bit SSL Encrypted',
    },
    {
      icon: Truck,
      title: 'PAN-INDIA DELIVERY',
      subtitle: 'Free White-Glove Installation',
    },
    {
      icon: ShieldCheck,
      title: '10-YEAR WARRANTY',
      subtitle: 'Full Structural Guarantee',
    },
    {
      icon: Clock,
      title: '30-NIGHT TRIAL',
      subtitle: 'Hassle-Free Experience',
    },
  ];

  return (
    <div className="bg-[#EAE6DF] border-b border-[#D8D5D0] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-4 items-center">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center space-x-3 justify-start sm:justify-center ${
                  i === 4 ? 'col-span-2 md:col-span-1 justify-center' : ''
                }`}
              >
                <div className="w-8 h-8 rounded-sm bg-[#DCD8CF] flex items-center justify-center shrink-0 text-[#111111]">
                  <Icon className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#111111] leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-[#666666] leading-tight mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
