import React from 'react';
import { CreditCard, CheckCircle2, ShoppingCart, MessageSquare, Check, ShieldCheck, XCircle } from 'lucide-react';
import { VISA_CARD_SERVICE, TELEGRAM_LINK } from '../data/servicesData';
import { ServiceItem, CartItem } from '../types';

interface VisaCardSectionProps {
  onAddToCart: (item: ServiceItem) => void;
  cart: CartItem[];
}

export const VisaCardSection: React.FC<VisaCardSectionProps> = ({ onAddToCart, cart }) => {
  const added = cart.some((c) => c.service.id === VISA_CARD_SERVICE.id);
  const directTgLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(
    `Hi @LeulXO47, I want to order a Virtual VISA Card for 800 BIRR.`
  )}`;

  return (
    <section id="visa" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#080912] border-2 border-[#d4af37]/50 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Cyberpunk Visa Card Interactive Showcase (Left Column) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm h-52 sm:h-56 rounded-2xl bg-gradient-to-tr from-[#121420] via-[#1a1d30] to-[#0d0e17] border-2 border-[#d4af37]/60 p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden transform hover:rotate-1 hover:scale-105 transition-all duration-300 group">
              {/* Card Holographic Lines */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00f0ff]/20 to-[#d4af37]/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex justify-between items-start z-10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">Virtual Visa</span>
                  <div className="text-xs font-bold text-gray-300">LEUL XO BUSINESS</div>
                </div>
                <div className="text-xl font-black italic tracking-wider text-white">
                  VISA
                </div>
              </div>

              {/* SIM Chip Icon */}
              <div className="w-10 h-8 rounded-md bg-gradient-to-r from-amber-200 to-amber-500 border border-amber-600/50 flex items-center justify-center z-10 shadow-inner">
                <div className="w-8 h-6 border border-amber-700/40 rounded-sm"></div>
              </div>

              <div className="z-10">
                <div className="font-mono text-sm sm:text-base text-gray-200 tracking-widest mb-1">
                  •••• •••• •••• 2026
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>VALID THRU: 12/28</span>
                  <span className="text-[#00f0ff] font-bold">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Features (Right Column) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[#d4af37] font-bold text-xs uppercase tracking-wider mb-2">
                <CreditCard className="w-4 h-4" />
                <span>Global Virtual Payment Card</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h2 className="text-3xl font-black text-white">{VISA_CARD_SERVICE.name}</h2>
                <div className="px-4 py-1.5 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] font-black text-xl w-fit">
                  {VISA_CARD_SERVICE.priceBirr} BIRR
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
                {VISA_CARD_SERVICE.subtitle}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {VISA_CARD_SERVICE.features?.map((feat, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-[#04050a] border border-gray-800 flex items-center space-x-2 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Anti-Scam / Verification Badge */}
              <div className="p-3 rounded-xl bg-[#04050a] border border-red-500/20 text-xs text-gray-400 flex flex-wrap items-center gap-3 mb-6 font-medium">
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> Not Bybit
                </span>
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> Not Bitnob
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Direct & Clean Verification
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => onAddToCart(VISA_CARD_SERVICE)}
                className={`flex-1 py-3.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 transition-all ${
                  added
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-[#121524] text-gray-200 border border-gray-700 hover:border-[#d4af37] hover:text-[#d4af37]'
                }`}
              >
                {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
              </button>

              <a
                href={directTgLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#eab308] text-black font-extrabold text-xs flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order Visa Card Now</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
