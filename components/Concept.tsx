import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  Sparkles, 
  Check, 
  ChevronRight, 
  UtensilsCrossed, 
  Flame, 
  HeartHandshake, 
  Fish, 
  Droplet 
} from 'lucide-react';
import { CommitmentService, CommitmentModel } from '../services/commitmentService';
import { ImageAltService } from '../services/imageAltService';
import { ResilientImage } from './ResilientImage';
import { AppTheme } from '../theme';

interface ConceptProps {
  onExploreGallery?: () => void;
}

/**
 * こだわりセクションコンポーネント (Concept & Commitment)
 * note公式記事「割烹食堂かいねのこだわり (https://note.com/firm_emu2667/n/nf27eed0b29ce)」を取り入れ、
 * 店名（海の音色）の由来、日替わりのお品書き、手作り調味料、火入れの科学、おもてなしの5大哲学を体系的に表現します。
 */
const Concept: React.FC<ConceptProps> = ({ onExploreGallery }) => {
  // OOP CommitmentServiceからデータを取得
  const commitmentService = useMemo(() => CommitmentService.getInstance(), []);
  const pillars = useMemo(() => commitmentService.getAllPillars(), [commitmentService]);
  const noteArticleUrl = commitmentService.getNoteArticleUrl();

  // 現在選択中のこだわり（タブ切替用）
  const [selectedPillarId, setSelectedPillarId] = useState<string>(pillars[0]?.id || 'name-philosophy');

  const selectedPillar = useMemo(() => {
    return pillars.find(p => p.id === selectedPillarId) || pillars[0];
  }, [pillars, selectedPillarId]);

  // アイコンマッピング
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: return <Fish size={18} />;
      case 1: return <UtensilsCrossed size={18} />;
      case 2: return <Droplet size={18} />;
      case 3: return <Flame size={18} />;
      case 4: default: return <HeartHandshake size={18} />;
    }
  };

  const headerClass = AppTheme.getSectionHeaderClass();

  return (
    <section id="concept" className="py-20 md:py-28 bg-[#f5f5f0] scroll-mt-20">
      <div className={AppTheme.spacing.containerMax}>
        {/* セクションヘッダー */}
        <div className="text-center mb-12 md:mb-16">
          <p className={headerClass.subtitle}>The Commitment of Kappo Shokudo Kaine</p>
          <h2 className={headerClass.title}>割烹食堂かいねのこだわり</h2>
          <div className={headerClass.ornament}></div>
          <p className="font-serif text-[#4b5563] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            「割烹」の熟練した技術を、日常で愛される「食堂」の温もりで。<br className="hidden sm:inline" />
            海のない郡山の地で、五感に響く海の恵みと四季の美しさをお届けする店主の料理哲学をご紹介します。
          </p>
        </div>

        {/* 公式note記事リンク 特集バナー */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#1a1a1a] via-[#2c3e50] to-[#1a1a1a] text-white p-6 md:p-8 rounded-sm shadow-xl border border-[#c5a059]/40">
            {/* 装飾の背景グラフィック */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-[#c5a059]/10 blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c5a059]/20 border border-[#c5a059]/40 rounded-full text-xs font-serif text-[#e6c887]">
                  <BookOpen size={13} className="text-[#c5a059]" />
                  <span>note 公式コラム記事掲載</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold tracking-wider text-white">
                  公式note「割烹食堂かいねのこだわり」
                </h3>
                <p className="text-xs md:text-sm text-stone-300 font-serif leading-relaxed">
                  店名に込めた「海の音色」という想い、調味料まで厨房で一から手作りする姿勢、
                  毎日変わる一期一会のお品書きについて、店主が言葉を紡いだ公式記事を公開しています。
                </p>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href={noteArticleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#9e7e3e] text-white px-6 py-3.5 rounded-sm text-sm font-serif font-semibold transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <span>noteで記事を読む</span>
                  <ExternalLink size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* こだわりの5大哲学 ナビゲーションセレクター */}
        <div className="mb-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
            {pillars.map((pillar, idx) => {
              const isSelected = pillar.id === selectedPillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-3 md:p-4 rounded-sm text-left transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-white border-[#c5a059] shadow-md ring-1 ring-[#c5a059]/40 -translate-y-0.5'
                      : 'bg-white/70 border-stone-200 hover:bg-white text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#c5a059]' : 'text-stone-400'}`}>
                      {pillar.number}
                    </span>
                    <span className={isSelected ? 'text-[#c5a059]' : 'text-stone-400'}>
                      {getPillarIcon(idx)}
                    </span>
                  </div>
                  <div>
                    <h4 className={`text-xs md:text-sm font-serif font-bold line-clamp-2 ${isSelected ? 'text-[#1a1a1a]' : 'text-stone-700'}`}>
                      {pillar.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 選択中のこだわり詳細コンテンツカード */}
        <div className="max-w-5xl mx-auto bg-white rounded-sm border border-stone-200 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* 左側：料理写真・タグ */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[300px] lg:min-h-[460px] overflow-hidden bg-stone-100">
              <ResilientImage
                src={selectedPillar.image}
                alt={ImageAltService.buildCommitmentAlt(selectedPillar)}
                fallbackLabel={selectedPillar.title}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-[#c5a059] text-white text-[11px] font-serif px-2.5 py-1 rounded-sm mb-2 shadow-sm">
                  {selectedPillar.tag}
                </span>
                <p className="text-white text-xs font-serif opacity-90 drop-shadow-sm">
                  割烹食堂かいね 料理長謹製
                </p>
              </div>
            </div>

            {/* 右側：ストーリー解説と詳細項目 */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 bg-[#c5a059]/15 text-[#9e7e3e] rounded-sm">
                    COMMITMENT {selectedPillar.number}
                  </span>
                  <span className="text-xs font-serif text-stone-400">
                    割烹食堂かいねのこだわり
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a] mb-2 leading-tight">
                  {selectedPillar.title}
                </h3>

                <p className="text-sm font-serif text-[#c5a059] font-medium mb-5">
                  {selectedPillar.subtitle}
                </p>

                <p className="text-sm md:text-base font-serif text-[#4b5563] leading-relaxed mb-6 border-l-2 border-[#c5a059]/50 pl-4 bg-[#fafaf7] py-3 pr-3 rounded-r-sm">
                  {selectedPillar.summary}
                </p>

                {/* 詳細ポイント一覧 */}
                <div className="space-y-3 mb-6">
                  {selectedPillar.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-serif text-[#374151]">
                      <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <p className="leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 下部アクションエリア */}
              <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={noteArticleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-serif text-[#2c3e50] hover:text-[#c5a059] transition-colors"
                >
                  <BookOpen size={14} className="text-[#c5a059]" />
                  <span>note公式記事で全文を読む</span>
                  <ChevronRight size={14} />
                </a>

                {onExploreGallery ? (
                  <button
                    onClick={onExploreGallery}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-serif bg-stone-100 hover:bg-stone-200 text-[#1a1a1a] px-4 py-2 rounded-sm transition-colors"
                  >
                    <Sparkles size={13} className="text-[#c5a059]" />
                    <span>このお料理をギャラリーで見る</span>
                  </button>
                ) : (
                  <a
                    href="#gallery"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-serif bg-stone-100 hover:bg-stone-200 text-[#1a1a1a] px-4 py-2 rounded-sm transition-colors"
                  >
                    <Sparkles size={13} className="text-[#c5a059]" />
                    <span>実際のお料理写真を見る</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 5大柱の総括・ハイライトカード */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#c5a059]/15 text-[#c5a059] flex items-center justify-center mb-4">
              <Fish size={20} />
            </div>
            <h4 className="font-serif font-bold text-base text-[#1a1a1a] mb-2">
              名店仕込みの確かな技術
            </h4>
            <p className="text-xs font-serif text-[#6b7280] leading-relaxed">
              割烹一筋の板前が魚と食材の状態を見極め、包丁の入れ方ひとつから出汁の引き方まで誠実に仕上げます。
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#2c3e50]/15 text-[#2c3e50] flex items-center justify-center mb-4">
              <Droplet size={20} />
            </div>
            <h4 className="font-serif font-bold text-base text-[#1a1a1a] mb-2">
              自家製調味料への矜持
            </h4>
            <p className="text-xs font-serif text-[#6b7280] leading-relaxed">
              干し椎茸と昆布の「特製出汁ソース」、季節のプラム等の「果実塩」、長期熟成赤酢など、調味料もすべて手作り。
            </p>
          </div>

          <div className="bg-white p-6 rounded-sm border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a]/15 text-[#1a1a1a] flex items-center justify-center mb-4">
              <HeartHandshake size={20} />
            </div>
            <h4 className="font-serif font-bold text-base text-[#1a1a1a] mb-2">
              日常に寄り添う食堂の心
            </h4>
            <p className="text-xs font-serif text-[#6b7280] leading-relaxed">
              気取らず誰もがくつろげる空間。昼はご飯おかわり自由の絶品定食、夜は旬の酒菜と地酒で心ほどけるひとときを。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
