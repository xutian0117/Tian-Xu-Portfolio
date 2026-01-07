import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-900 font-semibold mb-2">Designed for {PERSONAL_INFO.name}</p>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;