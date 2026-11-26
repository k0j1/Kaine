import React, { useState, useEffect, useCallback } from 'react';
import sdk from '@farcaster/miniapp-sdk';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import AccessSection from './components/AccessSection';
import InfoSection from './components/InfoSection';
import MediaSection from './components/MediaSection';
import MobileBottomNav from './components/MobileBottomNav';
import { LightpaperModal } from './components/LightpaperModal';
import { AppTheme } from './theme';
import { SectionNavigator } from './services/sectionNavigator';

const App: React.FC = () => {
  // ライトペーパー（仕様書）モーダル表示ステート
  const [isLightpaperOpen, setIsLightpaperOpen] = useState(false);
  // 現在閲覧中のセクションID（スマートフォン下部ナビゲーションのアクティブ表示用）
  const [activeSection, setActiveSection] = useState<string>('hero');
  const shellClasses = AppTheme.getAppShellClasses();

  // Farcaster Mini Apps SDK 初期化処理（チェックリスト準拠）
  useEffect(() => {
    const initFarcaster = async () => {
      try {
        // Mini App環境下で実行されている場合、スプラッシュ画面を閉じて準備完了を通知
        await sdk.actions.ready();
      } catch (err) {
        // 通常のブラウザ環境ではエラーにならずサイレントに続行
        console.debug('Farcaster MiniApp SDK initialized in standalone browser:', err);
      }
    };
    initFarcaster();
  }, []);

  // スクロール位置に応じたアクティブセクションの追跡（requestAnimationFrameで最適化）
  useEffect(() => {
    let rafId: number | null = null;

    const updateActiveSection = () => {
      rafId = null;
      const detected = SectionNavigator.detectActiveSection();
      setActiveSection((prev) => (prev === detected ? prev : detected));
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateActiveSection);
    };

    try {
      updateActiveSection();
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll, { passive: true });
    } catch (err) {
      console.warn('スクロール監視の初期化に失敗しました:', err);
    }

    return () => {
      try {
        if (rafId !== null) {
          window.cancelAnimationFrame(rafId);
        }
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      } catch (err) {
        console.warn('スクロール監視の解除に失敗しました:', err);
      }
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    try {
      setActiveSection(id);
      SectionNavigator.scrollToSection(id);
    } catch (err) {
      console.error('セクション移動処理中にエラーが発生しました:', err);
    }
  }, []);

  return (
    <div className={shellClasses.root}>
      {/* ナビゲーションバー */}
      <Navbar 
        scrollToSection={scrollToSection} 
        onOpenLightpaper={() => setIsLightpaperOpen(true)}
      />
      
      <main>
        {/* 各コンポーネントは内部で定義されたデフォルト画像または定数画像を使用します */}
        <Hero 
          onExploreGallery={() => scrollToSection('gallery')} 
        />
        <Concept />
        <MenuSection />
        {/* 割烹食堂かいね 実際のお料理写真ギャラリー */}
        <Gallery />
        <MediaSection />
        <AccessSection />
        <InfoSection />
      </main>

      {/* スマートフォン向け画面下部ナビゲーションメニュー */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenLightpaper={() => setIsLightpaperOpen(true)}
      />
      
      {/* 店舗思想・調理技術仕様書（ライトペーパー）モーダル */}
      <LightpaperModal 
        isOpen={isLightpaperOpen} 
        onClose={() => setIsLightpaperOpen(false)} 
      />
    </div>
  );
};

export default App;
