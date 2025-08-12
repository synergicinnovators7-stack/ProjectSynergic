import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-amber-900 text-amber-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-red-400" />
              <span className="text-xl font-bold">PAT Academy</span>
            </div>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-amber-100'}`}>
              Empowering students to achieve their full potential through quality education, 
              innovative teaching methods, and a supportive learning environment.
            </p>
            <div className="flex space-x-4">
              <Facebook className={`h-5 w-5 cursor-pointer transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-amber-200 hover:text-red-400'
              }`} />
              <Twitter className={`h-5 w-5 cursor-pointer transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-amber-200 hover:text-red-400'
              }`} />
              <Instagram className={`h-5 w-5 cursor-pointer transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-amber-200 hover:text-red-400'
              }`} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/announcements" className={`transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-amber-100 hover:text-white'
              }`}>Announcements</a></li>
              <li><a href="/staff" className={`transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-amber-100 hover:text-white'
              }`}>Staff Directory</a></li>
              <li><a href="/blog" className={`transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-amber-100 hover:text-white'
              }`}>Blog</a></li>
              <li><a href="/parent-portal" className={`transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-amber-100 hover:text-white'
              }`}>Parent Portal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-amber-200'}`} />
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-amber-100'}`}>123 Education Street, Knowledge City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-amber-200'}`} />
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-amber-100'}`}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-amber-200'}`} />
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-amber-100'}`}>info@patacademy.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t mt-8 pt-8 text-center ${
          isDarkMode ? 'border-gray-800' : 'border-amber-800'
        }`}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-amber-200'}`}>
            © 2024 PAT Academy. All rights reserved. Built with care for our students and families.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;