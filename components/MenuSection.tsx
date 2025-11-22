import React, { useState } from 'react';
import { MENU_DATA, MENU_SCANS } from '../constants';
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

        {/* Menu Photos Section */}
        <div className="mt-24 pt-12 border-t border-gray-100">
            <h3 className="text-center font-serif text-xl mb-8 text-gray-600">メニュー写真</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {MENU_SCANS.map((img, idx) => (
                 <div key={idx} className="bg-white p-2 shadow-lg rounded-sm border border-stone-200 group cursor-pointer">
                    <div className="aspect-[3/4] relative overflow-hidden bg-stone-100">
                       <img 
                         src={img.src} 
                         alt={img.alt} 
                         className="w-full h-full object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                       />
                       <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                          {img.alt}
                       </div>
                    </div>
                 </div>
               ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;