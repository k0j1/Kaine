import React, { useState, useEffect } from 'react';
import { SITE_SUBTITLE, APP_VERSION, PLACE_PHOTOS } from '../constants';
import { ChevronDown, Sparkles, Rotate3d } from 'lucide-react';
import { AppTheme } from '../theme';

interface HeroProps {
  heroImage?: string;
  onExploreGallery?: () => void;
  onOpen3D?: () => void;
}

/**
 * ヒーローセクションコンポーネント
 * 添付された割烹食堂かいねの実際のお料理写真をメインビジュアルとして採用し、
 * タイトル画面のバージョン3桁目（v1.0.5）を明記します。
 * （※Googleマップからの写真掲載の記載は全て削除、3D 360°ビューアー導線完備）
 */
const Hero: React.FC<HeroProps> = ({ heroImage, onExploreGallery, onOpen3D }) => {
  // 添付された4枚の実際のお料理写真
  const heroPhotos = PLACE_PHOTOS.slice(0, 4);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // 自動スライドショー（6秒ごと）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % heroPhotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroPhotos.length]);

  const activePhoto = heroPhotos[currentPhotoIndex] || heroPhotos[0];
  const bgImage = heroImage || activePhoto.imageUrl;

  const handleScrollToGallery = () => {
    if (onOpen3D) {
      onOpen3D();
      return;
    }
    if (onExploreGallery) {
      onExploreGallery();
      return;
    }
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt={activePhoto.title} 
          className="w-full h-full object-cover opacity-85 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 fade-in max-w-4xl mx-auto flex flex-col items-center">
        {/* バージョンバッジ */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-mono text-[#e6c887]">
            <Sparkles size={13} className="text-[#c5a059]" />
            <span>割烹食堂かいね 公式サイト v{APP_VERSION}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#c5a059]/20 backdrop-blur-md border border-[#c5a059]/40 rounded-full text-xs font-serif text-[#e6c887]">
            <Rotate3d size={13} className="text-[#c5a059]" />
            <span>3D 360°料理ビューアー搭載</span>
          </span>
        </div>

        {/* 縦書きキャッチコピー */}
        <div className="mb-6">
          <span className="writing-vertical-rl text-base md:text-xl tracking-[0.5em] font-serif border-l border-white/40 pl-4 py-6 h-40 md:h-44 inline-block text-stone-200">
            季節を味わう、心の料理
          </span>
        </div>

        {/* 店舗メインタイトル */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 tracking-[0.2em] text-white drop-shadow-md">
          割烹食堂 かいね
        </h1>

        <p className="text-sm md:text-lg font-light tracking-[0.3em] uppercase text-stone-300 mb-6">
          {SITE_SUBTITLE}
        </p>

        {/* 現在のメイン料理名キャプション */}
        <div className="mb-8 inline-flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs md:text-sm font-serif text-[#e6c887]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse"></span>
          <span>{activePhoto.title}</span>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <button
            onClick={handleScrollToGallery}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#9e7e3e] text-white px-8 py-3.5 rounded-sm text-sm font-serif font-medium tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Rotate3d size={17} className="group-hover:rotate-45 transition-transform" />
            <span>3D 360°で料理を見る</span>
          </button>
          <a
            href="#concept"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-sm text-sm font-serif tracking-wider transition-all duration-300 backdrop-blur-xs"
          >
            <span>かいねのこだわり（note記事）</span>
          </a>
        </div>

        {/* 添付料理写真の切替サムネイルインジケーター */}
        <div className="flex items-center gap-2.5 mb-6">
          {heroPhotos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setCurrentPhotoIndex(index)}
              className={`relative w-12 h-12 md:w-14 md:h-14 rounded-sm overflow-hidden border-2 transition-all ${
                index === currentPhotoIndex 
                  ? 'border-[#c5a059] scale-110 shadow-lg ring-2 ring-[#c5a059]/40' 
                  : 'border-white/40 opacity-60 hover:opacity-100'
              }`}
              title={photo.title}
            >
              <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* 下スクロールインジケーター */}
        <div className="cursor-pointer" onClick={handleScrollToGallery}>
          <div className="animate-bounce flex flex-col items-center text-stone-400 hover:text-white transition-colors">
            <span className="text-[10px] font-serif tracking-widest uppercase mb-1">Scroll</span>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
