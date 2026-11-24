import React from 'react';
import { X, BookOpen, CheckCircle2, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { LIGHTPAPER_DATA, APP_VERSION, GOOGLE_MAPS_LOCATION_URL, NOTE_ARTICLE_URL } from '../constants';
import { AppTheme } from '../theme';

interface LightpaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * 割烹食堂かいね ライトペーパー（設計仕様書・技術規格・アップデート履歴）モーダル
 * 仕様変更履歴（公式note記事連携、実物お料理写真ギャラリー）や料理技術規格を明文化して開示します。
 */
export const LightpaperModal: React.FC<LightpaperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`relative max-w-3xl w-full bg-[#fcfcf9] ${AppTheme.rounded.md} ${AppTheme.shadows.xl} border border-stone-300 p-6 md:p-10 my-8 max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* クローズボタン */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors"
          aria-label="閉じる"
        >
          <X size={22} />
        </button>

        {/* ヘッダー */}
        <div className="text-center mb-8 border-b border-stone-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#9e7e3e] text-xs font-serif rounded-full mb-3">
            <BookOpen size={14} />
            <span>割烹食堂かいね 公式ライトペーパー (v{APP_VERSION})</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] tracking-wider mb-2">
            店舗思想 ＆ デジタル体験仕様書
          </h2>
          <p className="text-xs text-stone-500 font-serif">
            Kappo Shokudo Kaine Specification & Architectural Whitepaper
          </p>
        </div>

        {/* 各セクション */}
        <div className="space-y-8">
          {LIGHTPAPER_DATA.map((section) => (
            <div key={section.id} className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#1a1a1a] flex items-center gap-2 mb-1">
                <Sparkles size={16} className="text-[#c5a059]" />
                {section.title}
              </h3>
              <p className="text-xs font-serif text-[#c5a059] mb-4 tracking-wider">
                {section.subtitle}
              </p>

              <div className="space-y-2 mb-4">
                {section.content.map((p, idx) => (
                  <p key={idx} className="text-sm font-serif text-[#4b5563] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {section.specs && section.specs.length > 0 && (
                <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="bg-stone-50 p-2.5 rounded-sm border border-stone-200 text-xs font-serif">
                      <div className="text-stone-500 font-medium mb-0.5 flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-[#c5a059]" />
                        {spec.label}
                      </div>
                      <div className="text-[#1a1a1a] font-semibold">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* 公式note記事 案内ボックス */}
          <div className="bg-[#c5a059]/10 border border-[#c5a059]/30 p-5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c5a059] text-white flex items-center justify-center flex-shrink-0">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#1a1a1a]">
                  店主執筆 note公式コラム
                </h4>
                <p className="text-xs text-stone-600 font-serif">
                  『割烹食堂かいねのこだわり』全文をnoteプラットフォームにてご覧いただけます。
                </p>
              </div>
            </div>
            <a
              href={NOTE_ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#9e7e3e] text-white text-xs font-serif px-4 py-2.5 rounded-sm transition-colors flex-shrink-0 shadow-sm"
            >
              <span>noteで全文を読む</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* 店舗アクセス案内 */}
          <div className="bg-[#4285F4]/10 border border-[#4285F4]/30 p-5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4285F4] text-white flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#1a1a1a]">
                  店舗アクセス・地図案内
                </h4>
                <p className="text-xs text-stone-600 font-serif">
                  Googleマップにて店舗の正確な位置やルート案内をご確認いただけます。
                </p>
              </div>
            </div>
            <a
              href={GOOGLE_MAPS_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367d6] text-white text-xs font-serif px-4 py-2.5 rounded-sm transition-colors flex-shrink-0 shadow-sm"
            >
              <span>店舗地図を開く</span>
            </a>
          </div>
        </div>

        {/* フッター */}
        <div className="mt-8 pt-6 border-t border-stone-200 text-center">
          <button
            onClick={onClose}
            className="px-8 py-2.5 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white text-sm font-serif rounded-sm transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
