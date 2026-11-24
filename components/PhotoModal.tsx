import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, ExternalLink, Images } from 'lucide-react';
import { PhotoItemModel, GalleryService } from '../services/galleryService';
import { ResilientImage } from './ResilientImage';
import { AppTheme } from '../theme';

interface PhotoModalProps {
  photo: PhotoItemModel | null;
  allPhotos: PhotoItemModel[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItemModel) => void;
}

/**
 * 料理写真拡大・詳細モーダルコンポーネント
 * オブジェクト指向で設計されたPhotoItemModelを受け取り、割烹食堂かいねの実際のお料理詳細や公式note解説を表示します。
 * （※Googleマップからの写真掲載の記載および3D確認機能は全て削除、複数アングル切替に対応）
 */
export const PhotoModal: React.FC<PhotoModalProps> = ({
  photo,
  allPhotos,
  onClose,
  onSelectPhoto
}) => {
  const [showAltImage, setShowAltImage] = useState(false);

  useEffect(() => {
    setShowAltImage(false);
  }, [photo?.id]);

  const currentIndex = photo ? allPhotos.findIndex(p => p.id === photo.id) : -1;

  const handlePrev = React.useCallback(() => {
    if (allPhotos.length === 0) return;
    if (currentIndex > 0) {
      onSelectPhoto(allPhotos[currentIndex - 1]);
    } else {
      onSelectPhoto(allPhotos[allPhotos.length - 1]);
    }
  }, [allPhotos, currentIndex, onSelectPhoto]);

  const handleNext = React.useCallback(() => {
    if (allPhotos.length === 0) return;
    if (currentIndex < allPhotos.length - 1) {
      onSelectPhoto(allPhotos[currentIndex + 1]);
    } else {
      onSelectPhoto(allPhotos[0]);
    }
  }, [allPhotos, currentIndex, onSelectPhoto]);

  // ESCキーで閉じる & 左右キーで写真移動
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose, handlePrev, handleNext]);

  if (!photo) return null;

  const displayImageUrl = showAltImage && photo.altImageUrl ? photo.altImageUrl : photo.imageUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative max-w-4xl w-full bg-white ${AppTheme.rounded.md} ${AppTheme.shadows.xl} overflow-hidden my-8`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* クローズボタン */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 p-2 bg-black/60 text-white hover:bg-black/80 ${AppTheme.rounded.full} transition-colors`}
          aria-label="閉じる"
        >
          <X size={20} />
        </button>

        {/* 前後ナビゲーションボタン（PC表示） */}
        {allPhotos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/50 text-white hover:bg-black/80 ${AppTheme.rounded.full} transition-colors hidden sm:flex items-center justify-center`}
              aria-label="前の写真"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/50 text-white hover:bg-black/80 ${AppTheme.rounded.full} transition-colors hidden sm:flex items-center justify-center`}
              aria-label="次の写真"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* 画像表示エリア */}
          <div className="relative bg-stone-900 flex items-center justify-center min-h-[300px] md:min-h-[460px] overflow-hidden">
            <ResilientImage
              src={displayImageUrl}
              alt={photo.title}
              fallbackLabel={photo.title}
              loading="eager"
              className="w-full h-full object-cover max-h-[520px]"
            />

            {/* かいねお料理出典ラベル */}
            <div className={`absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white text-xs px-2.5 py-1 ${AppTheme.rounded.sm} flex items-center gap-1.5 border border-white/20 font-serif`}>
              <Sparkles size={12} className="text-[#c5a059]" />
              <span>{photo.subCategory || GalleryService.getCategoryLabel(photo.category)}</span>
            </div>

            {/* 2枚目写真（仕込み写真等）切替ボタン */}
            {photo.altImageUrl && (
              <button
                onClick={() => setShowAltImage(prev => !prev)}
                className={`absolute bottom-3 right-3 bg-black/75 hover:bg-[#c5a059] text-white text-xs px-2.5 py-1 ${AppTheme.rounded.sm} flex items-center gap-1.5 border border-white/20 font-serif transition-colors`}
              >
                <Images size={12} />
                <span>{showAltImage ? 'メイン写真を見る' : '別アングルを見る'}</span>
              </button>
            )}
          </div>

          {/* 料理詳細・情報エリア */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-[#fafaf7]">
            <div>
              <div className="flex items-center justify-between mb-2 gap-2">
                <span className="text-xs font-serif text-[#c5a059] tracking-wider font-semibold">
                  {photo.authorName}
                </span>
                {photo.price && (
                  <span className="font-serif font-bold text-sm md:text-base text-[#2c3e50] whitespace-nowrap">
                    {photo.price}
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1a1a1a] mb-3 leading-snug">
                {photo.title}
              </h3>

              <div className="w-10 h-0.5 bg-[#c5a059] mb-4"></div>

              <p className="text-sm font-serif text-[#4b5563] leading-relaxed mb-6">
                {photo.description}
              </p>

              {/* ゼロピル原則に沿ったクリーンな素材・技法メタデータ */}
              {photo.tags.length > 0 && (
                <div className="mb-6 pt-3 border-t border-[#e7e5e4]">
                  <p className="text-[11px] font-serif text-[#6b7280] mb-1">使用食材・調理技法</p>
                  <p className="text-xs font-serif text-[#1a1a1a] font-medium leading-relaxed">
                    {photo.tags.join(' · ')}
                  </p>
                </div>
              )}
            </div>

            {/* アクションボタン */}
            <div className="pt-4 border-t border-[#e7e5e4] flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                {photo.sourceArticleUrl && (
                  <a
                    href={photo.sourceArticleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${AppTheme.getButtonClass('outline')} text-sm py-2.5 px-4 gap-1.5`}
                  >
                    <span>note記事を見る</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                <button
                  onClick={onClose}
                  className={`flex-1 ${AppTheme.getButtonClass('primary')} text-sm py-2.5 px-4`}
                >
                  <span>一覧に戻る</span>
                </button>
              </div>

              {/* モバイル用ナビゲーション */}
              {allPhotos.length > 1 && (
                <div className="flex sm:hidden justify-between items-center pt-2">
                  <button
                    onClick={handlePrev}
                    className={`px-4 py-2 border border-[#d6d3d1] ${AppTheme.rounded.sm} text-xs font-serif text-[#1a1a1a]`}
                  >
                    ← 前の写真
                  </button>
                  <span className="text-xs text-[#6b7280] font-serif">
                    {currentIndex + 1} / {allPhotos.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className={`px-4 py-2 border border-[#d6d3d1] ${AppTheme.rounded.sm} text-xs font-serif text-[#1a1a1a]`}
                  >
                    次の写真 →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
