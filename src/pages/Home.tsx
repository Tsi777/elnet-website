import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { subsidiaries, subsidiariesStats } from '../data/subsidiaries';
import { products } from '../data/products';
import { services } from '../data/services';
import { whyReasons } from '../data/whyReasons';
import { aboutCards, coreValues, aboutIntro } from '../data/aboutInfo';
import { Contact as ContactPage } from './Contact';
import TaxiyeImage from '../assets/Taxiyeimage.jpg';
import HomePageImage from '../assets/HomePageImage.jpeg';
import ElnetSmartERP from '../assets/ElnetSmartERP.jpeg';
import ElnetCoreBankingSystem from '../assets/ElnetCoreBankingSystem.jpeg';
import POSImage from '../assets/POS.jpeg';
import VMSImage from '../assets/vms.jpeg';
import ElautoEngineeringImage from '../assets/ELAUTO engineering.jpeg';
import ElsabiMicrofinanceImage from '../assets/Elsabi Microfinance.jpeg';
import ManagedITCloudImage from '../assets/Managed IT and Cloud Services.jpeg';
import WebHostingImage from '../assets/Web Hosting Solutions.jpeg';
import DigitalTransformationImage from '../assets/Digital Transformation and Payment Solutions.jpeg';

export const Home: React.FC = () => {
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);
  const [showAllSubsidiaries, setShowAllSubsidiaries] = useState<boolean>(false);
  const [expandedSubsidiaryDescriptions, setExpandedSubsidiaryDescriptions] = useState<Record<string, boolean>>({});
  const featuredSubsidiaries = subsidiaries;
  const productImages: Record<string, string> = {
    'elnet-ride': TaxiyeImage,
    'elnet-smart-erp': ElnetSmartERP,
    'elnet-vms': VMSImage,
    'Elnet Voucher Management System (El-VMS)': VMSImage,
    'elnet-core-banking': ElnetCoreBankingSystem,
    'it-infrastructure': 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
    'pos-inventory': POSImage,
  };

  const getProductImage = (id: string) =>
    productImages[id] || 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80';

  const subsidiaryImages: Record<string, string> = {
    'elauto-engineering': ElautoEngineeringImage,
    eltaxi: TaxiyeImage,
    elsabi: ElsabiMicrofinanceImage,
    'elnet-csr': 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80',
  };

  const getSubsidiaryImage = (id: string) =>
    subsidiaryImages[id] || 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80';

  const portfolioHeroImage =
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80';

  const portfolioStats = [
    { label: subsidiariesStats.activeSubsidiaries.label, value: subsidiariesStats.activeSubsidiaries.value, detail: 'Operators in market' },
    { label: subsidiariesStats.practiceAreas.label, value: subsidiariesStats.practiceAreas.value, detail: subsidiariesStats.practiceAreas.subtitle },
    { label: subsidiariesStats.strategicPillars.label, value: subsidiariesStats.strategicPillars.value, detail: subsidiariesStats.strategicPillars.subtitle },
  ];





  const displayedProducts = products; // Display all products
  /* Home page Section */

  const displayedSubsidiaries = showAllSubsidiaries ? featuredSubsidiaries : featuredSubsidiaries.slice(0, 3);
  return (
    <>
      <Hero
        title="ELNET TECHNOLOGIES"
        description="Engineering intelligent platforms that power seamless digital innovation across Africa"
        primaryAction={{ label: 'Explore Our products', href: '#products' }}
        secondaryAction={{ label: 'Contact Us', href: '#contact' }}
        backgroundImage={HomePageImage}
      />

      {/* Why This Company Section */}
      <Section id="why-this-company" background="gray" className="relative overflow-hidden">
        <Card className="relative mb-12 rounded-[36px] border border-gray-200 bg-white p-10 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.1)] ring-1 ring-white/50">
          <div className="relative text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              WHY ELNET TECHNOLOGIES ?
            </h2>
            <p className="mt-3 text-base md:text-lg text-gray-600">
              A resilient ecosystem of companies delivering technology, infrastructure, and social impact across Ethiopia and the region.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyReasons.map((reason, index) => (
              <Card
                key={reason.title}
                className="relative rounded-2xl border border-green-100 bg-green-50/50 p-6 shadow-sm hover:shadow-xl ring-1 ring-green-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <span className="text-4xl h-14 w-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 via-white to-primary-100 text-primary-600 shadow-inner shadow-primary-100">
                    {reason.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{reason.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </Section>


      {/* Services Section */}
      <Section
        id="services"
        title="Services"
        subtitle="What We Provide"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const isExpanded = expandedProductId === service.id;
            const fullDescription = [service.description, service.details].filter(Boolean).join(' ');
            const previewDescription =
              fullDescription.length <= 160
                ? fullDescription
                : `${fullDescription.slice(0, 160).trimEnd()}...`;

            const serviceImages: Record<string, string> = {
              'custom-software-development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
              'it-infrastructure-security': 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
              'managed-it-cloud': ManagedITCloudImage,
              'web-hosting': WebHostingImage,
              'elnet-iot-development': 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=900&q=80',
              'digital-transformation': DigitalTransformationImage,
            };

            return (
              <Card
                key={service.id}
                className="group relative rounded-[32px] border border-white/40 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.7)] bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-full h-52 relative">
                    <img
                      src={serviceImages[service.id] || 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80'}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <div className="my-3 h-px bg-gray-200" />
                    <p className="text-sm text-gray-600">
                      {isExpanded ? fullDescription : previewDescription}
                    </p>
                    <div className="mt-6 flex justify-start">
                      <button
                        type="button"
                        onClick={() => setExpandedProductId(isExpanded ? null : service.id)}
                        className="group inline-flex min-w-[165px] items-center justify-between gap-3 rounded-full border border-primary-100 bg-primary-50/80 px-3.5 py-1.5 text-sm font-semibold text-primary-600 shadow-sm transition hover:border-primary-200 hover:bg-primary-100 hover:text-primary-700"
                      >
                        <span className="flex-1 text-left">{isExpanded ? 'Show less' : 'Discover more'}</span>
                        <svg
                          className={`h-4 w-4 flex-shrink-0 transform transition-transform ${isExpanded ? 'rotate-90 text-primary-700' : 'group-hover:translate-x-1'
                            }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/*  Products Section */}
      <Section
        id="products"
        title="Products"
        subtitle="What We Offer"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProducts.map((product, index) => {
            const isExpanded = expandedProductId === product.id;
            const fullDescription = [product.description, product.details].filter(Boolean).join(' ');
            const previewDescription =
              fullDescription.length <= 160
                ? fullDescription
                : `${fullDescription.slice(0, 160).trimEnd()}...`;

            return (
              <Card
                key={product.id}
                className="group relative rounded-[32px] border border-white/40 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.7)] bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-full h-64 relative bg-gray-50 overflow-hidden">
                    <img
                      src={getProductImage(product.id)}
                      alt={product.title}
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                    </div>
                    <div className="my-3 h-px bg-gray-200" />
                    <p className="text-sm text-gray-600">
                      {isExpanded ? fullDescription : previewDescription}
                    </p>
                    <div className="mt-6 flex justify-start">
                      <button
                        type="button"
                        onClick={() => setExpandedProductId(isExpanded ? null : product.id)}
                        className="group inline-flex min-w-[165px] items-center justify-between gap-3 rounded-full border border-primary-100 bg-primary-50/80 px-3.5 py-1.5 text-sm font-semibold text-primary-600 shadow-sm transition hover:border-primary-200 hover:bg-primary-100 hover:text-primary-700"
                      >
                        <span className="flex-1 text-left">{isExpanded ? 'Show less' : 'Discover more'}</span>
                        <svg
                          className={`h-4 w-4 flex-shrink-0 transform transition-transform ${isExpanded ? 'rotate-90 text-primary-700' : 'group-hover:translate-x-1'
                            }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        id="subsidiaries"
        background="gray"
        className="relative"
      >

        {/* Subsidaries Section */}
        <div className="text-center mb-12">
          <p className="font-semibold text-sm uppercase tracking-wide mb-2 text-green-600">
            Portfolio Companies
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4" style={{ fontWeight: 900, color: '#111827' }}>
            OUR SUBSIDIARIES
          </h2>
        </div>

        <div className="relative space-y-12">
          <div className="grid gap-8">
            <Card className="relative overflow-hidden rounded-[40px] border border-white/60 bg-gradient-to-br from-white/95 via-primary-50/80 to-emerald-50/80 p-10 shadow-[0_60px_120px_-50px_rgba(15,23,42,0.85)] backdrop-blur">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary-100/50 via-transparent to-transparent" />
              <div className="relative">
                <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <h3 className="text-center text-4xl font-black leading-tight text-transparent bg-gradient-to-r from-primary-800 via-emerald-600 to-primary-700 bg-clip-text drop-shadow-sm lg:text-left">
                      Purpose built subsidiaries closing gaps in mobility, finance, industry, and trade.
                    </h3>
                    <p className="mt-4 text-center text-base leading-relaxed text-gray-700 rounded-3xl border border-primary-100/70 bg-white/80 p-4 shadow-sm shadow-primary-100/50 lg:text-left">
                      We incubate, acquire, and scale operating companies that solve high-friction challenges across Ethiopia and the region—combining on-ground execution with digital leverage.
                    </p>
                  </div>
                  <div className="flex-1">
                    <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/60 shadow-lg shadow-primary-100/50">
                      <img
                        src={portfolioHeroImage}
                        alt="Portfolio companies collaboration"
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <Card className="mt-8 border border-primary-100/80 bg-white/85 p-6 shadow-[0_35px_80px_-60px_rgba(15,23,42,1)]">
                  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col gap-1 rounded-3xl border border-primary-50/80 bg-gradient-to-r from-white via-primary-50/60 to-emerald-50/50 p-5 text-center shadow-sm shadow-primary-100/50"
                      >
                        <div className="text-4xl font-black text-primary-700">{stat.value}</div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">{stat.label}</p>
                        <p className="text-xs text-gray-500">{stat.detail}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </Card>
          </div>

          <div id="subsidiaries-grid" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedSubsidiaries.map((subsidiary, index) => {
              const contactLabel =
                subsidiary.contact?.email ?? subsidiary.contact?.phone ?? 'Contact available on profile';
              const fullDescription = subsidiary.description;
              const isDescriptionExpanded = expandedSubsidiaryDescriptions[subsidiary.id];
              const previewDescription =
                fullDescription.length <= 200 ? fullDescription : `${fullDescription.slice(0, 200).trimEnd()}...`;

              return (
                <Card
                  key={subsidiary.id}
                  className="group relative flex h-full flex-col rounded-[32px] border border-primary-100/70 bg-white/80 p-0 shadow-[0_25px_70px_-40px_rgba(15,23,42,1)] backdrop-blur"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-64 w-full overflow-hidden bg-gray-50">
                    <img
                      src={getSubsidiaryImage(subsidiary.id)}
                      alt={subsidiary.name}
                      className="h-full w-full object-contain transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-bold text-gray-900">{subsidiary.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {isDescriptionExpanded ? fullDescription : previewDescription}
                    </p>
                    {fullDescription.length > 200 && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedSubsidiaryDescriptions((prev) => ({
                            ...prev,
                            [subsidiary.id]: !prev[subsidiary.id],
                          }))
                        }
                        className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600 transition hover:text-primary-700"
                      >
                        {isDescriptionExpanded ? 'Show less' : 'Discover more'}
                        <svg
                          className={`h-3 w-3 transition-transform ${isDescriptionExpanded ? 'rotate-90' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                    <div className="mt-auto pt-6">
                      <div className="rounded-2xl border border-primary-50/70 bg-primary-50/40 p-4 text-sm">
                        <div className="mb-4 h-[3px] w-full bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
                        <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Contact</p>
                        <p className="mt-2 font-semibold text-gray-800">{contactLabel}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          {featuredSubsidiaries.length > 3 && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  // Scroll to subsidiaries grid FIRST when showing fewer
                  if (showAllSubsidiaries) {
                    const gridElement = document.getElementById('subsidiaries-grid');
                    if (gridElement) {
                      gridElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }
                  // Then update state
                  setShowAllSubsidiaries((prev) => !prev);
                }}
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/90 px-6 py-2 text-sm font-semibold text-primary-700 shadow-sm transition hover:border-primary-200 hover:bg-primary-50"
              >
                {showAllSubsidiaries ? 'Show fewer subsidiaries' : 'Discover more'}
              </button>
            </div>
          )}

        </div>
      </Section>



      {/* About Us Section */}
      <Section
        id="about"
        title="About ELNET Technology"
        subtitle="Our Story"
        background="gray"
        titleClassName="text-black"
        subtitleClassName="text-green-600"
      >
        <div className="max-w-6xl mx-auto space-y-12">

          {/* About Introduction */}
          <Card className="relative overflow-hidden rounded-[32px] border border-slate-100 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/40 p-10 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.35)]">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-100/40 to-emerald-100/30 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-50/50 to-transparent rounded-full blur-2xl -z-0" />

            <div className="relative z-10 space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 bg-clip-text mb-2">
                    About
                  </h3>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full" />
                </div>

                <div className="space-y-5 text-base text-slate-700 leading-relaxed">
                  <div className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <p className="relative p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-green-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                      {aboutIntro.paragraph1}
                    </p>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <p className="relative p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-green-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                      {aboutIntro.paragraph2}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Card>

          {/* Mission & Vision */}
          <div className="grid gap-6 lg:grid-cols-2">
            {aboutCards.map((card) => (
              <Card
                key={card.id}
                className="relative group rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.35)]"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-green-800 to-green-700 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative space-y-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-700 to-green-800 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">{card.icon}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">{card.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Values */}
          <Card className="rounded-[32px] border border-slate-100 bg-white p-10 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.35)]">
            <div className="space-y-8">
              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-4 border border-slate-200">
                  Our Foundation
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                  Core Values That Drive Us Forward
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((value) => (
                  <div
                    key={value.title}
                    className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/70 hover:border-green-400 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {value.icon}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-800 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>


        </div>
      </Section>

      <div id="contact">
        <ContactPage />
      </div>

    </>
  );
};

