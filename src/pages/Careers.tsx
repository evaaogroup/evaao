import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { ArrowLeft, Briefcase, Users, GraduationCap, MapPin, Clock, DollarSign, Zap, Heart, Globe } from "lucide-react";

export function Careers() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEmail = () => {
    window.location.href = 'mailto:contact@evaao.com?subject=Career%20Opportunity%20Inquiry';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO 
        title="Careers at Evaao - Join Our Team"
        description="Explore exciting career opportunities at Evaao. We're hiring talented professionals and interns to join our innovative technology team."
        keywords="careers, jobs, internships, employment, Evaao careers, technology jobs, remote work"
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
              <h1 className="text-xl font-semibold text-[#0E1E3A]">Careers</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E1E3A] via-[#1a2a4a] to-[#0E1E3A] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F2C94C]/20 px-4 py-2 rounded-full mb-6">
            <Users size={16} className="text-[#F2C94C]" />
            <span className="text-sm text-[#F2C94C] font-medium">Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Build the Future With Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Join our dynamic team of innovators, creators, and problem-solvers. We're looking for passionate individuals who want to make a difference in the world of technology.
          </p>
          <Button 
            onClick={openEmail}
            className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0E1E3A] font-semibold text-lg px-8 py-4"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Why Work With Us */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Why Work With Evaao?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we provide an environment where you can grow, innovate, and make a real impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Innovation Culture</h3>
              <p className="text-gray-600">Work with cutting-edge technologies and be part of groundbreaking projects that shape the future.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <Heart size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible working hours, remote work options, and a supportive environment that values your well-being.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Global Impact</h3>
              <p className="text-gray-600">Contribute to projects that reach millions of users worldwide and make a real difference.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Collaborative Team</h3>
              <p className="text-gray-600">Join a diverse team of experts who support each other and share knowledge freely.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Continuous Learning</h3>
              <p className="text-gray-600">Access to training programs, conferences, and resources to keep your skills sharp and current.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <DollarSign size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-3">Competitive Benefits</h3>
              <p className="text-gray-600">Comprehensive health coverage, retirement plans, and performance-based bonuses.</p>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our available positions and find the perfect role for your skills and aspirations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Full-Time Positions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-[#0E1E3A] mb-6 flex items-center gap-2">
                <Briefcase size={24} className="text-[#F2C94C]" />
                Full-Time Positions
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#F2C94C] pl-4">
                  <h4 className="text-lg font-semibold text-[#0E1E3A] mb-2">Senior Full-Stack Developer</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1"><MapPin size={14} /> Remote</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> Full-time</span>
                  </div>
                  <p className="text-gray-600 mb-3">Lead development of complex web applications using React, Node.js, and cloud technologies.</p>
                  <Button variant="outline" size="sm" onClick={openEmail}>Apply Now</Button>
                </div>
                
                <div className="border-l-4 border-[#0E1E3A] pl-4">
                  <h4 className="text-lg font-semibold text-[#0E1E3A] mb-2">AI/ML Engineer</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1"><MapPin size={14} /> Hybrid</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> Full-time</span>
                  </div>
                  <p className="text-gray-600 mb-3">Develop and deploy machine learning models for enterprise applications and AI solutions.</p>
                  <Button variant="outline" size="sm" onClick={openEmail}>Apply Now</Button>
                </div>
                
                <div className="border-l-4 border-[#F2C94C] pl-4">
                  <h4 className="text-lg font-semibold text-[#0E1E3A] mb-2">UX/UI Designer</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1"><MapPin size={14} /> Remote</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> Full-time</span>
                  </div>
                  <p className="text-gray-600 mb-3">Create intuitive and beautiful user experiences for web and mobile applications.</p>
                  <Button variant="outline" size="sm" onClick={openEmail}>Apply Now</Button>
                </div>
              </div>
            </div>
            
            {/* Internship Positions */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-[#0E1E3A] mb-6 flex items-center gap-2">
                <GraduationCap size={24} className="text-[#0E1E3A]" />
                Internship Opportunities
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#F2C94C] pl-4">
                  <h4 className="text-lg font-semibold text-[#0E1E3A] mb-2">Software Development Intern</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1"><MapPin size={14} /> Remote/Hybrid</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 3-6 months</span>
                  </div>
                  <p className="text-gray-600 mb-3">Learn modern web development technologies and contribute to real projects.</p>
                  <Button variant="outline" size="sm" onClick={openEmail}>Apply Now</Button>
                </div>
                
                <div className="border-l-4 border-[#0E1E3A] pl-4">
                  <h4 className="text-lg font-semibold text-[#0E1E3A] mb-2">AI Research Intern</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1"><MapPin size={14} /> Hybrid</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 6 months</span>
                  </div>
                  <p className="text-gray-600 mb-3">Work on cutting-edge AI projects and learn from experienced researchers.</p>
                  <Button variant="outline" size="sm" onClick={openEmail}>Apply Now</Button>
                </div>
                
                <div className="border-l-4 border-[#F2C94C] pl-4">
                  <h4 className="text-lg font-semibold text-[#0E1E3A] mb-2">Design Intern</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span className="flex items-center gap-1"><MapPin size={14} /> Remote</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 3-6 months</span>
                  </div>
                  <p className="text-gray-600 mb-3">Gain experience in user experience design and interface development.</p>
                  <Button variant="outline" size="sm" onClick={openEmail}>Apply Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
                Application Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined application process ensures a smooth experience for all candidates.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F2C94C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F2C94C]">1</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">Apply</h3>
                <p className="text-gray-600">Send your resume and cover letter to contact@evaao.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0E1E3A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0E1E3A]">2</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">Review</h3>
                <p className="text-gray-600">Our team reviews your application within 48 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F2C94C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#F2C94C]">3</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">Interview</h3>
                <p className="text-gray-600">Technical and cultural fit interviews with our team</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0E1E3A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0E1E3A]">4</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0E1E3A] mb-2">Offer</h3>
                <p className="text-gray-600">Receive your offer and join our amazing team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and exciting perks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Health & Wellness</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive health insurance</li>
                <li>• Dental and vision coverage</li>
                <li>• Mental health support</li>
                <li>• Gym membership reimbursement</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Professional Growth</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Conference and training budgets</li>
                <li>• Certification programs</li>
                <li>• Mentorship programs</li>
                <li>• Career development planning</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Work Environment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Flexible working hours</li>
                <li>• Remote work options</li>
                <li>• Modern office spaces</li>
                <li>• Team building activities</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Financial Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Competitive salaries</li>
                <li>• Performance bonuses</li>
                <li>• Stock options</li>
                <li>• 401(k) matching</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Time Off</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Unlimited PTO</li>
                <li>• Paid holidays</li>
                <li>• Parental leave</li>
                <li>• Sick leave</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Team Perks</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Free lunch and snacks</li>
                <li>• Coffee and beverages</li>
                <li>• Company events</li>
                <li>• Recognition programs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#0E1E3A] to-[#1a2a4a] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openEmail}
                className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0E1E3A] font-semibold"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0E1E3A]"
                onClick={() => window.location.href = '/company'}
              >
                Learn About Us
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