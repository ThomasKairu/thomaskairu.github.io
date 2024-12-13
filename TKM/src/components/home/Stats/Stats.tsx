import React from 'react';
import StatItem from './StatItem';
import { stats } from '../../../config/stats';

const Stats: React.FC = () => (
  <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
      <StatItem key={index} {...stat} />
    ))}
  </div>
);

export default Stats;