import { PlacePhoto, CommitmentPillar, MediaLink } from '../types';
import { SITE_NAME } from '../constants';
import { GalleryService } from './galleryService';

/**
 * 料理写真の表示コンテキスト種別
 */
export type DishImageContext =
  | 'hero'
  | 'gallery'
  | 'carousel'
  | 'modal'
  | 'modal-alt'
  | 'thumbnail';

/**
 * 画像SEO・アクセシビリティ用 alt 属性生成サービス (OOP)
 * 各画像コンポーネントに対して、スクリーンリーダー利用者の理解と検索エンジン最適化（SEO）の
 * 両面で最適な日本語の代替テキスト（alt属性）を一貫したルールで生成・正規化します。
 */
export class ImageAltService {
  private static readonly DEFAULT_DISH_ALT = `${SITE_NAME}（福島県郡山市）の旬の和食料理写真`;
  private static readonly MAX_ALT_LENGTH = 120;

  /**
   * 任意のalt文字列を正規化し、空文字や過剰な長さを安全に補正
   */
  public static normalizeAlt(
    raw: string | undefined | null,
    fallback: string = this.DEFAULT_DISH_ALT,
    maxLength: number = this.MAX_ALT_LENGTH
  ): string {
    try {
      const cleaned = (raw ?? '').replace(/\s+/g, ' ').trim();
      const target = cleaned.length > 0 ? cleaned : fallback.replace(/\s+/g, ' ').trim();
      if (!target) {
        return this.DEFAULT_DISH_ALT;
      }
      if (target.length <= maxLength) {
        return target;
      }
      return `${target.slice(0, Math.max(1, maxLength - 1))}…`;
    } catch (err) {
      console.warn('alt属性の正規化処理中にエラーが発生しました:', err);
      return this.DEFAULT_DISH_ALT;
    }
  }

  /**
   * 料理写真（Hero / Gallery / Carousel / PhotoModal / サムネイル）向けのalt属性を生成
   */
  public static buildDishAlt(
    photo: Pick<PlacePhoto, 'title' | 'category' | 'subCategory' | 'price' | 'tags'> | null | undefined,
    context: DishImageContext
  ): string {
    try {
      if (!photo || !photo.title) {
        return this.DEFAULT_DISH_ALT;
      }

      const title = photo.title.trim();
      const categoryLabel = GalleryService.getCategoryLabel(photo.category);
      const subPart = photo.subCategory ? `・${photo.subCategory.trim()}` : '';

      // タイトルに含まれていない固有タグのみ最大2件抽出してSEO情報を補完（重複・詰め込み防止）
      const extraTags = (photo.tags || [])
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0 && !title.includes(tag) && tag !== photo.subCategory)
        .slice(0, 2);
      const tagSuffix = extraTags.length > 0 ? `（${extraTags.join('・')}）` : '';

      switch (context) {
        case 'hero':
          return this.normalizeAlt(
            `${SITE_NAME}（福島県郡山市）の料理「${title}」— ${categoryLabel}${subPart}の写真`
          );

        case 'thumbnail':
          return this.normalizeAlt(
            `${SITE_NAME}「${title}」（${categoryLabel}${subPart}）のサムネイル写真`
          );

        case 'modal': {
          const pricePart = photo.price ? `・${photo.price.trim()}` : '';
          return this.normalizeAlt(
            `${SITE_NAME}「${title}」の拡大料理写真（${categoryLabel}${subPart}${pricePart}）`
          );
        }

        case 'modal-alt':
          return this.normalizeAlt(
            `${SITE_NAME}「${title}」の別アングル拡大写真（${categoryLabel}${subPart}）`
          );

        case 'carousel':
        case 'gallery':
        default:
          return this.normalizeAlt(
            `${SITE_NAME}「${title}」— ${categoryLabel}${subPart}${tagSuffix}の料理写真`
          );
      }
    } catch (err) {
      console.error('料理写真alt属性の生成中にエラーが発生しました:', err);
      return this.normalizeAlt(photo?.title, this.DEFAULT_DISH_ALT);
    }
  }

  /**
   * 「こだわり」セクション（5大哲学）の写真向けalt属性を生成
   */
  public static buildCommitmentAlt(
    pillar: Pick<CommitmentPillar, 'number' | 'title' | 'tag'> | null | undefined
  ): string {
    try {
      if (!pillar) {
        return `${SITE_NAME}のこだわりを表す和食料理写真`;
      }
      return this.normalizeAlt(
        `${SITE_NAME}のこだわり${pillar.number}「${pillar.title}」— ${pillar.tag}を表す料理写真`
      );
    } catch (err) {
      console.error('こだわり画像alt属性の生成中にエラーが発生しました:', err);
      return `${SITE_NAME}のこだわりを表す和食料理写真`;
    }
  }

  /**
   * 掲載情報・公式noteメディアカードのアイキャッチ画像向けalt属性を生成
   */
  public static buildMediaLinkAlt(
    link: Pick<MediaLink, 'id' | 'siteName' | 'tags'> | null | undefined
  ): string {
    try {
      if (!link) {
        return `${SITE_NAME}の掲載メディア・公式記事イメージ`;
      }
      const isNote = link.id.startsWith('note');
      const tagSummary = (link.tags || []).filter(Boolean).slice(0, 3).join('・');
      const suffix = tagSummary ? `（${tagSummary}）` : '';
      const roleLabel = isNote ? 'アイキャッチ写真' : '掲載ページイメージ';
      return this.normalizeAlt(`${SITE_NAME} ${link.siteName}の${roleLabel}${suffix}`);
    } catch (err) {
      console.error('メディア画像alt属性の生成中にエラーが発生しました:', err);
      return `${SITE_NAME}の掲載メディア・公式記事イメージ`;
    }
  }

  /**
   * 駐車場案内図（通常表示・拡大モーダル表示）向けalt属性を生成
   */
  public static buildParkingMapAlt(isEnlarged: boolean = false): string {
    const prefix = isEnlarged
      ? `${SITE_NAME} 駐車場案内図の拡大表示`
      : `${SITE_NAME} 駐車場案内図`;
    return this.normalizeAlt(
      `${prefix}（全10台：店舗すぐそば6台、斜め向かいtictac hair様ビル裏契約駐車場4台・4番5番8番9番）`
    );
  }
}
