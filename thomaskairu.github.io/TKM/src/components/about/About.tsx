import React from 'react';
import { motion } from 'framer-motion';
import TechGrid from './TechStack/TechGrid';
import Education from './Education/Education';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience in building web and mobile applications. 
              Specializing in React, Laravel, and Flutter development, I've successfully delivered numerous projects 
              ranging from e-commerce platforms to complex enterprise solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in software development started at Strathmore University, and since then, 
              I've been continuously learning and adapting to new technologies. I'm particularly 
              interested in creating scalable solutions that solve real-world problems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Technical Expertise
          </h3>
          <TechGrid />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Education
          </h3>
          <Education />
        </motion.div>
      </div>
    </section>
  );
};

export default About;