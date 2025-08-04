import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { ArrowLeft, BookOpen, Calendar, User, Tag, Search, Filter } from "lucide-react";

export function Blog() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Applications",
      excerpt: "Explore how artificial intelligence is transforming business operations and creating new opportunities for innovation.",
      author: "Sarah Johnson",
      date: "January 15, 2025",
      category: "AI & Technology",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Learn the best practices for developing robust and scalable web applications using React, Node.js, and cloud technologies.",
      author: "Michael Chen",
      date: "January 12, 2025",
      category: "Web Development",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Mobile App Development Trends for 2025",
      excerpt: "Discover the latest trends in mobile app development and how they're shaping the future of user experience.",
      author: "Emily Rodriguez",
      date: "January 10, 2025",
      category: "Mobile Development",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Gaming Industry Revolution: The Rise of Web-Based Games",
      excerpt: "How web technologies are revolutionizing the gaming industry and creating new opportunities for developers.",
      author: "David Kim",
      date: "January 8, 2025",
      category: "Gaming",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 5,
      title: "ERP Systems: Streamlining Business Operations",
      excerpt: "Understanding how Enterprise Resource Planning systems can transform your business efficiency and productivity.",
      author: "Lisa Wang",
      date: "January 5, 2025",
      category: "Enterprise Solutions",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 6,
      title: "The Impact of Machine Learning on Customer Experience",
      excerpt: "How ML algorithms are personalizing customer experiences and driving business growth across industries.",
      author: "Alex Thompson",
      date: "January 3, 2025",
      category: "AI & Technology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&auto=format"
    }
  ];

  const categories = ["All", "AI & Technology", "Web Development", "Mobile Development", "Gaming", "Enterprise Solutions"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO 
        title="Blog - Evaao Insights & Technology News"
        description="Stay updated with the latest insights, trends, and innovations in technology. Read expert articles on AI, web development, mobile apps, and more."
        keywords="blog, technology news, AI insights, web development, mobile apps, gaming, enterprise solutions"
      />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <BookOpen className="text-[#F2C94C]" size={20} />
              <h1 className="text-xl font-semibold text-[#0E1E3A]">Blog</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E1E3A] via-[#1a2a4a] to-[#0E1E3A] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F2C94C]/20 px-4 py-2 rounded-full mb-6">
            <BookOpen size={16} className="text-[#F2C94C]" />
            <span className="text-sm text-[#F2C94C] font-medium">Insights & News</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technology Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and innovative solutions from our technology experts.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2C94C] focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-600" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#F2C94C] focus:border-transparent">
                <option value="">All Categories</option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F2C94C] text-[#0E1E3A] px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen size={14} />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0E1E3A] mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <Button className="bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] transition-all duration-300">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F2C94C] text-[#0E1E3A] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#0E1E3A] to-[#1a2a4a] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest technology insights and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-[#0E1E3A] focus:ring-2 focus:ring-[#F2C94C] focus:outline-none"
              />
              <Button className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0E1E3A] font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find articles that match your interests and expertise areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Tag size={24} className="text-[#F2C94C]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">{category}</h3>
                <p className="text-gray-600 text-sm">
                  {blogPosts.filter(post => post.category === category).length} articles
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Tags */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#0E1E3A] mb-4">Popular Tags</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {["React", "AI", "Machine Learning", "Web Development", "Mobile Apps", "Gaming", "Cloud Computing", "UI/UX", "JavaScript", "Python"].map((tag) => (
              <span key={tag} className="bg-gray-100 hover:bg-[#F2C94C] text-gray-700 hover:text-[#0E1E3A] px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Contribute to Our Blog
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have insights to share? We welcome guest contributions from technology experts and industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] transition-all duration-300"
                onClick={() => window.location.href = 'mailto:blog@evaao.com?subject=Guest%20Blog%20Submission'}
              >
                Submit Article
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <Button 
          onClick={scrollToTop}
          className="bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] rounded-full w-12 h-12 p-0 shadow-lg"
        >
          ↑
        </Button>
      </div>
    </div>
  );
} 