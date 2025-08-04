import { Monitor, Brain, Gamepad2, BarChart3, Smartphone, ArrowRight, Zap, Globe, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const services = [
  {
    title: "Web Applications",
    description: "Modern, scalable web applications tailored to your business needs with cutting-edge technologies.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    features: ["React & Next.js", "Progressive Web Apps", "Real-time Features", "Cloud Integration"],
    gradient: "from-blue-500 to-cyan-500",
    delay: "0ms"
  },
  {
    title: "AI & LLM Models", 
    description: "Build intelligent solutions powered by AI, ML, and Large Language Models for automation.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format",
    features: ["Custom AI Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    gradient: "from-purple-500 to-pink-500",
    delay: "100ms"
  },
  {
    title: "Gaming Applications",
    description: "Immersive mobile and web games with smooth, high-performance graphics and engaging gameplay.",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&auto=format",
    features: ["Unity & Unreal Engine", "Mobile Gaming", "Web-based Games", "AR/VR Experiences"],
    gradient: "from-orange-500 to-red-500",
    delay: "200ms"
  },
  {
    title: "ERP & CRM Solutions",
    description: "Smart enterprise solutions for managing operations and clients efficiently with automation.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    features: ["Custom ERP Systems", "CRM Integration", "Business Intelligence", "Workflow Automation"],
    gradient: "from-green-500 to-emerald-500",
    delay: "300ms"
  },
  {
    title: "Mobile Applications",
    description: "iOS and Android apps designed with performance and elegance for optimal user experience.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
    features: ["Native iOS & Android", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
    gradient: "from-indigo-500 to-blue-500",
    delay: "400ms"
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#F2C94C]/20 to-[#0E1E3A]/10 rounded-3xl transform rotate-45 animate-pulse shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#0E1E3A]/15 to-[#F2C94C]/20 rounded-2xl transform -rotate-12 animate-pulse delay-1000 shadow-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-[#F2C94C]/25 to-transparent rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-[#0E1E3A]/10 to-[#F2C94C]/15 rounded-xl transform rotate-12 animate-pulse delay-3000 shadow-lg"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#0E1E3A] rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#F2C94C] rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F2C94C]/10 px-4 py-2 rounded-full mb-6">
            <Zap size={16} className="text-[#F2C94C]" />
            <span className="text-sm text-[#0E1E3A] font-medium">Our Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0E1E3A] mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to elevate your business with cutting-edge innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 bg-white/80 backdrop-blur-sm hover:bg-white"
              style={{ animationDelay: service.delay }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* 3D floating icon */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <service.icon size={24} className="text-[#0E1E3A] group-hover:text-[#F2C94C] transition-colors duration-300" />
              </div>

              <CardContent className="p-0">
                {/* Service image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E3A]/60 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs text-[#0E1E3A] font-medium uppercase tracking-wide">Premium</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl mb-4 text-[#0E1E3A] group-hover:text-[#F2C94C] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-gray-700 transform transition-all duration-300"
                        style={{ 
                          transitionDelay: `${featureIndex * 100}ms`,
                          transform: hoveredIndex === index ? 'translateX(8px)' : 'translateX(0px)'
                        }}
                      >
                        <div className="w-2 h-2 bg-[#F2C94C] rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    className="group/btn w-full justify-between text-[#0E1E3A] hover:text-[#F2C94C] hover:bg-[#F2C94C]/5 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>

              {/* 3D depth effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-black/5 pointer-events-none group-hover:from-white/30 group-hover:to-black/10 transition-all duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-[#F2C94C]" />
              <span className="text-[#0E1E3A] font-medium">Global Solutions</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-[#F2C94C]" />
              <span className="text-[#0E1E3A] font-medium">Enterprise Security</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <Button className="bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] transition-all duration-300">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}