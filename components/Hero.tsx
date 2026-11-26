import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { SITE_SUBTITLE, APP_VERSION, PLACE_PHOTOS } from '../constants';
import { ChevronDown, Sparkles, Utensils, Shuffle } from 'lucide-react';
import { AppTheme } from '../theme';
import { HeroSlideshowService } from '../services/heroSlideshowService';
import { PlacePhoto } from '../types';

interface HeroProps {
  heroImage?: string;
  onExploreGallery?: () => void;
}

/**
 * ヒーローセクションコンポーネント
 * 店舗実写特選写真および公式noteの全料理写真からランダムにスライドショー表示を行い、
 * タイトル画面のバージョン3桁目を明記します。
 * （※Googleマップからの写真掲載の記載および3Dビューアーは削除）
 */
const Hero: React.FC<HeroProps> = ({ heroImage, onExploreGallery }) => {
  const heroClasses = AppTheme.getHeroClasses();

  // 店舗実写写真＋公式note全料理写真を含むランダムシャッフル済みデッキを初期化
  const [shuffledDeck, setShuffledDeck] = useState<PlacePhoto[]>(() =>
    HeroSlideshowService.createShuffledDeck(PLACE_PHOTOS)
  );
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  // 読み込み失敗した外部画像IDを記録し、自動スキップでリンク切れ表示を防止
  const [failedImageIds, setFailedImageIds] = useState<Set<string>>(() => new Set());

  // 自動スライドショー（6秒ごとにランダムデッキ内の次のお料理へ遷移）
  useEffect(() => {
    if (shuffledDeck.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentPhotoIndex((prev) =>
        HeroSlideshowService.findNextValidIndex(shuffledDeck, prev, failedImageIds)
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [shuffledDeck, failedImageIds]);

  const activePhoto = shuffledDeck[currentPhotoIndex] || shuffledDeck[0];
  const isActivePhotoFailed = activePhoto ? failedImageIds.has(activePhoto.id) : true;
  const bgImage =
    heroImage ||
    (!isActivePhotoFailed && activePhoto
      ? activePhoto.imageUrl
      : HeroSlideshowService.getFallbackImageUrl());

  // 現在のランダム枠から最大5枚のクイック切替サムネイルを算出
  const thumbnailSlots = useMemo(
    () => HeroSlideshowService.getThumbnailWindow(shuffledDeck, currentPhotoIndex, 5),
    [shuffledDeck, currentPhotoIndex]
  );

  // 現在の料理カテゴリ要約
  const activeCategoryLabel = useMemo(
    () => (activePhoto ? HeroSlideshowService.getPhotoCategorySummary(activePhoto) : ''),
    [activePhoto]
  );

  /**
   * ランダム再抽選（シャッフル）ハンドラ
   */
  const handleShuffle = useCallback(() => {
    try {
      const nextDeck = HeroSlideshowService.createShuffledDeck(
        PLACE_PHOTOS,
        activePhoto?.id
      );
      setShuffledDeck(nextDeck);
      setCurrentPhotoIndex(0);
    } catch (err) {
      console.error('トップ画像のランダム再抽選中にエラーが発生しました:', err);
    }
  }, [activePhoto?.id]);

  /**
   * 外部note画像等の読み込み失敗時に安全な別料理へ自動フォールバックするハンドラ
   */
  const handleBackgroundError = useCallback(() => {
    if (!activePhoto || heroImage) return;
    try {
      setFailedImageIds((prev) => {
        if (prev.has(activePhoto.id)) return prev;
        const nextSet = new Set(prev);
        nextSet.add(activePhoto.id);
        const nextIndex = HeroSlideshowService.findNextValidIndex(
          shuffledDeck,
          currentPhotoIndex,
          nextSet
        );
        if (nextIndex !== currentPhotoIndex) {
          setCurrentPhotoIndex(nextIndex);
        }
        return nextSet;
      });
    } catch (err) {
      console.error('ヒーロー画像のフォールバック切替中にエラーが発生しました:', err);
    }
  }, [activePhoto, currentPhotoIndex, heroImage, shuffledDeck]);

  const handleScrollToGallery = () => {
    try {
      if (onExploreGallery) {
        onExploreGallery();
        return;
      }
      const galleryEl = document.getElementById('gallery');
      if (galleryEl) {
        galleryEl.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.error('お料理ギャラリーへのスクロール中にエラーが発生しました:', err);
    }
  };

  return (
    <div id="hero" className={heroClasses.section}>
      {/* Background Image with Overlay */}
      <div className={heroClasses.bgWrapper}>
        <img
          key={bgImage}
          src={bgImage}
          alt={activePhoto ? activePhoto.title : '割烹食堂かいねのお料理'}
          referrerPolicy="no-referrer"
          onError={handleBackgroundError}
          className={heroClasses.bgImage}
        />
        <div className={heroClasses.bgScrim}></div>
      </div>

      {/* Content */}
      <div className={heroClasses.content}>
        {/* バージョンバッジ */}
        <div className={heroClasses.versionWrap}>
          <span className={heroClasses.versionBadge}>
            <Sparkles size={13} className={heroClasses.versionIcon} />
            <span>割烹食堂かいね 公式サイト v{APP_VERSION}</span>
          </span>
        </div>

        {/* 縦書きキャッチコピー */}
        <div className={heroClasses.verticalCopyWrap}>
          <span className={heroClasses.verticalCopy}>
            季節を味わう、心の料理
          </span>
        </div>

        {/* 店舗メインタイトル */}
        <h1 className={heroClasses.title}>
          割烹食堂 かいね
        </h1>

        <p className={heroClasses.subtitle}>
          {SITE_SUBTITLE}
        </p>

        {/* 現在のメイン料理名キャプション（公式note料理含むランダム表示） */}
        {activePhoto && (
          <div className={heroClasses.captionWrap}>
            <span className={heroClasses.captionTitle}>{activePhoto.title}</span>
            {activeCategoryLabel && (
              <>
                <span className={heroClasses.captionDivider} aria-hidden="true">/</span>
                <span className={heroClasses.captionCategory}>{activeCategoryLabel}</span>
              </>
            )}
          </div>
        )}

        {/* アクションボタン */}
        <div className={heroClasses.actionsWrap}>
          <button
            type="button"
            onClick={handleScrollToGallery}
            className={heroClasses.primaryCta}
          >
            <Utensils size={16} />
            <span>お料理ギャラリーを見る</span>
          </button>
          <a
            href="#concept"
            className={heroClasses.secondaryCta}
          >
            <span>かいねのこだわり（note記事）</span>
          </a>
        </div>

        {/* ランダム抽出されたお料理写真の切替サムネイル＆シャッフル操作 */}
        <div className={heroClasses.controlsRow}>
          <div className={heroClasses.thumbnailStrip}>
            {thumbnailSlots.map(({ photo, deckIndex }) => {
              const isFailed = failedImageIds.has(photo.id);
              const thumbSrc = isFailed
                ? HeroSlideshowService.getFallbackImageUrl()
                : photo.imageUrl;

              return (
                <button
                  key={`${photo.id}-${deckIndex}`}
                  type="button"
                  onClick={() => setCurrentPhotoIndex(deckIndex)}
                  className={heroClasses.thumbnailButton(deckIndex === currentPhotoIndex)}
                  title={photo.title}
                  aria-label={`${photo.title}を表示`}
                >
                  <img
                    src={thumbSrc}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    onError={() => {
                      setFailedImageIds((prev) => {
                        if (prev.has(photo.id)) return prev;
                        const next = new Set(prev);
                        next.add(photo.id);
                        return next;
                      });
                    }}
                    className={heroClasses.thumbnailImage}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleShuffle}
            className={heroClasses.shuffleButton}
            title="note掲載料理を含む全お料理からランダムに切り替え"
            aria-label="別のお料理をランダム表示"
          >
            <Shuffle size={14} />
            <span>別のお料理</span>
          </button>
        </div>

        {/* 下スクロールインジケーター */}
        <div className={heroClasses.scrollIndicator} onClick={handleScrollToGallery}>
          <div className={heroClasses.scrollInner}>
            <span className={heroClasses.scrollLabel}>Scroll</span>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
