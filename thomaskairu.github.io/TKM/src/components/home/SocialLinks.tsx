import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/ThomasKairu',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'mailto:tmuchomba@gmail.com',
    icon: Mail,
    label: 'Email',
  },
  {
    href: 'https://linkedin.com',
    icon: Linkedin,
    label: 'LinkedIn',
  },
];

const SocialLinks: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.5 }}
    className="flex justify-center space-x-6"
  >
    {socialLinks.map(({ href, icon: Icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        aria-label={label}
      >
        <Icon size={24} />
      </a>
    ))}
  </motion.div>
);

export default SocialLinks;