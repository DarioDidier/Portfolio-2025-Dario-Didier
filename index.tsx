
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Code2, 
  Database, 
  Layers, 
  Monitor, 
  Globe, 
  Terminal,
  FileJson,
  Cpu,
  Menu, 
  X, 
  Code,
  ArrowRight, 
  Download,
  ExternalLink,
  Mail, 
  Phone, 
  MapPin, 
  Send
} from 'lucide-react';

// --- TYPES ---
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

// --- CONSTANTS ---
const NAV_ITEMS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' },
];

const PROJECTS: Project[] = [
  {
    id: 0,
    title: "Sistema de Ventas y Compras",
    description: "Sistema de ventas y compras realizado en C# con visual studio 2015 y SQL server 2014",
    image: "https://i.postimg.cc/2jT9YtLH/sistema-ventas.png",
    tags: ["C#", "SQL Server 2014", "WinForms"],
    githubUrl: "https://github.com/DarioDidier",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Agenda visual NeuroVisual",
    description: "agenda visual creada para ayudar a niños con TEA y neurodivergentes, tambien a padres y psicologos",
    image: "https://i.postimg.cc/B6nDBmZL/agenda-visual.png",
    tags: ["C#", "WinForms", "Accesibilidad"],
    githubUrl: "https://github.com/DarioDidier",
    demoUrl: "#"
  }
];

const SKILLS: Skill[] = [
  { name: 'C#', icon: <Terminal size={32} />, category: 'backend' },
  { name: '.NET (Core/8)', icon: <Layers size={32} />, category: 'backend' },
  { name: 'SQL Server', icon: <Database size={32} />, category: 'database' },
  { name: 'ASP.NET Core', icon: <Globe size={32} />, category: 'backend' },
  { name: 'HTML5', icon: <Monitor size={32} />, category: 'frontend' },
  { name: 'CSS3', icon: <Code2 size={32} />, category: 'frontend' },
  { name: 'JavaScript', icon: <FileJson size={32} />, category: 'frontend' },
  { name: 'Microservicios', icon: <Cpu size={32} />, category: 'other' },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/DarioDidier', color: 'hover:text-white' },
  { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/dariodidier', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://www.instagram.com/dario_didier', color: 'hover:text-pink-400' },
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-lg"><Code className="text-white w-6 h-6" /></div>
            <span className="text-xl font-bold tracking-tight text-white">Dev <span className="text-indigo-500">.NET</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider">{item.label}</a>
            ))}
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-500/25">Hablemos</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 glass mt-2 mx-4 rounded-2xl">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-indigo-600/20 rounded-xl transition-all" onClick={() => setIsOpen(false)}>{item.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-pulse delay-700"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="inline-block mb-6 px-4 py-1.5 glass rounded-full border border-indigo-500/30">
        <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Disponible para proyectos</span>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter text-white">
        Hola, soy <span className="gradient-text">Dario Didier</span><br />
        <span className="text-slate-100">.NET Developer</span>
      </h1>
      <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
        Especializado en construir aplicaciones escalables, seguras y de alto rendimiento utilizando el ecosistema Microsoft.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a href="#portfolio" className="group w-full sm:w-auto flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-indigo-500/40">
          Ver mis proyectos <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="https://drive.google.com/file/d/1PrCzE8Znbd73xW04_Ckv6GU3ajT33wbw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all border border-slate-700">
          Descargar CV <Download className="ml-2 w-5 h-5" />
        </a>
      </div>
      <div className="flex items-center justify-center space-x-8">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${link.color} transform hover:scale-125 transition-all duration-300`}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass p-2 rounded-2xl">
            <img src="https://i.postimg.cc/MHmfbDbK/profile.png" alt="Profile" className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-square object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-indigo-500/30 hidden lg:block">
            <span className="block text-4xl font-bold text-indigo-500">Junior</span>
            <span className="text-gray-400 text-sm font-medium">Analista Programador</span>
          </div>
        </div>
        <div>
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4">Descubre</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">Pasión por el desarrollo</h3>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>Soy un estudiante de <strong>desarrollo de software</strong>, con perfil de Analista programador para brindar soluciones con <strong>.NET (C#)</strong>.</p>
            <p>Manejo HTML, CSS y Javascript, combinándolo con bases de datos SQL Server.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-12 text-white">
            <div><h4 className="font-bold mb-1">Email</h4><p className="text-gray-400 text-sm break-all">dariodidier2014@gmail.com</p></div>
            <div><h4 className="font-bold mb-1">Ubicación</h4><p className="text-gray-400 text-sm">Buenos Aires, Argentina</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-indigo-400 font-bold uppercase text-sm mb-4 tracking-widest">Stack</h2>
      <h3 className="text-4xl font-extrabold mb-16 text-white">Lo que domino</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="group glass p-8 rounded-3xl flex flex-col items-center hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all">
            <div className="mb-4 text-indigo-400">{skill.icon}</div>
            <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
            <span className="text-xs uppercase text-gray-500 font-semibold">{skill.category}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-16">
        <h3 className="text-4xl font-extrabold text-white">Proyectos Destacados</h3>
        <a href="https://github.com/DarioDidier" target="_blank" className="text-indigo-400 font-bold flex items-center hover:text-indigo-300 transition-colors">Ver GitHub <ExternalLink className="ml-2 w-5 h-5" /></a>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group glass rounded-3xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500">
            <div className="aspect-video overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-duration-700" />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full uppercase">{tag}</span>)}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
              <p className="text-gray-400 mb-8 line-clamp-2">{project.description}</p>
              <div className="flex items-center space-x-6">
                <a href={project.githubUrl} target="_blank" className="text-gray-400 hover:text-white flex items-center font-medium"><Github className="w-5 h-5 mr-2" />Código</a>
                <a href={project.demoUrl} target="_blank" className="text-gray-400 hover:text-white flex items-center font-medium"><ExternalLink className="w-5 h-5 mr-2" />Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass rounded-[3rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
        <div className="bg-indigo-600 p-12 text-white">
          <h3 className="text-4xl font-extrabold mb-8">Contacto</h3>
          <div className="space-y-8">
            <div className="flex items-start"><Mail className="w-6 h-6 mr-4" /><div><h4 className="font-bold">Email</h4><p className="text-indigo-100">dariodidier2014@gmail.com</p></div></div>
            <div className="flex items-start"><Phone className="w-6 h-6 mr-4" /><div><h4 className="font-bold">Teléfono</h4><p className="text-indigo-100">+54 1133728915</p></div></div>
            <div className="flex items-start"><MapPin className="w-6 h-6 mr-4" /><div><h4 className="font-bold">Ubicación</h4><p className="text-indigo-100">Buenos Aires, Argentina</p></div></div>
          </div>
        </div>
        <div className="p-12">
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="Nombre" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none" />
            <input type="email" placeholder="Email" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none" />
            <textarea rows={4} placeholder="Mensaje" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 outline-none resize-none"></textarea>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-2xl font-bold transition-all flex items-center justify-center">Enviar Mensaje <Send className="ml-2 w-5 h-5" /></button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-slate-800/50">
    <div className="max-w-7xl mx-auto px-4 text-center md:flex md:justify-between items-center">
      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Dario Didier. Hecho con pasión.</p>
      <div className="flex justify-center space-x-6 mt-4 md:mt-0">
        {SOCIAL_LINKS.map(link => <a key={link.name} href={link.url} target="_blank" className="text-gray-500 hover:text-white transition-all">{link.icon}</a>)}
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>);
}
