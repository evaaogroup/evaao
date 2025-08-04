import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-[#0E1E3A] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Diagonal light streaks */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45"></div>
          <div className="absolute top-1/2 right-0 w-96 h-1 bg-gradient-to-r from-transparent via-[#F2C94C]/20 to-transparent transform rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -rotate-12"></div>
        </div>
        
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F2C94C]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Let's Build Your Next{" "}
            <span className="text-[#F2C94C]">Big Project</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with us for premium web, mobile, AI, and enterprise solutions.
          </p>

          {/* CTA Button Option */}
          <div className="mb-16">
            <Button 
              size="lg"
              className="bg-[#F2C94C] hover:bg-white text-[#0E1E3A] hover:text-[#0E1E3A] px-12 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project Today
            </Button>
          </div>

          {/* Optional Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl text-white mb-6">
                Or tell us about your project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-[#F2C94C] focus:ring-[#F2C94C]/20"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-[#F2C94C] focus:ring-[#F2C94C]/20"
                  />
                </div>
                
                <Textarea
                  name="project"
                  placeholder="Tell us about your project..."
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-[#F2C94C] focus:ring-[#F2C94C]/20 resize-none"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-[#F2C94C] hover:bg-white text-[#0E1E3A] hover:text-[#0E1E3A] py-3 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}