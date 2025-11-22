import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import InfoSection from './components/InfoSection';
import InstagramFeed from './components/InstagramFeed';
import AIConcierge from './components/AIConcierge';

const App: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-kaine-bg font-sans">
      <Navbar scrollToSection={scrollToSection} />
      
      <main>
        <Hero />
        <Concept />
        <MenuSection />
        <Gallery />
        <InstagramFeed />
        <InfoSection />
      </main>
      
      <AIConcierge />
    </div>
  );
};

export default App;