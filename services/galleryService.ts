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

  public get subCategory(): string | undefined {
    return this._data.subCategory;
  }

  public get imageUrl(): string {
    return this._data.imageUrl;
  }

  public get altImageUrl(): string | undefined {
    return this._data.altImageUrl;
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

  public get sourceArticleUrl(): string | undefined {
    return this._data.sourceArticleUrl;
  }

  public get sourceArticleTitle(): string | undefined {
    return this._data.sourceArticleTitle;
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
      (this._data.subCategory ? this._data.subCategory.toLowerCase().includes(lower) : false) ||
      (this._data.sourceArticleTitle ? this._data.sourceArticleTitle.toLowerCase().includes(lower) : false) ||
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
      const validPhotos: PhotoItemModel[] = [];
      for (const item of PLACE_PHOTOS) {
        try {
          validPhotos.push(new PhotoItemModel(item));
        } catch (itemErr) {
          console.warn('不正な写真データをスキップしました:', itemErr);
        }
      }
      this.photos = validPhotos;
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
   * カテゴリとサブカテゴリ、検索クエリによるフィルタリング
   */
  public filterPhotos(
    category: PlacePhotoCategory,
    query: string = '',
    subCategory: string = 'ALL'
  ): PhotoItemModel[] {
    try {
      return this.photos.filter(photo => {
        const matchesCategory = category === PlacePhotoCategory.ALL || photo.category === category;
        const matchesSub = subCategory === 'ALL' || photo.subCategory === subCategory;
        const matchesSearch = photo.matchesQuery(query);
        return matchesCategory && matchesSub && matchesSearch;
      });
    } catch (err) {
      console.error('写真フィルタリング処理中にエラーが発生しました:', err);
      return [...this.photos];
    }
  }

  /**
   * 実際に写真が存在するカテゴリ一覧の取得
   */
  public getAvailableCategories(): PlacePhotoCategory[] {
    try {
      const present = new Set<PlacePhotoCategory>();
      this.photos.forEach(p => present.add(p.category));
      const ordered = [
        PlacePhotoCategory.ALL,
        PlacePhotoCategory.MEAT_LOWTEMP,
        PlacePhotoCategory.NOODLES,
        PlacePhotoCategory.SEAFOOD,
        PlacePhotoCategory.SEASONAL,
        PlacePhotoCategory.SIGNATURE,
        PlacePhotoCategory.ALACARTE,
        PlacePhotoCategory.SAKE,
        PlacePhotoCategory.INTERIOR
      ];
      return ordered.filter(cat => cat === PlacePhotoCategory.ALL || present.has(cat));
    } catch (err) {
      console.error('利用可能カテゴリの取得に失敗しました:', err);
      return [PlacePhotoCategory.ALL];
    }
  }

  /**
   * 指定カテゴリ内のサブカテゴリ一覧を取得
   */
  public getSubCategories(category: PlacePhotoCategory): string[] {
    try {
      if (category === PlacePhotoCategory.ALL) return [];
      const set = new Set<string>();
      this.photos.forEach(p => {
        if (p.category === category && p.subCategory) {
          set.add(p.subCategory);
        }
      });
      return Array.from(set);
    } catch (err) {
      console.error('サブカテゴリ一覧の取得に失敗しました:', err);
      return [];
    }
  }

  /**
   * カテゴリごとの件数取得
   */
  public getCategoryCount(category: PlacePhotoCategory): number {
    try {
      if (category === PlacePhotoCategory.ALL) return this.photos.length;
      return this.photos.filter(p => p.category === category).length;
    } catch (err) {
      console.error('カテゴリ件数の取得に失敗しました:', err);
      return 0;
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
        return '季節の土鍋・椀物';
      case PlacePhotoCategory.MEAT_LOWTEMP:
        return '低温火入の肉料理';
      case PlacePhotoCategory.NOODLES:
        return '特製 麺料理';
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
