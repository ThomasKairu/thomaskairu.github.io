import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '../../types';
import ProjectStats from './ProjectStats';

const ProjectCard: React.FC<ProjectItem> = ({
  title,
  description,
  technologies,
  features,
  image,
  liveDemo,
  sourceCode,
  delay
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex space-x-4">
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors"
            >
              <ExternalLink size={20} className="text-blue-600" />
            </a>
          )}
          {sourceCode && (
            <a
              href={sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-blue-100 transition-colors"
            >
              <Github size={20} className="text-blue-600" />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Features:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <ProjectStats
        languages={technologies}
        stars={0}
        forks={0}
      />
    </div>
  </motion.div>
);


export default ProjectCard;
