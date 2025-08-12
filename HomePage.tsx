import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Bell, 
  Users, 
  BookOpen, 
  Award, 
  Calendar,
  ArrowRight,
  Star,
  TrendingUp,
  Heart
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { isDarkMode } = useTheme();

  const announcements = [
    {
      id: 1,
      title: "Parent-Teacher Conference Next Week",
      date: "2024-01-15",
      excerpt: "Join us for our quarterly parent-teacher conference to discuss your child's progress.",
      type: "important"
    },
    {
      id: 2,
      title: "Science Fair Registration Open",
      date: "2024-01-12",
      excerpt: "Students can now register for our annual science fair competition.",
      type: "event"
    },
    {
      id: 3,
      title: "Winter Break Schedule",
      date: "2024-01-10",
      excerpt: "Please note the updated schedule for winter break activities.",
      type: "general"
    }
  ];

  const stats = [
    { label: "Students", value: "450+", icon: Users },
    { label: "Teachers", value: "25+", icon: Award },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Years of Excellence", value: "15+", icon: Star }
  ];

  const upcomingEvents = [
    { title: "Parent-Teacher Conference", date: "Jan 22, 2024", time: "2:00 PM" },
    { title: "Science Fair", date: "Feb 5, 2024", time: "10:00 AM" },
    { title: "Art Exhibition", date: "Feb 12, 2024", time: "3:00 PM" }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className={`text-white transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-red-800 via-red-900 to-amber-900' 
          : 'bg-gradient-to-r from-red-600 via-red-700 to-amber-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-red-200">PAT Academy</span>
              </h1>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Where excellence meets opportunity. We're dedicated to nurturing young minds 
                and preparing students for a bright future through innovative education and 
                comprehensive support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/parent-portal"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Parent Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/announcements"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  View Announcements
                  <Bell className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Excited students learning"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Announcements */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Latest Announcements
              </h2>
              <Link
                to="/announcements"
                className="text-red-600 hover:text-red-800 font-semibold flex items-center"
              >
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-6">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-500 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          announcement.type === 'important' 
                            ? 'bg-red-100 text-red-800' 
                            : announcement.type === 'event'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {announcement.type}
                        </span>
                        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {announcement.date}
                        </span>
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {announcement.title}
                      </h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {announcement.excerpt}
                      </p>
                    </div>
                    <Bell className={`h-5 w-5 ml-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-4 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Calendar className="h-5 w-5 mr-2 text-red-600" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-2 border-red-500 pl-4">
                    <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {event.title}
                    </h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {event.date}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {event.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link
                  to="/staff"
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Users className="h-5 w-5 mr-3 text-red-600" />
                  Staff Directory
                </Link>
                <Link
                  to="/blog"
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <BookOpen className="h-5 w-5 mr-3 text-red-600" />
                  School Blog
                </Link>
                <Link
                  to="/parent-portal"
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="h-5 w-5 mr-3 text-red-600" />
                  Parent Portal
                </Link>
              </div>
            </div>

            {/* Happy Students Image */}
            <div className={`p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img
                src="https://images.pexels.com/photos/8613204/pexels-photo-8613204.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Happy students celebrating"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Celebrating Success
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our students achieve amazing results through dedication and excellent teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-16 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our Mission
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              At PAT Academy, we believe every child deserves a quality education that prepares them for success in life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Excellence
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                We strive for excellence in all aspects of education and student development.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Care
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                We provide a nurturing environment where every student feels valued and supported.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-800 text-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Growth
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                We foster continuous learning and personal growth for students and staff alike.
              </p>
            </div>
          </div>

          {/* Additional Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Students working together"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Collaborative Learning
              </h4>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/8613207/pexels-photo-8613207.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Students in science class"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Hands-on Science
              </h4>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/8613202/pexels-photo-8613202.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Students presenting"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Confident Presentations
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;