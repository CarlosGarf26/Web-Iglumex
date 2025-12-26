import { ServiceItem, Testimonial } from './types';

export const COMPANY_NAME = "IGLUMEX";
export const COMPANY_PHONE = "+52 55 4585 1821";
export const COMPANY_EMAIL = "contacto@iglumex.com";

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Mantenimiento Preventivo',
    description: 'Limpieza profunda y revisión de parámetros operativos bajo normas ASHRAE.',
    icon: '❄️'
  },
  {
    id: '2',
    title: 'Reparación Correctiva',
    description: 'Diagnóstico electrónico y sustitución de refacciones originales.',
    icon: '🔧'
  },
  {
    id: '3',
    title: 'Ingeniería de Proyectos',
    description: 'Diseño e instalación de sistemas VRF y Chillers para industria.',
    icon: '🏗️'
  },
  {
    id: '4',
    title: 'Suministro de Refacciones',
    description: 'Distribución nacional de compresores, tarjetas y gas refrigerante.',
    icon: '🔋'
  }
];

export const PRODUCTS = [
  {
    id: 'p1',
    brand: 'Mirage',
    model: 'Life 12 Inverter',
    category: 'Minisplit',
    specs: '1 Ton, 220V, SEER 16',
    image: 'https://images.unsplash.com/photo-1631545866282-29729490ec39?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'p2',
    brand: 'York',
    model: 'LX Series',
    category: 'Unidad Central',
    specs: '5 Tons, Alta Eficiencia',
    image: 'https://images.unsplash.com/photo-1599700403969-f77b3aa74837?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'p3',
    brand: 'Carrier',
    model: 'Performance 17',
    category: 'Condensadora',
    specs: 'Sistemas Divididos',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'p4',
    brand: 'Honeywell',
    model: 'T6 Pro Smart',
    category: 'Refacción/Control',
    specs: 'Wi-Fi, Programable',
    image: 'https://images.unsplash.com/photo-1567958444181-2244bb4070a7?q=80&w=400&auto=format&fit=crop'
  }
];

export const CLIENTS = [
  { name: 'OXXO (FEMSA)', industry: 'Retail' },
  { name: 'Grupo Bimbo', industry: 'Alimentos' },
  { name: 'Soriana', industry: 'Supermercados' },
  { name: 'BBVA México', industry: 'Banca' },
  { name: 'Telcel', industry: 'Telecom' },
  { name: 'Pemex', industry: 'Energía' },
  { name: 'Hoteles NH', industry: 'Hospitalidad' },
  { name: 'Liverpool', industry: 'Retail' },
  { name: 'Cinépolis', industry: 'Entretenimiento' },
  { name: 'Tec de Monterrey', industry: 'Educación' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ing. Ricardo Sosa',
    role: 'Mantenimiento Soriana',
    content: 'IGLUMEX es nuestro aliado clave para asegurar la cadena de frío en sucursales del centro del país.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Arq. Elena Pons',
    role: 'Desarrollos Residenciales',
    content: 'La estética en sus instalaciones de ductos es impecable. Muy profesionales.',
    rating: 5
  }
];
