import { Service } from '../types';

export const products: Service[] = [
    {
        id: 'elnet-ride',
        title: 'Elnet Ride-Hailing ',
        description: 'Our Elnet Ride-Hailing platform transforms urban mobility through cutting-edge technology and user-friendly experiences, offering intelligent transportation solutions.',
        details:
            'Taxiye optimizes dispatching, driver earnings, and passenger safety with AI-powered routing, multi-wallet payments, and 24/7 support, setting new standards in urban transportation.',
        category: 'Technology',
        subsidiaryIds: ['eltaxi'],
    },
    {
        id: 'elnet-smart-erp',
        title: 'Elnet Smart ERP',
        description: 'Our Smart ERP System is a comprehensive, all-in-one solution designed to streamline your business operations and boost efficiency. By integrating key processes such as finance, human resources, inventory, sales, and customer management into a single platform, it empowers organizations to make smarter, data-driven decisions.',
        details:
            'With intuitive dashboards, real-time analytics, and automation features, our ERP system reduces manual work, minimizes errors, and enhances collaboration across departments. Whether your business is growing or already large-scale, our Smart ERP adapts to your unique needs, helping you achieve operational excellence and sustainable growth.',
        category: 'Technology',
        subsidiaryIds: ['elnet-technology'],
    },
    {
        id: 'Elnet Voucher Management System (El-VMS)',
        title: 'Elnet Voucher Management System (El-VMS)',
        description: 'Streamline your digital token economy with the Elnet Voucher Management System. Our robust platform enables businesses, distributors, and NGOs to effortlessly create, distribute, activate, and reconcile digital value—from airtime top-ups and gift vouchers to loyalty points and subsidy tokens. Replace manual processes and paper-based systems with a secure, scalable, and fully automated solution that reduces fraud, provides real-time visibility into redemption rates, and enhances customer engagement across retail, telecom, agriculture, and aid distribution channels.',
        details:
            '',
        category: 'Technology',
        subsidiaryIds: ['elnet-technology'],
    },
    {
        id: 'elnet-core-banking',
        title: 'Elnet Core Banking System',
        description: 'Our Core Banking System powers banks with fast, secure, scalable processing—from core deposits to payments—so you can innovate without risk.',
        details:
            'It delivers real-time processing across all channels for instant settlement and visibility, a secure and compliant architecture that scales with growth, a modular, API-first design for quick integrations and new services, and automated risk, fraud, and reconciliation workflows to reduce manual work.',
        category: 'Financial Technology',
        subsidiaryIds: ['elnet-technology'],
    },
    {
        id: 'it-infrastructure',
        title: 'IT Infrastructure',
        description: 'Comprehensive IT infrastructure solutions including network setup, cloud platforms, security, and digital transformation services.',
        details:
            'We design, deploy, and manage secure IT infrastructure including servers, networks, cloud environments, and cybersecurity solutions to keep your operations running 24/7.',
        category: 'Technology',
        subsidiaryIds: ['elnet-technology', 'tectraco'],
    },
    {
        id: 'pos-inventory',
        title: 'POS and Inventory Management System',
        description: 'Power your retail with a unified POS and Inventory Management system fast, secure, and scalable from checkout to stockroom, so you can',
        details:
            'focus on growing sales. Real-time sales and stock syncing across in-store, online, Automated inventory controls, loss prevention, reconciliation to reduce manual tasks and shrink.',
        category: 'Technology',
        subsidiaryIds: ['elnet-technology'],
    },
];
