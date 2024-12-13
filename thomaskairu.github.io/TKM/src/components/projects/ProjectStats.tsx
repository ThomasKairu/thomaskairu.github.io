import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitFork, Star } from 'lucide-react';

interface ProjectStatsProps {
  languages: string[];
  stars: number;
  forks: number;
}

export const ProjectStats: React.FC<ProjectStatsProps> = ({ languages, stars, forks }) => (
  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center"
    >
      <Code2 size={16} className="mr-1" />
      <span>{languages.join(', ')}</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex items-center"
    >
      <Star size={16} className="mr-1" />
      <span>{stars}</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex items-center"
    >
      <GitFork size={16} className="mr-1" />
      <span>{forks}</span>
    </motion.div>
  </div>
);

export default ProjectStats;