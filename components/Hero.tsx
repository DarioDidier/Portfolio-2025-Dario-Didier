
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 glass rounded-full border border-indigo-500/30">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Disponible para proyectos</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter">
          Hola, soy <span className="gradient-text">Dario Didier</span><br />
          <span className="text-slate-100">.NET Developer</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
          Especializado en construir aplicaciones escalables, seguras y de alto rendimiento utilizando el ecosistema Microsoft. Transformando ideas complejas en soluciones digitales elegantes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#portfolio" className="group w-full sm:w-auto flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-indigo-500/40">
            Ver mis proyectos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://drive.google.com/file/d/1PrCzE8Znbd73xW04_Ckv6GU3ajT33wbw/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-slate-700"
          >
            Descargar CV
            <Download className="ml-2 w-5 h-5" />
          </a>
        </div>
        
        <div className="flex items-center justify-center space-x-8">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-gray-400 ${link.color} transform hover:scale-125 transition-all duration-300`}
              aria-label={link.name}
            >
              {React.cloneElement(link.icon as React.ReactElement, { size: 28 })}
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center pt-2">
          <div className="w-1 h-2 bg-indigo-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
