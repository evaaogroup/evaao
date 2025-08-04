import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Target, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Projects",
  },
  {
    icon: Target,
    number: "10+",
    label: "Industries",
  },
  {
    icon: Award,
    number: "100%",
    label: "Client Satisfaction",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-white relative overflow-hidden">
      {/* 3D decorative shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#F2C94C]/10 to-[#0E1E3A]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-[#0E1E3A]/5 to-[#F2C94C]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0E1E3A] mb-6">
                About Evaao
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Evaao delivers next-generation web, mobile, and AI solutions for global businesses.
                From startups to enterprises, we create premium digital experiences that drive results.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our team combines technical expertise with creative vision to build solutions that 
                not only meet your requirements but exceed your expectations. We're passionate about 
                innovation and committed to delivering excellence in every project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#F2C94C]/10 group-hover:bg-[#F2C94C] rounded-xl flex items-center justify-center transition-all duration-300">
                    <stat.icon 
                      size={24} 
                      className="text-[#F2C94C] group-hover:text-white transition-colors duration-300" 
                    />
                  </div>
                  <div className="text-2xl md:text-3xl text-[#0E1E3A] mb-2 group-hover:text-[#F2C94C] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                alt="Premium office team"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#F2C94C] to-orange-400 rounded-2xl rotate-12 shadow-lg opacity-90"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#0E1E3A] to-blue-600 rounded-2xl -rotate-12 shadow-lg opacity-90"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}