import React, { useState, useEffect } from 'react';
import { Utensils } from 'lucide-react';
import { AppTheme } from '../theme';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * 外部CDN・画像URLを安全に表示する再利用可能画像コンポーネント
 * - referrerPolicy="no-referrer" を適用し外部ホスティング画像のブロックを回避
 * - 画像取得失敗時（onError）はAppTheme準拠の和モダンな代替パネルを表示し、リンク切れ表示を防止
 */
export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel,
  loading = 'lazy'
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    const cardClasses = AppTheme.getDishCardClasses();
    return (
      <div className={cardClasses.fallbackContainer} role="img" aria-label={alt}>
        <Utensils size={28} className="text-[#c5a059] mb-2" />
        <span className="font-serif text-xs font-bold text-[#1a1a1a] leading-snug line-clamp-2">
          {fallbackLabel || alt}
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
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
