import { ServiceItem, Testimonial } from './types';

export const COMPANY_NAME = "IGLUMEX";
export const COMPANY_PHONE = "+0000000000";
export const COMPANY_EMAIL = "contacto@iglumex.com";

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Mantenimiento Preventivo',
    description: 'Limpieza profunda, revisión de gas y filtros para asegurar la eficiencia y pureza del aire.',
    icon: '❄️'
  },
  {
    id: '2',
    title: 'Reparación Correctiva',
    description: 'Diagnóstico experto y reparación de fallas mecánicas o eléctricas en tiempo récord.',
    icon: '🔧'
  },
  {
    id: '3',
    title: 'Instalación de Equipos',
    description: 'Instalación profesional de minisplits, sistemas centrales y unidades de ventana.',
    icon: '🏗️'
  },
  {
    id: '4',
    title: 'Carga de Gas Refrigerante',
    description: 'Recarga segura de gas R-410A y R-22 con detección de fugas incluida.',
    icon: '🔋'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Roberto Gómez',
    role: 'Gerente de Restaurante',
    content: 'IGLUMEX salvó nuestro fin de semana. El aire falló el viernes y en 2 horas ya estaba funcionando.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ana Martínez',
    role: 'Residencial',
    content: 'Muy limpios y profesionales. Me explicaron exactamente qué estaba mal antes de cobrarme.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Carlos Vela',
    role: 'Oficinas Corporativas',
    content: 'El plan de mantenimiento anual nos ha ahorrado mucho dinero en energía.',
    rating: 4
  }
];
