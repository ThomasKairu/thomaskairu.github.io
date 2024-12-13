import React from 'react';
import { motion } from 'framer-motion';
import  ProjectCard  from './ProjectCard';
import { ProjectItem } from '../../types';
import { fadeInUp } from '../../utils/animations';

interface ProjectGridProps {
  projects: ProjectItem[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={project.title}
        {...fadeInUp}
        transition={{ delay: index * 0.1 }}
      >
        <ProjectCard {...project} />
      </motion.div>
    ))}
  </div>
);

export default ProjectGrid;
