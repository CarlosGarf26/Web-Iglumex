export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Using generic icon names or emoji for simplicity in this demo
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  issueDescription: string;
}

export interface AIDiagnosisResponse {
  category: string;
  severity: 'Baja' | 'Media' | 'Alta';
  advice: string;
}
