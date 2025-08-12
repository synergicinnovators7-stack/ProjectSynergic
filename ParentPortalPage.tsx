import React, { useState } from 'react';
import { 
  User, 
  BookOpen, 
  Award, 
  Calendar, 
  MessageSquare, 
  Download,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const ParentPortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const studentData = {
    name: "Emma Johnson",
    grade: "Grade 8",
    class: "8A",
    teacher: "Ms. Rodriguez",
    avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400"
  };

  const assignments = [
    {
      id: 1,
      title: "Math Quiz - Algebra",
      subject: "Mathematics",
      dueDate: "2024-01-20",
      status: "submitted",
      grade: "A",
      score: "95%"
    },
    {
      id: 2,
      title: "Science Project - Solar System",
      subject: "Science",
      dueDate: "2024-01-25",
      status: "pending",
      grade: null,
      score: null
    },
    {
      id: 3,
      title: "Essay - My Summer Vacation",
      subject: "English",
      dueDate: "2024-01-18",
      status: "graded",
      grade: "B+",
      score: "87%"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "assignment",
      title: "Math Quiz submitted",
      date: "2024-01-15",
      icon: BookOpen
    },
    {
      id: 2,
      type: "message",
      title: "Message from Ms. Rodriguez",
      date: "2024-01-14",
      icon: MessageSquare
    },
    {
      id: 3,
      type: "achievement",
      title: "Student of the Week",
      date: "2024-01-12",
      icon: Award
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Mathematics Workbook",
      type: "PDF",
      size: "2.5 MB",
      subject: "Mathematics"
    },
    {
      id: 2,
      title: "Science Lab Manual",
      type: "PDF",
      size: "5.2 MB",
      subject: "Science"
    },
    {
      id: 3,
      title: "Reading List",
      type: "PDF",
      size: "1.1 MB",
      subject: "English"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "2024-01-22",
      time: "2:00 PM"
    },
    {
      id: 2,
      title: "Science Fair",
      date: "2024-02-05",
      time: "10:00 AM"
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "2024-02-12",
      time: "3:00 PM"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'graded':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted':
        return <Clock className="h-4 w-4" />;
      case 'graded':
        return <CheckCircle className="h-4 w-4" />;
      case 'pending':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Parent Portal</h1>
        <p className="text-gray-600">Track your child's academic progress and stay connected</p>
      </div>

      {/* Student Info Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={studentData.avatar}
            alt={studentData.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{studentData.name}</h2>
            <p className="text-gray-600">{studentData.grade} - {studentData.class}</p>
            <p className="text-sm text-gray-500">Teacher: {studentData.teacher}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-8 border-b border-gray-200">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'assignments', label: 'Assignments' },
            { id: 'resources', label: 'Resources' },
            { id: 'messages', label: 'Messages' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map(activity => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Performance Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">A-</div>
                  <div className="text-sm text-gray-600">Overall Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">92%</div>
                  <div className="text-sm text-gray-600">Attendance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">15</div>
                  <div className="text-sm text-gray-600">Assignments</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message Teacher
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </button>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Progress Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'assignments' && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Assignments & Grades</h3>
            <div className="space-y-4">
              {assignments.map(assignment => (
                <div key={assignment.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                      <p className="text-sm text-gray-600">{assignment.subject}</p>
                      <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                        {getStatusIcon(assignment.status)}
                        <span className="ml-1">{assignment.status}</span>
                      </span>
                      {assignment.grade && (
                        <div className="mt-2">
                          <span className="text-lg font-semibold text-gray-900">{assignment.grade}</span>
                          <span className="text-sm text-gray-500 ml-2">({assignment.score})</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Resources</h3>
            <div className="space-y-4">
              {resources.map(resource => (
                <div key={resource.id} className="flex items-center justify-between border rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded">
                      <BookOpen className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{resource.title}</h4>
                      <p className="text-sm text-gray-600">{resource.subject}</p>
                      <p className="text-sm text-gray-500">{resource.type} • {resource.size}</p>
                    </div>
                  </div>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Messages</h3>
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h4>
              <p className="text-gray-600 mb-4">Start a conversation with your child's teacher</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentPortalPage;