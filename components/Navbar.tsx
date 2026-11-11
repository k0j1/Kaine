import React, { useState } from 'react';
import { Menu, X, Instagram, BookOpen, MapPin, Rotate3d } from 'lucide-react';
import { SITE_NAME, RESERVATION_URL, APP_VERSION, GOOGLE_MAPS_LOCATION_URL } from '../constants';
import { AppTheme } from '../theme';

interface NavbarProps {
  scrollToSection: (id: string) => void;
  onOpenLightpaper?: () => void;
  onOpen3D?: () => void;
}

/**
 * ナビゲーションバーコンポーネント
 * バージョン表記(v1.0.5)、ライトペーパー（仕様書）表示機能、3D料理ビューアー、店舗地図リンクを提供します。
 * （※空席状況・WEB予約機能は削除）
 */
const Navbar: React.FC<NavbarProps> = ({ scrollToSection, onOpenLightpaper, onOpen3D }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
      <div className={AppTheme.spacing.containerMax}>
        <div className="flex items-center justify-between h-20">
          {/* ブランドロゴ ＆ バージョンバッジ */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-[#1a1a1a] tracking-wider">
              {SITE_NAME}
            </h1>
            <span 
              className="text-[10px] font-mono px-2 py-0.5 bg-[#c5a059]/15 text-[#9e7e3e] border border-[#c5a059]/30 rounded-sm font-semibold tracking-normal"
              title={`割烹食堂かいね バージョン ${APP_VERSION}`}
            >
              v{APP_VERSION}
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {['Concept', 'Menu', 'Gallery', 'Media', 'Access', 'Info'].map((item) => {
              const label = 
                item === 'Concept' ? 'こだわり' :
                item === 'Menu' ? 'お品書き' :
                item === 'Gallery' ? '料理ギャラリー' :
                item === 'Media' ? '掲載・note' :
                item === 'Access' ? 'アクセス' : '店舗情報';
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-[#2c3e50] hover:text-[#c5a059] px-2 py-1 text-sm font-serif font-medium transition-colors tracking-wider"
                >
                  {label}
                </button>
              );
            })}

            {/* 3D料理ビューアー ボタン */}
            {onOpen3D && (
              <button
                onClick={onOpen3D}
                className="inline-flex items-center gap-1.5 text-xs font-serif text-[#9e7e3e] bg-[#c5a059]/15 hover:bg-[#c5a059] hover:text-white border border-[#c5a059]/40 px-3 py-1.5 rounded-sm transition-all"
                title="360度インタラクティブ3D料理ビューアーを開く"
              >
                <Rotate3d size={14} className="text-[#c5a059]" />
                <span>3D料理ビュー</span>
              </button>
            )}

            {/* 仕様書（ライトペーパー）ボタン */}
            {onOpenLightpaper && (
              <button
                onClick={onOpenLightpaper}
                className="inline-flex items-center gap-1.5 text-xs font-serif text-[#4b5563] hover:text-[#1a1a1a] border border-stone-300 hover:border-stone-400 px-3 py-1.5 rounded-sm transition-colors"
                title="店舗理念・調理技術規格・アップデート履歴"
              >
                <BookOpen size={14} className="text-[#c5a059]" />
                <span>仕様書</span>
              </button>
            )}

            {/* Google Maps ボタン */}
            <a
              href={GOOGLE_MAPS_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#4285F4] hover:bg-[#3367d6] text-white px-3.5 py-1.5 rounded-sm text-xs font-serif transition-colors shadow-sm"
              title="店舗地図・アクセスを確認"
            >
              <MapPin size={14} />
              <span>店舗地図</span>
            </a>

            {/* 公式 Instagram ボタン */}
            <a 
               href={RESERVATION_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="border border-[#2c3e50] text-[#2c3e50] hover:bg-[#2c3e50] hover:text-white px-3.5 py-1.5 rounded-sm text-xs font-serif transition-colors flex items-center gap-1.5"
            >
              <Instagram size={14} />
              <span>公式Instagram</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {onOpenLightpaper && (
              <button
                onClick={onOpenLightpaper}
                className="p-1.5 text-stone-600 border border-stone-300 rounded text-xs font-serif flex items-center gap-1"
                aria-label="仕様書"
              >
                <BookOpen size={14} className="text-[#c5a059]" />
                <span className="text-[11px]">仕様書</span>
              </button>
            )}
            <button
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

             {['Concept', 'Menu', 'Gallery', 'Media', 'Access', 'Info'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-[#2c3e50] hover:text-[#c5a059] block py-2.5 rounded-sm text-base font-medium w-full text-center font-serif border-b border-stone-50"
                >
                  {item === 'Concept' ? 'こだわり（note記事）' : item === 'Gallery' ? 'お料理ギャラリー' : item === 'Menu' ? 'お品書き' : item === 'Media' ? '掲載情報・note' : item}
                </button>
              ))}

              {onOpen3D && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpen3D();
                  }}
                  className="w-full py-2.5 text-center text-sm font-serif text-[#9e7e3e] bg-[#c5a059]/10 hover:bg-[#c5a059]/20 flex items-center justify-center gap-2 border border-[#c5a059]/30 rounded-sm mt-2"
                >
                  <Rotate3d size={16} className="text-[#c5a059]" />
                  <span>3D 360°料理ビューアーを開く</span>
                </button>
              )}

              {onOpenLightpaper && (
                <button
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
