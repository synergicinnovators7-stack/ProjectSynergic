import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNotifications } from '../contexts/NotificationContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Plus, 
  Calendar, 
  Clock, 
  BookOpen, 
  Users, 
  Edit, 
  Trash2, 
  Send,
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Assignment {
  id: string;
  title: string;
  description: string;
  subject: string;
  class: string;
  dueDate: string;
  createdBy: string;
  createdAt: string;
  status: 'draft' | 'published';
  attachments?: string[];
}

const AssignmentsPage: React.FC = () => {
  const { user } = useAuth();
  const { addNotification } = useNotifications();
  const { isDarkMode } = useTheme();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: '1',
      title: 'Mathematics Quiz - Algebra Basics',
      description: 'Complete the algebra problems covering linear equations and basic factoring.',
      subject: 'Mathematics',
      class: 'Grade 8A',
      dueDate: '2024-01-25',
      createdBy: 'Mr. Chen',
      createdAt: '2024-01-15',
      status: 'published'
    },
    {
      id: '2',
      title: 'Science Project - Solar System',
      description: 'Create a model of the solar system with detailed information about each planet.',
      subject: 'Science',
      class: 'Grade 7B',
      dueDate: '2024-02-01',
      createdBy: 'Dr. Wilson',
      createdAt: '2024-01-16',
      status: 'published'
    }
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    subject: '',
    class: '',
    dueDate: ''
  });

  const classes = [
    'Grade 6A', 'Grade 6B', 'Grade 7A', 'Grade 7B', 
    'Grade 8A', 'Grade 8B', 'Grade 9A', 'Grade 9B'
  ];

  const subjects = [
    'Mathematics', 'Science', 'English', 'History', 
    'Geography', 'Art', 'Physical Education', 'Music'
  ];

  const handleCreateAssignment = () => {
    if (!newAssignment.title || !newAssignment.class || !newAssignment.dueDate) {
      return;
    }

    const assignment: Assignment = {
      id: Date.now().toString(),
      ...newAssignment,
      createdBy: user?.name || 'Unknown',
      createdAt: new Date().toISOString().split('T')[0],
      status: 'published'
    };

    setAssignments(prev => [assignment, ...prev]);

    // Send notification to all class members
    addNotification({
      title: 'New Assignment Posted',
      message: `${assignment.title} has been assigned to ${assignment.class}. Due date: ${assignment.dueDate}`,
      type: 'info',
      classId: assignment.class
    });

    setNewAssignment({
      title: '',
      description: '',
      subject: '',
      class: '',
      dueDate: ''
    });
    setShowCreateForm(false);
  };

  const handleDeleteAssignment = (id: string) => {
    setAssignments(prev => prev.filter(assignment => assignment.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800';
      case 'draft':
        return isDarkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
      default:
        return isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-colors duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-900'
    }`}>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Assignment Management</h1>
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
            Create and manage assignments for your classes
          </p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Assignment
        </button>
      </div>

      {/* Create Assignment Form */}
      {showCreateForm && (
        <div className={`mb-8 p-6 rounded-lg shadow-md ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-lg font-semibold mb-4">Create New Assignment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Assignment Title *
              </label>
              <input
                type="text"
                value={newAssignment.title}
                onChange={(e) => setNewAssignment(prev => ({ ...prev, title: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                }`}
                placeholder="Enter assignment title"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Subject
              </label>
              <select
                value={newAssignment.subject}
                onChange={(e) => setNewAssignment(prev => ({ ...prev, subject: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                }`}
              >
                <option value="">Select Subject</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Class *
              </label>
              <select
                value={newAssignment.class}
                onChange={(e) => setNewAssignment(prev => ({ ...prev, class: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                }`}
              >
                <option value="">Select Class</option>
                {classes.map(cls => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Due Date *
              </label>
              <input
                type="date"
                value={newAssignment.dueDate}
                onChange={(e) => setNewAssignment(prev => ({ ...prev, dueDate: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300'
                }`}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Description
            </label>
            <textarea
              value={newAssignment.description}
              onChange={(e) => setNewAssignment(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300'
              }`}
              placeholder="Enter assignment description and instructions"
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={() => setShowCreateForm(false)}
              className={`px-4 py-2 border rounded-lg transition-colors ${
                isDarkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Cancel
            </button>
            <button
              onClick={handleCreateAssignment}
              className="flex items-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Send className="h-4 w-4 mr-2" />
              Create & Notify Class
            </button>
          </div>
        </div>
      )}

      {/* Assignments List */}
      <div className="space-y-6">
        {assignments.length === 0 ? (
          <div className={`text-center py-12 rounded-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <FileText className={`h-12 w-12 mx-auto mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-400'
            }`} />
            <h3 className="text-lg font-medium mb-2">No assignments yet</h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Create your first assignment to get started.
            </p>
          </div>
        ) : (
          assignments.map((assignment) => (
            <div
              key={assignment.id}
              className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold">{assignment.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(assignment.status)}`}>
                      {assignment.status === 'published' ? (
                        <CheckCircle className="h-3 w-3 inline mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 inline mr-1" />
                      )}
                      {assignment.status}
                    </span>
                  </div>
                  
                  <div className={`flex items-center space-x-4 text-sm mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {assignment.subject}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {assignment.class}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Created: {assignment.createdAt}
                    </div>
                  </div>

                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {assignment.description}
                  </p>

                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Created by: {assignment.createdBy}
                  </div>
                </div>

                <div className="flex space-x-2 ml-4">
                  <button className={`p-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'text-gray-400 hover:bg-gray-700 hover:text-amber-400' 
                      : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                  }`}>
                    <Edit className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => handleDeleteAssignment(assignment.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'text-gray-400 hover:bg-gray-700 hover:text-red-400' 
                        : 'text-gray-600 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AssignmentsPage;