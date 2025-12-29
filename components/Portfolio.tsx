
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Portafolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">Proyectos Destacados</h3>
          </div>
          <a 
            href="https://github.com/DarioDidier" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 font-bold flex items-center hover:text-indigo-300 transition-colors group"
          >
            Ver todo en GitHub
            <ExternalLink className="ml-2 w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative glass rounded-3xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 mb-8 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-6">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center font-medium"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Código
                  </a>
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center font-medium"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
