import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { PhotoItemModel, GalleryService, CarouselNavigator } from '../services/galleryService';
import { ResilientImage } from './ResilientImage';
import { ImageAltService } from '../services/imageAltService';
import { AppTheme } from '../theme';

interface GalleryCarouselProps {
  photos: PhotoItemModel[];
  onSelectPhoto: (photo: PhotoItemModel) => void;
  isPausedExternal?: boolean;
}

const AUTO_SLIDE_INTERVAL_MS = 4500;
const SWIPE_THRESHOLD_PX = 40;

/**
 * お料理ギャラリー用・レスポンシブカルーセルコンポーネント
 * - スマホ表示（<640px）は1枚ずつ横幅いっぱいに表示し、従来の3Dリングによる写真重なりを完全に解消
 * - タブレット（2枚）・デスクトップ（3枚）でもカード間隔を確保し重なりゼロで閲覧可能
 * - 左右スワイプ操作、44px以上のタッチターゲット、自動再生オン/オフ、サムネイル早見バーを搭載
 */
export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  photos,
  onSelectPhoto,
  isPausedExternal = false
}) => {
  // 画面幅に応じた1フレームあたりの表示枚数
  const [itemsPerView, setItemsPerView] = useState<number>(() => {
    if (typeof window === 'undefined') return 1;
    return CarouselNavigator.getItemsPerView(window.innerWidth);
  });

  // 現在の先頭スライドインデックス
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // 自動スライド状態（prefers-reduced-motion 有効時は初期停止）
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return true;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // ホバーまたはタッチ操作中の一時停止フラグ
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  // タッチスワイプ追跡用
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isHorizontalSwipeRef = useRef<boolean>(false);
  const [dragOffsetPx, setDragOffsetPx] = useState<number>(0);

  // サムネイルバーの横スクロール用（縦方向のページジャンプを防止）
  const thumbnailRailRef = useRef<HTMLDivElement | null>(null);

  const carouselClasses = useMemo(() => AppTheme.getCarouselClasses(), []);
  const cardClasses = useMemo(() => AppTheme.getDishCardClasses(), []);

  // 画面リサイズに応じて表示枚数とインデックスを安全に再計算
  useEffect(() => {
    const handleResize = () => {
      try {
        const nextCount = CarouselNavigator.getItemsPerView(window.innerWidth);
        setItemsPerView(nextCount);
        setCurrentIndex(prev => CarouselNavigator.clampIndex(prev, photos.length, nextCount));
      } catch (err) {
        console.warn('カルーセルリサイズ処理中にエラーが発生しました:', err);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [photos.length]);

  // カテゴリ・検索条件変更時に先頭へ安全に戻す
  useEffect(() => {
    setCurrentIndex(0);
  }, [photos]);

  const maxStartIndex = CarouselNavigator.getMaxStartIndex(photos.length, itemsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => CarouselNavigator.getNextIndex(prev, photos.length, itemsPerView));
  }, [photos.length, itemsPerView]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => CarouselNavigator.getPrevIndex(prev, photos.length, itemsPerView));
  }, [photos.length, itemsPerView]);

  // 自動スライドタイマー
  useEffect(() => {
    if (!isAutoPlaying || isInteracting || isPausedExternal || maxStartIndex === 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex(prev => CarouselNavigator.getNextIndex(prev, photos.length, itemsPerView));
    }, AUTO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying, isInteracting, isPausedExternal, maxStartIndex, photos.length, itemsPerView]);

  // アクティブサムネイルのみ横方向にスクロール追従（ページ全体はスクロールさせない）
  useEffect(() => {
    const rail = thumbnailRailRef.current;
    if (!rail) return;
    try {
      const activeButton = rail.children[currentIndex] as HTMLElement | undefined;
      if (!activeButton) return;
      const targetLeft =
        activeButton.offsetLeft - rail.clientWidth / 2 + activeButton.clientWidth / 2;
      rail.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
    } catch (err) {
      console.warn('サムネイル位置の同期中にエラーが発生しました:', err);
    }
  }, [currentIndex]);

  // タッチスワイプ開始
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isHorizontalSwipeRef.current = false;
    setIsInteracting(true);
    setDragOffsetPx(0);
  };

  // タッチ移動（縦スクロールを妨げず横スワイプ時のみ追従）
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null || e.touches.length !== 1) {
      return;
    }
    const deltaX = e.touches[0].clientX - touchStartXRef.current;
    const deltaY = e.touches[0].clientY - touchStartYRef.current;

    if (!isHorizontalSwipeRef.current && Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
      isHorizontalSwipeRef.current = true;
    }

    if (isHorizontalSwipeRef.current) {
      // 最大±120pxに抑制し自然なスワイプ追従を演出
      const clampedOffset = Math.max(-120, Math.min(120, deltaX * 0.6));
      setDragOffsetPx(clampedOffset);
    }
  };

  // タッチ終了時にスワイプ判定
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) {
      setIsInteracting(false);
      setDragOffsetPx(0);
      return;
    }

    const endX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = endX - touchStartXRef.current;

    if (isHorizontalSwipeRef.current && Math.abs(deltaX) >= SWIPE_THRESHOLD_PX && maxStartIndex > 0) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
    isHorizontalSwipeRef.current = false;
    setDragOffsetPx(0);
    setIsInteracting(false);
  };

  // サムネイル押下で該当写真までジャンプ
  const handleSelectThumbnail = (index: number) => {
    const safeIndex = CarouselNavigator.clampIndex(index, photos.length, itemsPerView);
    setCurrentIndex(safeIndex);
  };

  if (photos.length === 0) {
    return null;
  }

  const progressPercent = CarouselNavigator.getProgressPercent(currentIndex, photos.length, itemsPerView);
  const trackTransform = `translateX(calc(-${(currentIndex * 100) / itemsPerView}% + ${dragOffsetPx}px))`;

  return (
    <div
      className={carouselClasses.sectionWrapper}
      role="region"
      aria-roledescription="carousel"
      aria-label="お料理カルーセル"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <div className={carouselClasses.stageContainer}>
        {/* スライドビューポート（左右スワイプ対応・重なり防止） */}
        <div
          className={carouselClasses.viewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div
            className={carouselClasses.track}
            style={{
              transform: trackTransform,
              transitionDuration: dragOffsetPx !== 0 ? '0ms' : undefined
            }}
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
                className={carouselClasses.slideWrapper}
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <article
                  onClick={() => onSelectPhoto(photo)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectPhoto(photo);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${photo.title}の詳細を見る`}
                  className={`${cardClasses.container} h-full`}
                >
                  {/* 料理写真 */}
                  <div className={cardClasses.imageWrapper}>
                    <ResilientImage
                      src={photo.imageUrl}
                      alt={ImageAltService.buildDishAlt(photo, 'carousel')}
                      fallbackLabel={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    {/* カテゴリ／サブカテゴリ表示 */}
                    <div className={carouselClasses.categoryBadge}>
                      <Sparkles size={11} className={carouselClasses.categoryBadgeIcon} />
                      <span className="truncate">
                        {photo.subCategory || GalleryService.getCategoryLabel(photo.category)}
                      </span>
                    </div>

                    {/* 価格・区分 */}
                    {photo.price && (
                      <div className={carouselClasses.priceBadge}>
                        {photo.price}
                      </div>
                    )}
                  </div>

                  {/* 料理情報 */}
                  <div className={cardClasses.body}>
                    <div>
                      <h3 className={cardClasses.title}>{photo.title}</h3>
                      <p className={cardClasses.description}>{photo.description}</p>
                      {photo.tags.length > 0 && (
                        <p className={carouselClasses.tagLine}>
                          {photo.tags.slice(0, 3).join(' · ')}
                        </p>
                      )}
                    </div>

                    <div className={cardClasses.footer}>
                      <span className={carouselClasses.authorLabel}>{photo.authorName}</span>
                      <span className={carouselClasses.detailHint}>詳細を見る →</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* 操作バー（44px以上のタッチターゲット確保） */}
        <div className={carouselClasses.controlBar}>
          <div className={carouselClasses.navGroup}>
            <button
              type="button"
              onClick={handlePrev}
              disabled={maxStartIndex === 0}
              className={carouselClasses.iconButton}
              aria-label="前の料理へ"
            >
              <ChevronLeft size={20} />
            </button>

            <span className={carouselClasses.counterText} aria-live="polite">
              {currentIndex + 1} / {photos.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={maxStartIndex === 0}
              className={carouselClasses.iconButton}
              aria-label="次の料理へ"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* デスクトップ向け進捗ゲージ */}
          <div className={carouselClasses.progressTrack} aria-hidden="true">
            <div
              className={carouselClasses.progressFill}
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* 自動スライド再生／一時停止ボタン */}
          {maxStartIndex > 0 && (
            <button
              type="button"
              onClick={() => setIsAutoPlaying(prev => !prev)}
              className={`${carouselClasses.iconButton} px-3 gap-1.5 text-xs font-serif whitespace-nowrap`}
              aria-label={isAutoPlaying ? '自動スライドを停止' : '自動スライドを再生'}
            >
              {isAutoPlaying ? <Pause size={15} /> : <Play size={15} />}
              <span>{isAutoPlaying ? '一時停止' : '自動再生'}</span>
            </button>
          )}
        </div>

        {/* クイックジャンプ用サムネイルバー */}
        {photos.length > 1 && (
          <div
            ref={thumbnailRailRef}
            className={carouselClasses.thumbnailRail}
            aria-label="お料理サムネイル一覧"
          >
            {photos.map((photo, idx) => {
              const isVisibleInCurrentFrame =
                idx >= currentIndex && idx < currentIndex + itemsPerView;
              return (
                <button
                  key={`thumb-${photo.id}`}
                  type="button"
                  onClick={() => handleSelectThumbnail(idx)}
                  className={carouselClasses.thumbnailButton(isVisibleInCurrentFrame)}
                  aria-label={`${photo.title}を表示`}
                  aria-current={idx === currentIndex ? 'true' : undefined}
                >
                  <ResilientImage
                    src={photo.thumbnailUrl}
                    alt={ImageAltService.buildDishAlt(photo, 'thumbnail')}
                    fallbackLabel={photo.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      <p className={carouselClasses.helperNote}>
        左右のスワイプや矢印ボタンでお料理を切り替え、写真タップで拡大・解説をご覧いただけます。
      </p>
    </div>
  );
};
