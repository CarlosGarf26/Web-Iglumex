import React, { useState } from 'react';
import { COMPANY_NAME, COMPANY_PHONE } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Productos', href: '#products' },
    { name: 'Servicios', href: '#services' },
    { name: 'Soporte', href: '#support' },
    { name: 'Clientes', href: '#clients' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="bg-brand-900 text-white py-1 px-4 text-xs text-center">
        Línea de Atención Técnica Nacional: <span className="font-bold">{COMPANY_PHONE}</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="relative h-10 w-10">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="20" y="20" width="80" height="80" rx="4" fill="#0ea5e9" />
                <path d="M40 50 L80 50 M40 60 L80 60 M40 70 L80 70" stroke="white" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-brand-900">
              {COMPANY_NAME}
            </span>
          </div>

          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-600 font-semibold text-sm uppercase tracking-wider transition-colors">
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            <button className="flex items-center gap-2 text-gray-700 hover:text-brand-600 font-bold text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              ACCESO USUARIOS
            </button>
            <Button variant="primary" className="py-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              COTIZAR
            </Button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block font-bold text-gray-700 uppercase" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
          ))}
          <button className="w-full text-left font-bold text-brand-600 py-2 border-t">ACCESO USUARIOS</button>
        </div>
      )}
    </header>
  );
};

export default Header;