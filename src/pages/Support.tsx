import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { ArrowLeft, HelpCircle, MessageCircle, Phone, Mail, Clock, Search, FileText, Video, BookOpen, Users } from "lucide-react";

export function Support() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEmail = () => {
    window.location.href = 'mailto:contact@evaao.com?subject=Support%20Request';
  };

  // Sample FAQ data
  const faqs = [
    {
      question: "How do I get started with Evaao services?",
      answer: "Getting started is easy! Simply contact us through our contact form or email us at contact@evaao.com. Our team will schedule a consultation to understand your needs and provide a customized solution."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, Python, AI/ML frameworks, mobile development, and cloud platforms like AWS and Azure. We stay current with the latest industry trends."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Small projects may take 4-8 weeks, while larger enterprise solutions can take 3-12 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. We also provide training and documentation to ensure your team can manage the solution effectively."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed quotes after understanding your requirements. We also offer flexible payment plans for larger projects."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We have experience working with clients worldwide. We offer remote collaboration tools and flexible communication schedules to accommodate different time zones."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <SEO 
        title="Support - Evaao Customer Service"
        description="Get help and support for Evaao services. Find answers to frequently asked questions, contact our team, and access resources."
        keywords="support, help, customer service, FAQ, contact Evaao, technical support"
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
              <HelpCircle className="text-[#F2C94C]" size={20} />
              <h1 className="text-xl font-semibold text-[#0E1E3A]">Support</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0E1E3A] via-[#1a2a4a] to-[#0E1E3A] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F2C94C]/20 px-4 py-2 rounded-full mb-6">
            <HelpCircle size={16} className="text-[#F2C94C]" />
            <span className="text-sm text-[#F2C94C] font-medium">We're Here to Help</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Our dedicated support team is here to assist you with any questions, technical issues, or service inquiries.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or contact information..."
                className="w-full pl-12 pr-4 py-4 border-0 rounded-lg text-[#0E1E3A] focus:ring-2 focus:ring-[#F2C94C] focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs and preferences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#F2C94C]/10 rounded-full flex items-center justify-center mb-6">
                <Mail size={32} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us a detailed message and we'll respond within 24 hours.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>General:</strong> contact@evaao.com</p>
                <p><strong>Technical:</strong> tech@evaao.com</p>
                <p><strong>Sales:</strong> sales@evaao.com</p>
              </div>
              <Button onClick={openEmail} className="w-full bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] transition-all duration-300">
                Send Email
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0E1E3A]/10 rounded-full flex items-center justify-center mb-6">
                <Phone size={32} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our support team during business hours.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Main:</strong> +1 (555) 123-4567</p>
                <p><strong>Hours:</strong> Mon-Fri, 9AM-6PM EST</p>
                <p><strong>Emergency:</strong> 24/7 for critical issues</p>
              </div>
              <Button className="w-full bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0E1E3A] font-semibold">
                Call Now
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#F2C94C]/10 rounded-full flex items-center justify-center mb-6">
                <MessageCircle size={32} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0E1E3A] mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Get instant answers from our support team via live chat.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p><strong>Available:</strong> Mon-Fri, 9AM-6PM EST</p>
                <p><strong>Response:</strong> Within 2 minutes</p>
                <p><strong>Languages:</strong> English, Spanish</p>
              </div>
              <Button className="w-full bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] transition-all duration-300">
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Helpful Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access documentation, guides, and resources to help you get the most out of our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <FileText size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guides and technical documentation for all our services.
              </p>
              <Button variant="outline" size="sm">
                View Docs
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <Video size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step video guides to help you understand and use our solutions.
              </p>
              <Button variant="outline" size="sm">
                Watch Videos
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Knowledge Base</h3>
              <p className="text-gray-600 mb-4">
                Searchable database of articles, tips, and troubleshooting guides.
              </p>
              <Button variant="outline" size="sm">
                Browse Articles
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Community Forum</h3>
              <p className="text-gray-600 mb-4">
                Connect with other users and share experiences in our community.
              </p>
              <Button variant="outline" size="sm">
                Join Forum
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center mb-4">
                <Clock size={24} className="text-[#F2C94C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Status Page</h3>
              <p className="text-gray-600 mb-4">
                Check the status of our services and any ongoing maintenance.
              </p>
              <Button variant="outline" size="sm">
                Check Status
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#0E1E3A]/10 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle size={24} className="text-[#0E1E3A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0E1E3A] mb-3">Training</h3>
              <p className="text-gray-600 mb-4">
                Schedule training sessions for your team to maximize our solutions.
              </p>
              <Button variant="outline" size="sm">
                Book Training
              </Button>
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E1E3A] mb-4">
              Support Tiers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support level that best fits your needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-[#0E1E3A] mb-4">Basic Support</h3>
              <div className="text-3xl font-bold text-[#F2C94C] mb-6">Free</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Email support (24-48 hour response)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Access to knowledge base
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Community forum access
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Documentation and guides
                </li>
              </ul>
              <Button className="w-full bg-gray-200 text-gray-700" disabled>
                Included
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F2C94C] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#F2C94C] text-[#0E1E3A] px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#0E1E3A] mb-4">Premium Support</h3>
              <div className="text-3xl font-bold text-[#F2C94C] mb-6">$99/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Priority email support (4-8 hour response)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Phone support during business hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Live chat support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Dedicated support manager
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F2C94C] rounded-full"></span>
                  Monthly health checks
                </li>
              </ul>
              <Button className="w-full bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0E1E3A] font-semibold">
                Get Started
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0E1E3A]">
              <h3 className="text-2xl font-bold text-[#0E1E3A] mb-4">Enterprise Support</h3>
              <div className="text-3xl font-bold text-[#0E1E3A] mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0E1E3A] rounded-full"></span>
                  24/7 phone and email support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0E1E3A] rounded-full"></span>
                  Dedicated support team
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0E1E3A] rounded-full"></span>
                  On-site support available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0E1E3A] rounded-full"></span>
                  Custom SLA agreements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0E1E3A] rounded-full"></span>
                  Priority feature requests
                </li>
              </ul>
              <Button className="w-full bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] transition-all duration-300">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#0E1E3A] to-[#1a2a4a] rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openEmail}
                className="bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#0E1E3A] font-semibold"
              >
                Contact Support
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0E1E3A]"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Call
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