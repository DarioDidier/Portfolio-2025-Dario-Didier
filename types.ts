import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface Skill {
  name: string;
  // Fix: Added React import to provide access to the React namespace for ReactNode
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'other';
}

export interface NavItem {
  label: string;
  href: string;
}