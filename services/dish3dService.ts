import { Dish3DItem } from '../types';

/**
 * 割烹食堂かいね 3D 360°回転料理データ定数
 */
export const DISH_3D_ITEMS: Dish3DItem[] = [
  {
    id: 'dish-3d-tuna',
    dishId: 'k1',
    title: '本鮪の贅沢炙り 海鮮丼仕立て',
    subtitle: '市場直送の上質本鮪 × 香ばしい表面炙り × 青葱と炒り胡麻',
    videoUrl: 'assets/aistudio/gemini_generated_video_b2e289ab_9df8df7a.mp4',
    thumbnailUrl: 'assets/aistudio/Img_2025_04_12_12_59_49_104cbefa.jpeg',
    description: '表面のみを素早く香ばしく炙り、極上の脂の甘みと旨味を閉じ込めた珠玉の本鮪丼。360度どの角度からも艶やかな肉質と繊細な盛り付けをご確認いただけます。',
    duration: 10.027,
    tags: ['本鮪炙り', '360° 3D確認可', '市場直送', '特製赤酢ブレンド'],
    specs: [
      { label: '主素材', value: '市場直送 本鮪（厳選赤身〜中トロ部位）' },
      { label: '調理技法', value: '強火瞬間炙り ＋ 冷水締め ＋ 刻み海苔・青葱' },
      { label: '寿司酢', value: '長期熟成赤酢ブレンド特製シャリ' },
      { label: '3D撮影規格', value: '360° ターンテーブル完全周回ハイビジョン' }
    ]
  },
  {
    id: 'dish-3d-radish',
    dishId: 'k3',
    title: '桜生麩と丸大根の割烹仕立て 黄金一番出汁',
    subtitle: '枕崎産本枯節と利尻昆布の一番出汁 × 桜生麩 × 染み大根',
    videoUrl: 'assets/aistudio/gemini_generated_video_ab9a9cdb_a47598c0.mp4',
    thumbnailUrl: 'assets/aistudio/Img_2025_03_23_13_06_02_1871321e.jpeg',
    description: '毎朝丁寧に抽出する黄金の澄まし出汁を湛えた割烹の真骨頂。芯まで出汁が染み渡った大根、桜色の生麩、香り立つ山葵と桜葉の調和を360度から鑑賞できます。',
    duration: 10.027,
    tags: ['黄金一番出汁', '360° 3D確認可', '桜生麩', '伝統割烹椀物'],
    specs: [
      { label: '出汁規格', value: '枕崎産本枯節 × 利尻一等昆布 抽出の澄まし出汁' },
      { label: '具材', value: 'じっくり含め煮丸大根、桜生麩、桜葉、本山葵' },
      { label: '味わい', value: '奥深い出汁の芳香と生麩のもちもち食感' },
      { label: '3D撮影規格', value: '360° ターンテーブル完全周回ハイビジョン' }
    ]
  }
];

/**
 * 3D料理ドメインモデル (OOP)
 */
export class Dish3DModel {
  public readonly id: string;
  public readonly dishId: string;
  public readonly title: string;
  public readonly subtitle: string;
  public readonly videoUrl: string;
  public readonly thumbnailUrl: string;
  public readonly description: string;
  public readonly duration: number;
  public readonly tags: string[];
  public readonly specs: { label: string; value: string }[];

  constructor(data: Dish3DItem) {
    this.id = data.id;
    this.dishId = data.dishId;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.videoUrl = data.videoUrl;
    this.thumbnailUrl = data.thumbnailUrl;
    this.description = data.description;
    this.duration = data.duration;
    this.tags = [...data.tags];
    this.specs = [...data.specs];
  }

  /**
   * 角度（0°〜360°）から動画のタイムスタンプ（秒）を計算
   */
  public calculateTimestamp(angleDegrees: number): number {
    const normalizedAngle = ((angleDegrees % 360) + 360) % 360;
    return (normalizedAngle / 360) * this.duration;
  }

  /**
   * 現在のタイムスタンプ（秒）から角度（0°〜360°）を計算
   */
  public calculateAngle(currentTimeSeconds: number): number {
    if (this.duration <= 0) return 0;
    const ratio = Math.max(0, Math.min(currentTimeSeconds / this.duration, 1));
    return Math.round(ratio * 360) % 360;
  }
}

/**
 * 3D料理ビューアー管理サービス (OOP Singleton)
 */
export class Dish3DService {
  private static instance: Dish3DService | null = null;
  private readonly items: Dish3DModel[];

  private constructor() {
    this.items = DISH_3D_ITEMS.map((item) => new Dish3DModel(item));
  }

  public static getInstance(): Dish3DService {
    if (!Dish3DService.instance) {
      Dish3DService.instance = new Dish3DService();
    }
    return Dish3DService.instance;
  }

  /**
   * 全3D料理モデルリストを取得
   */
  public getAllDishes(): Dish3DModel[] {
    return [...this.items];
  }

  /**
   * ID指定で3Dモデルを取得
   */
  public getDishById(id: string): Dish3DModel | undefined {
    return this.items.find((item) => item.id === id);
  }

  /**
   * 料理写真ID (dishId: k1, k3) から対応する3Dモデルを取得
   */
  public getDishByPhotoId(dishId: string): Dish3DModel | undefined {
    return this.items.find((item) => item.dishId === dishId);
  }
}
