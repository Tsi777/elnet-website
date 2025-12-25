import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoMark from '../assets/Logo.jpg';

type NavLink = {
  path: string;
  label: string;
  hash?: string;
};

const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/', label: 'Why ELNET', hash: '#why-this-company' },
  { path: '/', label: 'Services', hash: '#services' },
  { path: '/', label: 'Products', hash: '#products' },
  { path: '/', label: 'Subsidiaries', hash: '#subsidiaries' },
  { path: '/', label: 'About Us', hash: '#about' },
  { path: '/', label: 'Contact', hash: '#contact' },
];

const SECTION_TITLES: Record<string, string> = {
  home: 'Home',
  'why-this-company': 'Why ELNET',
  services: 'Services',
  products: 'Products',
  subsidiaries: 'Subsidiaries',
  about: 'About Us',
  contact: 'Contact Us',
};

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('home');
      return;
    }

    const sectionIds = NAV_LINKS
      .map((link) => link.hash?.replace('#', ''))
      .filter((id): id is string => Boolean(id));

    const handleSectionHighlight = () => {
      const scrollPosition = window.scrollY + 200;
      let currentId = 'home';

      // Check if we're at the very top or before any section
      if (scrollPosition < 300) {
        setActiveSection('home');
        return;
      }

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Check if scroll position is within the section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentId = id;
        }
      });

      setActiveSection(currentId);
    };

    handleSectionHighlight();
    window.addEventListener('scroll', handleSectionHighlight);
    return () => window.removeEventListener('scroll', handleSectionHighlight);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') {
      const sectionTitle = SECTION_TITLES[activeSection] || 'Home';
      document.title = `ELNET Technologies - ${sectionTitle}`;
    }
  }, [activeSection, location.pathname]);

  const isActive = (link: NavLink) => {
    if (link.hash) {
      const hashId = link.hash.replace('#', '');
      if (location.pathname === link.path) {
        return activeSection === hashId;
      }
      return false;
    }
    // For home link (no hash), check if we're on home page and in home section
    if (link.path === '/' && link.label === 'Home') {
      return location.pathname === '/' && activeSection === 'home';
    }
    return location.pathname === link.path;
  };

  const getLinkDestination = (link: NavLink) =>
    link.hash ? `${link.path}${link.hash}` : link.path;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-primary-100 bg-green-50 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'shadow-sm'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 flex items-center justify-center">
              <img
                src={LogoMark}
                alt="ELNET Technologies icon"
                className="h-12 w-12 object-cover rounded-2xl"
              />
            </div>
            <div className="leading-tight">
              <span className="block text-3xl font-black tracking-wide text-primary-700">ELNET</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-500">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={`${link.path}${link.hash ?? ''}`}
                to={getLinkDestination(link)}
                className={`relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive(link)
                  ? 'bg-green-100 text-green-900 shadow-md hover:bg-green-200 scale-105'
                  : 'text-gray-700 hover:text-green-900 hover:bg-green-50 hover:scale-105 active:scale-95'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full text-gray-700 hover:text-primary-600 hover:bg-gray-100/80 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-slide-down">
            {NAV_LINKS.map((link) => (
              <Link
                key={`${link.path}${link.hash ?? ''}`}
                to={getLinkDestination(link)}
                onClick={() => setIsOpen(false)}
                className={`relative block px-4 py-3 mb-2 text-base font-medium rounded-2xl transition-all duration-300 ${isActive(link)
                  ? 'text-green-900 bg-green-100 scale-105 font-semibold shadow-md hover:bg-green-200 hover:scale-110'
                  : 'text-gray-700 hover:text-green-900 hover:bg-green-100 hover:scale-105 hover:shadow-md active:scale-95'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

