import React from 'react';

interface TechBadgeProps {
  tech: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => (
  <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded">
    {tech}
  </span>
);

export default TechBadge;