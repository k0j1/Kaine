import React from 'react';
import { Calendar } from 'lucide-react';

const ReserveSection: React.FC = () => {
  return (
    <section id="reserve" className="py-20 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-kaine-dark mb-4">ご予約</h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Reservation</p>
        </div>

        <div className="bg-white rounded-sm p-4 md:p-8 shadow-xl border border-stone-200">
            <h3 className="font-bold text-kaine-dark text-xl flex items-center justify-center gap-2 mb-6 border-b border-gray-200 pb-4">
                <Calendar className="text-kaine-gold" /> 空席状況・WEB予約
            </h3>
            <div className="w-full">
                <iframe 
                    title="AirReserve Calendar"
                    frameBorder="0" 
                    width="100%" 
                    height="1000px" 
                    src="//airrsv.net/kaine/calendar/embed/" 
                />
                <div style={{textAlign:'right', fontSize:'10px', color:'#555', margin: '16px 0 0 0', lineHeight:'160%'}}>
                    この予約システムは
                    <a style={{color:'#555', textDecoration:'underline'}} href="https://airregi.jp/reserve/?vos=otrsvxototzzx00000099" target="_blank" rel="noopener noreferrer">
                        Airリザーブ
                        <img src="https://cdn.airrsv.net/img/icon/open_link_black.svg" style={{margin:'2px 2px 4px', verticalAlign:'top'}} alt="" aria-hidden="true"/>
                    </a>
                    が提供しています
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;