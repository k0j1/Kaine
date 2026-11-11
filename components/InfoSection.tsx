import React from 'react';
import { MapPin, Clock, Phone, Calendar, Instagram, ExternalLink, BookOpen } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, RESERVATION_URL, GOOGLE_MAPS_LOCATION_URL, NOTE_ARTICLE_URL, APP_VERSION } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="py-20 bg-kaine-dark text-stone-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-serif text-white mb-12 text-center">店舗情報</h2>
        
        <div className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                     <div className="flex items-start gap-4">
                        <MapPin className="mt-1 text-kaine-gold flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">住所</h4>
                            <p>{ADDRESS}</p>
                            <a 
                              href={GOOGLE_MAPS_LOCATION_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-[#8ab4f8] hover:underline mt-2 font-serif"
                            >
                              <span>Googleマップでルートを確認</span>
                              <ExternalLink size={12} />
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="mt-1 text-kaine-gold flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">お問い合わせ</h4>
                            <p className="text-2xl font-serif text-white">{PHONE_NUMBER}</p>
                            <p className="text-xs text-stone-400 mt-0.5">※予約・お問い合わせ専用（070-9133-1290）</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <Clock className="mt-1 text-kaine-gold flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">営業時間</h4>
                            <p className="mb-1"><span className="text-xs border border-stone-500 px-1 mr-2">ランチ</span> 11:30 - 13:30 (L.O.)</p>
                            <p><span className="text-xs border border-stone-500 px-1 mr-2">ディナー</span> 18:00 - 22:00 (L.O. 21:00)</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Calendar className="mt-1 text-kaine-gold flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">定休日</h4>
                            <p>日曜日</p>
                            <p className="text-xs text-gray-500 mt-1">※その他、不定休あり（Instagramにて随時告知）</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact Action Buttons */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-wrap items-center justify-center gap-4">
                 <a 
                    href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
                    className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#9e7e3e] text-white px-6 py-3 rounded-sm text-sm font-serif font-bold transition-colors shadow-sm"
                 >
                    <Phone size={18} />
                    <span>お電話でお問い合わせ</span>
                 </a>
                 <a
                    href={GOOGLE_MAPS_LOCATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367d6] text-white px-5 py-3 rounded-sm text-sm font-serif transition-colors shadow-sm"
                 >
                    <MapPin size={18} />
                    <span>Googleマップで場所を見る</span>
                 </a>
                 <a 
                    href={NOTE_ARTICLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-[#c5a059]/30 text-white border border-[#c5a059]/60 px-5 py-3 rounded-sm text-sm font-serif transition-colors"
                 >
                    <BookOpen size={18} className="text-[#c5a059]" />
                    <span>公式note「こだわり」記事</span>
                 </a>
                 <a 
                    href={RESERVATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-sm text-sm font-serif transition-colors"
                 >
                    <Instagram size={18} />
                    <span>公式Instagramを見る</span>
                 </a>
            </div>
        </div>
        
        <div className="border-t border-stone-700 mt-16 pt-8 text-center text-xs text-stone-400 font-serif space-y-1">
            <p>&copy; {new Date().getFullYear()} 割烹食堂 かいね All Rights Reserved.</p>
            <p className="font-mono text-[11px] text-[#c5a059]">Version {APP_VERSION}</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
