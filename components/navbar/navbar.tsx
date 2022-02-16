import ThemeSwitch from './theme-switch';
import { MenuIcon } from '@heroicons/react/outline';
import NavbarItem from './navbar-item';
import MobileMenu from './mobile-menu';
import { useState } from 'react';

const navigation = [
  { name: 'About', href: '#home' },
  { name: 'Experience', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div className="bg-white/80 dark:bg-gray-800/80 shadow-md fixed w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setShowMenu(true)}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center smdm:items-stretch md:justify-start">
              <div className="flex-shrink-0 flex items-center text-gray-800 dark:text-gray-200">
                Iván Arjona Alonso
              </div>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden md:block sm:mr-5">
                <ul className="flex space-x-4">
                  {navigation.map(({ name, href }) => (
                    <NavbarItem key={name} name={name} href={href} />
                  ))}
                </ul>
              </div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        show={showMenu}
        navigation={navigation}
        onClose={() => setShowMenu(false)}
      />
    </nav>
  );
}