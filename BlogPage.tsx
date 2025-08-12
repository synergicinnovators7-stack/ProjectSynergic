import React, { useState } from 'react';
import { Calendar, User, Tag, Search, Heart, MessageCircle, Share2 } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Students Excel in Regional Math Competition",
      excerpt: "Our Grade 8 students brought home three medals from the regional mathematics competition, showcasing their dedication and problem-solving skills.",
      content: "We're incredibly proud to announce that our Grade 8 mathematics team has achieved outstanding results at the regional competition held last weekend. Emma Johnson secured the gold medal in the individual category, while the team event saw our students claim both silver and bronze medals. This achievement reflects months of preparation and the excellent guidance from our mathematics department.",
      author: "Principal Johnson",
      date: "2024-01-15",
      category: "Achievement",
      image: "https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 42,
      comments: 8
    },
    {
      id: 2,
      title: "Science Fair 2024: Innovation Takes Center Stage",
      excerpt: "This year's science fair theme 'Innovation for Tomorrow' inspired students to create projects addressing real-world challenges.",
      content: "Our annual science fair was a tremendous success, with over 100 projects submitted by students from all grade levels. The creativity and scientific thinking displayed were truly impressive. The winning project, a water purification system designed by Grade 7 student Marcus Chen, will be featured in the district showcase. Special thanks to our science teachers for their guidance and support.",
      author: "Dr. Wilson",
      date: "2024-01-12",
      category: "Event",
      image: "https://images.pexels.com/photos/8471780/pexels-photo-8471780.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 35,
      comments: 12
    },
    {
      id: 3,
      title: "Art Exhibition Showcases Student Creativity",
      excerpt: "The monthly art exhibition featured stunning works from our talented students, covering various mediums and techniques.",
      content: "Our art department hosted a wonderful exhibition last week, featuring works from students across all grade levels. The diversity of techniques and subjects was remarkable, from traditional watercolor landscapes to modern digital art. The exhibition was well-attended by parents and community members, with several pieces receiving recognition from local art critics. Congratulations to all participating students and Ms. Thompson for organizing such a successful event.",
      author: "Ms. Thompson",
      date: "2024-01-10",
      category: "Arts",
      image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 28,
      comments: 6
    },
    {
      id: 4,
      title: "New Library Resources Enhance Learning",
      excerpt: "We've expanded our library collection with 200 new books and digital resources to support student learning and research.",
      content: "Thanks to generous donations from our parent community and the school board's allocation, we've significantly expanded our library resources. The new collection includes both fiction and non-fiction titles, carefully selected to support our curriculum and encourage recreational reading. We've also added several digital resources and databases that will enhance our students' research capabilities. Library hours have been extended to accommodate the increased interest in these new materials.",
      author: "Ms. Davis",
      date: "2024-01-08",
      category: "Academic",
      image: "https://images.pexels.com/photos/1853001/pexels-photo-1853001.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 19,
      comments: 4
    },
    {
      id: 5,
      title: "Sports Day 2024: A Day of Team Spirit",
      excerpt: "Our annual sports day brought together students, parents, and staff for a day of friendly competition and school spirit.",
      content: "What a fantastic day we had at our annual sports day! The weather was perfect, and the energy was infectious as students participated in various track and field events. The highlight was the relay race, where Grade 8 set a new school record. Beyond the competition, it was wonderful to see the sportsmanship and team spirit displayed by all participants. Thanks to Mr. Lee and the PE department for organizing such a memorable event.",
      author: "Mr. Lee",
      date: "2024-01-05",
      category: "Sports",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      likes: 54,
      comments: 15
    }
  ];

  const categories = ["All", "Achievement", "Event", "Arts", "Academic", "Sports"];

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Achievement':
        return 'bg-yellow-100 text-yellow-800';
      case 'Event':
        return 'bg-blue-100 text-blue-800';
      case 'Arts':
        return 'bg-purple-100 text-purple-800';
      case 'Academic':
        return 'bg-green-100 text-green-800';
      case 'Sports':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">School Blog</h1>
        <p className="text-gray-600">Stay updated with the latest news, achievements, and stories from PAT Academy</p>
      </div>

      {/* Search and Categories */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {blogPosts.slice(0, 3).map(post => (
                <div key={post.id} className="flex space-x-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.slice(1).map(category => (
                <button
                  key={category}
                  className="flex items-center justify-between w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-700">{category}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {blogPosts.filter(post => post.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter to get the latest updates and stories from PAT Academy.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;