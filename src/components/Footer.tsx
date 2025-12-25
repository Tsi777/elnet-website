import React from 'react';
import { Link } from 'react-router-dom';
import LogoMark from '../assets/Logo.jpg';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Navigation links from navbar
  const navLinks = [
    { path: '/', label: 'Home', hash: '' },
    { path: '/', label: 'Services', hash: '#services' },
    { path: '/', label: 'Products', hash: '#products' },
    { path: '/', label: 'Subsidiaries', hash: '#subsidiaries' },
    { path: '/', label: 'About Us', hash: '#about' },
    { path: '/', label: 'Contact', hash: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-green-100 to-green-200 text-gray-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom py-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - Logo at top, motto at bottom */}
          <div className="flex flex-col items-center text-center lg:col-span-1">
            {/* Logo at top - centered */}
            <div className="mb-4 flex flex-col items-center">
              <img
                src={LogoMark}
                alt="ELNET Technologies icon"
                className="h-28 w-28 rounded-3xl border-2 border-green-300 object-cover shadow-xl shadow-green-900/50 mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-3xl font-bold text-green-900 drop-shadow-lg leading-tight text-center">
                <span className="block">ELNET</span>
                <span className="block text-2xl font-semibold">Technologies</span>
              </h3>
            </div>
            {/* Motto at bottom */}
            <p className="text-sm font-medium text-green-800 text-center italic w-full">
                             ON THE WAY TO DO AND BE BETTER ALWAYS
             </p>
          </div>

          {/* Quick Access - All navbar items */}
          <div className="lg:col-span-1">
            <h4 className="text-green-900 font-bold text-lg mb-4 pb-2 border-b-2 border-green-600 w-fit">Quick Access</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={`${link.path}${link.hash}`}>
                  <Link
                    to={`${link.path}${link.hash}`}
                    className="flex items-center group text-gray-800 transition-all duration-200 hover:translate-x-1 hover:text-green-700 hover:underline hover:decoration-green-600 hover:underline-offset-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-700 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-1">
            <h4 className="text-green-900 font-bold text-lg mb-4 pb-2 border-b-2 border-green-600 w-fit">Location</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3 group">
                <svg
                  className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0 group-hover:text-green-800 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="text-gray-800 leading-relaxed">4 Kilo, Berges Clinic 4th Floor</p>
                  <p className="text-gray-700">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-green-900 font-bold text-lg mb-4 pb-2 border-b-2 border-green-600 w-fit">Contact</h4>
            <div className="space-y-2 text-sm">
              <div
                className="flex items-center gap-3 group hover:text-green-800 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-green-700 flex-shrink-0 group-hover:text-green-800 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-800">+251 930 033 302</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600/50 mt-6 pt-4 text-center">
          <p className="text-sm text-green-800">
            &copy; {currentYear} ELNET Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

