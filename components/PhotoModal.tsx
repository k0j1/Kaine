import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Tag, Rotate3d } from 'lucide-react';
import { PhotoItemModel } from '../services/galleryService';
import { AppTheme } from '../theme';

interface PhotoModalProps {
  photo: PhotoItemModel | null;
  allPhotos: PhotoItemModel[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItemModel) => void;
  onOpen3D?: (dishId: string) => void;
}

/**
 * 料理写真拡大・詳細モーダルコンポーネント
 * オブジェクト指向で設計されたPhotoItemModelを受け取り、割烹食堂かいねの実際のお料理詳細を表示します。
 * （※Googleマップからの写真掲載の記載は全て削除、3D回転確認に対応）
 */
export const PhotoModal: React.FC<PhotoModalProps> = ({
  photo,
  allPhotos,
  onClose,
  onSelectPhoto,
  onOpen3D
}) => {
  const currentIndex = photo ? allPhotos.findIndex(p => p.id === photo.id) : -1;

  const handlePrev = React.useCallback(() => {
    if (currentIndex > 0) {
      onSelectPhoto(allPhotos[currentIndex - 1]);
    } else {
      onSelectPhoto(allPhotos[allPhotos.length - 1]);
    }
  }, [allPhotos, currentIndex, onSelectPhoto]);

  const handleNext = React.useCallback(() => {
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
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white hover:bg-black/80 rounded-full transition-colors"
          aria-label="閉じる"
        >
          <X size={20} />
        </button>

        {/* 前後ナビゲーションボタン（PC表示） */}
        {allPhotos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/50 text-white hover:bg-black/80 rounded-full transition-colors hidden sm:flex items-center justify-center"
              aria-label="前の写真"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/50 text-white hover:bg-black/80 rounded-full transition-colors hidden sm:flex items-center justify-center"
              aria-label="次の写真"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* 画像表示エリア */}
          <div className="relative bg-stone-900 flex items-center justify-center min-h-[300px] md:min-h-[460px] overflow-hidden">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-full object-cover max-h-[520px]"
            />
            {/* かいね実際のお料理バッジ */}
            <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-sm flex items-center gap-1.5 border border-white/20">
              <Sparkles size={12} className="text-[#c5a059]" />
              <span>割烹食堂かいね 実際のお料理</span>
            </div>
          </div>

          {/* 料理詳細・情報エリア */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-[#fbfbf9]">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-serif text-[#c5a059] tracking-wider font-semibold">
                  {photo.authorName}
                </span>
                {photo.price && (
                  <span className="font-serif font-bold text-lg text-[#2c3e50]">
                    {photo.price}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-4">
                {photo.title}
              </h3>

              <div className="w-10 h-0.5 bg-[#c5a059] mb-4"></div>

              <p className="text-sm font-serif text-[#4b5563] leading-relaxed mb-6">
                {photo.description}
              </p>

              {/* タグ一覧 */}
              {photo.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {photo.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-stone-200/70 text-[#1a1a1a] rounded-sm font-serif"
                    >
                      <Tag size={10} className="text-[#c5a059]" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* アクションボタン */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              {photo.has3D && onOpen3D && (
                <button
                  onClick={() => {
                    onClose();
                    onOpen3D(photo.id);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#9e7e3e] text-white text-sm font-serif font-bold py-2.5 px-4 rounded-sm transition-colors shadow-md"
                >
                  <Rotate3d size={16} />
                  <span>3D 360°で立体確認する</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white text-sm font-serif py-2.5 px-4 rounded-sm transition-colors shadow-sm"
              >
                <span>一覧に戻る</span>
              </button>

              {/* モバイル用ナビゲーション */}
              <div className="flex sm:hidden justify-between items-center pt-2">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 border border-stone-300 rounded text-xs font-serif"
                >
                  ← 前の写真
                </button>
                <span className="text-xs text-stone-500 font-serif">
                  {currentIndex + 1} / {allPhotos.length}
                </span>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 border border-stone-300 rounded text-xs font-serif"
                >
                  次の写真 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
