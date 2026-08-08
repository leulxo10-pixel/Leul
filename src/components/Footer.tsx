import React from 'react';
import { MessageSquare, Phone, ShieldCheck, Heart } from 'lucide-react';
import { TELEGRAM_LINK, TELEGRAM_USERNAME, PHONE_NUMBER } from '../data/servicesData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/80 bg-[#030408] py-12 px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div>
          <div className="mb-3 flex justify-center md:justify-start">
            <BrandLogo size="md" showText={true} />
          </div>
          <p className="text-xs text-gray-500 max-w-sm">
            Premium Digital Services, TikTok Coins, Ethio Telecom Data Packages, Telegram Premium, Virtual Visa Cards & USDT Exchange.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs font-bold">
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#0a0d18] border border-[#00f0ff]/30 text-gray-200 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
            <span>Telegram: @{TELEGRAM_USERNAME}</span>
          </a>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="px-4 py-2.5 rounded-xl bg-[#0a0d18] border border-[#d4af37]/30 text-gray-200 hover:text-[#d4af37] hover:border-[#d4af37] transition-all flex items-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Phone: {PHONE_NUMBER}</span>
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-900/80 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-600 gap-2">
        <div>LEUL XO BUSINESS © {new Date().getFullYear()}. All rights reserved.</div>
        <div className="flex items-center space-x-1">
          <span>Powered with</span>
          <Heart className="w-3 h-3 text-red-500 inline fill-red-500" />
          <span>for Ethiopian Digital Excellence</span>
        </div>
      </div>
    </footer>
  );
};
