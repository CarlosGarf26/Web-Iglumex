import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div id="services" className="py-12 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Soluciones Integrales de Enfriamiento
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Desde el mantenimiento residencial hasta soluciones industriales complejas.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white text-2xl">
                    {service.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Compliance Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg border-l-4 border-brand-600 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-shrink-0 bg-brand-100 rounded-full p-3 mb-4 md:mb-0">
                    <svg className="h-8 w-8 text-brand-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="md:ml-5">
                    <h3 className="text-xl leading-6 font-bold text-gray-900">Cumplimiento Normativo (NOM)</h3>
                    <p className="mt-2 text-base text-gray-600">
                        En IGLUMEX, su seguridad y la de sus instalaciones es prioridad. Todos nuestros procedimientos se realizan bajo estricto apego a las <strong>Normas Oficiales Mexicanas</strong> vigentes (incluyendo normas de seguridad eléctrica y manejo ambiental de refrigerantes). Garantizamos un servicio técnico responsable y certificado.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;