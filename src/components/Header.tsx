import React, { useState } from 'react';
import { MessageSquare, Phone, ShoppingCart, Menu, X, Sparkles } from 'lucide-react';
import { TELEGRAM_LINK, PHONE_NUMBER } from '../data/servicesData';
import { CartItem, ServiceCategory } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string, category?: ServiceCategory) => void;
}

export const Header: React.FC<HeaderProps> = ({ cart, onOpenCart, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (e: React.MouseEvent, sectionId: string, category?: ServiceCategory) => {
    e.preventDefault();
    onNavigateSection(sectionId, category);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-[#00f0ff]/15 shadow-[0_4px_30px_rgba(0,240,255,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group cursor-pointer"
        >
          <BrandLogo size="md" showText={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <a
            href="#tiktok"
            onClick={(e) => handleNavClick(e, 'tiktok', 'tiktok')}
            className="text-gray-300 hover:text-[#d4af37] transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <span>TikTok Coins</span>
          </a>
          <a
            href="#telecom"
            onClick={(e) => handleNavClick(e, 'telecom', 'telecom')}
            className="text-gray-300 hover:text-[#00f0ff] transition-colors cursor-pointer"
          >
            Unlimited Data
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services', 'telegram')}
            className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
          >
            TG Premium & AI
          </a>
          <a
            href="#visa"
            onClick={(e) => handleNavClick(e, 'visa', 'visa')}
            className="text-gray-300 hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            Visa Card
          </a>
          <a
            href="#crypto"
            onClick={(e) => handleNavClick(e, 'crypto', 'usdt')}
            className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            USDT Exchange
          </a>
          <a
            href="#calculator"
            onClick={(e) => handleNavClick(e, 'calculator', 'tiktok')}
            className="text-gray-300 hover:text-[#00f0ff] transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Calculator</span>
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-[#0e1017] border border-[#00f0ff]/30 text-gray-200 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center space-x-2"
            title="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5 text-[#00f0ff]" />
            <span className="hidden sm:inline text-xs font-bold text-gray-200">Cart</span>
            {totalCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-black text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-bounce">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Direct Telegram Button */}
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff]/20 to-[#d4af37]/20 border border-[#00f0ff]/40 text-[#00f0ff] text-xs font-bold hover:border-[#00f0ff] transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
            <span>Telegram</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#0e1017] border border-gray-800 text-gray-300 hover:text-[#00f0ff]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07080e]/95 border-b border-[#00f0ff]/20 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-gray-800/60 text-xs font-semibold">
            <a
              href="#tiktok"
              onClick={(e) => handleNavClick(e, 'tiktok', 'tiktok')}
              className="p-2.5 rounded-xl bg-[#0f111a] text-[#d4af37] border border-[#d4af37]/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>📱 TikTok Coins</span>
            </a>
            <a
              href="#telecom"
              onClick={(e) => handleNavClick(e, 'telecom', 'telecom')}
              className="p-2.5 rounded-xl bg-[#0f111a] text-[#00f0ff] border border-[#00f0ff]/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>🌐 Unlimited Data</span>
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services', 'telegram')}
              className="p-2.5 rounded-xl bg-[#0f111a] text-blue-400 border border-blue-500/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>⭐ TG Premium & AI</span>
            </a>
            <a
              href="#visa"
              onClick={(e) => handleNavClick(e, 'visa', 'visa')}
              className="p-2.5 rounded-xl bg-[#0f111a] text-[#d4af37] border border-[#d4af37]/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>💳 Visa Card</span>
            </a>
            <a
              href="#crypto"
              onClick={(e) => handleNavClick(e, 'crypto', 'usdt')}
              className="p-2.5 rounded-xl bg-[#0f111a] text-emerald-400 border border-emerald-500/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>💱 USDT Buy/Sell</span>
            </a>
            <a
              href="#calculator"
              onClick={(e) => handleNavClick(e, 'calculator', 'tiktok')}
              className="p-2.5 rounded-xl bg-[#0f111a] text-[#00f0ff] border border-[#00f0ff]/20 flex items-center space-x-2 cursor-pointer"
            >
              <span>🧮 Live Calculator</span>
            </a>
          </div>

          <div className="pt-2 flex gap-2">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-black font-extrabold text-xs text-center flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact @LeulXO47</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="px-4 py-3 rounded-xl bg-[#0f111a] border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold flex items-center justify-center"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
