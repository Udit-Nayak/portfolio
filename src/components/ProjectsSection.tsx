import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentProjectRef = useRef(currentProject);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Next Ventures",
      description: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas.",
      features: [
        "Leveraged Partial Prerendering and After for faster loading",
        "Simplified idea submission with a clean, intuitive design",
        "Enhanced browsing with seamless performance optimization"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Sanity CMS", "Auth.js"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
      links: { live: "#", github: "#" }
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      features: [
        "Real-time inventory management and tracking",
        "Advanced search and filtering capabilities",
        "Integrated payment gateway and order processing"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      links: { live: "#", github: "#" }
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Comprehensive analytics platform with AI-driven insights and real-time data visualization.",
      features: [
        "Machine learning algorithms for predictive analytics",
        "Interactive data visualization with D3.js",
        "Real-time data processing and alerts"
      ],
      technologies: ["React", "D3.js", "Python", "TensorFlow", "Redis", "PostgreSQL"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
      links: { live: "#", github: "#" }
    },
    {
      title: "Next Ventures",
      description: "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas.",
      features: [
        "Leveraged Partial Prerendering and After for faster loading",
        "Simplified idea submission with a clean, intuitive design",
        "Enhanced browsing with seamless performance optimization"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Sanity CMS", "Auth.js"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
      links: { live: "#", github: "#" }
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Comprehensive analytics platform with AI-driven insights and real-time data visualization.",
      features: [
        "Machine learning algorithms for predictive analytics",
        "Interactive data visualization with D3.js",
        "Real-time data processing and alerts"
      ],
      technologies: ["React", "D3.js", "Python", "TensorFlow", "Redis", "PostgreSQL"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
      links: { live: "#", github: "#" }
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      features: [
        "Real-time inventory management and tracking",
        "Advanced search and filtering capabilities",
        "Integrated payment gateway and order processing"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      links: { live: "#", github: "#" }
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Comprehensive analytics platform with AI-driven insights and real-time data visualization.",
      features: [
        "Machine learning algorithms for predictive analytics",
        "Interactive data visualization with D3.js",
        "Real-time data processing and alerts"
      ],
      technologies: ["React", "D3.js", "Python", "TensorFlow", "Redis", "PostgreSQL"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200",
      links: { live: "#", github: "#" }
    },
  ];

  useEffect(() => {
    currentProjectRef.current = currentProject;
  }, [currentProject]);

  const handleProjectChange = (index: number) => {
    if (index !== currentProjectRef.current) {
      setIsAnimating(true);
      setCurrentProject(index);
      setTimeout(() => setIsAnimating(false), 150);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleIndex = -1;
        let maxRatio = 0;

        entries.forEach((entry) => {
          console.log(`Entry for index ${entry.target.getAttribute('data-index')}: isIntersecting=${entry.isIntersecting}, intersectionRatio=${entry.intersectionRatio}`);
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            mostVisibleIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            maxRatio = entry.intersectionRatio;
          }
        });

        console.log('Most visible index calculated:', mostVisibleIndex, 'Current Project:', currentProjectRef.current);

        if (mostVisibleIndex !== -1 && mostVisibleIndex !== currentProjectRef.current) {
          handleProjectChange(mostVisibleIndex);
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    projectRefs.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of carefully crafted digital experiences that showcase innovation and technical excellence.
          </p>
        </div>

        <div ref={containerRef} className="relative lg:flex">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-6">
            <div className="sticky top-24 glass-effect rounded-3xl p-8">
              <h3 className="text-4xl font-bold mb-4">{projects[currentProject].title}</h3>
              <p className="text-lg text-gray-600 mb-6">{projects[currentProject].description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="list-disc ml-6 space-y-2">
                  {projects[currentProject].features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {projects[currentProject].technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Images */}
          <div
            ref={scrollContainerRef}
            className="lg:w-1/2 h-[60vh] sticky top-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-y snap-mandatory"
          >
            <div className="py-40 space-y-[20vh]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => (projectRefs.current[index] = el)}
                  data-index={index}
                  className="h-[60vh] flex items-center justify-center snap-start snap-always"
                >
                  <div className="relative w-full max-w-xl mx-auto group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`rounded-xl shadow-lg w-full h-[60vh] object-cover transition-all duration-500 ${currentProject === index ? 'scale-100 opacity-100 transform-gpu' : 'scale-95 opacity-70 transform-gpu'} group-hover:scale-105 group-hover:shadow-2xl`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

