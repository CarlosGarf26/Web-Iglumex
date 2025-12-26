import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductSection from './components/ProductSection';
import SupportSection from './components/SupportSection';
import ClientsSection from './components/ClientsSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-900">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* New Products Section */}
        <ProductSection />
        
        <Services />
        
        {/* Support & Knowledge Base */}
        <SupportSection />
        
        <Gallery />
        
        {/* National Clients */}
        <ClientsSection />
        
        <Testimonials />
        
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;