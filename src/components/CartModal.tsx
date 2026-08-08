import React, { useState } from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { TELEGRAM_LINK, TELEGRAM_USERNAME } from '../data/servicesData';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const grandTotal = cart.reduce((sum, item) => sum + item.service.priceBirr * item.quantity, 0);

  // Formatted combined order text
  const orderSummaryText = `Hi @${TELEGRAM_USERNAME}, I would like to place an order for the following item(s):\n\n` +
    cart.map((c, i) => `${i + 1}. ${c.service.name} x${c.quantity} = ${(c.service.priceBirr * c.quantity).toLocaleString()} BIRR`).join('\n') +
    `\n\n💰 Total Amount: ${grandTotal.toLocaleString()} BIRR\n\nPlease confirm availability and payment details. Thanks!`;

  const telegramOrderLink = `${TELEGRAM_LINK}?text=${encodeURIComponent(orderSummaryText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-md h-full bg-[#080912] border-l border-[#00f0ff]/30 p-6 flex flex-col justify-between shadow-2xl relative overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5 text-[#00f0ff]" />
              <h3 className="text-lg font-black text-white">Your Order Cart</h3>
              <span className="text-xs bg-[#00f0ff]/20 text-[#00f0ff] font-bold px-2 py-0.5 rounded-full border border-[#00f0ff]/30">
                {cart.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          {cart.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-900/80 border border-gray-800 mx-auto flex items-center justify-center text-gray-500 mb-4">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <p className="text-gray-400 text-sm font-semibold mb-2">Your cart is empty</p>
              <p className="text-gray-600 text-xs max-w-xs mx-auto">
                Select TikTok coins, unlimited telecom packages, Telegram Premium or Visa cards to add them here!
              </p>
            </div>
          ) : (
            <div className="py-4 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.service.id}
                  className="p-3.5 rounded-2xl bg-[#030408] border border-gray-800 flex items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <div className="text-xs font-bold text-white line-clamp-1">{item.service.name}</div>
                    <div className="text-xs font-bold text-[#d4af37]">
                      {item.service.priceBirr.toLocaleString()} BIRR
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-1.5 bg-[#0f111d] p-1 rounded-xl border border-gray-800">
                    <button
                      onClick={() => onUpdateQuantity(item.service.id, -1)}
                      className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-black text-white px-1.5">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.service.id, 1)}
                      className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.service.id)}
                    className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="flex justify-end pt-2">
                <button
                  onClick={onClearCart}
                  className="text-[11px] text-gray-500 hover:text-red-400 underline font-medium"
                >
                  Clear all items
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="pt-4 border-t border-gray-800 space-y-3">
            <div className="flex justify-between items-center bg-[#030408] p-3.5 rounded-2xl border border-[#d4af37]/30">
              <span className="text-xs text-gray-400 uppercase font-semibold">Grand Total</span>
              <span className="text-2xl font-black text-[#d4af37]">
                {grandTotal.toLocaleString()} BIRR
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="px-3.5 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-300 hover:text-white text-xs font-bold flex items-center justify-center space-x-1"
                title="Copy order message text"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <a
                href={telegramOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#3b82f6] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:scale-[1.01] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Order to @LeulXO47</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
