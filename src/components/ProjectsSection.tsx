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
        "Payment System Architecture with secure transactions",
        "Monitoring & Analytics Infrastructure for insights",
        "Design System & UI Components for consistency"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Stripe", "Redis"],
      image: "/lovable-uploads/46d41fe7-f551-44a6-969d-eee65aefb6a5.png"
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      features: [
        "Real-time inventory management and tracking",
        "Advanced search and filtering capabilities",
        "Integrated payment gateway and order processing"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS", "Zustand", "Vercel"],
      image: "/lovable-uploads/1a20e245-2089-4b39-8299-ddd699286e32.png"
    }
  ];

  const handleProjectChange = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section id="work" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">Curated Works</h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-24 items-center"
              onMouseEnter={() => handleProjectChange(index)}
            >
              {/* Image Box */}
              <div
                className={`cursor-pointer transition-all duration-300 ${currentProject === index ? 'opacity-100' : 'opacity-50'}`}
              >
                <div className="relative rounded-2xl px-10 py-20 border-4  bg-white/10 overflow-hidden">
                  {/* Background blur image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-5"
                    />
                  </div>

                  {/* Foreground full image */}
                  <div className="relative z-10 flex justify-center">
                    <div className="rounded-lg overflow-hidden group w-full max-w-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto max-h-[42rem] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="ml-10">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="space-y-3 mb-6">
                  {project.features.map((feature, featIndex) => (
                    <div key={featIndex} className="flex items-start space-x-3">
                      <span className="text-primary text-lg">+</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="glass-effect px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
