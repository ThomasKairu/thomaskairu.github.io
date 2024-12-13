import React from 'react';
import { ProjectItem } from '../../../types';
import { TechBadge } from '../TechBadge';
import { FeatureList } from '../FeatureList';
import { ProjectStats } from '../ProjectStats';

type ProjectContentProps = Pick<ProjectItem, 'title' | 'description' | 'technologies' | 'features'>;

export const ProjectContent: React.FC<ProjectContentProps> = ({
  title,
  description,
  technologies,
  features,
}) => (
  <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    
    <FeatureList features={features} />

    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>
    </div>

    <ProjectStats
      languages={technologies}
      stars={0}
      forks={0}
    />
  </div>
);

export default ProjectContent;