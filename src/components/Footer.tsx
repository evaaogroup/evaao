import { Linkedin, Github, Dribbble, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200/50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-3xl text-[#0E1E3A] mb-4">
                Evaao
              </div>
              <p className="text-gray-600 leading-relaxed">
                Delivering next-generation web, mobile, and AI solutions for global businesses.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md text-gray-600 hover:text-[#F2C94C] hover:bg-[#F2C94C]/10 transition-all duration-200 transform hover:scale-110"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg text-[#0E1E3A] mb-4">Navigation</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-600 hover:text-[#0E1E3A] transition-colors duration-200 relative group text-left"
                  >
                    {link.label}
                    <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-200"></div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg text-[#0E1E3A] mb-4">Services</h4>
              <nav className="space-y-3">
                <div className="text-gray-600">Web Applications</div>
                <div className="text-gray-600">AI & LLM Models</div>
                <div className="text-gray-600">Mobile Apps</div>
                <div className="text-gray-600">Gaming Solutions</div>
                <div className="text-gray-600">ERP & CRM</div>
              </nav>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg text-[#0E1E3A] mb-4">Company</h4>
              <nav className="space-y-3">
                <Link
                  to="/careers"
                  className="block text-gray-600 hover:text-[#0E1E3A] transition-colors duration-200 relative group text-left"
                >
                  Careers
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-200"></div>
                </Link>
                <Link
                  to="/blog"
                  className="block text-gray-600 hover:text-[#0E1E3A] transition-colors duration-200 relative group text-left"
                >
                  Blog
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-200"></div>
                </Link>
                <Link
                  to="/case-studies"
                  className="block text-gray-600 hover:text-[#0E1E3A] transition-colors duration-200 relative group text-left"
                >
                  Case Studies
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-200"></div>
                </Link>
                <Link
                  to="/support"
                  className="block text-gray-600 hover:text-[#0E1E3A] transition-colors duration-200 relative group text-left"
                >
                  Support
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-200"></div>
                </Link>
                <Link
                  to="/company"
                  className="block text-gray-600 hover:text-[#0E1E3A] transition-colors duration-200 relative group text-left"
                >
                  About Us
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-200"></div>
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-gray-200/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 Evaao. All rights reserved.
              </p>
              
              <div className="flex gap-6 text-sm">
                <Link
                  to="/privacy-policy"
                  className="text-gray-500 hover:text-[#0E1E3A] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-gray-500 hover:text-[#0E1E3A] transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookie-policy"
                  className="text-gray-500 hover:text-[#0E1E3A] transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}