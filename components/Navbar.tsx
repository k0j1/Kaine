import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { SITE_NAME, RESERVATION_URL } from '../constants';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <h1 className="text-2xl font-serif font-bold text-kaine-dark tracking-wider">{SITE_NAME}</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Concept', 'Menu', 'Gallery', 'Info', 'Instagram'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-kaine-accent hover:text-kaine-gold px-3 py-2 rounded-md text-sm font-medium transition-colors tracking-widest uppercase"
                >
                  {item}
                </button>
              ))}
              <a 
                 href={RESERVATION_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-kaine-accent text-white px-4 py-2 rounded-sm text-sm font-serif hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <Instagram size={16} />
                <span>DM予約</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-kaine-accent hover:text-kaine-dark p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
             {['Concept', 'Menu', 'Gallery', 'Info', 'Instagram'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-kaine-accent hover:text-kaine-gold block px-3 py-4 rounded-md text-base font-medium w-full text-center font-serif"
                >
                  {item}
                </button>
              ))}
               <a 
                 href={RESERVATION_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-kaine-accent text-white px-8 py-3 mt-4 rounded-sm text-base font-serif w-11/12 flex items-center justify-center gap-2"
              >
                <Instagram size={18} />
                <span>DMで予約する</span>
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;