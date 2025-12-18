import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import ZohoFormModal from './ZohoFormModal';

interface HeaderProps {
  zohoEmbedCode?: string;
}

export default function Header({ zohoEmbedCode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isZohoModalOpen, setIsZohoModalOpen] = useState(false);

  const navItems = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'About', sectionId: 'value-proposition' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Process', sectionId: 'process-timeline' },
    { label: 'Projects', sectionId: 'project-gallery' },
    { label: 'Contact', sectionId: 'contact-form' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="/image.png"
              alt="Koku Solar - Earn While The Sun Shines"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm font-medium transition-colors hover:text-[#F39A1E]"
                style={{ color: '#333333' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#F39A1E'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => {
                setIsZohoModalOpen(true);
              }}
              className="px-6 py-2 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md bg-koku-orange text-koku-dark hover:bg-koku-dark hover:text-white"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: '#2D2D2D' }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-left text-sm font-medium py-2 transition-colors"
                  style={{ color: '#2D2D2D' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FF8C00'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#2D2D2D'}
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => {
                  setIsZohoModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="mt-4 px-6 py-3 rounded-lg font-semibold transition-all text-center bg-koku-orange text-koku-dark"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
      
      <ZohoFormModal 
        isOpen={isZohoModalOpen} 
        onClose={() => setIsZohoModalOpen(false)}
        embedCode={zohoEmbedCode}
      />
    </header>
  );
}