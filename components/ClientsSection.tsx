import React from 'react';
import { CLIENTS } from '../constants';

const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-2">Confianza Industrial</h2>
          <p className="text-3xl font-black text-slate-900">RESPALDAMOS A LAS GRANDES EMPRESAS DE MÉXICO</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {CLIENTS.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <span className="text-gray-400 font-black text-xl text-center leading-tight group-hover:text-brand-900 transition-colors uppercase italic">
                {client.name}
              </span>
              <span className="mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">¿Eres contratista o empresa?</h3>
          <p className="max-w-2xl mx-auto text-gray-400 mb-8">Ofrecemos precios preferenciales por volumen y pólizas corporativas con tiempo de respuesta menor a 4 horas.</p>
          <button className="bg-brand-500 hover:bg-brand-400 px-8 py-3 rounded-full font-black uppercase tracking-wide transition-all">
            SOLICITAR ALTA CORPORATIVA
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;