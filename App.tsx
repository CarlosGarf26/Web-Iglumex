import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-900">
      {/* Navigation and Logo */}
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section: Value Proposition */}
        <Hero />
        
        {/* Services Grid */}
        <Services />
        
        {/* Recent Work / Gallery */}
        <Gallery />
        
        {/* Social Proof */}
        <Testimonials />
        
        {/* Conversion Point / Smart Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;