import React from 'react';
import { Instagram, BookOpen, MapPin } from 'lucide-react';
import { SITE_NAME, RESERVATION_URL, APP_VERSION, GOOGLE_MAPS_LOCATION_URL } from '../constants';
import { AppTheme } from '../theme';

interface NavbarProps {
  scrollToSection: (id: string) => void;
  onOpenLightpaper?: () => void;
}

interface NavItemConfig {
  id: string;
  desktopLabel: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: 'concept', desktopLabel: 'こだわり' },
  { id: 'menu', desktopLabel: 'お品書き' },
  { id: 'gallery', desktopLabel: '料理ギャラリー' },
  { id: 'media', desktopLabel: '掲載・note' },
  { id: 'access', desktopLabel: 'アクセス' },
  { id: 'info', desktopLabel: '店舗情報' }
];

/**
 * ナビゲーションバーコンポーネント
 * バージョン表記、ライトペーパー（仕様書）表示機能、店舗地図リンクを提供します。
 * PC表示時はすべてのメニュー項目・アクションボタンを1行で折り返しなく表示します。
 * スマートフォン表示時は画面下部ナビゲーションへ導線を集約し、右上のメニューボタンは非表示とします。
 * （※空席状況・WEB予約機能および3Dビューアーは削除）
 */
const Navbar: React.FC<NavbarProps> = ({ scrollToSection, onOpenLightpaper }) => {
  const navClasses = AppTheme.getNavbarClasses();

  const handleNavClick = (id: string) => {
    try {
      scrollToSection(id);
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

          {/* Mobile Actions（右上のメニューボタンは非表示・下部ナビゲーションへ集約） */}
          {onOpenLightpaper && (
            <div className={navClasses.mobileActionsGroup}>
              <button
                type="button"
                onClick={onOpenLightpaper}
                className={navClasses.mobileLightpaperButton}
                aria-label="仕様書"
              >
                <BookOpen size={14} className="text-[#c5a059] shrink-0" />
                <span>仕様書</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
