import React from 'react';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6 md:order-2">
            <span className="text-gray-400 text-sm text-center md:text-right">
                Seguridad garantizada y apego a normas nacionales (NOM).
            </span>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <div className="flex flex-col items-center md:items-start">
                 <span className="text-white text-xl font-bold mb-2">{COMPANY_NAME}</span>
                 <p className="text-center md:text-left text-base text-gray-400">
                  &copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.
                </p>
                <div className="mt-2 text-gray-500 text-sm">
                    <p>Tel: {COMPANY_PHONE}</p>
                    <p>Email: {COMPANY_EMAIL}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;