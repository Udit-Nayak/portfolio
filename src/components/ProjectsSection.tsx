
import { useState } from 'react';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Next Ventures",
      description: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas.",
      features: [
        "Leveraged Partial Prerendering and After for faster loading",
        "Simplified idea submission with a clean, intuitive design",
        "Enhanced browsing with seamless performance optimization"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Sanity cms", "Auth.js", "markdown", "GROQ", "Sentry"],
      image: "/lovable-uploads/1a20e245-2089-4b39-8299-ddd699286e32.png"
    },
    {
      title: "SaaS Application",
      description: "Currently building a comprehensive SaaS application with modern architecture.",
      features: [
        "Monitoring & Analytics Infrastructure",
        "Design System & UI Consistency",
        "API Gateway & Documentation"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      image: "/lovable-uploads/46d41fe7-f551-44a6-969d-eee65aefb6a5.png"
    }
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div id="curated-works" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-16">Curated Works</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    currentProject === index ? 'opacity-100' : 'opacity-50'
                  }`}
                  onMouseEnter={() => setCurrentProject(index)}
                >
                  <div className="glass-effect rounded-2xl overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="sticky top-24">
              <div className="animate-fade-in">
                <h3 className="text-3xl font-bold mb-4">{projects[currentProject].title}</h3>
                
                <div className="space-y-3 mb-6">
                  {projects[currentProject].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-primary text-lg">+</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="glass-effect px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
