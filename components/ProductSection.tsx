import React from 'react';
import { PRODUCTS } from '../constants';

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">EQUIPOS Y REFACCIONES</h2>
            <p className="text-gray-500 mt-2">Distribución oficial de marcas líderes en México</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="text-brand-600 font-bold hover:underline flex items-center gap-1">
              Descargar Catálogo 2024 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="2"/></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 bg-gray-50 overflow-hidden">
                <img src={product.image} alt={product.model} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-2 left-2 bg-brand-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                  {product.brand}
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{product.category}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{product.model}</h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.specs}</p>
                <button className="mt-4 w-full bg-slate-900 text-white py-2 rounded font-bold text-xs hover:bg-brand-600 transition-colors">
                  VER ESPECIFICACIONES
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;