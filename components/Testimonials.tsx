import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-brand-700 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-brand-800 rounded-lg p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-brand-50 italic mb-4">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-white">{testimonial.name}</p>
                    <p className="text-xs text-brand-200">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;