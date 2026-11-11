import React, { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import AccessSection from './components/AccessSection';
import InfoSection from './components/InfoSection';
import InstagramFeed from './components/InstagramFeed';
import MediaSection from './components/MediaSection';
import { LightpaperModal } from './components/LightpaperModal';
import { Dish3DModal } from './components/Dish3DModal';

const App: React.FC = () => {
  // ライトペーパー（仕様書）モーダル表示ステート
  const [isLightpaperOpen, setIsLightpaperOpen] = useState(false);
  // 3D 360°料理確認モーダル表示ステート
  const [is3DModalOpen, setIs3DModalOpen] = useState(false);
  const [selected3DDishId, setSelected3DDishId] = useState<string | undefined>(undefined);

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

  const handleOpen3D = (dishId?: string) => {
    setSelected3DDishId(dishId);
    setIs3DModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] font-sans text-[#1a1a1a]">
      {/* ナビゲーションバー */}
      <Navbar 
        scrollToSection={scrollToSection} 
        onOpenLightpaper={() => setIsLightpaperOpen(true)}
        onOpen3D={() => handleOpen3D()}
      />
      
      <main>
        {/* 各コンポーネントは内部で定義されたデフォルト画像または定数画像を使用します */}
        <Hero 
          onExploreGallery={() => scrollToSection('gallery')} 
          onOpen3D={() => handleOpen3D()}
        />
        <Concept />
        <MenuSection />
        {/* 割烹食堂かいね 実際のお料理写真ギャラリー＆3Dビューアー */}
        <Gallery />
        <MediaSection />
        <AccessSection />
        <InstagramFeed />
        <InfoSection />
      </main>
      
      {/* 3D 360°料理確認モーダル */}
      <Dish3DModal 
        isOpen={is3DModalOpen}
        dishId={selected3DDishId}
        onClose={() => setIs3DModalOpen(false)}
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
