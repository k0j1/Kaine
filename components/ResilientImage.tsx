import React, { useState, useEffect } from 'react';
import { Utensils } from 'lucide-react';
import { AppTheme } from '../theme';
import { ImageAltService } from '../services/imageAltService';

interface ResilientImageProps {
  src: string;
  alt: string;
  /** 純粋な装飾画像の場合のみ true を指定（WCAG準拠で alt="" / aria-hidden="true" を付与） */
  decorative?: boolean;
  className?: string;
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  onImageError?: () => void;
}

/**
 * 外部CDN・画像URLを安全に表示する再利用可能画像コンポーネント
 * - referrerPolicy="no-referrer" を適用し外部ホスティング画像のブロックを回避
 * - ImageAltService による alt 属性の正規化・保証でSEOとアクセシビリティを向上
 * - 画像取得失敗時（onError）はAppTheme準拠の和モダンな代替パネルを表示し、リンク切れ表示を防止
 */
export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  decorative = false,
  className = 'w-full h-full object-cover',
  fallbackLabel,
  loading = 'lazy',
  decoding = 'async',
  onImageError
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  // 装飾画像でない場合は必ず意味のある正規化済みalt属性を保証
  const resolvedAlt = decorative
    ? ''
    : ImageAltService.normalizeAlt(alt, fallbackLabel || undefined);

  const handleError = () => {
    setHasError(true);
    if (onImageError) {
      try {
        onImageError();
      } catch (err) {
        console.warn('画像読み込みエラーコールバックの実行中にエラーが発生しました:', err);
      }
    }
  };

  if (hasError || !src) {
    const cardClasses = AppTheme.getDishCardClasses();
    return (
      <div
        className={cardClasses.fallbackContainer}
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : resolvedAlt}
        aria-hidden={decorative ? true : undefined}
      >
        <Utensils size={28} className="text-[#c5a059] mb-2" aria-hidden="true" />
        <span className="font-serif text-xs font-bold text-[#1a1a1a] leading-snug line-clamp-2">
          {fallbackLabel || resolvedAlt}
        </span>
        <span className="font-serif text-[10px] text-[#6b7280] mt-1">
          割烹食堂かいね
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={resolvedAlt}
      aria-hidden={decorative ? true : undefined}
      loading={loading}
      decoding={decoding}
      referrerPolicy="no-referrer"
      onError={handleError}
      className={className}
    />
  );
};
