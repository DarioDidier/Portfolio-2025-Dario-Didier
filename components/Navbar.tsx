
import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Code className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Dev <span className="text-indigo-500">.NET</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-500/25"
            >
              Hablemos
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 glass mt-2 mx-4 rounded-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-indigo-600/20 rounded-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
