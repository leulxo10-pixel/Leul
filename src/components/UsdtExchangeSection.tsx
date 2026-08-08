import React, { useState } from 'react';
import { ArrowRightLeft, MessageSquare, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { USDT_BUY_RATE, USDT_SELL_RATE, TELEGRAM_LINK } from '../data/servicesData';

export const UsdtExchangeSection: React.FC = () => {
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');
  const [amountUsdt, setAmountUsdt] = useState<number>(50);

  const activeRate = mode === 'buy' ? USDT_BUY_RATE : USDT_SELL_RATE;
  const totalBirr = Math.round(amountUsdt * activeRate);

  const tgMessage = `Hi @LeulXO47, I want to ${mode.toUpperCase()} ${amountUsdt} USDT at rate ${activeRate} BIRR/USDT (Total: ${totalBirr.toLocaleString()} BIRR).`;
  const directTgLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(tgMessage)}`;

  return (
    <section id="crypto" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <div className="p-8 sm:p-12 rounded-3xl bg-[#070b12] border-2 border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.15)] relative overflow-hidden">
        
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-gray-800 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>Crypto Exchange Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              USDT BUY & SELL 💱
            </h2>
          </div>

          <div className="flex items-center space-x-3 bg-[#030508] px-5 py-3 rounded-2xl border border-emerald-500/30">
            <div className="text-center border-r border-gray-800 pr-4">
              <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-black block">
                Buy Rate 🟢
              </span>
              <span className="text-xl font-black text-white">
                {USDT_BUY_RATE} <span className="text-[10px] text-gray-400">BIRR</span>
              </span>
            </div>
            <div className="text-center pl-1">
              <span className="text-[10px] text-rose-400 uppercase tracking-widest font-black block">
                Sell Rate 🔴
              </span>
              <span className="text-xl font-black text-white">
                {USDT_SELL_RATE} <span className="text-[10px] text-gray-400">BIRR</span>
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Buy/Sell Mode Selector */}
        <div className="flex p-1.5 rounded-2xl bg-[#030508] border border-gray-800 max-w-md mx-auto mb-8">
          <button
            onClick={() => setMode('buy')}
            className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${
              mode === 'buy'
                ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            I Want To BUY USDT ({USDT_BUY_RATE} BIRR) 🟢
          </button>
          <button
            onClick={() => setMode('sell')}
            className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${
              mode === 'sell'
                ? 'bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            I Want To SELL USDT ({USDT_SELL_RATE} BIRR) 🔴
          </button>
        </div>

        {/* Live Converter Calculator */}
        <div className="p-6 rounded-2xl bg-[#030508] border border-emerald-500/20 mb-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
            
            {/* USDT Input */}
            <div className="sm:col-span-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase block mb-1.5">
                {mode === 'buy' ? 'USDT Amount You Receive' : 'USDT Amount You Send'}
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="50000"
                  value={amountUsdt}
                  onChange={(e) => setAmountUsdt(Math.max(1, parseFloat(e.target.value) || 0))}
                  className="w-full px-4 py-3 bg-[#080c14] border border-emerald-500/40 rounded-xl text-emerald-400 font-black text-lg focus:outline-none focus:border-emerald-400"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                  USDT
                </span>
              </div>
            </div>

            {/* Exchange Icon */}
            <div className="sm:col-span-1 flex justify-center py-2 sm:py-0">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ArrowRightLeft className="w-5 h-5" />
              </div>
            </div>

            {/* Total Birr Output */}
            <div className="sm:col-span-2">
              <label className="text-[11px] font-bold text-gray-400 uppercase block mb-1.5">
                {mode === 'buy' ? 'Total BIRR To Pay' : 'Total BIRR You Receive'}
              </label>
              <div className="w-full px-4 py-3 bg-[#080c14] border border-gray-800 rounded-xl text-white font-black text-lg flex justify-between items-center">
                <span>{totalBirr.toLocaleString()}</span>
                <span className="text-xs font-bold text-gray-400">BIRR</span>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-xs text-gray-300">
          <div className="p-3 rounded-xl bg-[#030508] border border-gray-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Fast Wallet Transfer</span>
          </div>
          <div className="p-3 rounded-xl bg-[#030508] border border-gray-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>CBE, Telebirr & Local Banks</span>
          </div>
          <div className="p-3 rounded-xl bg-[#030508] border border-gray-800 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero Processing Delays</span>
          </div>
        </div>

        {/* Order Action Button */}
        <div className="max-w-2xl mx-auto">
          <a
            href={directTgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-extrabold text-sm sm:text-base shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>
              {mode === 'buy' ? 'BUY' : 'SELL'} {amountUsdt} USDT ({totalBirr.toLocaleString()} BIRR) via Telegram
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};
