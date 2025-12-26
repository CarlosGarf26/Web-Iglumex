import React, { useState } from 'react';
import Button from './Button';
import { ContactFormData, AIDiagnosisResponse } from '../types';
import { analyzeIssue } from '../services/aiService';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    issueDescription: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosis, setDiagnosis] = useState<AIDiagnosisResponse | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlurDescription = async () => {
    // Only analyze if there is a substantial description and not already analyzed
    if (formData.issueDescription.length > 10 && !diagnosis) {
      setIsAnalyzing(true);
      try {
        const result = await analyzeIssue(formData.issueDescription);
        setDiagnosis(result);
      } catch (e) {
        console.error("AI Analysis failed silently", e);
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="contact" className="bg-green-50 p-8 rounded-lg text-center border border-green-200 scroll-mt-24">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-2 text-lg font-medium text-gray-900">¡Mensaje Recibido!</h3>
        <p className="mt-1 text-sm text-gray-500">Un técnico de IGLUMEX se pondrá en contacto contigo en breve.</p>
        <div className="mt-6">
          <Button variant="outline" onClick={() => setSubmitted(false)}>Enviar otro mensaje</Button>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 scroll-mt-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contacta a un Experto
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Cuéntanos tu problema. Nuestro sistema inteligente te dará un diagnóstico preliminar.
          </p>
          
          <div className="mt-8 bg-brand-50 rounded-lg p-6 border border-brand-100 shadow-sm">
             <h3 className="text-brand-700 font-bold text-lg mb-4 uppercase tracking-wide">Atención Directa</h3>
             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col items-center sm:items-start p-2 hover:bg-white rounded transition-colors">
                  <span className="font-bold text-gray-900 text-lg">Ing. Alan Rodriguez</span>
                  <a href="tel:+5215545851821" className="text-brand-600 hover:text-brand-800 font-medium text-lg mt-1 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    +52 1 55 4585 1821
                  </a>
                </div>
                <div className="flex flex-col items-center sm:items-start p-2 hover:bg-white rounded transition-colors">
                  <span className="font-bold text-gray-900 text-lg">Ing. Juan Garfias</span>
                  <a href="tel:+5215664142760" className="text-brand-600 hover:text-brand-800 font-medium text-lg mt-1 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    +52 1 56 6414 2760
                  </a>
                </div>
             </div>
          </div>
        </div>
        
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border bg-[#9CC6DB]"
                />
              </div>
            </div>
            
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border bg-[#9CC6DB]"
                />
              </div>
            </div>
            
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border bg-[#9CC6DB]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700">
                Describe el problema (Ej: "El aire no enfría y hace ruido")
              </label>
              <div className="mt-1 relative">
                <textarea
                  id="issueDescription"
                  name="issueDescription"
                  rows={4}
                  required
                  value={formData.issueDescription}
                  onChange={handleChange}
                  onBlur={handleBlurDescription}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-brand-500 focus:border-brand-500 border-gray-300 rounded-md border bg-[#9CC6DB]"
                />
                {isAnalyzing && (
                   <div className="absolute top-2 right-2 text-xs text-brand-600 flex items-center bg-brand-50 px-2 py-1 rounded">
                      <svg className="animate-spin h-3 w-3 mr-1" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analizando...
                   </div>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500">Al terminar de escribir, la IA analizará tu caso.</p>
            </div>

            {diagnosis && (
              <div className="sm:col-span-2 bg-blue-50 border border-blue-200 rounded-md p-4 animate-fade-in">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Diagnóstico Preliminar (IA)</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p><strong>Categoría:</strong> {diagnosis.category}</p>
                      <p><strong>Severidad:</strong> {diagnosis.severity}</p>
                      <p className="mt-1 italic">"{diagnosis.advice}"</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="sm:col-span-2">
              <Button type="submit" fullWidth isLoading={isSubmitting}>
                Enviar Solicitud
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;