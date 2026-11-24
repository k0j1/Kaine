
import React, { useState } from 'react';
import { MENU_DATA } from '../constants';
import { MenuCategory, MenuSectionData } from '../types';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.LUNCH);

  const activeData: MenuSectionData | undefined = MENU_DATA.find(d => d.category === activeCategory);

  // Helper for tab labels
  const getTabLabel = (cat: MenuCategory) => {
    switch(cat) {
        case MenuCategory.LUNCH: return '昼のお食事';
        case MenuCategory.SIDES: return 'ランチサイド';
        case MenuCategory.ALACARTE: return '一品料理';
        case MenuCategory.DINNER: return '夜のコース';
        case MenuCategory.DRINKS: return 'お飲み物';
        default: return cat;
    }
  };

  return (
    <section id="menu" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-kaine-dark mb-4">お品書き</h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Menu</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-12 border-b border-gray-200 pb-4">
          {Object.values(MenuCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-base md:text-lg font-serif pb-2 transition-all whitespace-nowrap ${
                activeCategory === cat 
                ? 'text-kaine-accent border-b-2 border-kaine-accent' 
                : 'text-gray-400 hover:text-kaine-accent'
              }`}
            >
              {getTabLabel(cat)}
            </button>
          ))}
        </div>

        {/* Rice Refill Banner for Lunch */}
        {activeCategory === MenuCategory.LUNCH && (
          <div className="mb-8 text-center animate-pulse">
             <span className="inline-block bg-red-700 text-white px-6 py-1 text-sm font-serif tracking-widest rounded-full shadow-md">
               ご飯おかわり無料
             </span>
          </div>
        )}

        {/* Menu Items List */}
        <div className="space-y-8 fade-in min-h-[400px]">
            {activeData?.items.map((item) => (
                <div key={item.id} className="flex justify-between items-baseline border-b border-dashed border-gray-200 pb-4 group hover:bg-gray-50 transition-colors p-2 rounded">
                    <div className="flex-1 pr-8">
                        <h3 className="text-lg md:text-xl font-serif text-gray-800 mb-1 group-hover:text-kaine-accent transition-colors">{item.name}</h3>
                        {item.description && (
                            <p className="text-sm text-gray-500 font-light">{item.description}</p>
                        )}
                    </div>
                    <div className="text-lg font-serif font-semibold text-kaine-gold whitespace-nowrap">
                        {item.price}
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-12">
            <p className="text-xs text-gray-400">※価格は全て税込です。仕入れ状況により内容が変更となる場合がございます。</p>
        </div>

        {/* 公式note料理アーカイブ案内 */}
        <div className="mt-10 bg-[#fafaf7] border border-[#e7e5e4] rounded-sm p-6 text-center">
          <p className="text-xs font-serif text-[#c5a059] tracking-widest uppercase mb-1">Special Archives from Official note</p>
          <h3 className="font-serif font-bold text-base md:text-lg text-[#1a1a1a] mb-2">
            定番ランチ（5品）＆ 低温火入の肉料理（21品）＆ 特製 麺料理（11品）
          </h3>
          <p className="text-xs font-serif text-[#4b5563] leading-relaxed mb-4 max-w-xl mx-auto">
            定番ランチメニューの実物写真や、公式noteで紹介している季節・仕入れ限定を含む低温調理の肉料理や特製麺料理の全37品を写真・解説付きで下のギャラリーに掲載しております。
          </p>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#2c3e50] hover:bg-[#1a1a1a] text-white text-xs md:text-sm font-serif rounded-sm transition-colors"
          >
            お料理ギャラリーで全品を見る ↓
          </a>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;
