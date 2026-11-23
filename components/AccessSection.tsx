import React, { useState, useEffect } from 'react';
import { MapPin, Car, Maximize2, X } from 'lucide-react';
import { ADDRESS, PARKING_IMAGE_URL, GOOGLE_MAPS_LOCATION_URL } from '../constants';
import { ResilientImage } from './ResilientImage';
import { AppTheme } from '../theme';

/**
 * アクセス・駐車場案内セクションコンポーネント
 * 店舗マップと公式駐車場案内図（拡大確認モーダル付き）を表示します。
 */
const AccessSection: React.FC = () => {
  const [isParkingModalOpen, setIsParkingModalOpen] = useState(false);

  useEffect(() => {
    if (!isParkingModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsParkingModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isParkingModalOpen]);

  const headerClass = AppTheme.getSectionHeaderClass();

  return (
    <section id="access" className="py-20 bg-white scroll-mt-20">
      <div className={AppTheme.spacing.containerMax}>
        <div className="text-center mb-12">
          <p className={headerClass.subtitle}>Access</p>
          <h2 className={headerClass.title}>アクセス・駐車場</h2>
          <div className={headerClass.ornament}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Map Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 border-b border-[#e7e5e4] pb-2">
              <MapPin className="text-[#c5a059]" />
              <h3 className="font-bold text-[#1a1a1a] text-xl font-serif">店舗の場所</h3>
            </div>
            <div className={`w-full h-[400px] bg-[#f0f0eb] ${AppTheme.rounded.sm} overflow-hidden border border-[#e7e5e4] ${AppTheme.shadows.sm} relative group`}>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            <div className="flex justify-between items-start text-sm text-[#4b5563]">
              <span>{ADDRESS}</span>
              <a
                href={GOOGLE_MAPS_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c3e50] hover:text-[#c5a059] underline decoration-1 underline-offset-4 whitespace-nowrap ml-4 flex items-center gap-1"
              >
                <span>Googleマップで見る</span>
              </a>
            </div>
          </div>

          {/* Parking Info Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 border-b border-[#e7e5e4] pb-2">
              <Car className="text-[#c5a059]" />
              <h3 className="font-bold text-[#1a1a1a] text-xl font-serif">駐車場のご案内</h3>
            </div>

            <div className={`bg-[#fafaf7] p-6 ${AppTheme.rounded.sm} border border-[#e7e5e4]`}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-bold text-[#1a1a1a] text-lg font-serif">全10台完備</span>
              </div>
              <ul className="list-disc list-inside space-y-2 pl-1 mb-6 text-sm font-serif text-[#4b5563]">
                <li>
                  当店すぐそば：<span className="font-bold text-[#1a1a1a]">6台</span>
                </li>
                <li>
                  斜め向かい「tictac hair」様 左わき坂道途中の右側 ビル裏契約駐車場：<span className="font-bold text-[#1a1a1a]">4台（4・5・8・9番）</span>
                </li>
              </ul>

              <div
                onClick={() => setIsParkingModalOpen(true)}
                className={`group relative bg-white p-2 ${AppTheme.rounded.sm} ${AppTheme.shadows.sm} border border-[#e7e5e4] max-w-sm mx-auto cursor-pointer overflow-hidden`}
                title="クリックで駐車場案内図を拡大表示"
              >
                <ResilientImage
                  src={PARKING_IMAGE_URL}
                  alt="割烹食堂かいね 駐車場のご案内"
                  fallbackLabel="駐車場案内図"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className={`mt-2 flex items-center justify-center gap-1.5 text-xs font-serif text-[#2c3e50] group-hover:text-[#c5a059] transition-colors`}>
                  <Maximize2 size={13} />
                  <span>クリックで案内図を拡大表示</span>
                </div>
              </div>

              <p className="text-xs text-red-600 mt-4 pt-3 border-t border-[#e7e5e4] leading-relaxed font-serif">
                ※当店ご利用以外の方の駐車・近隣への迷惑行為はお断りいたします。当駐車場での盗難・事故については一切責任を負いません。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 駐車場案内図 拡大モーダル */}
      {isParkingModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setIsParkingModalOpen(false)}
        >
          <div
            className={`relative max-w-2xl w-full bg-white ${AppTheme.rounded.md} ${AppTheme.shadows.xl} p-3 sm:p-4`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsParkingModalOpen(false)}
              className={`absolute top-3 right-3 z-10 p-2 bg-black/70 text-white hover:bg-black ${AppTheme.rounded.full} transition-colors`}
              aria-label="閉じる"
            >
              <X size={20} />
            </button>
            <div className="max-h-[82vh] overflow-auto flex justify-center bg-[#f5f5f0]">
              <ResilientImage
                src={PARKING_IMAGE_URL}
                alt="割烹食堂かいね 駐車場のご案内（拡大）"
                fallbackLabel="駐車場案内図"
                loading="eager"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-center text-xs font-serif text-[#4b5563] mt-3">
              割烹食堂かいね 駐車場のご案内（全10台：店舗すぐそば6台／斜め向かいビル裏契約駐車場4台〔4・5・8・9番〕）
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AccessSection;
