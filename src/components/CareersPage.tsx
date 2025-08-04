import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Users, Zap } from "lucide-react";

interface CareersPageProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "5+ years",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    description: "Join our team to build cutting-edge web applications for global clients.",
  },
  {
    title: "AI/ML Engineer",
    location: "Remote",
    type: "Full-time", 
    experience: "3+ years",
    skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
    description: "Develop AI solutions and machine learning models for innovative projects.",
  },
  {
    title: "Mobile App Developer",
    location: "On-site",
    type: "Full-time",
    experience: "4+ years",
    skills: ["React Native", "iOS", "Android", "Flutter"],
    description: "Create amazing mobile experiences for iOS and Android platforms.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    description: "Design beautiful and intuitive user interfaces for web and mobile apps.",
  },
];

const benefits = [
  "Competitive salary and equity packages",
  "Remote-first culture with flexible hours",
  "Health, dental, and vision insurance",
  "Professional development budget",
  "Latest technology and equipment",
  "Collaborative team environment",
  "Opportunity to work on cutting-edge projects",
  "Annual team retreats and events",
];

export function CareersPage({ open, onOpenChange }: CareersPageProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl text-[#0E1E3A]">Join Our Team</DialogTitle>
          <p className="text-gray-600 mt-2">
            Build the future of technology with passionate innovators
          </p>
        </DialogHeader>
        
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-8">
            {/* Company Culture */}
            <section className="bg-gradient-to-br from-[#F8F9FA] to-white p-6 rounded-2xl">
              <h3 className="text-2xl text-[#0E1E3A] mb-4">Why Work at Evaao?</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Evaao, we're more than just a technology company. We're a team of passionate innovators 
                who believe in creating solutions that make a real difference. Join us in shaping the future 
                of web development, AI, and enterprise solutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#F2C94C]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0E1E3A]">Collaborative Team</h4>
                    <p className="text-sm text-gray-600">Work with talented professionals</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F2C94C]/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#F2C94C]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0E1E3A]">Innovation First</h4>
                    <p className="text-sm text-gray-600">Latest technologies and methodologies</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Job Openings */}
            <section>
              <h3 className="text-2xl text-[#0E1E3A] mb-6">Current Openings</h3>
              <div className="grid gap-6">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl text-[#0E1E3A] mb-2">{job.title}</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </div>
                            <span>Experience: {job.experience}</span>
                          </div>
                        </div>
                        <Button className="bg-[#0E1E3A] hover:bg-[#F2C94C] text-white hover:text-[#0E1E3A] mt-4 md:mt-0">
                          Apply Now
                        </Button>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-[#F2C94C]/10 text-[#0E1E3A]">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h3 className="text-2xl text-[#0E1E3A] mb-6">Benefits & Perks</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F2C94C] rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Application Process */}
            <section className="bg-[#0E1E3A] text-white p-6 rounded-2xl">
              <h3 className="text-2xl mb-4">Application Process</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-3 text-[#0E1E3A] font-bold">
                    1
                  </div>
                  <h4 className="font-medium mb-2">Apply Online</h4>
                  <p className="text-sm text-gray-300">Submit your application with portfolio</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-3 text-[#0E1E3A] font-bold">
                    2
                  </div>
                  <h4 className="font-medium mb-2">Technical Interview</h4>
                  <p className="text-sm text-gray-300">Showcase your skills and experience</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F2C94C] rounded-full flex items-center justify-center mx-auto mb-3 text-[#0E1E3A] font-bold">
                    3
                  </div>
                  <h4 className="font-medium mb-2">Join the Team</h4>
                  <p className="text-sm text-gray-300">Welcome to Evaao family!</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="text-center">
              <h3 className="text-2xl text-[#0E1E3A] mb-4">Don't See Your Role?</h3>
              <p className="text-gray-700 mb-6">
                We're always looking for talented individuals. Send us your resume and let's talk!
              </p>
              <Button className="bg-[#F2C94C] hover:bg-[#0E1E3A] text-[#0E1E3A] hover:text-white">
                Contact HR Team
              </Button>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}