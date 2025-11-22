import React from 'react';
import { SITE_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=1" 
          alt="Kaine Cuisine Interior" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-stone-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 fade-in">
        <div className="mb-6">
          <span className="writing-vertical-rl text-lg md:text-xl tracking-[0.5em] font-serif border-l border-white/50 pl-4 py-8 h-48 inline-block">
            季節を味わう、心の料理
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 tracking-widest">
          割烹食堂 かいね
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wider uppercase text-stone-200">
          {SITE_SUBTITLE}
        </p>
        <div className="mt-12">
            <div className="animate-bounce">
                <span className="block w-px h-16 bg-white mx-auto"></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;