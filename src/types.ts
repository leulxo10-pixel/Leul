export type ServiceCategory = 'all' | 'tiktok' | 'telecom' | 'telegram' | 'visa' | 'usdt' | 'ai';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  name: string;
  subtitle?: string;
  priceBirr: number;
  popular?: boolean;
  badge?: string;
  iconName: string;
  features?: string[];
  unit?: string;
}

export interface CartItem {
  service: ServiceItem;
  quantity: number;
  customDetails?: string;
}

export interface UsdtTransaction {
  type: 'buy' | 'sell';
  amountUsdt: number;
  rateEtb: number;
}
