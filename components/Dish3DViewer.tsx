import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { 
  Rotate3d, 
  Play, 
  Pause, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sparkles, 
  Compass, 
  MoveHorizontal, 
  Maximize2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { Dish3DModel, Dish3DService } from '../services/dish3dService';
import { AppTheme } from '../theme';

interface Dish3DViewerProps {
  initialDishId?: string;
  isModal?: boolean;
  onClose?: () => void;
}

/**
 * 3D 360° 料理インタラクティブビューアーコンポーネント
 * 360度ターンテーブル撮影動画を活用し、ユーザーが直感的なドラッグ／スワイプ操作や
 * スライダーで料理を全方位から確認できるフォトリアリスティック3D体験を提供します。
 */
export const Dish3DViewer: React.FC<Dish3DViewerProps> = ({ 
  initialDishId, 
  isModal = false,
  onClose 
}) => {
  const dishService = useMemo(() => Dish3DService.getInstance(), []);
  const dishes = useMemo(() => dishService.getAllDishes(), [dishService]);

  // 現在選択中の料理
  const [currentDishId, setCurrentDishId] = useState<string>(() => {
    if (initialDishId) {
      const found = dishes.find(d => d.id === initialDishId || d.dishId === initialDishId);
      if (found) return found.id;
    }
    return dishes[0]?.id || '';
  });

  const activeDish: Dish3DModel = useMemo(() => {
    return dishes.find(d => d.id === currentDishId) || dishes[0];
  }, [dishes, currentDishId]);

  // ビデオ要素参照
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 状態管理
  const [isPlaying, setIsPlaying] = useState<boolean>(true); // 初期は自動回転
  const [currentAngle, setCurrentAngle] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ドラッグ操作計算用のRef
  const dragStartXRef = useRef<number>(0);
  const startAngleRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  // 角度を動画のタイムスタンプに適用
  const applyAngleToVideo = useCallback((angle: number) => {
    const video = videoRef.current;
    if (!video || !activeDish || video.duration === 0) return;
    const targetTime = activeDish.calculateTimestamp(angle);
    if (!isNaN(targetTime) && targetTime >= 0 && targetTime <= video.duration) {
      video.currentTime = targetTime;
    }
  }, [activeDish]);

  // 動画のcurrentTime更新時に角度を同期（再生中のみ）
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !activeDish || isDragging) return;
    const angle = activeDish.calculateAngle(video.currentTime);
    setCurrentAngle(angle);
  };

  // 再生・一時停止の切り替え
  const togglePlayPause = () => {
    setHasInteracted(true);
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // プリセット角度へ移動（正面・右側面・背面・左側面）
  const setPresetAngle = (preset: number) => {
    setHasInteracted(true);
    const video = videoRef.current;
    if (video && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
    setCurrentAngle(preset);
    applyAngleToVideo(preset);
  };

  // スライダー変更
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasInteracted(true);
    const newAngle = parseInt(e.target.value, 10);
    const video = videoRef.current;
    if (video && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
    setCurrentAngle(newAngle);
    applyAngleToVideo(newAngle);
  };

  // マウス／タッチのドラッグ開始
  const handlePointerDown = (clientX: number) => {
    setHasInteracted(true);
    const video = videoRef.current;
    if (video && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
    setIsDragging(true);
    dragStartXRef.current = clientX;
    startAngleRef.current = currentAngle;
  };

  // ドラッグ移動中
  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartXRef.current;
    // 感度：画面幅に応じて360度スムーズに回転
    const sensitivity = 0.8;
    const newAngle = Math.round((startAngleRef.current + deltaX * sensitivity) % 360 + 360) % 360;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      setCurrentAngle(newAngle);
      applyAngleToVideo(newAngle);
    });
  };

  // ドラッグ終了
  const handlePointerUp = () => {
    setIsDragging(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  // 料理切り替え時のリセット
  useEffect(() => {
    setIsLoading(true);
    setCurrentAngle(0);
    setZoomLevel(1);
    setIsPlaying(true);

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [currentDishId]);

  // ズーム調整
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.25));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 1));
  const handleResetZoom = () => setZoomLevel(1);

  // 前後の料理へ切り替え
  const handlePrevDish = () => {
    const currentIndex = dishes.findIndex(d => d.id === currentDishId);
    const prevIndex = (currentIndex - 1 + dishes.length) % dishes.length;
    setCurrentDishId(dishes[prevIndex].id);
  };

  const handleNextDish = () => {
    const currentIndex = dishes.findIndex(d => d.id === currentDishId);
    const nextIndex = (currentIndex + 1) % dishes.length;
    setCurrentDishId(dishes[nextIndex].id);
  };

  return (
    <div className={`relative bg-[#161616] text-white ${AppTheme.rounded.md} overflow-hidden shadow-2xl border border-white/10 select-none`}>
      {/* 3Dビューアー上部バー */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3.5 bg-black/60 backdrop-blur-md border-b border-white/10 z-20 relative">
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 bg-[#c5a059]/20 text-[#c5a059] rounded-sm">
            <Rotate3d size={18} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm md:text-base font-serif font-bold text-white tracking-wide">
                3D 360°インタラクティブ料理ビューアー
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-[#c5a059]/20 text-[#e6c887] border border-[#c5a059]/40 rounded-full">
                360° 周回検査
              </span>
            </div>
            <p className="text-[11px] text-stone-400 font-serif hidden sm:block">
              画面を左右にドラッグして料理を360度自由に回転・細部確認できます
            </p>
          </div>
        </div>

        {/* 角度＆操作ステータスバッジ */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-sm font-mono text-xs text-[#e6c887] border border-white/10">
            <Compass size={13} className="text-[#c5a059]" />
            <span>{currentAngle}°</span>
          </div>

          {/* モーダル表示の場合のクローズボタン */}
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white p-1 rounded-sm hover:bg-white/10 transition-colors"
              aria-label="閉じる"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* メイン3Dビューポート（ドラッグ操作エリア） */}
      <div 
        className="relative aspect-[4/3] md:aspect-[16/10] w-full max-h-[580px] bg-gradient-to-b from-[#111111] via-[#1a1a1a] to-[#0d0d0d] overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
      >
        {/* 背景グリッド＆3D円形プラットフォーム効果 */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute bottom-6 w-72 md:w-96 h-20 rounded-[50%] bg-[#c5a059]/10 blur-xl pointer-events-none"></div>

        {/* 360°回転動画要素 */}
        <video
          ref={videoRef}
          src={activeDish.videoUrl}
          poster={activeDish.thumbnailUrl}
          playsInline
          muted
          loop
          autoPlay
          onLoadedData={() => setIsLoading(false)}
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-contain pointer-events-none transition-transform duration-100 ease-out will-change-transform"
          style={{
            transform: `scale(${zoomLevel})`
          }}
        />

        {/* ロード中インジケーター */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs z-10 pointer-events-none">
            <Rotate3d size={36} className="text-[#c5a059] animate-spin mb-2" />
            <span className="text-xs font-serif text-stone-300">3Dモデル読み込み中...</span>
          </div>
        )}

        {/* 初回操作ヒントオーバーレイ（ドラッグ未操作時） */}
        {!hasInteracted && !isLoading && (
          <div className="absolute bottom-16 inset-x-0 flex justify-center pointer-events-none animate-fade-in z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/75 backdrop-blur-md rounded-full border border-white/20 text-xs font-serif text-[#e6c887] shadow-xl">
              <MoveHorizontal size={16} className="animate-pulse" />
              <span>左右にドラッグして360°回転</span>
            </div>
          </div>
        )}

        {/* 料理切り替え矢印（左右） */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevDish();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#c5a059] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all z-20"
          title="前の料理へ"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNextDish();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#c5a059] text-white/80 hover:text-white backdrop-blur-md border border-white/15 transition-all z-20"
          title="次の料理へ"
        >
          <ChevronRight size={20} />
        </button>

        {/* ズームコントローラー（左上） */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-sm border border-white/15 z-20">
          <button
            onClick={handleZoomIn}
            className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
            title="拡大"
          >
            <ZoomIn size={15} />
          </button>
          <span className="text-[11px] font-mono px-1 text-stone-400">
            {zoomLevel.toFixed(1)}x
          </span>
          <button
            onClick={handleZoomOut}
            className="p-1.5 text-stone-300 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
            title="縮小"
          >
            <ZoomOut size={15} />
          </button>
          {zoomLevel > 1 && (
            <button
              onClick={handleResetZoom}
              className="p-1.5 text-[#c5a059] hover:bg-white/10 rounded-sm transition-colors text-[10px] font-mono"
              title="等倍に戻す"
            >
              <RotateCcw size={13} />
            </button>
          )}
        </div>

        {/* 再生/一時停止ボタン（右上） */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={togglePlayPause}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-serif backdrop-blur-md border transition-all ${
              isPlaying
                ? 'bg-[#c5a059] text-white border-[#c5a059] shadow-md'
                : 'bg-black/60 text-stone-300 hover:text-white border-white/20'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause size={13} />
                <span>自動回転中</span>
              </>
            ) : (
              <>
                <Play size={13} />
                <span>自動回転</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* コントロールパネル：スライダー ＆ アングルプリセット */}
      <div className="p-4 md:p-6 bg-[#1f1f1f] border-t border-white/10 space-y-4">
        {/* 360度角度スクラバースライダー */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-serif text-stone-400">
            <span className="flex items-center gap-1.5">
              <Rotate3d size={13} className="text-[#c5a059]" />
              <span>全周360°回転コントロール</span>
            </span>
            <span className="font-mono text-[#e6c887]">{currentAngle}° / 360°</span>
          </div>

          <div className="relative flex items-center">
            <input
              type="range"
              min="0"
              max="359"
              value={currentAngle}
              onChange={handleSliderChange}
              className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-[#c5a059] focus:outline-none"
            />
          </div>
        </div>

        {/* 視点プリセットボタン */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-serif text-stone-400 mr-1">視点プリセット:</span>
            {[
              { label: '正面 (0°)', angle: 0 },
              { label: '右面 (90°)', angle: 90 },
              { label: '背面 (180°)', angle: 180 },
              { label: '左面 (270°)', angle: 270 }
            ].map((preset) => (
              <button
                key={preset.angle}
                onClick={() => setPresetAngle(preset.angle)}
                className={`px-2.5 py-1 rounded-sm text-xs font-serif transition-colors ${
                  Math.abs(currentAngle - preset.angle) < 15
                    ? 'bg-[#c5a059] text-white font-bold'
                    : 'bg-white/10 hover:bg-white/20 text-stone-300'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* 料理選択タブ */}
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-sm border border-white/10">
            {dishes.map((dish) => (
              <button
                key={dish.id}
                onClick={() => setCurrentDishId(dish.id)}
                className={`px-3 py-1 rounded-sm text-xs font-serif transition-colors ${
                  dish.id === currentDishId
                    ? 'bg-[#c5a059] text-white font-bold shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {dish.id === 'dish-3d-tuna' ? '本鮪贅沢炙り丼' : '桜生麩丸大根椀'}
              </button>
            ))}
          </div>
        </div>

        {/* 現在の料理の解説と技術規格 */}
        <div className="pt-3 border-t border-white/10 bg-white/5 p-4 rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <div>
              <h4 className="text-base font-serif font-bold text-white flex items-center gap-2">
                <Sparkles size={15} className="text-[#c5a059]" />
                {activeDish.title}
              </h4>
              <p className="text-xs text-[#e6c887] font-serif mt-0.5">
                {activeDish.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeDish.tags.map((tag) => (
                <span key={tag} className="text-[10px] bg-white/10 px-2 py-0.5 rounded-sm text-stone-300 font-serif">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs font-serif text-stone-300 leading-relaxed mb-3">
            {activeDish.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-serif pt-2 border-t border-white/5">
            {activeDish.specs.map((spec, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2 text-stone-300">
                <CheckCircle2 size={12} className="text-[#c5a059] flex-shrink-0" />
                <span className="text-stone-400">{spec.label}:</span>
                <span className="text-white font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dish3DViewer;
