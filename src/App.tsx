import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TiktokCoinSection } from './components/TiktokCoinSection';
import { EthioTelecomSection } from './components/EthioTelecomSection';
import { PremiumServicesSection } from './components/PremiumServicesSection';
import { VisaCardSection } from './components/VisaCardSection';
import { UsdtExchangeSection } from './components/UsdtExchangeSection';
import { CartModal } from './components/CartModal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

import { ServiceItem, CartItem, ServiceCategory } from './types';
import {
  TIKTOK_COINS,
  TELECOM_PACKAGES,
  TELEGRAM_PREMIUM_OPTIONS,
  AI_SERVICES,
  VISA_CARD_SERVICE,
  TELEGRAM_LINK,
  PHONE_NUMBER,
} from './data/servicesData';
import { Check, MessageSquare, Phone, Sparkles, Search, ShoppingCart } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('leul_xo_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('leul_xo_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Show quick toast notification
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add item to cart
  const handleAddToCart = (item: ServiceItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((c) => c.service.id === item.id);
      if (existing) {
        return prevCart.map((c) =>
          c.service.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prevCart, { service: item, quantity: 1 }];
    });
    triggerToast(`Added ${item.name} to cart!`);
  };

  // Update quantity in cart
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((c) => {
          if (c.service.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove single item
  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((c) => c.service.id !== id));
  };

  // Clear cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Handle smooth navigation to specific section
  const handleNavigateToSection = (sectionId: string, category?: ServiceCategory) => {
    // Clear search if active
    setSearchQuery('');

    if (category) {
      setSelectedCategory(category);
    } else {
      // Map sectionId to appropriate category if needed
      if (sectionId === 'tiktok' || sectionId === 'calculator') {
        if (selectedCategory !== 'all' && selectedCategory !== 'tiktok') {
          setSelectedCategory('all');
        }
      } else if (sectionId === 'telecom') {
        if (selectedCategory !== 'all' && selectedCategory !== 'telecom') {
          setSelectedCategory('all');
        }
      } else if (sectionId === 'services') {
        if (selectedCategory !== 'all' && selectedCategory !== 'telegram' && selectedCategory !== 'ai') {
          setSelectedCategory('all');
        }
      } else if (sectionId === 'visa') {
        if (selectedCategory !== 'all' && selectedCategory !== 'visa') {
          setSelectedCategory('all');
        }
      } else if (sectionId === 'crypto') {
        if (selectedCategory !== 'all' && selectedCategory !== 'usdt') {
          setSelectedCategory('all');
        }
      }
    }

    // Scroll to section after DOM updates
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -90; // header offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 60);
  };

  // Search matching items when searchQuery is active
  const allServices: ServiceItem[] = [
    ...TIKTOK_COINS,
    ...TELECOM_PACKAGES,
    ...TELEGRAM_PREMIUM_OPTIONS,
    ...AI_SERVICES,
    VISA_CARD_SERVICE,
  ];

  const searchResults = searchQuery.trim()
    ? allServices.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (s.subtitle && s.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
          s.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-[#050508] text-gray-100 font-sans selection:bg-[#00f0ff] selection:text-black relative">
      
      {/* Navbar */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={selectedCategory}
        onNavigateSection={handleNavigateToSection}
      />

      {/* Hero Header */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onNavigateSection={handleNavigateToSection}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 px-4 py-3 rounded-xl bg-[#00f0ff] text-black font-extrabold text-xs shadow-[0_0_20px_rgba(0,240,255,0.6)] flex items-center space-x-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Search Results Display View if search active */}
      {searchQuery.trim() !== '' ? (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-white flex items-center space-x-2">
              <Search className="w-5 h-5 text-[#00f0ff]" />
              <span>Search Results for "{searchQuery}"</span>
            </h2>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#00f0ff] underline font-bold"
            >
              Clear Search
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-[#080912] border border-gray-800 text-gray-400">
              No matching services found. Try searching for "coins", "unlimited", "telegram", "visa", or "usdt".
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((item) => {
                const directTgLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(
                  `Hi @LeulXO47, I want to order ${item.name} for ${item.priceBirr} BIRR.`
                )}`;
                const added = cart.some((c) => c.service.id === item.id);

                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-[#080912] border border-gray-800 hover:border-[#00f0ff]/50 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#00f0ff] uppercase tracking-wider block mb-1">
                        Category: {item.category}
                      </span>
                      <h3 className="text-base font-bold text-white mb-2">{item.name}</h3>
                      {item.subtitle && <p className="text-xs text-gray-400 mb-4">{item.subtitle}</p>}
                    </div>

                    <div>
                      <div className="text-xl font-black text-[#d4af37] mb-3">
                        {item.priceBirr.toLocaleString()} BIRR
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 ${
                            added
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                              : 'bg-[#101322] text-gray-200 border border-gray-700 hover:border-[#00f0ff]'
                          }`}
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>{added ? 'In Cart' : 'Add to Cart'}</span>
                        </button>

                        <a
                          href={directTgLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2.5 rounded-xl bg-[#00f0ff] text-black font-extrabold text-xs flex items-center justify-center"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      ) : (
        /* Regular Main Sections */
        <main className="space-y-12">
          {(selectedCategory === 'all' || selectedCategory === 'tiktok') && (
            <TiktokCoinSection onAddToCart={handleAddToCart} cart={cart} />
          )}

          {(selectedCategory === 'all' || selectedCategory === 'telecom') && (
            <EthioTelecomSection onAddToCart={handleAddToCart} cart={cart} />
          )}

          {(selectedCategory === 'all' || selectedCategory === 'telegram' || selectedCategory === 'ai') && (
            <PremiumServicesSection onAddToCart={handleAddToCart} cart={cart} />
          )}

          {(selectedCategory === 'all' || selectedCategory === 'visa') && (
            <VisaCardSection onAddToCart={handleAddToCart} cart={cart} />
          )}

          {(selectedCategory === 'all' || selectedCategory === 'usdt') && (
            <UsdtExchangeSection />
          )}

          <FaqSection />
        </main>
      )}

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Quick Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-2xl bg-[#00f0ff] text-black flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:scale-110 transition-transform animate-bounce"
          title="Direct Telegram Order (@LeulXO47)"
        >
          <MessageSquare className="w-7 h-7" />
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="w-14 h-14 rounded-2xl bg-emerald-500 text-black flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 transition-transform"
          title={`Call Direct (${PHONE_NUMBER})`}
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
