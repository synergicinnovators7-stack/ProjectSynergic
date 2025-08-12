import React, { useState } from 'react';
import { Bell, Calendar, Filter, Search, Tag } from 'lucide-react';

const AnnouncementsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const announcements = [
    {
      id: 1,
      title: "Parent-Teacher Conference Next Week",
      content: "We're excited to invite all parents to our quarterly parent-teacher conference scheduled for next week. This is a great opportunity to discuss your child's progress, achievements, and areas for improvement with their teachers.",
      date: "2024-01-15",
      category: "important",
      author: "Principal Johnson"
    },
    {
      id: 2,
      title: "Science Fair Registration Open",
      content: "Students can now register for our annual science fair competition. This year's theme is 'Innovation for Tomorrow.' Registration deadline is January 30th.",
      date: "2024-01-12",
      category: "event",
      author: "Mr. Smith"
    },
    {
      id: 3,
      title: "Winter Break Schedule",
      content: "Please note the updated schedule for winter break activities. The school will be closed from December 23rd to January 2nd. Extended care will be available for registered students.",
      date: "2024-01-10",
      category: "general",
      author: "Administration"
    },
    {
      id: 4,
      title: "New Library Books Available",
      content: "We've added 200 new books to our library collection, including popular fiction and educational materials. Students can now check them out during library hours.",
      date: "2024-01-08",
      category: "academic",
      author: "Ms. Davis"
    },
    {
      id: 5,
      title: "PTA Meeting This Friday",
      content: "Join us for our monthly PTA meeting this Friday at 7 PM in the school auditorium. We'll discuss upcoming events and fundraising activities.",
      date: "2024-01-05",
      category: "pta",
      author: "PTA President"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Announcements' },
    { value: 'important', label: 'Important' },
    { value: 'event', label: 'Events' },
    { value: 'academic', label: 'Academic' },
    { value: 'pta', label: 'PTA' },
    { value: 'general', label: 'General' }
  ];

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesCategory = selectedCategory === 'all' || announcement.category === selectedCategory;
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'important':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'event':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'academic':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pta':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">School Announcements</h1>
        <p className="text-gray-600">Stay updated with the latest news and announcements from PAT Academy</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-6">
        {filteredAnnouncements.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No announcements found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getCategoryColor(announcement.category)}`}>
                    {announcement.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {announcement.date}
                  </div>
                </div>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {announcement.title}
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {announcement.content}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Tag className="h-4 w-4 mr-1" />
                  By {announcement.author}
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read More
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnnouncementsPage;