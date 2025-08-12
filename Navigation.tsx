import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useNotifications } from '../contexts/NotificationContext';
import { 
  Menu, 
  X, 
  GraduationCap, 
  Home, 
  Bell, 
  Users, 
  BookOpen, 
  User,
  Settings,
  LogOut,
  Sun,
  Moon,
  ClipboardList
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const { unreadCount } = useNotifications();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/announcements', label: 'Announcements', icon: Bell },
    { path: '/staff', label: 'Staff', icon: Users },
    { path: '/blog', label: 'Blog', icon: BookOpen },
  ];

  const userNavItems = user ? [
    ...(user.role === 'staff' || user.role === 'admin' ? [{ path: '/assignments', label: 'Assignments', icon: ClipboardList }] : []),
    ...(user.role === 'parent' ? [{ path: '/parent-portal', label: 'Parent Portal', icon: User }] : []),
    ...(user.role === 'admin' ? [{ path: '/admin-dashboard', label: 'Admin Dashboard', icon: Settings }] : []),
  ] : [];

  return (
    <nav className={`shadow-lg sticky top-0 z-50 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-red-600" />
            <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>PAT Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? isDarkMode 
                        ? 'bg-red-900 text-red-300' 
                        : 'bg-red-100 text-red-700'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-red-400'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  {item.path === '/announcements' && unreadCount > 0 && (
                    <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Link>
              );
            })}

            {userNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? isDarkMode 
                        ? 'bg-red-900 text-red-300' 
                        : 'bg-red-100 text-red-700'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-red-400'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Welcome, {user?.name}
                  </span>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      isDarkMode
                        ? 'text-red-400 border-red-400 hover:bg-red-900'
                        : 'text-red-600 border-red-600 hover:bg-red-50'
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
            }`}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? isDarkMode 
                          ? 'bg-red-900 text-red-300' 
                          : 'bg-red-100 text-red-700'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-red-400'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              {userNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? isDarkMode 
                          ? 'bg-red-900 text-red-300' 
                          : 'bg-red-100 text-red-700'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700 hover:text-red-400'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <div className="border-t pt-4">
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                {isAuthenticated ? (
                  <div className="space-y-2">
                    <div className={`px-3 py-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Welcome, {user?.name}
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 border rounded-md transition-colors text-center ${
                        isDarkMode
                          ? 'text-red-400 border-red-400 hover:bg-red-900'
                          : 'text-red-600 border-red-600 hover:bg-red-50'
                      }`}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-center"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;