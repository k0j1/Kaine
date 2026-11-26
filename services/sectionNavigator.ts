/**
 * モバイル下部ナビゲーションのタブ識別子
 */
export type MobileNavTabId = 'hero' | 'menu' | 'gallery' | 'access' | 'more';

/**
 * モバイル下部ナビゲーションの項目定義
 */
export interface MobileNavSectionItem {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
}

/**
 * セクション遷移・現在位置追跡（ScrollSpy）管理クラス (OOP)
 * スマートフォン下部ナビゲーションと上部バー間で一貫したスクロール遷移と
 * アクティブセクション判定を提供します。
 */
export class SectionNavigator {
  /**
   * ページ内の全セクションID一覧（表示順）
   */
  public static readonly SECTION_ORDER: readonly string[] = [
    'hero',
    'concept',
    'menu',
    'gallery',
    'media',
    'access',
    'info'
  ] as const;

  /**
   * スマートフォン下部ナビゲーションのダイレクト遷移タブ定義（主要4項目＋メニュー）
   */
  public static readonly MOBILE_PRIMARY_TABS: readonly {
    id: Exclude<MobileNavTabId, 'more'>;
    label: string;
  }[] = [
    { id: 'hero', label: 'トップ' },
    { id: 'menu', label: 'お品書き' },
    { id: 'gallery', label: '料理写真' },
    { id: 'access', label: 'アクセス' }
  ] as const;

  /**
   * スマートフォン下部ドロワー（全セクション一覧）定義
   */
  public static readonly ALL_SECTIONS: readonly MobileNavSectionItem[] = [
    { id: 'hero', label: 'トップ画面', shortLabel: 'トップ', description: '本日のランダム料理・ご案内' },
    { id: 'concept', label: 'かいねのこだわり（note）', shortLabel: 'こだわり', description: '店名の由来と5つの料理哲学' },
    { id: 'menu', label: 'お品書き', shortLabel: 'お品書き', description: 'ランチ定食・会席・一品料理' },
    { id: 'gallery', label: 'お料理ギャラリー', shortLabel: '料理写真', description: '実写特選＆公式note全111品' },
    { id: 'media', label: '掲載情報・公式note', shortLabel: '掲載・note', description: 'note全8記事・食べログ・SNS' },
    { id: 'access', label: 'アクセス・駐車場案内', shortLabel: 'アクセス', description: '店舗地図と全10台駐車場図' },
    { id: 'info', label: '店舗情報・お問い合わせ', shortLabel: '店舗情報', description: '営業時間・定休日・電話番号' }
  ] as const;

  /**
   * 指定されたセクションへ安全にスムーススクロールを実行
   */
  public static scrollToSection(id: string): boolean {
    try {
      if (!id || typeof document === 'undefined') {
        return false;
      }

      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return true;
      }

      const element = document.getElementById(id);
      if (!element) {
        console.warn(`指定されたセクションが見つかりませんでした: #${id}`);
        return false;
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    } catch (err) {
      console.error(`セクション(#${id})へのスクロール処理中にエラーが発生しました:`, err);
      return false;
    }
  }

  /**
   * 現在のスクロール位置から最も視認中のセクションIDを判定
   */
  public static detectActiveSection(
    sectionIds: readonly string[] = this.SECTION_ORDER,
    viewportRatio: number = 0.35
  ): string {
    try {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return 'hero';
      }

      // ページ最上部付近は常にトップをアクティブとする
      if (window.scrollY < 80) {
        return 'hero';
      }

      // ページ最下部到達時は末尾セクション（店舗情報）をアクティブとする
      const docHeight = document.documentElement.scrollHeight;
      if (window.innerHeight + window.scrollY >= docHeight - 40) {
        return sectionIds[sectionIds.length - 1] || 'info';
      }

      const anchorLine = window.innerHeight * viewportRatio;
      let currentActive = sectionIds[0] || 'hero';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= anchorLine) {
          currentActive = id;
        }
      }

      return currentActive;
    } catch (err) {
      console.warn('アクティブセクションの判定中にエラーが発生しました:', err);
      return 'hero';
    }
  }

  /**
   * 現在のセクションIDをモバイル下部バーのアクティブタブIDへマッピング
   */
  public static resolveMobileTabId(activeSectionId: string): MobileNavTabId {
    if (
      activeSectionId === 'hero' ||
      activeSectionId === 'menu' ||
      activeSectionId === 'gallery' ||
      activeSectionId === 'access'
    ) {
      return activeSectionId;
    }
    return 'more';
  }
}
