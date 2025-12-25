import React from 'react';
import { Button } from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  stats?: { label: string; value: string }[];
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  stats,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-primary-900 to-secondary-800 text-white">
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-500/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-secondary-500/30 blur-3xl" />
      </div>
      <div className="container-custom relative py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 text-left space-y-6">
          {subtitle && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 animate-slide-down">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-100/90 max-w-2xl">
              {description}
            </p>
          )}

          {/* Image appears here on mobile, hidden on desktop */}
          {backgroundImage && (
            <div className="w-full lg:hidden">
              <div className="relative rounded-[36px] border border-white/15 bg-white/5 p-4 backdrop-blur-2xl shadow-2xl shadow-black/40">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-primary-400/40 blur-3xl" />
                <img
                  src={backgroundImage}
                  alt="ELNET Group operations"
                  className="h-[420px] w-full rounded-[28px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 px-6 py-4 text-gray-900 shadow-xl">
                  <p className="text-base font-semibold">
                    {description || 'Empowering communities through technology, investment, and social impact.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-scale-in">
              {primaryAction && (
                <a
                  href={primaryAction.href}
                  className="inline-block"
                  onClick={(e) => {
                    if (primaryAction.href.startsWith('#')) {
                      e.preventDefault();
                      const targetId = primaryAction.href.substring(1);
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }
                  }}
                >
                  <Button
                    size="lg"
                    variant="primary"
                    className="relative overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-10 py-4 text-base font-semibold text-white shadow-[0_20px_60px_-15px_rgba(251,146,60,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_70px_-15px_rgba(244,63,94,0.9)]"
                  >
                    {primaryAction.label}
                  </Button>
                </a>
              )}
              {secondaryAction && (
                <a href={secondaryAction.href} className="inline-block">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-2xl border-white/60 bg-white/5 text-white hover:bg-white/15 px-10 py-4 text-base font-semibold backdrop-blur"
                  >
                    {secondaryAction.label}
                  </Button>
                </a>
              )}
            </div>
          )}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/5 p-4 text-center shadow-lg shadow-black/20">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image appears here on desktop, hidden on mobile */}
        {backgroundImage && (
          <div className="w-full lg:w-1/2 hidden lg:block">
            <div className="relative rounded-[36px] border border-white/15 bg-white/5 p-4 backdrop-blur-2xl shadow-2xl shadow-black/40">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-primary-400/40 blur-3xl" />
              <img
                src={backgroundImage}
                alt="ELNET Group operations"
                className="h-[420px] w-full rounded-[28px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 px-6 py-4 text-gray-900 shadow-xl">
                <p className="text-base font-semibold">
                  {description || 'Empowering communities through technology, investment, and social impact.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

