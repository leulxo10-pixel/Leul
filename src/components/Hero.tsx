import React from 'react';
import { Search, ShieldCheck, Zap, Sparkles, TrendingUp, MessageSquare, Phone } from 'lucide-react';
import { TELEGRAM_LINK, TELEGRAM_USERNAME, PHONE_NUMBER } from '../data/servicesData';
import { ServiceCategory } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: any) => void;
  onNavigateSection: (sectionId: string, category?: ServiceCategory) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onNavigateSection,
}) => {
  const categorySectionMap: Record<string, { sectionId: string; category: ServiceCategory }> = {
    all: { sectionId: 'tiktok', category: 'all' },
    tiktok: { sectionId: 'tiktok', category: 'tiktok' },
    telecom: { sectionId: 'telecom', category: 'telecom' },
    telegram: { sectionId: 'services', category: 'telegram' },
    ai: { sectionId: 'services', category: 'ai' },
    visa: { sectionId: 'visa', category: 'visa' },
    usdt: { sectionId: 'crypto', category: 'usdt' },
  };

  const handleCategoryClick = (catId: string) => {
    const mapItem = categorySectionMap[catId];
    if (mapItem) {
      onNavigateSection(mapItem.sectionId, mapItem.category);
    } else {
      setSelectedCategory(catId as any);
    }
  };

  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Cyber Grid & Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-[#00f0ff]/15 via-[#3b82f6]/10 to-[#d4af37]/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#d4af37]/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#080b14]/90 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping"></span>
          <span className="text-xs font-bold tracking-wider text-[#d4af37] uppercase">
            Official LEUL XO BUSINESS Platform • Verified Delivery
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          <span className="text-white">LEUL XO </span>
          <span className="bg-gradient-to-r from-[#00f0ff] via-[#d4af37] to-[#3b82f6] bg-clip-text text-transparent">
            FUTURE DIGITAL
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto font-medium mb-8 leading-relaxed">
          Premium TikTok Coins 📱 • Ethio Telecom Unlimited Packages 🌐 • Telegram Premium ⭐ • Virtual Visa Cards 💳 • USDT Exchange 💱
        </p>

        {/* Interactive Search & Category Filter Bar */}
        <div className="max-w-3xl mx-auto mb-10 p-2 sm:p-3 rounded-2xl bg-[#090b12]/90 border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] backdrop-blur-2xl">
          <div className="relative mb-3 sm:mb-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00f0ff]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g., 500 Coins, Monthly Data, Telegram Premium, Visa, USDT)..."
              className="w-full pl-12 pr-4 py-3 bg-[#05060a] border border-[#00f0ff]/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00f0ff] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white px-2 py-1 rounded bg-gray-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-semibold">
            {[
              { id: 'all', label: 'All Services', icon: '⚡' },
              { id: 'tiktok', label: 'TikTok Coins 🟡', icon: '📱' },
              { id: 'telecom', label: 'Unlimited Data 🌐', icon: '📡' },
              { id: 'telegram', label: 'TG Premium ⭐', icon: '⭐' },
              { id: 'ai', label: 'Gemini Pro 🤖', icon: '🧠' },
              { id: 'visa', label: 'Visa Card 💳', icon: '💳' },
              { id: 'usdt', label: 'USDT (181 ETB) 💱', icon: '💵' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 border cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#00f0ff] text-black font-extrabold border-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                    : 'bg-[#0e111a] text-gray-300 border-gray-800 hover:border-[#00f0ff]/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-black font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-[1.02] transition-all flex items-center justify-center space-x-3"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Instant Telegram Order (@LeulXO47)</span>
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#090b12] border border-[#d4af37]/50 text-[#d4af37] font-extrabold text-sm sm:text-base hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all flex items-center justify-center space-x-3 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <Phone className="w-5 h-5" />
            <span>Call Direct ({PHONE_NUMBER})</span>
          </a>
        </div>

        {/* Platform Trust Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#080910]/80 border border-[#00f0ff]/20 backdrop-blur-xl flex items-center justify-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-[#00f0ff]" />
            <div className="text-left">
              <div className="text-xs font-bold text-gray-200">100% Safe Service</div>
              <div className="text-[11px] text-gray-400">Guaranteed Account Security</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#080910]/80 border border-[#d4af37]/20 backdrop-blur-xl flex items-center justify-center space-x-3">
            <Zap className="w-6 h-6 text-[#d4af37]" />
            <div className="text-left">
              <div className="text-xs font-bold text-gray-200">Instant Activation</div>
              <div className="text-[11px] text-gray-400">5-15 Minutes Processing</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[#080910]/80 border border-emerald-500/20 backdrop-blur-xl flex items-center justify-center space-x-3">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <div className="text-left">
              <div className="text-xs font-bold text-gray-200">Live Rate Transparency</div>
              <div className="text-[11px] text-gray-400">USDT @ 181 BIRR • Best Market</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
