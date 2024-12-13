import React from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="text-center"
  >
    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{value}</h3>
    <p className="text-gray-600 dark:text-gray-400">{label}</p>
  </motion.div>
);

export default StatItem;