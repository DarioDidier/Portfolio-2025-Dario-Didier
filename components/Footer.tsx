
import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:justify-between md:items-center">
        <p className="text-gray-500 text-sm mb-6 md:mb-0 font-medium">
          &copy; {currentYear} <span className="text-white">Dario Didier</span>. Hecho con .NET y pasión.
        </p>
        
        <div className="flex justify-center space-x-6">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-gray-500 ${link.color} transition-all duration-300 transform hover:scale-110`}
            >
              {React.cloneElement(link.icon as React.ReactElement, { size: 24 })}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
