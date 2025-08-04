import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { ArrowLeft, Briefcase, Users, Award, Star, Calendar } from "lucide-react";

export function CaseStudies() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sample case studies data
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      client: "TechRetail Inc.",
      industry: "E-Commerce",
      duration: "6 months",
      results: {
        revenue: "+150%",
        users: "+200%",
        performance: "+300%"
      },
      description: "Complete overhaul of an outdated e-commerce platform, implementing modern React architecture and AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Node.js", "AI/ML", "AWS"],
      challenge: "Legacy system causing 40% cart abandonment and poor user experience",
      solution: "Modern React SPA with AI-powered product recommendations and optimized checkout flow",
      outcome: "150% revenue increase, 200% more users, 300% performance improvement"
    },
    {
      id: 2,
      title: "AI-Powered Customer Service Platform",
      client: "GlobalBank",
      industry: "Financial Services",
      duration: "8 months",
      results: {
        efficiency: "+180%",
        satisfaction: "+95%",
        cost: "-60%"
      },
      description: "Developed an intelligent customer service platform using natural language processing and machine learning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      technologies: ["Python", "TensorFlow", "React", "Docker"],
      challenge: "High customer service costs and long response times affecting customer satisfaction",
      solution: "AI-powered chatbot with human fallback and intelligent routing system",
      outcome: "180% efficiency increase, 95% customer satisfaction, 60% cost reduction"
    },
    {
      id: 3,
      title: "Mobile Gaming Application",
      client: "GameStudio Pro",
      industry: "Gaming",
      duration: "12 months",
      results: {
        downloads: "+500%",
        retention: "+80%",
        revenue: "+300%"
      },
      description: "Created a cross-platform mobile game with real-time multiplayer capabilities and advanced graphics.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&auto=format",
      technologies: ["Unity", "C#", "Firebase", "AWS"],
      challenge: "Need for cross-platform gaming solution with real-time multiplayer features",
      solution: "Unity-based mobile game with cloud backend and real-time synchronization",
      outcome: "500% more downloads, 80% retention rate, 300% revenue increase"
    },
    {
      id: 4,
      title: "Enterprise ERP System",
      client: "ManufactureCorp",
      industry: "Manufacturing",
      duration: "10 months",
      results: {
        productivity: "+120%",
        accuracy: "+95%",
        time: "-50%"
      },
      description: "Custom ERP system designed to streamline manufacturing operations and improve supply chain management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
      challenge: "Inefficient manual processes causing delays and errors in manufacturing operations",
      solution: "Comprehensive ERP system with automated workflows and real-time analytics",
      outcome: "120% productivity increase, 95% accuracy improvement, 50% time reduction"
    },
    {
      id: 5,
      title: "Healthcare Management Platform",
      client: "MediCare Plus",
      industry: "Healthcare",
      duration: "9 months",
      results: {
        efficiency: "+140%",
        accuracy: "+98%",
        satisfaction: "+90%"
      },
      description: "Comprehensive healthcare management system with patient records, appointment scheduling, and billing integration.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Node.js", "MongoDB", "HIPAA"],
      challenge: "Paper-based system causing inefficiencies and potential errors in patient care",
      solution: "Digital healthcare platform with secure patient data management and automated workflows",
      outcome: "140% efficiency increase, 98% accuracy, 90% staff satisfaction"
    },
    {
      id: 6,
      title: "Real Estate Management System",
      client: "PropertyMax",
      industry: "Real Estate",
      duration: "7 months",
      results: {
        sales: "+200%",
        efficiency: "+160%",
        leads: "+300%"
      },
      description: "Modern property management platform with virtual tours, CRM integration, and automated marketing.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&auto=format",
      technologies: ["React", "Node.js", "3D Graphics", "CRM"],
      challenge: "Traditional property management methods limiting reach and efficiency",
      solution: "Digital platform with virtual tours, automated lead management, and CRM integration",
      outcome: "200% sales increase, 160% efficiency improvement, 300% more qualified leads"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO 
        title="Case Studies - Evaao Success Stories"
        description="Explore real-world success stories and transformative solutions we've delivered for clients across industries."
        keywords="case studies, success stories, client projects, technology solutions, Evaao projects"
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
              <Briefcase className="text-[#F2C94C]" size={20} />
              <h1 className="text-xl font-semibold text-[#0E1E3A]">Case Studies</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E1E3A] via-[#1a2a4a] to-[#0E1E3A] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F2C94C]/20 px-4 py-2 rounded-full mb-6">
            <Award size={16} className="text-[#F2C94C]" />
            <span className="text-sm text-[#F2C94C] font-medium">Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real Results, Real Impact
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed businesses across industries with innovative technology solutions that drive measurable results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#F2C94C] mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#F2C94C] mb-2">50+</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-2">200%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Case Studies Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore detailed case studies showcasing our expertise across different industries and technologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <article key={study.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#F2C94C] text-[#0E1E3A] px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      {study.client}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0E1E3A] mb-4">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-[#F2C94C]">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="bg-[#0E1E3A]/10 text-[#0E1E3A] px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] transition-all duration-300">
                    View Full Case Study
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
                Our Success Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology that ensures successful project delivery and exceptional results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F2C94C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F2C94C]">1</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">Discovery</h3>
                <p className="text-gray-600">Deep analysis of requirements, challenges, and business objectives</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0E1E3A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0E1E3A]">2</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">Strategy</h3>
                <p className="text-gray-600">Custom solution design and technology architecture planning</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F2C94C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F2C94C]">3</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">Development</h3>
                <p className="text-gray-600">Agile development with regular client collaboration and feedback</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0E1E3A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0E1E3A]">4</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">Launch</h3>
                <p className="text-gray-600">Deployment, training, and ongoing support for optimal results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have extensive experience across diverse industries, delivering tailored solutions for unique business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "E-Commerce", icon: "🛒", count: "25+ projects" },
              { name: "Healthcare", icon: "🏥", count: "15+ projects" },
              { name: "Financial Services", icon: "🏦", count: "20+ projects" },
              { name: "Manufacturing", icon: "🏭", count: "18+ projects" },
              { name: "Real Estate", icon: "🏠", count: "12+ projects" },
              { name: "Gaming", icon: "🎮", count: "10+ projects" }
            ].map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the clients who've experienced our transformative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#F2C94C] fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Evaao transformed our outdated e-commerce platform into a modern, high-performing solution that increased our revenue by 150%."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F2C94C] rounded-full flex items-center justify-center text-white font-semibold">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-[#0E1E3A]">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CEO, TechRetail Inc.</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#F2C94C] fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The AI-powered customer service platform reduced our support costs by 60% while improving customer satisfaction to 95%."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0E1E3A] rounded-full flex items-center justify-center text-white font-semibold">
                  MC
                </div>
                <div>
                  <div className="font-semibold text-[#0E1E3A]">Michael Chen</div>
                  <div className="text-sm text-gray-600">CTO, GlobalBank</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#F2C94C] fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Our mobile game achieved 500% more downloads and 80% retention rate thanks to Evaao's innovative development approach."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F2C94C] rounded-full flex items-center justify-center text-white font-semibold">
                  DK
                </div>
                <div>
                  <div className="font-semibold text-[#0E1E3A]">David Kim</div>
                  <div className="text-sm text-gray-600">Founder, GameStudio Pro</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#0E1E3A] to-[#1a2a4a] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with innovative technology solutions that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0E1E3A] font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0E1E3A]"
                onClick={() => window.location.href = '/services'}
              >
                View Services
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