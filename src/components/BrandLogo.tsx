import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  if (size === 'hero') {
    return (
      <div className={`relative max-w-xl mx-auto ${className}`}>
        {/* Glow Aura */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/30 via-[#3b82f6]/20 to-[#d4af37]/30 rounded-3xl blur-3xl -z-10 animate-pulse"></div>

        {/* Hero Logo Banner Emblem (Replicating User Image Design) */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0a1224] via-[#060814] to-[#03040a] border-2 border-[#00f0ff]/50 shadow-[0_0_50px_rgba(0,240,255,0.3)] overflow-hidden">
          
          {/* Background Graphical Elements */}
          <div className="absolute top-2 left-4 w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] text-xs font-black rotate-12 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            BNB 🪙
          </div>

          <div className="absolute top-2 right-4 w-11 h-11 rounded-full bg-[#00f0ff]/20 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] text-xs font-black -rotate-12 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            TON 💎
          </div>

          <div className="absolute bottom-3 left-6 px-2.5 py-1 rounded-lg bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 font-black text-[10px] shadow-[0_0_10px_rgba(234,179,8,0.5)]">
            UC 🎫
          </div>

          <div className="absolute bottom-3 right-6 text-xl animate-bounce">
            💎
          </div>

          {/* Main Glowing 3D Icy Neon Title */}
          <div className="py-6 text-center">
            <h1 className="text-3xl sm:text-5xl font-black italic tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-[#80f3ff] to-[#00a8ff] drop-shadow-[0_4px_12px_rgba(0,240,255,0.8)]">
              LEUL XO
            </h1>
            <h2 className="text-2xl sm:text-4xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#e6f9ff] via-[#d4af37] to-[#997a15] drop-shadow-[0_4px_10px_rgba(212,175,55,0.7)] mt-1">
              BUSINESS
            </h2>
          </div>

          <div className="flex items-center justify-center space-x-2 text-[11px] font-extrabold uppercase tracking-widest text-[#00f0ff] pt-2 border-t border-[#00f0ff]/20">
            <span>TikTok Coins</span>
            <span>•</span>
            <span>Unlimited Data</span>
            <span>•</span>
            <span>USDT Exchange</span>
          </div>
        </div>
      </div>
    );
  }

  const sizeDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  }[size] || 'w-11 h-11';

  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      {/* Metallic Cyber Shield Icon */}
      <div className={`relative ${sizeDimensions} rounded-2xl bg-gradient-to-br from-[#00f0ff] via-[#3b82f6] to-[#d4af37] p-[2px] shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-all duration-300 shrink-0`}>
        <div className="w-full h-full bg-[#060812] rounded-[14px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/20 via-transparent to-[#d4af37]/20"></div>
          <span className="font-black italic text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-white to-[#d4af37] text-lg sm:text-xl drop-shadow-[0_2px_8px_rgba(0,240,255,0.8)]">
            LX
          </span>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center space-x-1.5">
            <span className="font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#80f3ff] to-[#00f0ff] text-base sm:text-lg drop-shadow-[0_2px_4px_rgba(0,240,255,0.3)]">
              LEUL XO
            </span>
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 uppercase tracking-widest shadow-[0_0_8px_rgba(212,175,55,0.3)]">
              BUSINESS
            </span>
          </div>
          <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">
            Digital & Telecom Platform
          </span>
        </div>
      )}
    </div>
  );
};
