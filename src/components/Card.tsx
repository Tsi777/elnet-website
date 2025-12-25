import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true, id, style }) => {
  return (
    <div
      id={id}
      style={style}
      className={`
        bg-white rounded-xl shadow-lg p-6
        ${hover ? 'transition-all duration-300 hover:shadow-2xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

