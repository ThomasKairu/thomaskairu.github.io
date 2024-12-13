import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../../../types';
import { ProjectImage } from './ProjectImage';
import { ProjectContent } from './ProjectContent';

export const ProjectCard: React.FC<ProjectItem> = (props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: props.delay, duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
  >
    <ProjectImage {...props} />
    <ProjectContent {...props} />
  </motion.div>
);

export default ProjectCard;