import { Subsidiary } from '../types';

export const subsidiariesStats = {
  activeSubsidiaries: {
    value: '10+',
    label: 'Active subsidiaries',
  },
  operatorsInMarket: {
    value: '15',
    label: 'Operators in market',
  },
  practiceAreas: {
    value: '15',
    label: 'Practice areas',
    subtitle: 'Specialist capabilities',
  },
  strategicPillars: {
    value: '4',
    label: 'Strategic pillars',
    subtitle: 'Growth theses',
  },

};

export const subsidiaries: Subsidiary[] = [


  {
    id: 'elauto-engineering',
    name: 'Elauto Engineering & Trading PLC',
    description: 'Automotive assembler and engineering partner manufacturing SKD vehicles and providing nationwide after-sales support.',
    products: ['SKD Vehicles', 'Automotive Parts', 'Engineering Solutions'],
    services: ['Vehicle Assembly', 'Engineering Support', 'After-Sales Support'],
    contact: {
      email: 'info@elautoas.com',
    },
    status: 'operational',
  },
  {
    id: 'eltaxi',
    name: 'ElTaxi Trading PLC',
    description: 'Ayigna ride-hailing ecosystem digitizing mobility with payments, fleet logistics, and driver network services.',
    products: ['Taxiye App', 'Ride-Hailing Platform'],
    services: ['Ride Booking', 'Driver Network', 'Fleet Management'],
    contact: {
      email: 'info@Taxiye.com',
    },
    status: 'operational',
  },
  {
    id: 'elsabi',
    name: 'Elsabi Microfinance SC',
    description: 'Inclusive finance platform offering micro-lending, savings, and financial literacy programs for underserved communities.',
    products: ['Micro Loans', 'Savings Accounts', 'Financial Products'],
    services: ['Microfinance', 'Financial Inclusion', 'Community Banking'],
    contact: {
      email: 'info@elsabi.net',
    },
    status: 'operational',
  },
  {
    id: 'elnet-csr',
    name: 'Elnet Foundation',
    description: 'Corporate social responsibility programs focused on education, emergency response, community development and environmental sustainability.',
    products: [],
    services: ['Education Initiatives', 'Emergency Response', 'Community Development', 'Environmental Programs'],
    contact: {
      email: 'csr@elnetgroup.com',
    },
    website: 'https://www.elnetfoundation.com',
    status: 'operational',
  },

];

