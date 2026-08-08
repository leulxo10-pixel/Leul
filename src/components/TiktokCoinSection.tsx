import React, { useState } from 'react';
import { Coins, Sparkles, ShoppingCart, MessageSquare, Flame, Check } from 'lucide-react';
import { TIKTOK_COINS, TELEGRAM_LINK } from '../data/servicesData';
import { ServiceItem, CartItem } from '../types';

interface TiktokCoinSectionProps {
  onAddToCart: (item: ServiceItem) => void;
  cart: CartItem[];
}

export const TiktokCoinSection: React.FC<TiktokCoinSectionProps> = ({ onAddToCart, cart }) => {
  const [customCoins, setCustomCoins] = useState<number>(1500);

  // Custom Coin Price Calculation helper
  // Base rate logic based on tiered rates
  const calculateCustomPrice = (coins: number) => {
    if (coins <= 0) return 0;
    if (coins <= 300) return Math.round(coins * 2.8);
    if (coins <= 1000) return Math.round(coins * 2.8);
    if (coins <= 3000) return Math.round(coins * 2.3);
    if (coins <= 7000) return Math.round(coins * 2.1);
    return Math.round(coins * 2.5);
  };

  const estimatedBirr = calculateCustomPrice(customCoins);
  const customTgLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(
    `Hi @LeulXO47, I want to order a custom amount of ${customCoins.toLocaleString()} TikTok Coins for approximately ${estimatedBirr.toLocaleString()} BIRR.`
  )}`;

  const isInCart = (id: string) => cart.some((c) => c.service.id === id);

  return (
    <section id="tiktok" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-3">
          <Coins className="w-4 h-4 text-[#d4af37]" />
          <span>TikTok Coins HQ</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
          TikTok Coin <span className="text-[#d4af37]">For Sell</span> 📱
        </h2>
        <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-xs sm:text-sm mb-3">
          🚨 Login Required 🔔 (100% Safe Account Processing)
        </div>
        <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm">
          Select standard coin bundles or use our live interactive calculator below for custom coin amounts!
        </p>
      </div>

      {/* Interactive Custom TikTok Coin Calculator */}
      <div id="calculator" className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#090b14] border-2 border-[#d4af37]/40 shadow-[0_0_35px_rgba(212,175,55,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-bl-full pointer-events-none blur-2xl"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <div className="flex items-center space-x-2 text-[#d4af37] font-bold text-sm uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Custom Coin Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Need A Specific Coin Quantity?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              Adjust the slider or type any custom number of TikTok coins to estimate your price instantly.
            </p>

            {/* Slider and Input */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-300">Coin Amount:</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="50"
                    max="50000"
                    value={customCoins}
                    onChange={(e) => setCustomCoins(Math.max(50, parseInt(e.target.value) || 0))}
                    className="w-28 px-3 py-1.5 bg-[#05060b] border border-[#d4af37]/50 rounded-lg text-[#d4af37] font-black text-right text-base focus:outline-none focus:border-[#d4af37]"
                  />
                  <span className="text-xs font-bold text-gray-400">Coins</span>
                </div>
              </div>

              <input
                type="range"
                min="100"
                max="20000"
                step="100"
                value={customCoins}
                onChange={(e) => setCustomCoins(parseInt(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-gray-500 font-semibold">
                <span>100 Coins</span>
                <span>5,000 Coins</span>
                <span>10,000 Coins</span>
                <span>20,000+ Coins</span>
              </div>
            </div>
          </div>

          {/* Calculator Output Card */}
          <div className="w-full lg:w-80 p-6 rounded-2xl bg-[#040508] border border-[#d4af37]/30 text-center flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold block mb-1">
              Estimated Total
            </span>
            <div className="text-3xl sm:text-4xl font-black text-[#d4af37] mb-1">
              {estimatedBirr.toLocaleString()} <span className="text-sm font-bold text-gray-300">BIRR</span>
            </div>
            <div className="text-[11px] text-emerald-400 font-bold mb-5 flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              <span>Includes Special Rate Discount</span>
            </div>

            <a
              href={customTgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#eab308] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order Custom Coins via DM</span>
            </a>
          </div>
        </div>
      </div>

      {/* Standard Coin Bundles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {TIKTOK_COINS.map((item) => {
          const directTgLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(
            `Hi @LeulXO47, I want to buy ${item.name} for ${item.priceBirr} BIRR.`
          )}`;
          const added = isInCart(item.id);

          return (
            <div
              key={item.id}
              className={`p-5 rounded-2xl bg-[#080911]/90 border transition-all duration-300 hover:-translate-y-1 relative group flex flex-col justify-between ${
                item.popular
                  ? 'border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                  : 'border-gray-800/80 hover:border-[#d4af37]/40'
              }`}
            >
              {item.badge && (
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#d4af37] text-black text-[10px] font-extrabold uppercase tracking-wider shadow-[0_0_10px_rgba(212,175,55,0.6)]">
                  {item.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                      <Coins className="w-4 h-4" />
                    </div>
                    <span className="text-white font-black text-base">{item.name}</span>
                  </div>
                </div>

                <div className="text-2xl font-black text-[#d4af37] mb-4">
                  {item.priceBirr.toLocaleString()} <span className="text-xs font-bold text-gray-400">BIRR</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2 border-t border-gray-800/60">
                <button
                  onClick={() => onAddToCart(item)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-1.5 transition-all ${
                    added
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-[#101320] text-gray-200 border border-gray-700 hover:border-[#d4af37] hover:text-[#d4af37]'
                  }`}
                >
                  {added ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
                  <span>{added ? 'In Cart' : 'Add Cart'}</span>
                </button>

                <a
                  href={directTgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-[#d4af37] text-black font-extrabold text-xs hover:bg-[#eab308] transition-all flex items-center justify-center"
                  title="Buy via Telegram"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Safety Notice Footer Banner */}
      <div className="mt-8 p-5 rounded-2xl bg-[#080a12] border border-[#d4af37]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <div className="text-sm font-bold text-gray-200">
            ✨ ሁሉም TikTok Coin Services 100% safe ናቸዉ 🫠
          </div>
          <div className="text-xs text-[#00f0ff] font-semibold mt-0.5">
            🔨 ከዚህም በተጨማሪ የፈለጉትን መጠን COIN ORDER ማረግ ትችላላችሁ 💯
          </div>
        </div>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#eab308] text-black font-extrabold text-xs flex items-center space-x-2 whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.3)]"
        >
          <MessageSquare className="w-4 h-4" />
          <span>DM @LeulXO47 Now</span>
        </a>
      </div>
    </section>
  );
};
