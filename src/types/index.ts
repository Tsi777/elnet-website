export interface Subsidiary {
  id: string;
  name: string;
  description: string;
  logo?: string;
  products: string[];
  services: string[];
  contact: {
    email?: string;
    phone?: string;
    address?: string;
  };
  status: 'operational' | 'expanding';
  website?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details?: string;
  category: string;
  subsidiaryIds: string[];
  icon?: string;
}

export interface Value {
  title: string;
  description: string;
  icon?: string;
}


export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

