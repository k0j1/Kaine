import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  LayoutGrid,
  Sparkles,
  Maximize2,
  Search,
  X,
  BookOpen,
  ExternalLink,
  ChevronDown,
  Layers
} from 'lucide-react';
import { GalleryService, PhotoItemModel } from '../services/galleryService';
import { PlacePhotoCategory } from '../types';
import { NOTE_LUNCH_ARTICLE_URL, NOTE_MEAT_ARTICLE_URL, NOTE_NOODLE_ARTICLE_URL } from '../constants';
import { PhotoModal } from './PhotoModal';
import { ResilientImage } from './ResilientImage';
import { AppTheme } from '../theme';

interface GalleryProps {
  apiImages?: string[];
  initialViewMode?: 'grid' | 'carousel3d';
}

const INITIAL_ALL_LIMIT = 10;

/**
 * 料理と空間ギャラリーコンポーネント
 * 添付された割烹食堂かいねの実際のお料理写真および公式note（定番ランチ・低温火入の肉料理・麺料理）の料理群を展示し、
 * 「一覧グリッド」「和モダンカルーセル」の表示形式で閲覧可能にします。
 * （※Googleマップからの写真掲載の記載および3D 360°動画ビューアー機能は全て削除）
 */
const Gallery: React.FC<GalleryProps> = ({ apiImages, initialViewMode = 'grid' }) => {
  // 表示形式（グリッドまたはカルーセル）
  const [viewMode, setViewMode] = useState<'grid' | 'carousel3d'>(initialViewMode);
  // カテゴリ・サブカテゴリ・検索フィルターステート
  const [selectedCategory, setSelectedCategory] = useState<PlacePhotoCategory>(PlacePhotoCategory.ALL);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllInDefault, setShowAllInDefault] = useState<boolean>(false);

  // 拡大表示用モーダルステート
  const [activePhoto, setActivePhoto] = useState<PhotoItemModel | null>(null);

  // 3Dカルーセル用の回転ステート
  const [rotation, setRotation] = useState(0);
  const autoRotateRef = useRef<number>(0);
  const isHoveringRef = useRef(false);

  // ギャラリーサービス（OOP Singleton）
  const galleryService = useMemo(() => GalleryService.getInstance(), []);

  // 利用可能なカテゴリ・サブカテゴリ一覧
  const availableCategories = useMemo(() => galleryService.getAvailableCategories(), [galleryService]);
  const subCategories = useMemo(
    () => galleryService.getSubCategories(selectedCategory),
    [galleryService, selectedCategory]
  );

  // フィルタリング済みのお料理写真リスト
  const filteredPhotos = useMemo(() => {
    return galleryService.filterPhotos(selectedCategory, searchQuery, selectedSubCategory);
  }, [galleryService, selectedCategory, searchQuery, selectedSubCategory]);

  // 一覧グリッド表示用スライス（「すべて」無検索時は初期10品を表示し、任意で全36品展開可能）
  const isFilteredView =
    selectedCategory !== PlacePhotoCategory.ALL ||
    selectedSubCategory !== 'ALL' ||
    searchQuery.trim().length > 0;

  const visiblePhotos = useMemo(() => {
    if (isFilteredView || showAllInDefault) {
      return filteredPhotos;
    }
    return filteredPhotos.slice(0, INITIAL_ALL_LIMIT);
  }, [filteredPhotos, isFilteredView, showAllInDefault]);

  // カテゴリ変更時にサブカテゴリをリセット
  const handleSelectCategory = (category: PlacePhotoCategory) => {
    setSelectedCategory(category);
    setSelectedSubCategory('ALL');
  };

  // 3Dカルーセル用の画像リスト（リング上の重なりを防ぐため代表10品に最適化）
  const carouselDisplayItems = useMemo(() => {
    if (apiImages && apiImages.length > 0) {
      return apiImages.slice(0, 10).map((src, index) => ({
        id: `api-${index}`,
        src,
        title: '割烹食堂かいね お料理',
        price: ''
      }));
    }
    const sourceList = filteredPhotos.length > 0 ? filteredPhotos : galleryService.getAllPhotos();
    return sourceList.slice(0, 10).map(photo => ({
      id: photo.id,
      src: photo.imageUrl,
      title: photo.title,
      price: photo.price || ''
    }));
  }, [apiImages, filteredPhotos, galleryService]);

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
  const cardClasses = AppTheme.getDishCardClasses();

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

  // アクティブカテゴリに応じた公式note記事案内情報
  const activeArticleMeta = useMemo(() => {
    if (selectedCategory === PlacePhotoCategory.SIGNATURE) {
      return {
        title: '公式note特集「【割烹食堂かいね】定番ランチメニュー」より（全5品）',
        description: '低温火入の「鶏かつ（150g）」「鶏かつW（300g）」、とろける「レバカツ定食」、旬鮮魚「お刺身定食」、特製寿司酢「海鮮バラちらし」を掲載。',
        url: NOTE_LUNCH_ARTICLE_URL
      };
    }
    if (selectedCategory === PlacePhotoCategory.MEAT_LOWTEMP) {
      return {
        title: '公式note特集「【割烹食堂かいね】低温火入の肉料理」より（全21品）',
        description: '看板の鶏かつから鶏レバニラ、福島牛・仙台牛ステーキ、豚かしら、ロースト3種まで低温調理の技を網羅。',
        url: NOTE_MEAT_ARTICLE_URL
      };
    }
    if (selectedCategory === PlacePhotoCategory.NOODLES) {
      return {
        title: '公式note特集「【割烹食堂かいね】麺料理」より（全11品）',
        description: '三色素麺、鯛出汁塩だれラーメン、本鮪の目玉出汁カレーうどん、鴨葱・葱鮪蕎麦、鮪の肉味噌冷麺、塩出汁米麺まで。',
        url: NOTE_NOODLE_ARTICLE_URL
      };
    }
    return null;
  }, [selectedCategory]);

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden scroll-mt-20">
      <div className={AppTheme.spacing.containerMax}>
        {/* セクション見出し */}
        <div className="text-center mb-10">
          <p className={headerClass.subtitle}>Cuisine & Atmosphere Gallery</p>
          <h2 className={headerClass.title}>お料理と空間のギャラリー</h2>
          <div className={headerClass.ornament}></div>
          <p className="font-serif text-[#4b5563] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            割烹食堂かいねの実際のお料理および公式note掲載の特集料理をご紹介いたします。<br />
            王道の「定番ランチ（5品）」、精密な温度管理の「低温火入の肉料理（21品）」、出汁が主役の「麺料理（11品）」をお楽しみください。
          </p>
        </div>

        {/* コントロールバー：表示形式切り替え */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-[#e7e5e4]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-serif font-bold text-[#1a1a1a] flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#c5a059]" />
              <span>割烹食堂かいね お料理アーカイブ（全{galleryService.getAllPhotos().length}品）</span>
            </span>
          </div>

          {/* 表示モード切り替えボタン */}
          <div className={`flex items-center bg-[#f0f0eb] p-0.5 ${AppTheme.rounded.sm} border border-[#e7e5e4] self-start sm:self-auto`}>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 ${AppTheme.rounded.sm} text-xs font-serif flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-[#2c3e50] shadow-xs font-bold'
                  : 'text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
              title="一覧グリッド表示"
            >
              <LayoutGrid size={14} />
              <span>一覧</span>
            </button>
            <button
              onClick={() => setViewMode('carousel3d')}
              className={`px-3 py-1.5 ${AppTheme.rounded.sm} text-xs font-serif flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors ${
                viewMode === 'carousel3d'
                  ? 'bg-white text-[#2c3e50] shadow-xs font-bold'
                  : 'text-[#6b7280] hover:text-[#1a1a1a]'
              }`}
              title="回転カルーセル表示"
            >
              <Layers size={14} />
              <span>カルーセル</span>
            </button>
          </div>
        </div>

        {/* カテゴリフィルター・検索バー */}
        <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* カテゴリタブ */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {availableCategories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  const count = galleryService.getCategoryCount(cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => handleSelectCategory(cat)}
                      className={AppTheme.getFilterTabClass(isActive)}
                    >
                      <span>{GalleryService.getCategoryLabel(cat)}</span>
                      <span className={`ml-1.5 text-[11px] ${isActive ? 'text-[#e6c887]' : 'text-[#9ca3af]'}`}>
                        ({count})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* キーワード検索 */}
              <div className="relative w-full lg:w-64 shrink-0">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="料理名・食材で検索..."
                  aria-label="料理名・食材で検索"
                  className={`w-full pl-9 pr-8 py-2 text-xs font-serif bg-[#fafaf7] border border-[#e7e5e4] ${AppTheme.rounded.sm} text-[#1a1a1a] placeholder-[#9ca3af] focus:outline-none focus:border-[#c5a059]`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#1a1a1a]"
                    aria-label="検索をクリア"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* サブカテゴリフィルター（低温火入の肉料理 / 麺料理 選択時） */}
            {subCategories.length > 0 && (
              <div className="flex items-center gap-2 overflow-x-auto border-b border-[#f0f0eb] pb-1">
                <button
                  onClick={() => setSelectedSubCategory('ALL')}
                  className={AppTheme.getSubFilterTabClass(selectedSubCategory === 'ALL')}
                >
                  すべて表示
                </button>
                {subCategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubCategory(sub)}
                    className={AppTheme.getSubFilterTabClass(selectedSubCategory === sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

            {/* 公式note特集ガイドバナー */}
            {activeArticleMeta ? (
              <div className={`bg-[#fafaf7] border border-[#c5a059]/40 ${AppTheme.rounded.sm} p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3`}>
                <div>
                  <p className="font-serif text-xs md:text-sm font-bold text-[#1a1a1a] flex items-center gap-1.5">
                    <BookOpen size={14} className="text-[#c5a059] shrink-0" />
                    <span>{activeArticleMeta.title}</span>
                  </p>
                  <p className="font-serif text-xs text-[#6b7280] mt-1">
                    {activeArticleMeta.description}
                  </p>
                </div>
                <a
                  href={activeArticleMeta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${AppTheme.getButtonClass('outline')} text-xs py-2 px-4 whitespace-nowrap shrink-0 gap-1.5`}
                >
                  <span>公式noteで全文を見る</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            ) : (
              <div className={`bg-[#fafaf7] border border-[#e7e5e4] ${AppTheme.rounded.sm} px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-serif`}>
                <div className="flex items-center gap-2 text-[#4b5563]">
                  <BookOpen size={14} className="text-[#c5a059] shrink-0" />
                  <span>公式note料理特集アーカイブ：</span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleSelectCategory(PlacePhotoCategory.SIGNATURE)}
                    className="text-[#2c3e50] hover:text-[#c5a059] font-bold underline underline-offset-4 transition-colors"
                  >
                    定番ランチメニュー（5品）
                  </button>
                  <button
                    onClick={() => handleSelectCategory(PlacePhotoCategory.MEAT_LOWTEMP)}
                    className="text-[#2c3e50] hover:text-[#c5a059] font-bold underline underline-offset-4 transition-colors"
                  >
                    低温火入の肉料理（21品）
                  </button>
                  <button
                    onClick={() => handleSelectCategory(PlacePhotoCategory.NOODLES)}
                    className="text-[#2c3e50] hover:text-[#c5a059] font-bold underline underline-offset-4 transition-colors"
                  >
                    特製 麺料理（11品）
                  </button>
                </div>
              </div>
            )}
          </div>

        {/* 1. 一覧グリッド表示 */}
        {viewMode === 'grid' && (
          <>
            {visiblePhotos.length === 0 ? (
              <div className={`py-16 text-center bg-[#fafaf7] border border-[#e7e5e4] ${AppTheme.rounded.sm} mb-14`}>
                <p className="font-serif text-sm text-[#4b5563] mb-4">
                  該当するお料理が見つかりませんでした。
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(PlacePhotoCategory.ALL);
                    setSelectedSubCategory('ALL');
                    setSearchQuery('');
                  }}
                  className={AppTheme.getButtonClass('outline')}
                >
                  絞り込みをリセットする
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {visiblePhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActivePhoto(photo)}
                    className={cardClasses.container}
                  >
                    {/* 料理写真 */}
                    <div className={cardClasses.imageWrapper}>
                      <ResilientImage
                        src={photo.imageUrl}
                        alt={photo.title}
                        fallbackLabel={photo.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* 特選・カテゴリラベル */}
                      <div className={`absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 ${AppTheme.rounded.sm} flex items-center gap-1 border border-white/10 font-serif`}>
                        <Sparkles size={11} className="text-[#c5a059]" />
                        <span>{photo.subCategory || GalleryService.getCategoryLabel(photo.category)}</span>
                      </div>

                      {/* 価格・区分 */}
                      {photo.price && (
                        <div className={`absolute top-3 right-3 bg-[#2c3e50]/90 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 ${AppTheme.rounded.sm} font-serif font-bold`}>
                          {photo.price}
                        </div>
                      )}

                      {/* ホバーオーバーレイ */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <span className="text-[#c5a059] text-xs font-serif flex items-center gap-1 mb-1 font-semibold">
                          <Maximize2 size={13} /> クリックで拡大・詳細表示
                        </span>
                        <p className="text-white text-xs font-serif leading-relaxed line-clamp-2">
                          {photo.description}
                        </p>
                      </div>
                    </div>

                    {/* 料理情報 */}
                    <div className={cardClasses.body}>
                      <div>
                        <h3 className={cardClasses.title}>
                          {photo.title}
                        </h3>
                        <p className={cardClasses.description}>
                          {photo.description}
                        </p>
                        {/* ゼロピル原則に基づくインライン素材・技法メタデータ */}
                        {photo.tags.length > 0 && (
                          <p className="text-[11px] font-serif text-[#9e7e3e] mb-3 truncate">
                            {photo.tags.slice(0, 3).join(' · ')}
                          </p>
                        )}
                      </div>

                      <div className={cardClasses.footer}>
                        <span className="text-[#c5a059] font-medium truncate">
                          {photo.authorName}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-[#2c3e50] font-semibold">
                            詳細 →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* もっと見る展開ボタン（「すべて」表示かつ初期上限を超えている場合） */}
            {!isFilteredView && !showAllInDefault && filteredPhotos.length > INITIAL_ALL_LIMIT && (
              <div className="text-center mb-14">
                <button
                  onClick={() => setShowAllInDefault(true)}
                  className={`${AppTheme.getButtonClass('outline')} gap-2 text-xs md:text-sm`}
                >
                  <span>すべてのお料理を見る（残り{filteredPhotos.length - INITIAL_ALL_LIMIT}品）</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {/* 2. 和モダンカルーセル表示 */}
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
                        <div className={`absolute inset-0 bg-white p-2 shadow-xl border border-[#e7e5e4] ${AppTheme.rounded.sm}`}>
                          <div className="w-full h-full overflow-hidden relative">
                            <ResilientImage
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
              <span className="text-xs text-[#9ca3af] block mb-1">※マウスを乗せると回転が停止します</span>
              <p className="font-serif text-[#4b5563] text-sm leading-relaxed">
                目で楽しみ、舌で味わう。割烹食堂かいねのお料理が巡ります。
              </p>
            </div>
          </div>
        )}

        {/* かいね自慢の看板料理ピックアップ */}
        <div className={`bg-[#fafaf7] border border-[#e7e5e4] p-6 md:p-8 ${AppTheme.rounded.sm} mt-8`}>
          <div className="text-center mb-6">
            <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-2">
              名物のお料理・お品書き
            </h3>
            <p className="text-xs text-[#6b7280] font-serif">
              厳選された仕込みと職人の技術が光る定番の逸品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {signatureDishes.map((dish, idx) => (
              <div key={idx} className={`bg-white p-5 ${AppTheme.rounded.sm} border border-[#e7e5e4] ${AppTheme.shadows.sm}`}>
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
        <div className="mt-14 pt-8 border-t border-[#e7e5e4] text-center">
          <p className="font-serif text-[#4b5563] text-sm leading-loose max-w-xl mx-auto mb-6">
            割烹食堂かいねでは、四季折々の食材と丁寧な仕込みにこだわり、<br className="hidden sm:inline" />
            訪れるたびに心に残る一皿をお届けしております。
          </p>
          <a
            href="#menu"
            className={AppTheme.getButtonClass('primary')}
          >
            <span>お品書き（メニュー）を見る</span>
          </a>
        </div>
      </div>

      {/* 料理写真拡大・詳細モーダル */}
      <PhotoModal
        photo={activePhoto}
        allPhotos={filteredPhotos}
        onClose={() => setActivePhoto(null)}
        onSelectPhoto={(p) => setActivePhoto(p)}
      />

      {/* カルーセル用CSS */}
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
