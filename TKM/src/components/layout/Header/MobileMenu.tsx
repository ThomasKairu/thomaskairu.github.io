import React from 'react';
import NavItem from './NavItem';
import ThemeToggle from './ThemeToggle';
import { navItems } from '../../../config/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  isDarkMode: boolean;
  toggleTheme: () => void;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  isDarkMode,
  toggleTheme,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4">
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            {...item}
            onClick={onClose}
          />
        ))}
        <div className="flex items-center space-x-4">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <a
            href="/resume.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;