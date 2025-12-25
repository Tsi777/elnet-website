import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'white' | 'gray' | 'primary' | 'transparent';
  titleClassName?: string;
  subtitleClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  title,
  subtitle,
  background = 'white',
  titleClassName = '',
  subtitleClassName = 'text-primary-600',
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    transparent: 'bg-transparent',
  };

  return (
    <section id={id} className={`section-padding ${backgrounds[background]} ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12 animate-fade-in">
            {subtitle && (
              <p className={`font-semibold text-sm uppercase tracking-wide mb-2 ${subtitleClassName}`}>
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 subpixel-antialiased ${titleClassName}`}
              >
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

