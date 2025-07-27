import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-md bg-white">
              <img
                src={logo}
                alt="SwasthyaCare Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-blue-800 dark:text-blue-400 text-lg">SwasthyaCare</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Multispeciality Hospital</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-red-600 dark:text-red-400">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Emergency: 108</span>
            </div>
            <ThemeToggle />
            <Link to="/appointments">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Book Appointment
              </Button>
            </Link>
            <Link to="/patient-portal">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                Patient Login
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="ghost" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    isActive(item.path)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center space-x-1 text-red-600 dark:text-red-400">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium">Emergency: 108</span>
                  </div>
                  <ThemeToggle />
                </div>
                <Link to="/appointments" onClick={() => setIsOpen(false)}>
                  <Button className="w-full mx-3 my-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/patient-portal" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full mx-3 my-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
                    Patient Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;