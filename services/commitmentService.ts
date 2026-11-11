import { CommitmentPillar } from '../types';
import { KAINE_COMMITMENT_PILLARS, NOTE_ARTICLE_URL } from '../constants';

/**
 * 割烹食堂かいね「こだわり」ドメインモデル (OOP)
 */
export class CommitmentModel {
  public readonly id: string;
  public readonly number: string;
  public readonly title: string;
  public readonly subtitle: string;
  public readonly summary: string;
  public readonly details: string[];
  public readonly image: string;
  public readonly tag: string;

  constructor(data: CommitmentPillar) {
    this.id = data.id;
    this.number = data.number;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.summary = data.summary;
    this.details = [...data.details];
    this.image = data.image;
    this.tag = data.tag;
  }

  /**
   * 記事のフォーマット済みタイトル（番号付き）
   */
  public getFormattedTitle(): string {
    return `${this.number}. ${this.title}`;
  }
}

/**
 * こだわりデータ管理サービス (OOP Singleton)
 * note公式記事「割烹食堂かいねのこだわり」のデータ提供と整合性を一元管理します。
 */
export class CommitmentService {
  private static instance: CommitmentService | null = null;
  private readonly pillars: CommitmentModel[];
  private readonly noteArticleUrl: string;

  private constructor() {
    this.pillars = KAINE_COMMITMENT_PILLARS.map((item) => new CommitmentModel(item));
    this.noteArticleUrl = NOTE_ARTICLE_URL;
  }

  /**
   * シングルトンインスタンス取得
   */
  public static getInstance(): CommitmentService {
    if (!CommitmentService.instance) {
      CommitmentService.instance = new CommitmentService();
    }
    return CommitmentService.instance;
  }

  /**
   * こだわり5大方針リストを取得
   */
  public getAllPillars(): CommitmentModel[] {
    return [...this.pillars];
  }

  /**
   * ID指定でこだわりを取得
   */
  public getPillarById(id: string): CommitmentModel | undefined {
    return this.pillars.find((p) => p.id === id);
  }

  /**
   * 公式note記事リンクURLを取得
   */
  public getNoteArticleUrl(): string {
    return this.noteArticleUrl;
  }
}
