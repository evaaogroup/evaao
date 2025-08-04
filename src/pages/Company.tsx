import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { ArrowLeft, Building2, Users, Target, Award, Globe, TrendingUp, Heart, Zap } from "lucide-react";

export function Company() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO 
        title="About Evaao - Our Company Story"
        description="Discover Evaao's journey from startup to industry leader. Learn about our mission, values, team, and commitment to innovation in technology solutions."
        keywords="about Evaao, company story, mission, values, team, innovation, technology company"
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
              <Building2 className="text-[#F2C94C]" size={20} />
              <h1 className="text-xl font-semibold text-[#0E1E3A]">About Evaao</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E1E3A] via-[#1a2a4a] to-[#0E1E3A] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F2C94C]/20 px-4 py-2 rounded-full mb-6">
            <Building2 size={16} className="text-[#F2C94C]" />
            <span className="text-sm text-[#F2C94C] font-medium">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building the Future
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Evaao is a leading technology company dedicated to transforming businesses through innovative web, AI, and enterprise solutions. We believe in the power of technology to create meaningful change.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F2C94C]/10 px-4 py-2 rounded-full mb-6">
                <Target size={16} className="text-[#F2C94C]" />
                <span className="text-sm text-[#0E1E3A] font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-6">
                Empowering Innovation Through Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Evaao, we're driven by a simple yet powerful mission: to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
              </p>
              <p className="text-gray-700 mb-8">
                We believe that every organization, regardless of size, deserves access to world-class technology that can transform their operations and unlock new possibilities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#F2C94C] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#F2C94C] mb-2">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F2C94C]/10 to-[#0E1E3A]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#0E1E3A] mb-6">Our Vision</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">Technology Leadership</h4>
                    <p className="text-gray-600">To be the leading force in innovative technology solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0E1E3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">Global Impact</h4>
                    <p className="text-gray-600">Creating solutions that benefit businesses worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">Client Success</h4>
                    <p className="text-gray-600">Ensuring every client achieves their digital transformation goals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our culture of excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Innovation</h3>
              <p className="text-gray-600">We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Collaboration</h3>
              <p className="text-gray-600">We believe in the power of teamwork and foster strong partnerships with our clients.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards of quality in every project we undertake.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <Heart size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Integrity</h3>
              <p className="text-gray-600">We conduct business with honesty, transparency, and ethical practices.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Results-Driven</h3>
              <p className="text-gray-600">We focus on delivering measurable outcomes that drive business success.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Growth</h3>
              <p className="text-gray-600">We continuously learn, adapt, and evolve to stay ahead of industry trends.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, design, and business solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F2C94C] to-[#0E1E3A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-2">Leadership Team</h3>
              <p className="text-gray-600 mb-4">Experienced executives guiding our strategic direction</p>
              <div className="text-sm text-[#F2C94C] font-medium">15+ years combined experience</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0E1E3A] to-[#F2C94C] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-2">Development Team</h3>
              <p className="text-gray-600 mb-4">Skilled developers creating innovative solutions</p>
              <div className="text-sm text-[#F2C94C] font-medium">25+ developers</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F2C94C] to-[#0E1E3A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-2">Consulting Team</h3>
              <p className="text-gray-600 mb-4">Business experts providing strategic guidance</p>
              <div className="text-sm text-[#F2C94C] font-medium">10+ consultants</div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to industry leadership, here's how we've grown over the years.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">2020 - Foundation</h4>
                    <p className="text-gray-600">Evaao was founded with a vision to democratize technology solutions for businesses of all sizes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0E1E3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">2021 - Growth</h4>
                    <p className="text-gray-600">Expanded our team and launched our first AI-powered solutions, serving 50+ clients.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">2022 - Innovation</h4>
                    <p className="text-gray-600">Introduced cutting-edge gaming and mobile solutions, reaching 200+ successful projects.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0E1E3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">2023 - Expansion</h4>
                    <p className="text-gray-600">Opened new offices and launched enterprise solutions, serving Fortune 500 companies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F2C94C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">2024 - Leadership</h4>
                    <p className="text-gray-600">Became a recognized leader in AI and enterprise solutions, with 500+ projects completed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#0E1E3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0E1E3A] mb-2">2025 - Future</h4>
                    <p className="text-gray-600">Continuing to innovate and expand, with plans for global presence and advanced AI solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#0E1E3A] to-[#1a2a4a] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0E1E3A] font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0E1E3A]"
                onClick={() => window.location.href = '/careers'}
              >
                Join Our Team
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