
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

export interface MediaLink {
  id: string;
  siteName: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
}

/**
 * 割烹食堂かいね 料理写真のカテゴリ分類
 */
export enum PlacePhotoCategory {
  ALL = 'ALL',
  SIGNATURE = 'SIGNATURE',   // 名物定食（鶏かつ・レバかつ等）
  SEAFOOD = 'SEAFOOD',       // 鮮魚・お造り・海鮮丼
  SEASONAL = 'SEASONAL',     // 季節の土鍋ご飯・旬の一皿・椀物
  MEAT_LOWTEMP = 'MEAT_LOWTEMP', // 低温火入の肉料理（公式note連載）
  NOODLES = 'NOODLES',       // 特製 麺料理（公式note連載）
  ALACARTE = 'ALACARTE',     // 割烹一品・酒菜・おつまみ
  SAKE = 'SAKE',             // 厳選地酒・日本酒
  INTERIOR = 'INTERIOR'      // 店舗空間・カウンター・雰囲気
}

/**
 * 割烹食堂かいね 料理写真のデータ構造
 */
export interface PlacePhoto {
  id: string;
  title: string;
  category: PlacePhotoCategory;
  subCategory?: string;
  imageUrl: string;
  altImageUrl?: string;
  thumbnailUrl?: string;
  description: string;
  price?: string;
  googleMapsUrl: string;
  authorName?: string;
  sourceArticleUrl?: string;
  sourceArticleTitle?: string;
  rating?: number;
  featured?: boolean;
  tags: string[];
}

/**
 * ライトペーパー（仕様書・料理技術解説書）のセクションデータ
 */
export interface LightpaperSection {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  specs?: { label: string; value: string }[];
}

/**
 * 割烹食堂かいね「こだわり」記事の柱データ構造（note公式記事準拠）
 */
export interface CommitmentPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  image: string;
  tag: string;
}

