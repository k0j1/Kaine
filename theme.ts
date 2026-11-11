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
}
