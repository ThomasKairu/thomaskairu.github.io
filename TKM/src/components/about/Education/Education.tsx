import React from 'react';
import EducationCard from './EducationCard';

const educationData = [
  {
    institution: 'Strathmore University',
    degree: 'Software Development Certification',
    year: '2024',
    description: 'Specialized in full-stack web development, mobile app development, and software engineering principles.',
    delay: 0.2
  }
];

const Education: React.FC = () => (
  <div className="space-y-6">
    {educationData.map((edu, index) => (
      <EducationCard key={index} {...edu} />
    ))}
  </div>
);

export default Education;