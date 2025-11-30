
import React from 'react';
import { MapPin, Car } from 'lucide-react';
import { ADDRESS, PARKING_IMAGE_URL } from '../constants';

const AccessSection: React.FC = () => {
  return (
    <section id="access" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-kaine-dark mb-4">アクセス・駐車場</h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Access</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map Column */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-200 pb-2">
                    <MapPin className="text-kaine-gold" />
                    <h3 className="font-bold text-kaine-dark text-xl font-serif">店舗の場所</h3>
                </div>
                <div className="w-full h-[400px] bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-sm relative group">
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
                <div className="flex justify-between items-start text-sm text-gray-600">
                    <span>{ADDRESS}</span>
                    <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-kaine-accent hover:text-kaine-gold underline decoration-1 underline-offset-4 whitespace-nowrap ml-4"
                    >
                        Google Mapで見る
                    </a>
                </div>
            </div>

            {/* Parking Info Column */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2 border-b border-gray-200 pb-2">
                    <Car className="text-kaine-gold" />
                    <h3 className="font-bold text-kaine-dark text-xl font-serif">駐車場のご案内</h3>
                </div>
                
                <div className="bg-stone-50 p-6 rounded-sm border border-stone-100">
                    <div className="flex items-baseline gap-4 mb-4">
                         <span className="font-bold text-kaine-dark text-lg">全10台完備</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 pl-1 mb-6 text-gray-700">
                        <li>店舗すぐそば: <span className="font-bold">6台</span></li>
                        <li>斜め向かい「tictac hair」様ビル裏: <span className="font-bold">4台</span></li>
                    </ul>
                    
                    <div className="bg-white p-2 rounded shadow-sm border border-gray-200 max-w-sm mx-auto">
                        <img 
                            src={PARKING_IMAGE_URL} 
                            alt="駐車場案内図" 
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <p className="text-xs text-red-500 mt-4 pt-3 border-t border-gray-200 leading-relaxed">
                        ※近隣の方へのご迷惑となりますので、指定場所以外への駐車（路上駐車等）は固くお断りいたします。
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
