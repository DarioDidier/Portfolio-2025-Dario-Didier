
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Code2, 
  Database, 
  Layers, 
  Monitor, 
  Globe, 
  Server,
  Terminal,
  FileJson,
  Cpu
} from 'lucide-react';
import { Project, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' },
];

export const PROJECTS: Project[] = [
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

export const SKILLS: Skill[] = [
  { name: 'C#', icon: <Terminal size={32} />, category: 'backend' },
  { name: '.NET (Core/8)', icon: <Layers size={32} />, category: 'backend' },
  { name: 'SQL Server', icon: <Database size={32} />, category: 'database' },
  { name: 'ASP.NET Core', icon: <Globe size={32} />, category: 'backend' },
  { name: 'HTML5', icon: <Monitor size={32} />, category: 'frontend' },
  { name: 'CSS3', icon: <Code2 size={32} />, category: 'frontend' },
  { name: 'JavaScript', icon: <FileJson size={32} />, category: 'frontend' },
  { name: 'Microservicios', icon: <Cpu size={32} />, category: 'other' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github />, url: 'https://github.com/DarioDidier', color: 'hover:text-white' },
  { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/dariodidier', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/dario_didier', color: 'hover:text-pink-400' },
];
