import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Check, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Fabric Swatches Request');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F3F0EB] min-h-screen text-[#111111]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#D8D5D0] bg-[#EAE6DF]/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-[11px] text-[#666666]">
          <Link to="/" className="hover:text-[#111111]">Home</Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold">Contact Concierge</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#777777] block mb-2">
            CLIENT CONCIERGE DESK
          </span>
          <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-[0.03em] leading-tight text-[#111111]">
            WE ARE AT YOUR SERVICE
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] mt-2 font-light leading-relaxed">
            Whether you are ordering custom dimensions, requesting complimentary fabric swatch kits, or seeking delivery updates, our dedicated bedroom consultants are available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Showrooms (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#D8D5D0] p-6 shadow-sm space-y-6">
              <h3 className="font-display text-lg uppercase tracking-wider text-[#111111] border-b border-[#EAE6DF] pb-3">
                DIRECT CHANNELS
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#A58A63] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">Direct WhatsApp Concierge</span>
                    <a
                      href="https://wa.me/919037098706?text=Hi%20APEX%2C%20I%20would%20like%20to%20enquire%20about%20your%20architectural%20beds."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111111] font-mono font-semibold underline hover:text-[#A58A63]"
                    >
                      +91 90370 98706
                    </a>
                    <span className="text-[10px] text-[#888888] block">Instant response Mon–Sun</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#A58A63] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">Client Enquiries</span>
                    <span className="text-[#666666] font-mono">concierge@apexbeds.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Private Showroom Locations */}
            <div className="bg-white border border-[#D8D5D0] p-6 shadow-sm space-y-4">
              <h3 className="font-display text-lg uppercase tracking-wider text-[#111111] border-b border-[#EAE6DF] pb-3">
                PRIVATE EXPERIENCE GALLERIES
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <p className="font-bold text-[#111111] flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A58A63]" />
                    <span>MUMBAI STUDIO</span>
                  </p>
                  <p className="text-[#666666] ml-5">
                    Gallery 4, Laxmi Industrial Estate, Lower Parel, Mumbai 400013
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[#111111] flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A58A63]" />
                    <span>BENGALURU STUDIO</span>
                  </p>
                  <p className="text-[#666666] ml-5">
                    100 Feet Road, Indiranagar, Bengaluru 560038
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[#111111] flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A58A63]" />
                    <span>NEW DELHI STUDIO</span>
                  </p>
                  <p className="text-[#666666] ml-5">
                    The Pavilions, Mehrauli-Gurgaon Road, Sultanpur, New Delhi 110030
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Swatch Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#D8D5D0] p-8 shadow-md space-y-6">
              <h2 className="font-display text-2xl uppercase tracking-wide text-[#111111]">
                TRANSMIT A MESSAGE OR REQUEST SWATCHES
              </h2>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-emerald-700" />
                    <h3 className="font-bold text-sm">Message Transmitted Successfully</h3>
                  </div>
                  <p className="text-xs text-emerald-800">
                    Thank you, {name}. A dedicated APEX bedroom concierge will contact you within 2 hours with swatch details or tailored advice.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-[#444444] block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Siddharth Kapoor"
                        required
                        className="w-full bg-[#F3F0EB] border border-[#D8D5D0] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-[#444444] block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="siddharth@example.com"
                        required
                        className="w-full bg-[#F3F0EB] border border-[#D8D5D0] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-[#444444] block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98000 00000"
                        className="w-full bg-[#F3F0EB] border border-[#D8D5D0] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-[#444444] block mb-1">
                        Nature of Inquiry
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#F3F0EB] border border-[#D8D5D0] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                      >
                        <option value="Fabric Swatches Request">Complimentary Swatch Kit (Bouclé / Velvet / Leather)</option>
                        <option value="Custom Size Request">Custom Dimensions / Oversized King</option>
                        <option value="White-Glove Delivery Inquiry">Delivery Schedule & PIN Availability</option>
                        <option value="Trade / Architect Program">Trade Program for Architects & Interior Designers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-wider text-[#444444] block mb-1">
                      Your Message or Delivery Address for Swatches *
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please specify which bed design or fabrics you are considering..."
                      required
                      className="w-full bg-[#F3F0EB] border border-[#D8D5D0] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                  >
                    <span>TRANSMIT INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
