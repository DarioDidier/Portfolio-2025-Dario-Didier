
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
    id: 1,
    title: "E-Commerce API .NET",
    description: "API robusta desarrollada con ASP.NET Core Web API, Entity Framework Core y SQL Server. Implementa JWT y Patrón Repository.",
    image: "https://picsum.photos/seed/api/600/400",
    tags: [".NET Core", "SQL Server", "Docker"],
    githubUrl: "https://github.com/DarioDidier",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "Aplicación de escritorio con WPF y .NET 8 para la gestión de inventarios en tiempo real con reportes automáticos.",
    image: "https://picsum.photos/seed/inventory/600/400",
    tags: ["WPF", "C#", "MVVM"],
    githubUrl: "https://github.com/DarioDidier",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description: "Plataforma de chat utilizando SignalR para comunicación bidireccional y React para la interfaz de usuario.",
    image: "https://picsum.photos/seed/chat/600/400",
    tags: ["SignalR", "React", "Azure"],
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
