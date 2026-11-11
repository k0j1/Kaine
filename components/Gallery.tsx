import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  LayoutGrid, 
  Rotate3d, 
  Sparkles, 
  Maximize2 
} from 'lucide-react';
import { GalleryService, PhotoItemModel } from '../services/galleryService';
import { PhotoModal } from './PhotoModal';
import { Dish3DViewer } from './Dish3DViewer';
import { Dish3DModal } from './Dish3DModal';
import { AppTheme } from '../theme';

interface GalleryProps {
  apiImages?: string[];
  initialViewMode?: 'grid' | '3dviewer' | 'carousel3d';
}

/**
 * 料理と空間ギャラリーコンポーネント
 * 添付された割烹食堂かいねの実際のお料理写真をメインとして展示し、
 * 「一覧グリッド」「3D 360°ビューアー（動画連動全方位回転）」「和モダン3Dカルーセル」の表示形式で閲覧可能にします。
 * （※Googleマップからの写真掲載の記載は全て削除）
 */
const Gallery: React.FC<GalleryProps> = ({ apiImages, initialViewMode = 'grid' }) => {
  // 表示形式（グリッド、3D 360°ビューアー、または 3Dカルーセル）
  const [viewMode, setViewMode] = useState<'grid' | '3dviewer' | 'carousel3d'>(initialViewMode);
  // 拡大表示用モーダルステート
  const [activePhoto, setActivePhoto] = useState<PhotoItemModel | null>(null);
  // 3D 360°料理確認モーダル用ステート
  const [active3DDishId, setActive3DDishId] = useState<string | null>(null);

  // 3Dカルーセル用の回転ステート
  const [rotation, setRotation] = useState(0);
  const autoRotateRef = useRef<number>(0);
  const isHoveringRef = useRef(false);

  // ギャラリーサービス（OOP Singleton）
  const galleryService = useMemo(() => GalleryService.getInstance(), []);
  
  // 実際のお料理写真リスト
  const photos = useMemo(() => {
    return galleryService.getAllPhotos();
  }, [galleryService]);

  // 3Dカルーセル用の画像リスト
  const carouselDisplayItems = useMemo(() => {
    if (apiImages && apiImages.length > 0) {
      return apiImages.map((src, index) => ({
        id: `api-${index}`,
        src,
        title: '割烹食堂かいね お料理',
        price: ''
      }));
    }
    return photos.map(photo => ({
      id: photo.id,
      src: photo.imageUrl,
      title: photo.title,
      price: photo.price || ''
    }));
  }, [apiImages, photos]);

  // 画像枚数に合わせて角度を調整
  const numberOfImages = Math.max(carouselDisplayItems.length, 1);
  const anglePerImage = 360 / numberOfImages;
  const radius = 320; // 中心からの距離

  // 3D回転アニメーションループ
  useEffect(() => {
    if (viewMode !== 'carousel3d') return;

    const animate = () => {
      if (!isHoveringRef.current) {
        setRotation(prev => prev - 0.2); // 時計回りにゆっくり回転
      }
      autoRotateRef.current = requestAnimationFrame(animate);
    };
    autoRotateRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current);
    };
  }, [viewMode]);

  const headerClass = AppTheme.getSectionHeaderClass();

  // 定番看板料理の解説リスト
  const signatureDishes = [
    {
      name: '名物 鶏かつ定食 (150g / 300g)',
      price: '¥980 / W定食 ¥1,380',
      description: '低温火入れによる鶏肉の進化した味わい。極厚ながら驚くほど柔らかくジューシー。自家製出汁ソースと果実塩で。【ご飯おかわり無料】'
    },
    {
      name: 'とろける 極上レバかつ定食',
      price: '¥880',
      description: 'まるでフォアグラのようなとろとろの口当たり。臭みが一切なく、専用ダシソースで濃厚な旨味をご堪能いただけます。【ご飯おかわり無料】'
    },
    {
      name: '彩り 海鮮ばらチラシ',
      price: '¥1,580',
      description: '長期熟成の特製赤酢ブレンド寿司酢に、市場直送の厳選鮮魚を贅沢に散りばめた珠玉の一杯。昼夜問わず愛される人気メニューです。'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden scroll-mt-20">
      <div className={AppTheme.spacing.containerMax}>
        {/* セクション見出し */}
        <div className="text-center mb-10">
          <p className={headerClass.subtitle}>Cuisine & Atmosphere Gallery</p>
          <h2 className={headerClass.title}>お料理と空間のギャラリー</h2>
          <div className={headerClass.ornament}></div>
          <p className="font-serif text-[#4b5563] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            割烹食堂かいねの実際のお料理をご紹介いたします。<br />
            市場直送の新鮮な海の幸、職人の技が光る繊細な火入れ、そして四季の恵みを感じる一皿をお楽しみください。
          </p>
        </div>

        {/* コントロールバー：表示形式切り替え */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-serif font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#c5a059]" />
              <span>割烹食堂かいね 実際のお料理</span>
            </span>
          </div>

          {/* 表示モード切り替えボタン */}
          <div className="flex items-center bg-stone-100 p-0.5 rounded-sm border border-stone-200">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-sm text-xs font-serif flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-[#2c3e50] shadow-xs font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
              title="一覧グリッド表示"
            >
              <LayoutGrid size={14} />
              <span>一覧</span>
            </button>
            <button
              onClick={() => setViewMode('3dviewer')}
              className={`px-3 py-1.5 rounded-sm text-xs font-serif flex items-center gap-1.5 transition-colors ${
                viewMode === '3dviewer'
                  ? 'bg-white text-[#c5a059] shadow-xs font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
              title="3D 360°全方位料理ビューアー"
            >
              <Rotate3d size={14} className={viewMode === '3dviewer' ? 'text-[#c5a059]' : ''} />
              <span>3D 360°ビューアー</span>
            </button>
            <button
              onClick={() => setViewMode('carousel3d')}
              className={`px-3 py-1.5 rounded-sm text-xs font-serif flex items-center gap-1.5 transition-colors ${
                viewMode === 'carousel3d'
                  ? 'bg-white text-[#2c3e50] shadow-xs font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
              title="3D回転カルーセル表示"
            >
              <Rotate3d size={14} />
              <span>カルーセル</span>
            </button>
          </div>
        </div>

        {/* 1. 一覧グリッド表示 */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className={`group relative bg-white ${AppTheme.rounded.sm} border border-stone-200 overflow-hidden cursor-pointer ${AppTheme.shadows.card} hover:${AppTheme.shadows.cardHover} transition-all duration-300 flex flex-col`}
              >
                {/* 料理写真 */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* 特選バッジ */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm flex items-center gap-1 border border-white/10 font-serif">
                    <Sparkles size={11} className="text-[#c5a059]" />
                    <span>特選お料理</span>
                  </div>

                  {/* 価格・区分バッジ */}
                  {photo.price && (
                    <div className="absolute top-3 right-3 bg-[#2c3e50]/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-sm font-serif font-bold">
                      {photo.price}
                    </div>
                  )}

                  {/* ホバーオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[#c5a059] text-xs font-serif flex items-center gap-1 mb-1 font-semibold">
                      <Maximize2 size={13} /> クリックで拡大・詳細表示
                    </span>
                    <p className="text-white text-xs font-serif leading-relaxed line-clamp-2">
                      {photo.description}
                    </p>
                  </div>
                </div>

                {/* 料理情報 */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1a1a1a] group-hover:text-[#2c3e50] transition-colors mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-xs font-serif text-[#6b7280] leading-relaxed mb-4">
                      {photo.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-serif">
                    <span className="text-[#c5a059] font-medium">{photo.authorName}</span>
                    <div className="flex items-center gap-2">
                      {photo.has3D && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActive3DDishId(photo.id);
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#c5a059]/15 hover:bg-[#c5a059] text-[#9e7e3e] hover:text-white border border-[#c5a059]/40 rounded-sm font-semibold transition-all shadow-2xs"
                          title="3D 360°回転で細部を確認"
                        >
                          <Rotate3d size={12} />
                          <span>3D 360°確認</span>
                        </button>
                      )}
                      <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-[#2c3e50] font-semibold">
                        詳しく見る →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. 3D 360°インタラクティブビューアー表示 */}
        {viewMode === '3dviewer' && (
          <div className="mb-14">
            <Dish3DViewer initialDishId={active3DDishId || undefined} />
          </div>
        )}

        {/* 2. 和モダン3Dカルーセル表示 */}
        {viewMode === 'carousel3d' && (
          <div className="my-10">
            <div 
              className="relative h-[480px] md:h-[540px] flex items-center justify-center perspective-1000"
              onMouseEnter={() => isHoveringRef.current = true}
              onMouseLeave={() => isHoveringRef.current = false}
            >
              <div 
                className="relative w-[290px] md:w-[340px] h-[220px] md:h-[250px] preserve-3d transition-transform duration-100"
                style={{ transform: `rotateY(${rotation}deg)` }}
              >
                {carouselDisplayItems.map((img, index) => {
                  const angle = index * anglePerImage;
                  return (
                    <div
                      key={img.id}
                      className="absolute top-0 left-0 w-full h-full"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                        backfaceVisibility: 'hidden'
                      }}
                    >
                      {/* 3Dカード */}
                      <div className="relative w-full h-full group transform-style-3d cursor-pointer">
                        <div className="absolute inset-0 bg-white p-2 shadow-xl border border-stone-200 rounded-sm">
                          <div className="w-full h-full overflow-hidden relative">
                            <img 
                              src={img.src} 
                              alt={img.title} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                              <span className="text-white font-serif text-sm font-bold">{img.title}</span>
                              {img.price && (
                                <span className="text-[#e6c887] text-xs font-serif mt-1">{img.price}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* 反射効果 */}
                        <div 
                          className="absolute -bottom-[230px] left-0 w-full h-full opacity-20 transform scale-y-[-1] pointer-events-none"
                          style={{ 
                            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.7), white), url(${img.src})`,
                            backgroundSize: 'cover',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' 
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center mt-4">
              <span className="text-xs text-stone-400 block mb-1">※マウスを乗せると回転が停止します</span>
              <p className="font-serif text-[#4b5563] text-sm leading-relaxed">
                目で楽しみ、舌で味わう。割烹食堂かいねの実際のお料理が巡ります。
              </p>
            </div>
          </div>
        )}

        {/* かいね自慢の看板料理ピックアップ */}
        <div className="bg-[#fafaf7] border border-stone-200 p-6 md:p-8 rounded-sm mt-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-2">
              名物のお料理・お品書き
            </h3>
            <p className="text-xs text-stone-500 font-serif">
              厳選された仕込みと職人の技術が光る定番の逸品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatureDishes.map((dish, idx) => (
              <div key={idx} className="bg-white p-5 rounded-sm border border-stone-200 shadow-xs">
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif font-bold text-sm text-[#1a1a1a]">
                    {dish.name}
                  </h4>
                  <span className="font-serif font-bold text-xs text-[#2c3e50] whitespace-nowrap ml-2">
                    {dish.price}
                  </span>
                </div>
                <div className="w-8 h-0.5 bg-[#c5a059] mb-2.5"></div>
                <p className="text-xs font-serif text-[#4b5563] leading-relaxed">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 下部案内テキスト */}
        <div className="mt-14 pt-8 border-t border-stone-200 text-center">
          <p className="font-serif text-[#4b5563] text-sm leading-loose max-w-xl mx-auto mb-6">
            割烹食堂かいねでは、四季折々の食材と丁寧な仕込みにこだわり、<br className="hidden sm:inline" />
            訪れるたびに心に残る一皿をお届けしております。
          </p>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white px-8 py-3 rounded-sm text-sm font-serif transition-colors shadow-sm"
          >
            <span>お品書き（メニュー）を見る</span>
          </a>
        </div>
      </div>

      {/* 料理写真拡大・詳細モーダル */}
      <PhotoModal
        photo={activePhoto}
        allPhotos={photos}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(p) => setActivePhoto(p)}
        onOpen3D={(dishId) => setActive3DDishId(dishId)}
      />

      {/* 3D 360°料理確認モーダル */}
      <Dish3DModal
        isOpen={Boolean(active3DDishId && viewMode !== '3dviewer')}
        dishId={active3DDishId || undefined}
        onClose={() => setActive3DDishId(null)}
      />

      {/* 3Dカルーセル用CSS */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
