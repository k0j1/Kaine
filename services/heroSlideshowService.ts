import { PlacePhoto } from '../types';
import { MAIN_HERO_IMAGE } from '../constants';
import { GalleryService } from './galleryService';

/**
 * ヒーローサムネイル表示用のアイテム型
 */
export interface HeroThumbnailSlot {
  photo: PlacePhoto;
  deckIndex: number;
}

/**
 * ヒーロートップ画像ランダムスライドショー管理クラス (OOP)
 * 店舗実写特選写真および公式noteの全料理写真からランダムな再生デッキを構築し、
 * 重複回避・フォールバック・サムネイルウィンドウ算出を安全に提供します。
 */
export class HeroSlideshowService {
  /**
   * 有効な料理写真からFisher-Yatesアルゴリズムでランダムシャッフルしたデッキを生成
   * @param photos 候補となる全料理写真配列（店舗実写＋公式note全料理）
   * @param excludeFirstId 直前まで表示していた料理ID（連続表示を回避）
   */
  public static createShuffledDeck(photos: PlacePhoto[], excludeFirstId?: string): PlacePhoto[] {
    try {
      const validPhotos = photos.filter(
        (photo) => Boolean(photo && photo.id && photo.title && photo.imageUrl && photo.imageUrl.trim().length > 0)
      );

      if (validPhotos.length === 0) {
        return [];
      }

      const deck = [...validPhotos];
      // Fisher-Yates シャッフルで全料理を偏りなくランダム化
      for (let i = deck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[randomIndex];
        deck[randomIndex] = temp;
      }

      // シャッフル直後に同じ料理が先頭に来ないよう調整
      if (excludeFirstId && deck.length > 1 && deck[0].id === excludeFirstId) {
        const swapIndex = 1 + Math.floor(Math.random() * (deck.length - 1));
        const first = deck[0];
        deck[0] = deck[swapIndex];
        deck[swapIndex] = first;
      }

      return deck;
    } catch (err) {
      console.error('トップ画像のランダムデッキ生成中にエラーが発生しました:', err);
      return [...photos];
    }
  }

  /**
   * 現在のインデックスを含む表示用サムネイルウィンドウ（最大windowSize件）を取得
   * 同一グループ内での選択時にサムネイル列がガタつかないようブロック単位で返却します。
   */
  public static getThumbnailWindow(
    deck: PlacePhoto[],
    currentIndex: number,
    windowSize: number = 5
  ): HeroThumbnailSlot[] {
    try {
      if (deck.length === 0) return [];
      const safeSize = Math.min(Math.max(1, windowSize), deck.length);
      const safeIndex = ((currentIndex % deck.length) + deck.length) % deck.length;
      const groupStart = Math.floor(safeIndex / safeSize) * safeSize;

      const slots: HeroThumbnailSlot[] = [];
      for (let offset = 0; offset < safeSize; offset++) {
        const deckIndex = (groupStart + offset) % deck.length;
        slots.push({
          photo: deck[deckIndex],
          deckIndex
        });
      }
      return slots;
    } catch (err) {
      console.error('ヒーローサムネイル枠の算出中にエラーが発生しました:', err);
      return deck.slice(0, windowSize).map((photo, deckIndex) => ({ photo, deckIndex }));
    }
  }

  /**
   * 読み込み失敗画像をスキップし、次に表示可能なインデックスを探索
   */
  public static findNextValidIndex(
    deck: PlacePhoto[],
    fromIndex: number,
    failedIds: ReadonlySet<string>
  ): number {
    try {
      if (deck.length === 0) return 0;
      for (let step = 1; step <= deck.length; step++) {
        const candidateIndex = (fromIndex + step) % deck.length;
        const candidate = deck[candidateIndex];
        if (candidate && !failedIds.has(candidate.id)) {
          return candidateIndex;
        }
      }
      return 0;
    } catch (err) {
      console.error('次の有効なヒーロー画像の探索中にエラーが発生しました:', err);
      return 0;
    }
  }

  /**
   * 料理写真からキャプション用のカテゴリ・サブカテゴリ要約文字列を生成
   */
  public static getPhotoCategorySummary(photo: PlacePhoto): string {
    try {
      const categoryLabel = GalleryService.getCategoryLabel(photo.category);
      if (photo.subCategory) {
        return `${categoryLabel} · ${photo.subCategory}`;
      }
      return categoryLabel;
    } catch (err) {
      console.warn('料理カテゴリのラベル取得に失敗しました:', err);
      return '割烹食堂かいねのお料理';
    }
  }

  /**
   * 万が一すべての外部画像取得に失敗した際の安全なフォールバック画像URLを返却
   */
  public static getFallbackImageUrl(): string {
    return MAIN_HERO_IMAGE;
  }
}
