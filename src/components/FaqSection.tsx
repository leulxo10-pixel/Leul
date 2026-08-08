import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, Zap, Phone, MessageSquare, Award } from 'lucide-react';
import { FAQ_LIST, TELEGRAM_LINK, TELEGRAM_USERNAME, PHONE_NUMBER } from '../data/servicesData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-3">
          <HelpCircle className="w-4 h-4 text-[#d4af37]" />
          <span>Support & Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Frequently Asked <span className="text-[#d4af37]">Questions</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-xs sm:text-sm">
          Everything you need to know about our services, delivery times, and safety guarantees.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3 mb-16">
        {FAQ_LIST.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-[#070810] border border-gray-800 hover:border-[#d4af37]/30 transition-all overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-bold text-sm sm:text-base text-gray-200 flex justify-between items-center gap-4 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-gray-800/50 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Why Choose LEUL XO Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#080a12] border border-[#00f0ff]/20 text-center hover:border-[#00f0ff]/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 mx-auto flex items-center justify-center text-[#00f0ff] mb-3">
            <Zap className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-white mb-1">Fast Delivery</h4>
          <p className="text-gray-400 text-xs">Quick 5-15 min turnaround times on all packages.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#080a12] border border-[#d4af37]/20 text-center hover:border-[#d4af37]/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 mx-auto flex items-center justify-center text-[#d4af37] mb-3">
            <Award className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-white mb-1">Trusted Platform</h4>
          <p className="text-gray-400 text-xs">Verified service reputation in digital telecom sales.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#080a12] border border-emerald-500/20 text-center hover:border-emerald-500/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mx-auto flex items-center justify-center text-emerald-400 mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-white mb-1">100% Safe</h4>
          <p className="text-gray-400 text-xs">Confidential and secure order processing.</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#080a12] border border-blue-500/20 text-center hover:border-blue-500/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 mx-auto flex items-center justify-center text-blue-400 mb-3">
            <Phone className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-white mb-1">24/7 Assistance</h4>
          <p className="text-gray-400 text-xs">Direct human support on Telegram and phone.</p>
        </div>
      </div>

    </section>
  );
};
