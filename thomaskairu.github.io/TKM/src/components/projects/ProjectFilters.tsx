import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filters: string[];
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({ activeFilter, setActiveFilter, filters }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-wrap justify-center gap-4 mb-8"
  >
    {filters.map((filter) => (
      <button
        key={filter}
        onClick={() => setActiveFilter(filter)}
        className={`px-4 py-2 rounded-full transition-colors ${
          activeFilter === filter
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900'
        }`}
      >
        {filter}
      </button>
    ))}
  </motion.div>
);

export default ProjectFilters;
