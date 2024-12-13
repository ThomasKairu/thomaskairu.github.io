export interface NavItem {
  name: string;
  href: string;
}

export interface TechItem {
  name: string;
  icon: string;
  proficiency: number;
  delay: number;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  description: string;
  delay: number;
}

export interface StatItem {
  value: string;
  label: string;
  delay: number;
}

export interface SocialLink {
  href: string;
  icon: React.FC<{ size?: number }>;
  label: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  liveDemo?: string;
  sourceCode?: string;
  delay: number;
}