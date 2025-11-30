
import React from 'react';
import { MapPin, Clock, Phone, Calendar, Instagram } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, RESERVATION_URL } from '../constants';

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
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="mt-1 text-kaine-gold flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">お問い合わせ</h4>
                            <p className="text-2xl font-serif text-white">{PHONE_NUMBER}</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <Clock className="mt-1 text-kaine-gold flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">営業時間</h4>
                            <p className="mb-1"><span className="text-xs border border-stone-500 px-1 mr-2">ランチ</span> 11:30 - 14:00 (L.O. 13:30)</p>
                            <p><span className="text-xs border border-stone-500 px-1 mr-2">ディナー</span> 17:30 - 22:00 (L.O. 21:00)</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Calendar className="mt-1 text-kaine-gold flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-white mb-1">定休日</h4>
                            <p>日曜日</p>
                            <p className="text-xs text-gray-500 mt-1">※その他、不定休あり</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact / Reserve Button */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
                 <p className="mb-4 text-sm">ご予約はInstagramのDMにて承っております。</p>
                 <a 
                    href={RESERVATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-kaine-dark px-8 py-3 rounded-sm text-sm font-bold hover:bg-gray-200 transition-colors"
                 >
                    <Instagram size={18} />
                    DMで予約する
                 </a>
            </div>
        </div>
        
        <div className="border-t border-stone-700 mt-16 pt-8 text-center">
            <p className="text-sm font-serif">&copy; {new Date().getFullYear()} 割烹食堂 かいね All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
