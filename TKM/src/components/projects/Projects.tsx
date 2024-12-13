import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from './ProjectGrid';
import { ProjectFilters } from './ProjectFilters';
import { projects } from '../../config/projects';
import { filterProjects } from '../../utils/projectFilters';
import { fadeInUp, staggerChildren } from '../../utils/animations';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web', 'API', 'Backend'];

  const filteredProjects = useMemo(() => 
    filterProjects(projects, activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my expertise in full-stack development,
            API integration, and system architecture.
          </p>
        </motion.div>

        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          filters={filters}
        />

        <motion.div {...staggerChildren}>
          <ProjectGrid projects={filteredProjects} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;