import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, className = "", children, title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12 text-center md:text-left">
          {title && <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">{title}</h2>}
          {subtitle && <p className="text-xl text-slate-500 max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;