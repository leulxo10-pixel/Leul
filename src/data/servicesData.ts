import { ServiceItem } from '../types';

export const TELEGRAM_USERNAME = 'LeulXO47';
export const TELEGRAM_LINK = 'https://t.me/LeulXO47';
export const PHONE_NUMBER = '0942695197';
export const USDT_BUY_RATE = 181; // Birr per 1 USDT (Buy Rate)
export const USDT_SELL_RATE = 194; // Birr per 1 USDT (Sell Rate)
export const USDT_RATE = 181; // Default reference rate

export const TIKTOK_COINS: ServiceItem[] = [
  { id: 'tt-100', category: 'tiktok', name: '100 TikTok Coins 🟡', priceBirr: 320, iconName: 'Coins', unit: 'coins' },
  { id: 'tt-200', category: 'tiktok', name: '200 TikTok Coins 🟡', priceBirr: 550, iconName: 'Coins', unit: 'coins' },
  { id: 'tt-300', category: 'tiktok', name: '300 TikTok Coins 🟡', priceBirr: 750, iconName: 'Coins', unit: 'coins' },
  { id: 'tt-500', category: 'tiktok', name: '500 TikTok Coins 🟡', priceBirr: 1400, popular: true, badge: 'Popular', iconName: 'Coins', unit: 'coins' },
  { id: 'tt-700', category: 'tiktok', name: '700 TikTok Coins 🟡', priceBirr: 1950, iconName: 'Coins', unit: 'coins' },
  { id: 'tt-1000', category: 'tiktok', name: '1,000 TikTok Coins 🟡', priceBirr: 2800, popular: true, badge: 'Best Seller', iconName: 'Coins', unit: 'coins' },
  { id: 'tt-2000', category: 'tiktok', name: '2,000 TikTok Coins 🟡', priceBirr: 5000, iconName: 'Coins', unit: 'coins' },
  { id: 'tt-3000', category: 'tiktok', name: '3,000 TikTok Coins 🟡', priceBirr: 6500, iconName: 'Coins', unit: 'coins' },
  { id: 'tt-5000', category: 'tiktok', name: '5,000 TikTok Coins 🟡', priceBirr: 10500, popular: true, badge: 'PRO Deal', iconName: 'Coins', unit: 'coins' },
  { id: 'tt-7000', category: 'tiktok', name: '7,000 TikTok Coins 🟡', priceBirr: 14500, iconName: 'Coins', unit: 'coins' },
  { id: 'tt-10000', category: 'tiktok', name: '10,000 TikTok Coins 🟡', priceBirr: 25000, badge: 'VIP Bulk', iconName: 'Coins', unit: 'coins' },
];

export const TELECOM_PACKAGES: ServiceItem[] = [
  {
    id: 'ethio-month-card',
    category: 'telecom',
    name: 'Monthly Unlimited Data + 290 Birr Card',
    subtitle: 'Full monthly high-speed data plus 290 Birr phone card bonus.',
    priceBirr: 1850,
    popular: true,
    badge: 'Best Value',
    iconName: 'Wifi',
    features: ['Unlimited Monthly Data', '290 Birr Bonus Card Included', '100% Safe & Instant Activation'],
  },
  {
    id: 'ethio-month-data',
    category: 'telecom',
    name: 'Monthly Unlimited Data',
    subtitle: 'Standard high-speed monthly unlimited internet package.',
    priceBirr: 1750,
    iconName: 'Wifi',
    features: ['30 Days Unlimited High Speed Data', 'No Bandwidth Throttling', 'Instant Activation'],
  },
  {
    id: 'ethio-month-combo',
    category: 'telecom',
    name: 'Monthly Unlimited Voice + Data',
    subtitle: 'Complete combo with unlimited call minutes and data for a full month.',
    priceBirr: 2350,
    popular: true,
    badge: 'Ultimate Combo',
    iconName: 'PhoneCall',
    features: ['Unlimited Monthly Data', 'Unlimited Voice Calling', 'All Network Support'],
  },
  {
    id: 'ethio-week-card',
    category: 'telecom',
    name: 'Weekly Unlimited Data + 90 Birr Card',
    subtitle: '7-day unlimited data access plus 90 Birr card bonus.',
    priceBirr: 650,
    iconName: 'Zap',
    features: ['7 Days Unlimited High Speed Data', '90 Birr Bonus Card', 'Fast Setup'],
  },
  {
    id: 'ethio-week-data',
    category: 'telecom',
    name: 'Weekly Unlimited Data',
    subtitle: 'Fast and affordable 7-day unlimited data package.',
    priceBirr: 600,
    iconName: 'Zap',
    features: ['7 Days Unlimited High Speed Data', 'Instant Delivery', 'Budget Friendly'],
  },
];

export const TELEGRAM_PREMIUM_OPTIONS: ServiceItem[] = [
  { id: 'tg-1m', category: 'telegram', name: 'Telegram Premium 1 Month ⭐', priceBirr: 700, iconName: 'Star' },
  { id: 'tg-3m', category: 'telegram', name: 'Telegram Premium 3 Months ⭐', priceBirr: 2550, iconName: 'Star' },
  { id: 'tg-6m', category: 'telegram', name: 'Telegram Premium 6 Months ⭐', priceBirr: 3400, popular: true, badge: 'Popular Choice', iconName: 'Star' },
  { id: 'tg-12m', category: 'telegram', name: 'Telegram Premium 12 Months ⭐', priceBirr: 5850, badge: 'Best Annual Savings', iconName: 'Star' },
];

export const AI_SERVICES: ServiceItem[] = [
  {
    id: 'gemini-pro-18m',
    category: 'ai',
    name: 'GEMINI PRO (18 Months Plan)',
    subtitle: 'Advanced AI workspace subscription with maximum limits for 1.5 years.',
    priceBirr: 1100,
    popular: true,
    badge: '18 Months Sub',
    iconName: 'Cpu',
    features: ['Full Gemini Pro Workspace Features', '18 Months Uninterrupted Access', 'Instant Setup & Guarantee'],
  },
];

export const VISA_CARD_SERVICE: ServiceItem = {
  id: 'visa-card-service',
  category: 'visa',
  name: 'Virtual VISA Card 💳',
  subtitle: 'Reliable virtual Visa card for international payments, Google/Apple Pay, and shopping.',
  priceBirr: 800,
  badge: 'Hot Product',
  iconName: 'CreditCard',
  features: [
    'Google Pay & Apple Pay Supported 📱',
    'General Online Payments & Subscriptions 🌐',
    'Telegram Premium Subscriptions ⭐',
    'Gaming & App Store Top-Ups 🪙',
    'AliExpress & Alibaba Shopping 🛍️',
    'Direct & Clean Service (Not Bybit, Not Bitnob)',
  ],
};

export const FAQ_LIST = [
  {
    question: 'How fast is order delivery?',
    answer: 'Orders are processed instantly or within 5 to 15 minutes after confirmation on Telegram @LeulXO47.',
  },
  {
    question: 'Are TikTok Coins & Telegram Premium 100% safe?',
    answer: 'Yes! All services are 100% legitimate, safe, and backed by guaranteed delivery.',
  },
  {
    question: 'How do I buy or sell USDT?',
    answer: 'We offer instant crypto exchange! Buy rate is 181 BIRR / USDT and Sell rate is 194 BIRR / USDT. Simply select Buy or Sell in the crypto section or contact @LeulXO47 directly.',
  },
  {
    question: 'What payment methods do you accept in Ethiopia?',
    answer: 'We accept CBE (Commercial Bank of Ethiopia), Telebirr, Bank of Abyssinia, Awash, and major local banking transfers.',
  },
];
