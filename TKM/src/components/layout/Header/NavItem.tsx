import React from 'react';

interface NavItemProps {
  name: string;
  href: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    {name}
  </a>
);

export default NavItem;