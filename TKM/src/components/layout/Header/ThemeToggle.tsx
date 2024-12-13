import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    aria-label="Toggle theme"
  >
    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

export default ThemeToggle;