import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "eStreamly",
    description: "Live Video Commerce Platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    category: "E-commerce"
  },
  {
    title: "LookAI",
    description: "AR Clothing Try-on App",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format",
    category: "AI/AR"
  },
  {
    title: "Reach Lite",
    description: "Event & Booking Platform",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop&auto=format",
    category: "Platform"
  },
  {
    title: "Police E-Eye",
    description: "Smart Traffic Violation Monitoring",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format",
    category: "Government"
  },
  {
    title: "Yshop",
    description: "Quick Commerce & Video Shopping",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&auto=format",
    category: "E-commerce"
  },
  {
    title: "EduManage",
    description: "School Management WebApp",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&auto=format",
    category: "Education"
  }
];

export function PortfolioSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F9FA] to-white relative">
      {/* Abstract wave pattern */}
      <div className="absolute inset-0 opacity-2">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 1200 400" className="w-full h-full">
            <path 
              d="M0,100 C300,200 600,0 1200,100 L1200,400 L0,400 Z" 
              fill="currentColor" 
              className="text-gray-100"
            />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0E1E3A] mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our successful projects across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2">
                      <span className="text-xs bg-[#F2C94C] text-[#0E1E3A] px-2 py-1 rounded-full uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl mb-2 relative">
                      {project.title}
                      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#F2C94C] transition-all duration-300"></div>
                    </h3>
                    <p className="text-sm opacity-90">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}