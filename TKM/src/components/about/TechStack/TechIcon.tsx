import React from 'react';
import { motion } from 'framer-motion';

interface TechIconProps {
  name: string;
  icon: string;
  proficiency: number;
  delay: number;
}

const TechIcon: React.FC<TechIconProps> = ({ name, icon, proficiency, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="group relative flex flex-col items-center"
  >
    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 shadow-md group-hover:shadow-lg transition-shadow">
      <img src={icon} alt={name} className="w-10 h-10" />
    </div>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{name}</p>
    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div 
        className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300"
        style={{ width: `${proficiency}%` }}
      />
    </div>
  </motion.div>
);

export default TechIcon;