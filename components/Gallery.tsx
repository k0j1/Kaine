
import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_IMAGES } from '../constants';

interface GalleryProps {
  apiImages?: string[];
}

const Gallery: React.FC<GalleryProps> = ({ apiImages }) => {
  const [rotation, setRotation] = useState(0);
  const autoRotateRef = useRef<number>(0);
  const isHoveringRef = useRef(false);

  // API画像がある場合はそれを使い、なければ定数の画像を使う
  const displayImages = (apiImages && apiImages.length > 0) 
    ? apiImages.map((src, index) => ({ id: `api-${index}`, src, alt: 'Kaine Cuisine & Interior' }))
    : GALLERY_IMAGES;

  // 画像枚数に合わせて角度を調整
  const numberOfImages = displayImages.length;
  const anglePerImage = 360 / numberOfImages;
  const radius = 300; // Distance from center

  useEffect(() => {
    const animate = () => {
      if (!isHoveringRef.current) {
        setRotation(prev => prev - 0.2); // Negative for clockwise rotation
      }
      autoRotateRef.current = requestAnimationFrame(animate);
    };
    autoRotateRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current);
    };
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-kaine-dark mb-4">お料理と空間</h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest">3D Gallery</p>
        </div>

        {/* 3D Scene Container */}
        <div 
          className="relative h-[500px] flex items-center justify-center perspective-1000"
          onMouseEnter={() => isHoveringRef.current = true}
          onMouseLeave={() => isHoveringRef.current = false}
        >
          <div 
            className="relative w-[300px] h-[200px] preserve-3d transition-transform duration-100"
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            {displayImages.map((img, index) => {
              const angle = index * anglePerImage;
              return (
                <div
                  key={img.id}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden'
                  }}
                >
                   {/* 3D Card Object */}
                  <div className="relative w-full h-full group transform-style-3d">
                    {/* Front Face (Image) */}
                    <div className="absolute inset-0 bg-white p-2 shadow-xl border border-stone-200 rounded-sm">
                      <div className="w-full h-full overflow-hidden relative">
                        <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white font-serif text-sm">{img.alt}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Reflection Effect below */}
                    <div 
                        className="absolute -bottom-[220px] left-0 w-full h-full opacity-30 transform scale-y-[-1]"
                        style={{ 
                            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.5), white), url(${img.src})`,
                            backgroundSize: 'cover',
                            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' 
                        }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 text-center">
           <p className="font-serif text-gray-600 text-sm leading-loose">
             <span className="text-xs text-stone-400 block mb-2">※マウスを乗せると回転が止まります</span>
             目で楽しみ、舌で味わう。<br/>
             季節ごとの彩りを大切にした一皿をご用意しております。
           </p>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .transform-style-3d {
            transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
