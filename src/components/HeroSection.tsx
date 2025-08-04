import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#F8F9FA] to-white overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-100/20 to-transparent rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#F2C94C]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#0E1E3A]/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#F2C94C]/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0E1E3A] leading-tight">
              Innovative Web, AI &{" "}
              <span className="text-[#F2C94C]">Enterprise</span> Solutions.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              We craft cutting-edge Web Apps, AI & LLM models, Gaming, ERP, and Mobile solutions with a premium touch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#contact')}
                className="bg-[#0E1E3A] hover:bg-[#1a2b4d] text-white px-8 py-4 text-base transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
                className="border-[#F2C94C] text-[#F2C94C] hover:bg-[#F2C94C] hover:text-[#0E1E3A] px-8 py-4 text-base transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right content - Floating mockups */}
          <div className="relative">
            <div className="relative z-10 transform">
              {/* MacBook mockup */}
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="bg-gray-900 rounded-lg p-2 shadow-2xl">
                  <div className="bg-white rounded h-48 md:h-64 flex items-center justify-center">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format"
                      alt="CRM Dashboard"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              {/* iPhone mockup */}
              <div className="absolute -bottom-8 -left-12 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <div className="bg-gray-900 rounded-xl p-1 shadow-xl w-24 md:w-32">
                  <div className="bg-white rounded-lg h-32 md:h-40 flex items-center justify-center">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=300&fit=crop&auto=format"
                      alt="AI-powered app"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Gaming preview */}
              <div className="absolute -top-8 -right-8 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="bg-gradient-to-br from-[#F2C94C] to-orange-400 rounded-lg p-3 shadow-lg w-24 md:w-32 h-24 md:h-32 flex items-center justify-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=200&fit=crop&auto=format"
                    alt="Gaming app preview"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}