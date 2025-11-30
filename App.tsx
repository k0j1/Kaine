
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import ReserveSection from './components/ReserveSection';
import AccessSection from './components/AccessSection';
import InfoSection from './components/InfoSection';
import InstagramFeed from './components/InstagramFeed';
import AIConcierge from './components/AIConcierge';
import { useGooglePlacePhotos } from './hooks/useGooglePlacePhotos';

const App: React.FC = () => {
  const { photos, loading } = useGooglePlacePhotos();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 写真を各セクションに分配
  // [0]: Hero
  // [1-3]: Concept (3枚)
  // [4-6]: Menu (3枚)
  // [7-]: Gallery (残り)
  const heroPhoto = photos.length > 0 ? photos[0] : undefined;
  const conceptPhotos = photos.length > 1 ? photos.slice(1, 4) : undefined;
  const menuPhotos = photos.length > 4 ? photos.slice(4, 7) : undefined;
  const galleryPhotos = photos.length > 7 ? photos.slice(7) : undefined;

  return (
    <div className="min-h-screen bg-kaine-bg font-sans">
      <Navbar scrollToSection={scrollToSection} />
      
      <main>
        <Hero heroImage={heroPhoto} />
        <Concept images={conceptPhotos} />
        <MenuSection images={menuPhotos} />
        <Gallery apiImages={galleryPhotos} />
        <ReserveSection />
        <AccessSection />
        <InstagramFeed />
        <InfoSection />
      </main>
      
      <AIConcierge />
    </div>
  );
};

export default App;
