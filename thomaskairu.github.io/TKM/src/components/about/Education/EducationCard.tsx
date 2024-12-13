import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  year: string;
  description: string;
  delay: number;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  year,
  description,
  delay
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
  >
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{institution}</h3>
        <p className="text-blue-600 dark:text-blue-400">{degree}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{year}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  </motion.div>
);

export default EducationCard;