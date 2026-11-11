import React from 'react';
import { ExternalLink, ArrowRight, Smartphone, MapPin, Star, Info, BookOpen } from 'lucide-react';
import { MEDIA_LINKS } from '../constants';
import { AppTheme } from '../theme';

/**
 * 掲載情報・外部リンクセクションコンポーネント
 * 公式note記事「割烹食堂かいねのこだわり」、公式Instagram、Googleマップ、グルメポータルへのリンクを集約展示します。
 */
const MediaSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'note': return <BookOpen className="w-5 h-5 text-[#c5a059]" />;
      case 'instagram': return <Smartphone className="w-5 h-5 text-[#c5a059]" />;
      case 'google': return <MapPin className="w-5 h-5 text-[#4285F4]" />;
      case 'tabelog': return <Star className="w-5 h-5 text-[#fa8c16]" />;
      default: return <Info className="w-5 h-5 text-[#2c3e50]" />;
    }
  };

  const headerClass = AppTheme.getSectionHeaderClass();

  return (
    <section id="media" className="py-20 md:py-28 bg-[#fafaf7] scroll-mt-20">
      <div className={AppTheme.spacing.containerMax}>
        <div className="text-center mb-16">
          <p className={headerClass.subtitle}>Media & Official Links</p>
          <h2 className={headerClass.title}>掲載情報・公式リンク</h2>
          <div className={headerClass.ornament}></div>
          <p className="font-serif text-[#4b5563] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            割烹食堂かいねの料理哲学や日々の営業風景は、各メディア・公式SNSでもご覧いただけます。<br className="hidden sm:inline" />
            店主自ら執筆した公式noteコラムもぜひご一読ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MEDIA_LINKS.map((link) => {
            const isNote = link.id === 'note';
            return (
              <a 
                key={link.id} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col bg-white rounded-sm transition-all duration-300 overflow-hidden group border ${
                  isNote 
                    ? 'border-[#c5a059] shadow-lg ring-1 ring-[#c5a059]/30 hover:shadow-2xl' 
                    : 'border-stone-200 shadow-md hover:shadow-xl'
                }`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={link.image} 
                    alt={link.siteName} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors"></div>
                  
                  {isNote && (
                    <div className="absolute top-3 right-3 bg-[#c5a059] text-white text-xs font-serif font-bold px-3 py-1 rounded-sm shadow-sm flex items-center gap-1">
                      <BookOpen size={12} />
                      <span>必読コラム</span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-xs px-4 py-2 font-serif font-bold text-[#1a1a1a] flex items-center gap-2 rounded-tr-sm border-t border-r border-stone-200/60">
                     {getIcon(link.id)}
                     <span>{link.siteName}</span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {link.tags.map(tag => (
                        <span key={tag} className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-sm border border-stone-200 font-serif">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-[#4b5563] text-xs md:text-sm leading-relaxed mb-6 font-serif">
                      {link.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-serif">
                    <span className="text-[#2c3e50] font-medium group-hover:text-[#c5a059] transition-colors flex items-center gap-1">
                      <span>{isNote ? 'noteで記事を読む' : 'サイトを見る'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700 transition-colors" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
