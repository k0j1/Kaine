import React from 'react';
import { Instagram, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../constants';

const InstagramFeed: React.FC = () => {
  return (
    <section id="instagram" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-12 text-kaine-accent">
          <Instagram size={28} />
          <h2 className="text-2xl font-serif">@kaine_cuisine</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
            {INSTAGRAM_POSTS.map((post) => (
                <div key={post.id} className="relative group overflow-hidden aspect-square cursor-pointer bg-gray-200">
                    <img 
                        src={post.imageUrl} 
                        alt={post.caption} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <div className="text-white text-center">
                            <p className="text-xs md:text-sm line-clamp-3 mb-2">{post.caption}</p>
                            <div className="flex items-center justify-center gap-1 text-sm">
                                <Heart size={16} fill="white" /> {post.likes}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-8">
            <a 
                href="https://www.instagram.com/kaine_cuisine/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-kaine-accent text-kaine-accent hover:bg-kaine-accent hover:text-white px-8 py-2 rounded-full transition-all duration-300 text-sm"
            >
                Instagramを見る
            </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;