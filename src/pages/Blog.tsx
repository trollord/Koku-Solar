import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Calendar, User, ArrowRight, FileText } from 'lucide-react';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Solar for CHSL — Maharashtra Approval Guide",
      slug: "chsl-approval-process-maharashtra",
      excerpt: "Complete guide to DISCOM approvals, MERC guidelines, net metering steps, timelines, and common delays for housing societies.",
      category: "CHSL",
      author: "Koku Solar Team",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Estimating Solar Savings for Commercial Buildings",
      slug: "commercial-solar-savings-estimation",
      excerpt: "Understanding tariff structure, demand charges, energy offset logic, and realistic ROI calculations for commercial installations.",
      category: "Commercial",
      author: "Koku Solar Team",
      date: "December 12, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Industrial Solar — What Affects Your Payback?",
      slug: "industrial-solar-payback-factors",
      excerpt: "Key factors affecting payback periods for industrial solar installations including load patterns, tariff structures, and system sizing.",
      category: "Industrial",
      author: "Koku Solar Team",
      date: "December 10, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Understanding DISCOM Net Metering",
      slug: "discom-net-metering-guide",
      excerpt: "Comprehensive guide to net metering processes, documentation requirements, and timelines across Maharashtra DISCOMs.",
      category: "Regulations",
      author: "Koku Solar Team",
      date: "December 8, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Importance of Monitoring & AMC",
      slug: "solar-monitoring-amc-importance",
      excerpt: "Why continuous monitoring and annual maintenance contracts are essential for optimal solar system performance and longevity.",
      category: "Maintenance",
      author: "Koku Solar Team",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
  ];

  const categories = ['All', 'CHSL', 'Commercial', 'Industrial', 'Regulations', 'Maintenance'];

  const getFilteredPosts = () => {
    if (activeCategory === 'All') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === activeCategory);
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="bg-white pt-16">
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-koku-dark mb-6">
              Resources & <span className="bg-gradient-to-r from-koku-orange to-yellow-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Technical insights, regulatory guidance, and practical advice for CHSL committees, commercial decision-makers, and industrial facility owners in Maharashtra.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-koku-orange to-yellow-500 text-koku-dark shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-koku-orange'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">No articles available for the selected category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-koku-orange text-koku-dark px-4 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-koku-orange transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span className="text-koku-orange font-medium">{post.readTime}</span>
                    </div>
                    <div className="flex items-center text-koku-orange font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-koku-dark to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Expert Guidance?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized advice for your solar project from our engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact#contact"
              className="bg-koku-orange text-koku-dark px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all shadow-lg"
            >
              Request Solar Assessment
            </Link>
            <Link
              to="/contact#contact"
              className="bg-transparent border-2 border-koku-orange text-koku-orange px-8 py-4 rounded-full font-semibold hover:bg-koku-orange hover:text-koku-dark transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}