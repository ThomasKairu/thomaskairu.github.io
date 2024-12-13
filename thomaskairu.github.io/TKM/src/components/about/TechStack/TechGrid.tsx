import React from 'react';
import TechIcon from './TechIcon';
import { technologies } from '../../../config/technologies';

const TechGrid: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
    {technologies.map((tech) => (
      <TechIcon key={tech.name} {...tech} />
    ))}
  </div>
);

export default TechGrid;