import React, { useState, useEffect } from 'react';
import {
  Home,
  Utensils,
  Camera,
  MapPin,
  Menu,
  X,
  ChevronRight,
  BookOpen,
  Phone,
  Instagram
} from 'lucide-react';
import { AppTheme } from '../theme';
import { SectionNavigator, MobileNavTabId } from '../services/sectionNavigator';
import {
  SITE_NAME,
  APP_VERSION,
  PHONE_NUMBER,
  GOOGLE_MAPS_LOCATION_URL,
  RESERVATION_URL
} from '../constants';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenLightpaper?: () => void;
}

/**
 * スマートフォン向け画面下部固定ナビゲーションバー ＆ スライドアップメニューコンポーネント
 * 親指で自然な操作ができる画面下部に主要導線（トップ／お品書き／料理写真／アクセス／メニュー）を配置し、
 * 「メニュー」タブから全セクションおよび仕様書・電話・地図・Instagramへ素早くアクセスできます。
 */
const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
  onOpenLightpaper
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const styles = AppTheme.getMobileBottomNavClasses();
  const activeTabId: MobileNavTabId = isSheetOpen
    ? 'more'
    : SectionNavigator.resolveMobileTabId(activeSection);

  // ボトムシート表示中のESCキー終了および背面スクロール抑止
  useEffect(() => {
    if (!isSheetOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSheetOpen(false);
      }
    };

    let previousOverflow = '';
    try {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } catch (err) {
      console.warn('モバイルメニュー表示制御の初期化に失敗しました:', err);
    }

    return () => {
      try {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      } catch (err) {
        console.warn('モバイルメニュー表示制御のクリーンアップに失敗しました:', err);
      }
    };
  }, [isSheetOpen]);

  /**
   * タブ・シート項目クリック時の安全なセクション遷移ハンドラ
   */
  const handleSelectSection = (sectionId: string) => {
    try {
      setIsSheetOpen(false);
      onNavigate(sectionId);
    } catch (err) {
      console.error('モバイルナビゲーション遷移中にエラーが発生しました:', err);
    }
  };

  /**
   * 主要タブごとのアイコンを取得
   */
  const renderTabIcon = (tabId: Exclude<MobileNavTabId, 'more'>, isActive: boolean) => {
    const iconClass = styles.tabIcon(isActive);
    switch (tabId) {
      case 'hero':
        return <Home size={20} className={iconClass} aria-hidden="true" />;
      case 'menu':
        return <Utensils size={20} className={iconClass} aria-hidden="true" />;
      case 'gallery':
        return <Camera size={20} className={iconClass} aria-hidden="true" />;
      case 'access':
        return <MapPin size={20} className={iconClass} aria-hidden="true" />;
      default:
        return <Home size={20} className={iconClass} aria-hidden="true" />;
    }
  };

  const sanitizedPhone = PHONE_NUMBER.replace(/-/g, '');

  return (
    <>
      {/* 画面下部固定ナビゲーションバー（スマートフォン・タブレット向け） */}
      <nav
        className={styles.bar}
        aria-label="スマートフォン下部ナビゲーション"
      >
        <div className={styles.grid}>
          {SectionNavigator.MOBILE_PRIMARY_TABS.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleSelectSection(tab.id)}
                className={styles.tabButton(isActive)}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && <span className={styles.activeBar} aria-hidden="true" />}
                {renderTabIcon(tab.id, isActive)}
                <span className={styles.tabLabel(isActive)}>{tab.label}</span>
              </button>
            );
          })}

          {/* 全メニュー・クイックアクションを開くボトムシートトリガー */}
          <button
            type="button"
            onClick={() => setIsSheetOpen((prev) => !prev)}
            className={styles.tabButton(activeTabId === 'more')}
            aria-expanded={isSheetOpen}
            aria-controls="mobile-nav-sheet"
            aria-label="すべてのメニューを開く"
          >
            {activeTabId === 'more' && <span className={styles.activeBar} aria-hidden="true" />}
            {isSheetOpen ? (
              <X size={20} className={styles.tabIcon(true)} aria-hidden="true" />
            ) : (
              <Menu size={20} className={styles.tabIcon(activeTabId === 'more')} aria-hidden="true" />
            )}
            <span className={styles.tabLabel(activeTabId === 'more')}>
              {isSheetOpen ? '閉じる' : 'メニュー'}
            </span>
          </button>
        </div>
      </nav>

      {/* 全セクション・クイックアクション用ボトムシート */}
      {isSheetOpen && (
        <div
          className={styles.sheetBackdrop}
          onClick={() => setIsSheetOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-nav-sheet-title"
          id="mobile-nav-sheet"
        >
          <div
            className={styles.sheetContainer}
            onClick={(event) => event.stopPropagation()}
          >
            {/* ドラッグハンドル意匠 */}
            <div className={styles.sheetHandleWrap}>
              <span className={styles.sheetHandle} aria-hidden="true" />
            </div>

            {/* シートヘッダー */}
            <div className={styles.sheetHeader}>
              <div>
                <h2 id="mobile-nav-sheet-title" className={styles.sheetTitle}>
                  {SITE_NAME} メニュー
                </h2>
                <p className={styles.sheetSubtitle}>Version {APP_VERSION}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsSheetOpen(false)}
                className={styles.sheetCloseBtn}
                aria-label="メニューを閉じる"
              >
                <X size={20} />
              </button>
            </div>

            {/* セクション一覧 ＆ 外部クイックアクション */}
            <div className={styles.sheetBody}>
              <div className={styles.sheetSectionList}>
                {SectionNavigator.ALL_SECTIONS.map((section) => {
                  const isCurrent = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => handleSelectSection(section.id)}
                      className={styles.sheetSectionBtn(isCurrent)}
                      aria-current={isCurrent ? 'page' : undefined}
                    >
                      <div>
                        <div className={styles.sheetSectionTitle(isCurrent)}>
                          {section.label}
                        </div>
                        <div className={styles.sheetSectionDesc}>
                          {section.description}
                        </div>
                      </div>
                      <ChevronRight
                        size={16}
                        className={styles.sheetSectionArrow(isCurrent)}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>

              <div>
                <div className={styles.sheetActionsHeading}>クイックアクション</div>
                <div className={styles.sheetActionsGrid}>
                  <a
                    href={`tel:${sanitizedPhone}`}
                    className={styles.sheetPhoneBtn}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Phone size={15} aria-hidden="true" />
                    <span>電話で問い合わせ</span>
                  </a>

                  <a
                    href={GOOGLE_MAPS_LOCATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sheetMapBtn}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <MapPin size={15} aria-hidden="true" />
                    <span>Googleマップ</span>
                  </a>

                  {onOpenLightpaper && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsSheetOpen(false);
                        onOpenLightpaper();
                      }}
                      className={styles.sheetSpecBtn}
                    >
                      <BookOpen size={15} className="text-[#c5a059]" aria-hidden="true" />
                      <span>店舗仕様書</span>
                    </button>
                  )}

                  <a
                    href={RESERVATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sheetInstagramBtn}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Instagram size={15} aria-hidden="true" />
                    <span>公式Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileBottomNav;
