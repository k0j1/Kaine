import React, { useState } from 'react';
import { Menu, X, Instagram, BookOpen, MapPin } from 'lucide-react';
import { SITE_NAME, RESERVATION_URL, APP_VERSION, GOOGLE_MAPS_LOCATION_URL } from '../constants';
import { AppTheme } from '../theme';

interface NavbarProps {
  scrollToSection: (id: string) => void;
  onOpenLightpaper?: () => void;
}

interface NavItemConfig {
  id: string;
  desktopLabel: string;
  mobileLabel: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: 'concept', desktopLabel: 'こだわり', mobileLabel: 'こだわり（note記事）' },
  { id: 'menu', desktopLabel: 'お品書き', mobileLabel: 'お品書き' },
  { id: 'gallery', desktopLabel: '料理ギャラリー', mobileLabel: 'お料理ギャラリー' },
  { id: 'media', desktopLabel: '掲載・note', mobileLabel: '掲載情報・note' },
  { id: 'access', desktopLabel: 'アクセス', mobileLabel: 'アクセス' },
  { id: 'info', desktopLabel: '店舗情報', mobileLabel: '店舗情報' }
];

/**
 * ナビゲーションバーコンポーネント
 * バージョン表記、ライトペーパー（仕様書）表示機能、店舗地図リンクを提供します。
 * PC表示時はすべてのメニュー項目・アクションボタンを1行で折り返しなく表示します。
 * （※空席状況・WEB予約機能および3Dビューアーは削除）
 */
const Navbar: React.FC<NavbarProps> = ({ scrollToSection, onOpenLightpaper }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navClasses = AppTheme.getNavbarClasses();

  const handleNavClick = (id: string) => {
    try {
      scrollToSection(id);
      setIsOpen(false);
    } catch (err) {
      console.error('セクションスクロール中にエラーが発生しました:', err);
    }
  };

  return (
    <nav className={navClasses.nav}>
      <div className={AppTheme.spacing.containerMax}>
        <div className={navClasses.row}>
          {/* ブランドロゴ ＆ バージョンバッジ */}
          <div className={navClasses.brandWrapper} onClick={() => handleNavClick('hero')}>
            <h1 className={navClasses.brandTitle}>
              {SITE_NAME}
            </h1>
            <span
              className={navClasses.versionBadge}
              title={`割烹食堂かいね バージョン ${APP_VERSION}`}
            >
              v{APP_VERSION}
            </span>
          </div>
          
          {/* Desktop Menu（PC閲覧時は全項目を確実に1行表示） */}
          <div className={navClasses.desktopMenu}>
            <div className={navClasses.desktopLinksGroup}>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={navClasses.desktopLink}
                >
                  {item.desktopLabel}
                </button>
              ))}
            </div>

            <div className={navClasses.desktopActionsGroup}>
              {/* 仕様書（ライトペーパー）ボタン */}
              {onOpenLightpaper && (
                <button
                  type="button"
                  onClick={onOpenLightpaper}
                  className={navClasses.lightpaperButton}
                  title="店舗理念・調理技術規格・アップデート履歴"
                >
                  <BookOpen size={14} className="text-[#c5a059] shrink-0" />
                  <span>仕様書</span>
                </button>
              )}

              {/* Google Maps ボタン */}
              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={navClasses.mapButton}
                title="店舗地図・アクセスを確認"
              >
                <MapPin size={14} className="shrink-0" />
                <span>店舗地図</span>
              </a>

              {/* 公式 Instagram ボタン */}
              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={navClasses.instagramButton}
              >
                <Instagram size={14} className="shrink-0" />
                <span>公式Instagram</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            {onOpenLightpaper && (
              <button
                type="button"
                onClick={onOpenLightpaper}
                className="p-1.5 text-stone-600 border border-stone-300 rounded text-xs font-serif flex items-center gap-1 whitespace-nowrap"
                aria-label="仕様書"
              >
                <BookOpen size={14} className="text-[#c5a059]" />
                <span className="text-[11px]">仕様書</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2c3e50] hover:text-[#1a1a1a] p-2"
              aria-label="メニューを開く"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 animate-fade-in shadow-lg">
          <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col items-center">
             <div className="w-full flex items-center justify-between pb-2 border-b border-stone-100 text-xs font-serif text-stone-500">
               <span>バージョン: <b className="text-[#c5a059]">v{APP_VERSION}</b></span>
               <a
                 href={GOOGLE_MAPS_LOCATION_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#4285F4] flex items-center gap-1"
               >
                 <MapPin size={12} /> 店舗地図
               </a>
             </div>

             {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="text-[#2c3e50] hover:text-[#c5a059] block py-2.5 rounded-sm text-base font-medium w-full text-center font-serif border-b border-stone-50"
                >
                  {item.mobileLabel}
                </button>
              ))}

              {onOpenLightpaper && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenLightpaper();
                  }}
                  className="w-full py-2.5 text-center text-sm font-serif text-[#4b5563] flex items-center justify-center gap-2 border border-stone-200 rounded-sm mt-2"
                >
                  <BookOpen size={16} className="text-[#c5a059]" />
                  <span>店舗思想 ＆ デジタル体験仕様書</span>
                </button>
              )}

              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4285F4] hover:bg-[#3367d6] text-white px-8 py-3 mt-3 rounded-sm text-sm font-serif w-full flex items-center justify-center gap-2 shadow-sm"
              >
                <MapPin size={18} />
                <span>Googleマップで店舗の場所を確認</span>
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
