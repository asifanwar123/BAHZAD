
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
  description: string;
  tags: string[];
  sizes?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface User {
  phoneNumber: string;
  name?: string;
  isLoggedIn: boolean;
}

export type PaymentMethod = 'CARD' | 'JAZZCASH' | 'EASYPAISA' | 'SADAPAY' | 'MEEZAN' | 'COD';

export type ViewType = 'HOME' | 'DETAILS' | 'FAVORITES' | 'COLLECTION' | 'STATIC_PAGE';

export enum Page {
  HOME = 'HOME',
  SHOP = 'SHOP',
  CHECKOUT = 'CHECKOUT'
}
