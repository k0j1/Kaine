import React, { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import AccessSection from './components/AccessSection';
import InfoSection from './components/InfoSection';
import MediaSection from './components/MediaSection';
import { LightpaperModal } from './components/LightpaperModal';

const App: React.FC = () => {
  // ライトペーパー（仕様書）モーダル表示ステート
  const [isLightpaperOpen, setIsLightpaperOpen] = useState(false);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans text-[#1a1a1a]">
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
      
      {/* 店舗思想・調理技術仕様書（ライトペーパー）モーダル */}
      <LightpaperModal 
        isOpen={isLightpaperOpen} 
        onClose={() => setIsLightpaperOpen(false)} 
      />
    </div>
  );
};

export default App;
