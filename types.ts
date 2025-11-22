export enum MenuCategory {
  LUNCH = 'Lunch',
  SIDES = 'Lunch Sides',
  DINNER = 'Dinner Course',
  ALACARTE = 'A La Carte',
  DRINKS = 'Drinks'
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  image?: string; // Optional image URL
}

export interface MenuSectionData {
  category: MenuCategory;
  items: MenuItem[];
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}