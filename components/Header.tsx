import React, { useState } from 'react';
import { COMPANY_NAME, COMPANY_PHONE } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            {/* Custom SVG Logo based on IGLUMEX brand */}
            <div className="relative h-12 w-12 transition-transform transform group-hover:scale-105 duration-300">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                {/* Puddle */}
                <path d="M25 105 C 25 105, 10 115, 40 115 C 70 115, 80 110, 90 112 C 100 114, 110 105, 95 100" fill="#0ea5e9" opacity="0.8" />
                
                {/* Wrench (Back part) */}
                <path d="M100 30 L 110 20 C 115 15, 120 25, 115 30 L 105 40" stroke="#0c4a6e" strokeWidth="4" strokeLinecap="round" fill="#60a5fa" />

                {/* Cube Top Face (3D) */}
                <path d="M25 35 L 50 10 L 100 10 L 75 35 Z" fill="#bae6fd" stroke="#0c4a6e" strokeWidth="3" strokeLinejoin="round"/>
                
                {/* Cube Side Face (3D) */}
                <path d="M75 35 L 100 10 L 100 80 L 75 105 Z" fill="#7dd3fc" stroke="#0c4a6e" strokeWidth="3" strokeLinejoin="round"/>

                {/* Cube Main Face */}
                <rect x="15" y="35" width="60" height="70" rx="8" fill="#e0f2fe" stroke="#0c4a6e" strokeWidth="3" />
                
                {/* Wrench (Handle and Main Body) */}
                <path d="M95 40 L 85 90 C 83 95, 88 100, 92 98 L 105 45" fill="#38bdf8" stroke="#0c4a6e" strokeWidth="3" />
                <path d="M95 25 C 90 25, 85 35, 95 45" stroke="#0c4a6e" strokeWidth="3" fill="none" /> 

                {/* Face Eyes */}
                <circle cx="35" cy="65" r="5" fill="#0c4a6e" />
                <circle cx="55" cy="65" r="5" fill="#0c4a6e" />
                
                {/* Face Smile */}
                <path d="M38 78 Q 45 85 52 78" stroke="#0c4a6e" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
              {COMPANY_NAME}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-500 hover:text-brand-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="primary" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Pedir Cotización
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
               <Button 
                variant="primary" 
                fullWidth
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Llamar: {COMPANY_PHONE}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;