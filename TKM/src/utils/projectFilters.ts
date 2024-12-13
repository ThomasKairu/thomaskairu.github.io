import { ProjectItem } from '../types';

export const filterProjects = (projects: ProjectItem[], filter: string): ProjectItem[] => {
  if (filter === 'All') return projects;

  const filterMap: Record<string, string[]> = {
    'Web': ['React', 'Laravel', 'JavaScript', 'HTML', 'CSS'],
    'API': ['API Integration', 'Laravel', 'PHP'],
    'Backend': ['PHP', 'Laravel', 'MySQL']
  };

  return projects.filter(project => 
    project.technologies.some(tech => filterMap[filter]?.includes(tech))
  );
};