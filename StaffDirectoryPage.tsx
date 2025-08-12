import React, { useState } from 'react';
import { Mail, Phone, Search, Filter, MapPin, Award } from 'lucide-react';

const StaffDirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const staff = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      email: "s.johnson@patacademy.com",
      phone: "+1 (555) 123-4567",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Johnson has been leading PAT Academy with passion and dedication for over 10 years.",
      qualifications: ["Ph.D. in Educational Leadership", "M.Ed. in Administration"]
    },
    {
      id: 2,
      name: "Mr. Michael Chen",
      position: "Mathematics Teacher",
      department: "Mathematics",
      email: "m.chen@patacademy.com",
      phone: "+1 (555) 123-4568",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Mr. Chen specializes in advanced mathematics and has helped numerous students excel in competitions.",
      qualifications: ["M.S. in Mathematics", "B.Ed. in Secondary Education"]
    },
    {
      id: 3,
      name: "Ms. Emily Rodriguez",
      position: "English Teacher",
      department: "Language Arts",
      email: "e.rodriguez@patacademy.com",
      phone: "+1 (555) 123-4569",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Ms. Rodriguez brings creativity and enthusiasm to English literature and writing instruction.",
      qualifications: ["M.A. in English Literature", "B.A. in Creative Writing"]
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      position: "Science Teacher",
      department: "Science",
      email: "j.wilson@patacademy.com",
      phone: "+1 (555) 123-4570",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Wilson combines theoretical knowledge with hands-on experiments to make science engaging.",
      qualifications: ["Ph.D. in Chemistry", "M.S. in Education"]
    },
    {
      id: 5,
      name: "Ms. Lisa Thompson",
      position: "Art Teacher",
      department: "Arts",
      email: "l.thompson@patacademy.com",
      phone: "+1 (555) 123-4571",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Ms. Thompson inspires students to express themselves through various forms of artistic expression.",
      qualifications: ["M.F.A. in Fine Arts", "B.A. in Art Education"]
    },
    {
      id: 6,
      name: "Mr. David Lee",
      position: "Physical Education Teacher",
      department: "Physical Education",
      email: "d.lee@patacademy.com",
      phone: "+1 (555) 123-4572",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Mr. Lee promotes physical fitness and teamwork through sports and recreational activities.",
      qualifications: ["M.S. in Kinesiology", "B.S. in Physical Education"]
    }
  ];

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'Administration', label: 'Administration' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Language Arts', label: 'Language Arts' },
    { value: 'Science', label: 'Science' },
    { value: 'Arts', label: 'Arts' },
    { value: 'Physical Education', label: 'Physical Education' }
  ];

  const filteredStaff = staff.filter(member => {
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Staff Directory</h1>
        <p className="text-gray-600">Meet our dedicated team of educators and administrators</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search staff members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {departments.map(dept => (
              <option key={dept.value} value={dept.value}>
                {dept.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="text-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.department}</p>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  {member.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href={`tel:${member.phone}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  {member.phone}
                </a>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {member.bio}
            </p>

            <div className="border-t pt-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                <Award className="h-4 w-4 mr-2 text-blue-600" />
                Qualifications
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {member.qualifications.map((qual, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {filteredStaff.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No staff members found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default StaffDirectoryPage;