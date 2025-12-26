import React from 'react';

const SupportSection: React.FC = () => {
  return (
    <section id="support" className="py-16 bg-slate-50 scroll-mt-20 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Knowledge Base */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Base de Conocimientos</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-brand-600 cursor-pointer flex items-center gap-2">• ¿Cómo limpiar filtros de minisplit?</li>
              <li className="hover:text-brand-600 cursor-pointer flex items-center gap-2">• Códigos de error Carrier / York</li>
              <li className="hover:text-brand-600 cursor-pointer flex items-center gap-2">• Guía de eficiencia energética FIDE</li>
            </ul>
            <button className="mt-6 text-brand-600 font-bold text-xs uppercase tracking-wider hover:underline">Ir al centro de ayuda →</button>
          </div>

          {/* User Access Box */}
          <div className="bg-brand-900 p-8 rounded-2xl shadow-xl text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter">Portal de Clientes</h3>
              <p className="text-brand-200 text-sm mb-6">Accede a tus reportes de servicio, facturación y pólizas de mantenimiento vigentes.</p>
              
              <div className="space-y-4">
                <input type="text" placeholder="Usuario / Correo" className="w-full bg-brand-800 border-none rounded p-3 text-sm focus:ring-2 focus:ring-brand-500" />
                <input type="password" placeholder="••••••••" className="w-full bg-brand-800 border-none rounded p-3 text-sm focus:ring-2 focus:ring-brand-500" />
              </div>
            </div>
            <button className="mt-6 w-full bg-brand-500 hover:bg-brand-400 text-white font-black py-3 rounded uppercase text-sm transition-colors">
              INICIAR SESIÓN
            </button>
          </div>

          {/* Certifications & Manuals */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth="2"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Acreditación FIDE</h4>
                <p className="text-xs text-gray-500">Equipos certificados en ahorro energético.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-green-50 p-3 rounded">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeWidth="2"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Biblioteca de Manuales</h4>
                <p className="text-xs text-gray-500">Diagramas técnicos y guías de usuario PDF.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 flex items-center gap-4">
              <div className="bg-orange-50 p-3 rounded">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-sm">Certificación NOM</h4>
                <p className="text-xs text-gray-500">Cumplimiento total con normas mexicanas.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;