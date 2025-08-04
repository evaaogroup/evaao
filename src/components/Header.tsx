import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Briefcase } from "lucide-react";
import { CareersPage } from "./CareersPage";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div 
              className="cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <div className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#0E1E3A]' : 'text-white'
              }`}>
                Evaao
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative text-base transition-colors duration-300 hover:text-[#F2C94C] group ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-300"></div>
                </button>
              ))}
              
              {/* Careers Link */}
              <button
                onClick={() => setCareersOpen(true)}
                className={`relative flex items-center gap-2 text-base transition-colors duration-300 hover:text-[#F2C94C] group ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                <Briefcase size={16} />
                Careers
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-300"></div>
              </button>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#contact')}
                className={`transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-[#0E1E3A] hover:bg-[#1a2b4d] text-white'
                    : 'bg-[#F2C94C] hover:bg-white text-[#0E1E3A] hover:text-[#0E1E3A]'
                }`}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-[#0E1E3A]' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-[#0E1E3A]' : 'text-white'} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <nav className="py-6 space-y-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg border-t border-gray-200/20">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-2 text-[#0E1E3A] hover:text-[#F2C94C] hover:bg-[#F2C94C]/5 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={() => {
                  setCareersOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left px-6 py-2 text-[#0E1E3A] hover:text-[#F2C94C] hover:bg-[#F2C94C]/5 transition-colors duration-200"
              >
                <Briefcase size={16} />
                Careers
              </button>
              
              <div className="px-6 pt-4">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-[#0E1E3A] hover:bg-[#1a2b4d] text-white"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Careers Modal */}
      <CareersPage open={careersOpen} onOpenChange={setCareersOpen} />
    </>
  );
}