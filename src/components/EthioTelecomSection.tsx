import React from 'react';
import { Wifi, PhoneCall, Zap, CheckCircle2, ShoppingCart, MessageSquare, Check, Sparkles } from 'lucide-react';
import { TELECOM_PACKAGES, TELEGRAM_LINK } from '../data/servicesData';
import { ServiceItem, CartItem } from '../types';

interface EthioTelecomSectionProps {
  onAddToCart: (item: ServiceItem) => void;
  cart: CartItem[];
}

export const EthioTelecomSection: React.FC<EthioTelecomSectionProps> = ({ onAddToCart, cart }) => {
  const isInCart = (id: string) => cart.some((c) => c.service.id === id);

  return (
    <section id="telecom" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-bold uppercase tracking-widest mb-3">
          <Wifi className="w-4 h-4 text-[#00f0ff]" />
          <span>High-Speed Telecom Access</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          Ethio Telecom <span className="text-[#00f0ff]">Unlimited Packages</span> 🌐
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm">
          Get high-speed unlimited monthly and weekly data packages instantly. Instant activation on your phone line!
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TELECOM_PACKAGES.map((pkg) => {
          const directTgLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(
            `Hi @LeulXO47, I want to order ${pkg.name} for ${pkg.priceBirr} BIRR.`
          )}`;
          const added = isInCart(pkg.id);

          return (
            <div
              key={pkg.id}
              className={`p-6 rounded-3xl bg-[#070912]/90 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative group ${
                pkg.popular
                  ? 'border-[#00f0ff]/60 shadow-[0_0_25px_rgba(0,240,255,0.15)]'
                  : 'border-gray-800/80 hover:border-[#00f0ff]/40'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-black text-[10px] font-black uppercase tracking-wider shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                    {pkg.iconName === 'PhoneCall' ? (
                      <PhoneCall className="w-6 h-6" />
                    ) : pkg.iconName === 'Zap' ? (
                      <Zap className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <Wifi className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-gray-900/80 px-2.5 py-1 rounded-lg border border-gray-800">
                    Ethio Telecom
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-xs mb-6 leading-relaxed">{pkg.subtitle}</p>

                {/* Features Checklist */}
                {pkg.features && (
                  <div className="space-y-2.5 mb-6">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="pt-4 border-t border-gray-800/80 flex justify-between items-center mb-5">
                  <span className="text-xs text-gray-400 uppercase font-semibold">Total Price</span>
                  <span className="text-2xl font-black text-[#d4af37]">
                    {pkg.priceBirr.toLocaleString()} <span className="text-xs text-gray-400 font-medium">BIRR</span>
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onAddToCart(pkg)}
                    className={`flex-1 py-3 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-1.5 transition-all ${
                      added
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-[#0f121e] text-gray-200 border border-gray-700 hover:border-[#00f0ff] hover:text-[#00f0ff]'
                    }`}
                  >
                    {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                    <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
                  </button>

                  <a
                    href={directTgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-black font-extrabold text-xs flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.3)] hover:scale-105 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
