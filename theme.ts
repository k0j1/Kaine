/**
 * グローバルテーマ管理クラス
 * すべての色・フォント・余白・角丸・シャドウを単一のグローバルテーマとして集中管理します。
 * コンポーネント内でのハードコードを防止し、一貫したタイポグラフィとデザインシステムを適用します。
 */
export class AppTheme {
  public static readonly colors = {
    // ブランド・ベースカラー
    primary: '#1a1a1a', // kaine-dark
    primaryHover: '#2a2a2a',
    accent: '#2c3e50', // kaine-accent (落ち着いた紺鼠)
    accentHover: '#1f2d3a',
    gold: '#c5a059', // kaine-gold (和の金茶箔)
    goldLight: '#e6c887',
    goldDark: '#9e7e3e',
    background: '#f5f5f0', // kaine-bg (生成り・和紙色)
    surface: '#ffffff',
    surfaceSubtle: '#fafaf7',
    surfaceMuted: '#f0f0eb',
    
    // テキストカラー
    textPrimary: '#1a1a1a',
    textSecondary: '#4b5563',
    textMuted: '#6b7280',
    textLight: '#9ca3af',
    textWhite: '#ffffff',
    
    // ボーダー・アクセント
    borderLight: '#e5e7eb',
    borderStone: '#e7e5e4',
    borderMuted: '#d6d3d1',
    borderGold: '#c5a059',
    
    // ステータス・タグ
    badgeBg: '#fef3c7',
    badgeText: '#92400e',
    badgeBorder: '#fde68a',
    googleBlue: '#4285F4',
    googleBlueHover: '#3367d6',
    instagramGradStart: '#833ab4',
    instagramGradEnd: '#fd1d1d'
  } as const;

  public static readonly typography = {
    fontSerif: '"Zen Old Mincho", "Noto Serif JP", serif',
    fontSans: '"Helvetica Neue", Arial, sans-serif',
    
    // タイポグラフィサイズ
    sizeXs: 'text-xs',
    sizeSm: 'text-sm',
    sizeBase: 'text-base',
    sizeLg: 'text-lg',
    sizeXl: 'text-xl',
    size2xl: 'text-2xl',
    size3xl: 'text-3xl',
    size4xl: 'text-4xl',
    size5xl: 'text-5xl',
    
    // 行間・字間
    trackingWider: 'tracking-wider',
    trackingWidest: 'tracking-widest',
    trackingRelaxed: 'tracking-[0.2em]',
    trackingLoose: 'tracking-[0.5em]',
    leadingLoose: 'leading-loose',
    leadingRelaxed: 'leading-relaxed'
  } as const;

  public static readonly spacing = {
    sectionPadding: 'py-20 md:py-28',
    sectionPaddingCompact: 'py-12 md:py-16',
    containerMax: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    containerNarrow: 'max-w-4xl mx-auto px-4 sm:px-6',
    gapSm: 'gap-2',
    gapMd: 'gap-4',
    gapLg: 'gap-6',
    gapXl: 'gap-8',
    paddingCard: 'p-4 md:p-6',
    paddingModal: 'p-6 md:p-8'
  } as const;

  public static readonly rounded = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  } as const;

  public static readonly shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    goldGlow: 'shadow-[0_4px_20px_rgba(197,160,89,0.25)]',
    card: 'shadow-[0_4px_16px_rgba(0,0,0,0.06)]',
    cardHover: 'shadow-[0_12px_28px_rgba(0,0,0,0.12)]'
  } as const;

  /**
   * ボタンの標準バリアントクラスを取得するOOPヘルパー
   */
  public static getButtonClass(variant: 'primary' | 'gold' | 'outline' | 'google' | 'ghost' = 'primary'): string {
    const base = 'inline-flex items-center justify-center font-serif transition-all duration-300 focus:outline-none';
    switch (variant) {
      case 'gold':
        return `${base} bg-[#c5a059] text-white hover:bg-[#9e7e3e] px-6 py-3 ${this.rounded.sm} ${this.shadows.md}`;
      case 'google':
        return `${base} bg-[#4285F4] text-white hover:bg-[#3367d6] px-5 py-2.5 ${this.rounded.sm} ${this.shadows.sm}`;
      case 'outline':
        return `${base} border border-[#2c3e50] text-[#2c3e50] hover:bg-[#2c3e50] hover:text-white px-6 py-2.5 ${this.rounded.sm}`;
      case 'ghost':
        return `${base} text-[#4b5563] hover:text-[#1a1a1a] hover:bg-stone-200/50 px-4 py-2 ${this.rounded.sm}`;
      case 'primary':
      default:
        return `${base} bg-[#2c3e50] text-white hover:bg-[#1a1a1a] px-6 py-3 ${this.rounded.sm} ${this.shadows.sm}`;
    }
  }

  /**
   * セクションヘッダー用の標準タイポグラフィクラスを取得するOOPヘルパー
   */
  public static getSectionHeaderClass(): { title: string; subtitle: string; ornament: string } {
    return {
      title: 'text-3xl md:text-4xl font-serif text-[#1a1a1a] tracking-widest text-center mb-3 font-semibold',
      subtitle: 'text-xs md:text-sm text-[#c5a059] uppercase tracking-[0.3em] text-center font-medium mb-4',
      ornament: 'w-12 h-0.5 bg-[#c5a059] mx-auto mb-8'
    };
  }

  /**
   * ギャラリー用フィルタータブ（ピル型を使わない和モダン矩形タブ）のスタイルクラスを返すOOPヘルパー
   */
  public static getFilterTabClass(isActive: boolean): string {
    const base = `px-4 py-2 ${this.rounded.sm} text-xs md:text-sm font-serif whitespace-nowrap shrink-0 transition-all duration-200 border`;
    return isActive
      ? `${base} bg-[#1a1a1a] text-white border-[#1a1a1a] font-bold ${this.shadows.sm}`
      : `${base} bg-[#fafaf7] text-[#4b5563] border-[#e7e5e4] hover:border-[#c5a059] hover:text-[#1a1a1a]`;
  }

  /**
   * サブカテゴリフィルター用のアンダーラインタブクラスを返すOOPヘルパー
   */
  public static getSubFilterTabClass(isActive: boolean): string {
    const base = 'px-3 py-1.5 text-xs font-serif whitespace-nowrap shrink-0 transition-colors border-b-2';
    return isActive
      ? `${base} text-[#1a1a1a] border-[#c5a059] font-bold`
      : `${base} text-[#6b7280] border-transparent hover:text-[#1a1a1a]`;
  }

  /**
   * 料理カードのコンテナおよびセクションクラスを返すOOPヘルパー
   */
  public static getDishCardClasses(): {
    container: string;
    imageWrapper: string;
    body: string;
    title: string;
    description: string;
    footer: string;
    fallbackContainer: string;
  } {
    return {
      container: `group relative bg-white ${this.rounded.sm} border border-[#e7e5e4] overflow-hidden cursor-pointer ${this.shadows.card} hover:${this.shadows.cardHover} transition-all duration-300 flex flex-col`,
      imageWrapper: 'relative aspect-[4/3] w-full overflow-hidden bg-[#f0f0eb]',
      body: 'p-5 flex-1 flex flex-col justify-between bg-white',
      title: 'font-serif font-bold text-base md:text-lg text-[#1a1a1a] group-hover:text-[#2c3e50] transition-colors mb-2 leading-snug',
      description: 'text-xs font-serif text-[#6b7280] leading-relaxed mb-4 line-clamp-3',
      footer: 'pt-3 border-t border-[#f0f0eb] flex items-center justify-between text-xs font-serif gap-2',
      fallbackContainer: 'w-full h-full flex flex-col items-center justify-center bg-[#f5f5f0] text-[#6b7280] p-6 text-center'
    };
  }

  /**
   * レスポンシブカルーセル（スマホ重なり防止・タッチスワイプ対応）用のスタイルクラスを返すOOPヘルパー
   */
  public static getCarouselClasses(): {
    sectionWrapper: string;
    stageContainer: string;
    viewport: string;
    track: string;
    slideWrapper: string;
    controlBar: string;
    navGroup: string;
    iconButton: string;
    counterText: string;
    progressTrack: string;
    progressFill: string;
    thumbnailRail: string;
    thumbnailButton: (isActive: boolean) => string;
    helperNote: string;
    categoryBadge: string;
    categoryBadgeIcon: string;
    priceBadge: string;
    tagLine: string;
    authorLabel: string;
    detailHint: string;
  } {
    return {
      sectionWrapper: 'my-6 md:my-10',
      stageContainer: `relative bg-[#fafaf7] border border-[#e7e5e4] ${this.rounded.sm} p-3 sm:p-5 md:p-6 ${this.shadows.sm}`,
      viewport: 'overflow-hidden w-full touch-pan-y select-none',
      track: 'flex transition-transform duration-300 ease-out',
      slideWrapper: 'shrink-0 px-1 sm:px-2.5 box-border',
      controlBar: 'mt-5 pt-4 border-t border-[#e7e5e4] flex flex-wrap items-center justify-between gap-3',
      navGroup: 'flex items-center gap-2',
      iconButton: `min-w-[44px] min-h-[44px] inline-flex items-center justify-center bg-white border border-[#d6d3d1] text-[#1a1a1a] hover:border-[#c5a059] hover:text-[#2c3e50] active:scale-95 transition-all ${this.rounded.sm} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] disabled:opacity-40 disabled:pointer-events-none`,
      counterText: 'text-xs sm:text-sm font-serif font-bold text-[#1a1a1a] tabular-nums min-w-[68px] text-center whitespace-nowrap',
      progressTrack: 'flex-1 min-w-[90px] h-1.5 bg-[#e7e5e4] rounded-full overflow-hidden hidden sm:block',
      progressFill: 'h-full bg-[#c5a059] transition-all duration-300',
      thumbnailRail: 'mt-4 flex items-center gap-2.5 overflow-x-auto pb-1 snap-x snap-mandatory',
      thumbnailButton: (isActive: boolean) =>
        `relative w-16 h-12 sm:w-20 sm:h-14 shrink-0 snap-start ${this.rounded.sm} overflow-hidden border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
          isActive
            ? 'border-[#c5a059] opacity-100 shadow-sm'
            : 'border-[#e7e5e4] opacity-60 hover:opacity-100'
        }`,
      helperNote: 'mt-3 text-center text-[11px] sm:text-xs font-serif text-[#6b7280]',
      categoryBadge: `absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 ${this.rounded.sm} flex items-center gap-1 border border-white/10 font-serif max-w-[60%] truncate`,
      categoryBadgeIcon: 'text-[#c5a059] shrink-0',
      priceBadge: `absolute top-3 right-3 bg-[#2c3e50]/90 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 ${this.rounded.sm} font-serif font-bold whitespace-nowrap`,
      tagLine: 'text-[11px] font-serif text-[#9e7e3e] mb-3 truncate',
      authorLabel: 'text-[#c5a059] font-medium truncate',
      detailHint: 'inline-flex items-center gap-1 text-[#2c3e50] font-semibold shrink-0'
    };
  }

  /**
   * ギャラリー表示形式切替（アイコン専用ボタン）用のスタイルクラスを返すOOPヘルパー
   */
  public static getViewToggleClasses(): {
    container: string;
    button: (isActive: boolean) => string;
  } {
    return {
      container: `inline-flex items-center gap-1 bg-[#f0f0eb] p-1 ${this.rounded.sm} border border-[#e7e5e4] self-start sm:self-auto shrink-0`,
      button: (isActive: boolean) =>
        `w-10 h-10 inline-flex items-center justify-center ${this.rounded.sm} transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
          isActive
            ? `bg-white text-[#2c3e50] ${this.shadows.sm} border border-[#e7e5e4]`
            : 'text-[#6b7280] hover:text-[#1a1a1a] hover:bg-white/60 border border-transparent'
        }`
    };
  }

  /**
   * 上部ナビゲーションバー（PC1行表示保証・改行防止）用のスタイルクラスを返すOOPヘルパー
   */
  public static getNavbarClasses(): {
    nav: string;
    row: string;
    brandWrapper: string;
    brandTitle: string;
    versionBadge: string;
    desktopMenu: string;
    desktopLinksGroup: string;
    desktopLink: string;
    desktopActionsGroup: string;
    lightpaperButton: string;
    mapButton: string;
    instagramButton: string;
  } {
    return {
      nav: 'fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-[#e7e5e4] transition-all duration-300',
      row: 'flex items-center justify-between h-20 gap-2 xl:gap-6',
      brandWrapper: 'flex items-center gap-1.5 xl:gap-3 cursor-pointer shrink-0 whitespace-nowrap',
      brandTitle: 'text-base xl:text-2xl font-serif font-bold text-[#1a1a1a] tracking-normal xl:tracking-wider whitespace-nowrap shrink-0',
      versionBadge: `text-[10px] font-mono px-1.5 xl:px-2 py-0.5 bg-[#c5a059]/15 text-[#9e7e3e] border border-[#c5a059]/30 ${this.rounded.sm} font-semibold tracking-normal whitespace-nowrap shrink-0`,
      desktopMenu: 'hidden lg:flex items-center gap-2.5 xl:gap-5 shrink-0',
      desktopLinksGroup: 'flex items-center gap-1 xl:gap-4 shrink-0',
      desktopLink: 'text-[#2c3e50] hover:text-[#c5a059] px-1.5 xl:px-2 py-1 text-xs xl:text-sm font-serif font-medium transition-colors tracking-normal xl:tracking-wider whitespace-nowrap shrink-0',
      desktopActionsGroup: 'flex items-center gap-1.5 xl:gap-2.5 shrink-0',
      lightpaperButton: `inline-flex items-center gap-1 xl:gap-1.5 text-[11px] xl:text-xs font-serif text-[#4b5563] hover:text-[#1a1a1a] border border-[#d6d3d1] hover:border-[#9ca3af] px-2 xl:px-3 py-1.5 ${this.rounded.sm} transition-colors whitespace-nowrap shrink-0`,
      mapButton: `inline-flex items-center gap-1 xl:gap-1.5 bg-[#4285F4] hover:bg-[#3367d6] text-white px-2 xl:px-3.5 py-1.5 ${this.rounded.sm} text-[11px] xl:text-xs font-serif transition-colors ${this.shadows.sm} whitespace-nowrap shrink-0`,
      instagramButton: `inline-flex items-center gap-1 xl:gap-1.5 border border-[#2c3e50] text-[#2c3e50] hover:bg-[#2c3e50] hover:text-white px-2 xl:px-3.5 py-1.5 ${this.rounded.sm} text-[11px] xl:text-xs font-serif transition-colors whitespace-nowrap shrink-0`
    };
  }
}
