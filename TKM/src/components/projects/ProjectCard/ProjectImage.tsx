import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectItem } from '../../../types';

type ProjectImageProps = Pick<ProjectItem, 'image' | 'title' | 'liveDemo' | 'sourceCode'>;

export const ProjectImage: React.FC<ProjectImageProps> = ({ image, title, liveDemo, sourceCode }) => (
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
);

export default ProjectImage;