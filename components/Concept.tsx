
import React from 'react';

interface ConceptProps {
  images?: string[];
}

const Concept: React.FC<ConceptProps> = ({ images }) => {
  // Use provided images or fallback to placeholders
  const chefImage = images?.[0] || "https://picsum.photos/600/300?random=5";
  const mainImage = images?.[1] || "https://picsum.photos/600/800?random=1";
  const detailImage = images?.[2] || "https://picsum.photos/200/200?random=2";

  return (
    <section id="concept" className="py-20 bg-kaine-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-serif text-kaine-dark mb-6 border-l-4 border-kaine-accent pl-4">
              郡山の地で、<br/>四季を彩る和の食卓
            </h2>
            <p className="text-gray-700 leading-loose font-serif text-justify">
              「割烹」の技術を、もっと身近な「食堂」の気軽さで。<br/>
              それが『割烹食堂かいね』の想いです。<br/><br/>
              福島県郡山市菜根4丁目4-4。静かな住宅街に佇む当店では、
              地元の旬の食材をふんだんに使い、丁寧に仕込んだお料理をご提供しております。
              名物の土鍋ご飯や、季節の彩り豊かな「かいね御膳」など、
              職人の技が光る逸品を気軽にお楽しみいただけます。
              木の温もりを感じる店内で、心安らぐひとときをお過ごしください。
            </p>
            <div className="pt-4">
                <img src={chefImage} alt="Chef cooking or dish" className="w-full h-48 object-cover rounded-sm shadow-md opacity-90 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
             <img 
                src={mainImage} 
                alt="Kaine Atmosphere" 
                className="w-full h-[500px] object-cover rounded-sm shadow-xl"
             />
             <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white p-4 shadow-lg hidden md:block">
                <img src={detailImage} alt="Detail" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
