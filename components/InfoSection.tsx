import React from 'react';
import { MapPin, Clock, Phone, Calendar, Instagram, Car } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, RESERVATION_URL, PARKING_IMAGE_URL } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="py-20 bg-kaine-dark text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-serif text-white mb-12 text-center">店舗情報・アクセス</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column: Store Details */}
          <div className="bg-white/5 p-6 md:p-8 rounded-sm border border-white/10 space-y-8">
            <h3 className="text-xl font-bold text-white border-b border-white/20 pb-4 mb-6">
              基本情報
            </h3>
            
            <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-kaine-gold flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-white mb-1">住所</h4>
                    <p>{ADDRESS}</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <Clock className="mt-1 text-kaine-gold flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-white mb-1">営業時間</h4>
                    <p className="mb-2"><span className="text-xs border border-stone-500 px-1 mr-2">ランチ</span> 11:30 - 14:00 (L.O. 13:30)</p>
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

            <div className="flex items-start gap-4">
                <Phone className="mt-1 text-kaine-gold flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-white mb-1">お問い合わせ</h4>
                    <p className="text-2xl font-serif text-white">{PHONE_NUMBER}</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <Instagram className="mt-1 text-kaine-gold flex-shrink-0" />
                <div>
                    <h4 className="font-bold text-white mb-1">ご予約</h4>
                    <p className="mb-4 text-sm">ご予約はInstagramのDMにて承っております。</p>
                    <a 
                      href={RESERVATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-kaine-dark px-6 py-2 rounded-sm text-sm font-bold hover:bg-gray-200 transition-colors"
                    >
                      <Instagram size={18} />
                      DMで予約する
                    </a>
                </div>
            </div>
          </div>

        </div>

        {/* Google Map - Full Width at Bottom */}
        <div className="space-y-4">
            <h3 className="font-bold text-white text-xl flex items-center gap-2 mb-4">
                <MapPin className="text-kaine-gold" /> Google Map
            </h3>
            <div className="w-full h-[400px] bg-stone-800 rounded-sm overflow-hidden relative border border-stone-600 group">
                <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
            </div>
            <div className="flex justify-end">
                <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-kaine-gold hover:text-white underline decoration-1 underline-offset-4"
                >
                    Google Mapで開く
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