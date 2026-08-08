import React from 'react';
import { Star, Cpu, CheckCircle2, ShoppingCart, MessageSquare, Check, Sparkles } from 'lucide-react';
import { TELEGRAM_PREMIUM_OPTIONS, AI_SERVICES, TELEGRAM_LINK } from '../data/servicesData';
import { ServiceItem, CartItem } from '../types';

interface PremiumServicesSectionProps {
  onAddToCart: (item: ServiceItem) => void;
  cart: CartItem[];
}

export const PremiumServicesSection: React.FC<PremiumServicesSectionProps> = ({ onAddToCart, cart }) => {
  const isInCart = (id: string) => cart.some((c) => c.service.id === id);

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
          <Star className="w-4 h-4 text-blue-400" />
          <span>Premium Subscriptions</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          Telegram Premium & <span className="text-[#00f0ff]">AI Workspace</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm">
          Unlock maximum upload limits, high speed downloads, exclusive badges, and long-term Gemini Pro workspace access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Gemini Pro AI Workspace Box */}
        {AI_SERVICES.map((aiService) => {
          const directTgLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(
            `Hi @LeulXO47, I want to order ${aiService.name} for ${aiService.priceBirr} BIRR.`
          )}`;
          const added = isInCart(aiService.id);

          return (
            <div
              key={aiService.id}
              className="p-8 rounded-3xl bg-[#090a14] border-2 border-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#00f0ff]/10 rounded-bl-full pointer-events-none blur-xl"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00f0ff]/15 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 uppercase tracking-widest">
                    {aiService.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2">{aiService.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  {aiService.subtitle}
                </p>

                {aiService.features && (
                  <div className="space-y-3 mb-8 bg-[#04050a] p-4 rounded-2xl border border-gray-800">
                    {aiService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <div className="pt-4 border-t border-gray-800 flex justify-between items-center mb-6">
                  <span className="text-xs text-gray-400 uppercase font-semibold">18 Months Price</span>
                  <span className="text-3xl font-black text-[#d4af37]">
                    {aiService.priceBirr.toLocaleString()} <span className="text-xs text-gray-400 font-medium">BIRR</span>
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onAddToCart(aiService)}
                    className={`flex-1 py-3.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 transition-all ${
                      added
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-[#101322] text-gray-200 border border-gray-700 hover:border-[#00f0ff] hover:text-[#00f0ff]'
                    }`}
                  >
                    {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                    <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
                  </button>

                  <a
                    href={directTgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-black font-extrabold text-xs flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:scale-[1.02] transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Order Gemini Pro</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Telegram Premium Tier Options */}
        <div className="p-8 rounded-3xl bg-[#090a14] border-2 border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Star className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-500/20 text-blue-400 border border-blue-500/40 uppercase tracking-widest">
                Official Telegram
              </span>
            </div>

            <h3 className="text-2xl font-black text-white mb-2">TELEGRAM PREMIUM ⭐</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              Choose your preferred duration option below:
            </p>

            <div className="space-y-3 mb-6">
              {TELEGRAM_PREMIUM_OPTIONS.map((tgOption) => {
                const added = isInCart(tgOption.id);
                const directTgLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(
                  `Hi @LeulXO47, I want to order ${tgOption.name} for ${tgOption.priceBirr} BIRR.`
                )}`;

                return (
                  <div
                    key={tgOption.id}
                    className="p-3.5 rounded-2xl bg-[#04050a] border border-gray-800 hover:border-blue-500/50 flex items-center justify-between transition-all"
                  >
                    <div>
                      <div className="text-sm font-bold text-white flex items-center space-x-1.5">
                        <span>{tgOption.name}</span>
                      </div>
                      {tgOption.badge && (
                        <span className="text-[10px] text-blue-400 font-semibold">{tgOption.badge}</span>
                      )}
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-base font-black text-[#d4af37]">
                        {tgOption.priceBirr.toLocaleString()} ETB
                      </span>

                      <button
                        onClick={() => onAddToCart(tgOption)}
                        className={`p-2 rounded-xl text-xs font-bold transition-all ${
                          added
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                        }`}
                        title="Add to Cart"
                      >
                        {added ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                      </button>

                      <a
                        href={directTgLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-blue-500 text-black font-extrabold text-xs hover:bg-blue-400 transition-all"
                        title="Order via DM"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 text-xs text-gray-400 flex justify-between items-center">
            <span>✨ 100% Guaranteed Gift / Direct Setup</span>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-bold hover:underline"
            >
              Questions? Ask @LeulXO47
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
