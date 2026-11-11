import { PlacePhoto, PlacePhotoCategory } from '../types';
import { PLACE_PHOTOS, GOOGLE_MAPS_LOCATION_URL } from '../constants';

/**
 * 料理写真ドメインモデルクラス (OOP)
 * 1枚の写真エンティティに関する情報と振る舞いをカプセル化します。
 */
export class PhotoItemModel {
  private readonly _data: PlacePhoto;

  constructor(data: PlacePhoto) {
    if (!data.id || !data.title || !data.imageUrl) {
      throw new Error(`無効な写真データが検出されました: ID=${data.id}, Title=${data.title}`);
    }
    this._data = { ...data };
  }

  public get id(): string {
    return this._data.id;
  }

  public get title(): string {
    return this._data.title;
  }

  public get category(): PlacePhotoCategory {
    return this._data.category;
  }

  public get imageUrl(): string {
    return this._data.imageUrl;
  }

  public get thumbnailUrl(): string {
    return this._data.thumbnailUrl || this._data.imageUrl;
  }

  public get description(): string {
    return this._data.description;
  }

  public get price(): string | undefined {
    return this._data.price;
  }

  public get googleMapsUrl(): string {
    return this._data.googleMapsUrl || GOOGLE_MAPS_LOCATION_URL;
  }

  public get authorName(): string {
    return this._data.authorName || '割烹食堂かいね 実際のお料理';
  }

  public get rating(): number {
    return this._data.rating || 5;
  }

  public get featured(): boolean {
    return Boolean(this._data.featured);
  }

  public get tags(): string[] {
    return [...this._data.tags];
  }

  public get has3D(): boolean {
    return Boolean(this._data.has3D);
  }

  public get video3DUrl(): string | undefined {
    return this._data.video3DUrl;
  }

  /**
   * 検索クエリに合致するかどうか判定するビジネスメソッド
   */
  public matchesQuery(query: string): boolean {
    if (!query.trim()) return true;
    const lower = query.toLowerCase();
    return (
      this._data.title.toLowerCase().includes(lower) ||
      this._data.description.toLowerCase().includes(lower) ||
      this._data.tags.some(tag => tag.toLowerCase().includes(lower))
    );
  }
}

/**
 * 料理写真ギャラリー管理サービスクラス (OOP Singleton)
 * 写真の取得、フィルタリング、安全なエラーハンドリングを提供します。
 */
export class GalleryService {
  private static instance: GalleryService | null = null;
  private photos: PhotoItemModel[] = [];

  private constructor() {
    this.initializePhotos();
  }

  public static getInstance(): GalleryService {
    if (!GalleryService.instance) {
      GalleryService.instance = new GalleryService();
    }
    return GalleryService.instance;
  }

  /**
   * 初期写真コレクションの安全なロードとバリデーション
   */
  private initializePhotos(): void {
    try {
      this.photos = PLACE_PHOTOS.map(p => new PhotoItemModel(p));
    } catch (err) {
      console.error('ギャラリー写真の初期化中にエラーが発生しました:', err);
      // エラー発生時もクラッシュさせず、最低限のフォールバックモデルを保持
      this.photos = [];
    }
  }

  /**
   * 全写真の取得
   */
  public getAllPhotos(): PhotoItemModel[] {
    return [...this.photos];
  }

  /**
   * カテゴリと検索クエリによるフィルタリング
   */
  public filterPhotos(category: PlacePhotoCategory, query: string = ''): PhotoItemModel[] {
    try {
      return this.photos.filter(photo => {
        const matchesCategory = category === PlacePhotoCategory.ALL || photo.category === category;
        const matchesSearch = photo.matchesQuery(query);
        return matchesCategory && matchesSearch;
      });
    } catch (err) {
      console.error('写真フィルタリング処理中にエラーが発生しました:', err);
      return this.photos;
    }
  }

  /**
   * 注目の料理写真（Featured）の取得
   */
  public getFeaturedPhotos(): PhotoItemModel[] {
    return this.photos.filter(p => p.featured);
  }

  /**
   * カテゴリ表示名の多言語・和名マップ
   */
  public static getCategoryLabel(category: PlacePhotoCategory): string {
    switch (category) {
      case PlacePhotoCategory.ALL:
        return 'すべて';
      case PlacePhotoCategory.SIGNATURE:
        return '名物定食';
      case PlacePhotoCategory.SEAFOOD:
        return '旬の海鮮・刺身';
      case PlacePhotoCategory.SEASONAL:
        return '季節の土鍋・逸品';
      case PlacePhotoCategory.ALACARTE:
        return '割烹一品・酒菜';
      case PlacePhotoCategory.SAKE:
        return '厳選地酒';
      case PlacePhotoCategory.INTERIOR:
        return '店舗空間・お席';
      default:
        return 'その他';
    }
  }
}
