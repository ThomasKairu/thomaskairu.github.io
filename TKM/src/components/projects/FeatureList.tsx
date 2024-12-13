import React from 'react';

interface FeatureListProps {
  features: string[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <div className="mb-4">
    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Key Features:</h4>
    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

export default FeatureList;