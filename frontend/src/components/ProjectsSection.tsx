import { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

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
      title: "Chat App",
      description: "Developed a real-time chat application with instant messaging, user authentication, image sharing.",
      features: [
        "Implemented Socket.io for bidirectional communication, ensuring seamless real-time updates.",
        "Secured user authentication with JWT tokens, bcrypt password hashing, and protected routes.",
        "Enhanced browsing with seamless performance optimization"
      ],
      technologies: ["Node.js", "React", "Express.js", "MongoDB", "Socket.io", "React","DaisyUI"],
      image: "/lovable-uploads/project1.png",

    },
    {
      title: "E-Commerce Platform",
      description: "Built a responsive e-commerce platform with dynamic product listings and cart functionality.",
      features: [
        "Integrated Nodemailer for email verification, password reset links, and user onboarding workflows.",
        "Implemented secure user registration and login with bcrypt password hashing and protected routes",
        "Integrated payment gateway and order processing"
      ],
      technologies: ["Next.js", "React", "TailwindCSS", "Stripe", "Wix", "Wix Headless", "Nodemailer"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",

    },
    {
      title: "Advanced MERN Authentication Landing Page",
      description: "Built a secure and scalable authentication system including JWT-based login, refresh tokens",
      features: [
        "Integrated Nodemailer for email verification, password reset links, and user onboarding workflows.",
        "Implemented secure user registration and login with bcrypt password hashing and protected routes"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "NodeMailer",],
      image: "/lovable-uploads/project3.png",

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

  // Helper function to conditionally apply motion props based on screen size
  const getMotionProps = (defaultProps: any) => {
    return {
      ...defaultProps,
      initial: window.innerWidth >= 640 ? defaultProps.initial : { opacity: 1, y: 0, x: 0, scale: 1 },
      whileInView: window.innerWidth >= 640 ? defaultProps.whileInView : { opacity: 1, y: 0, x: 0, scale: 1 },
      whileHover: window.innerWidth >= 640 ? defaultProps.whileHover : undefined,
      transition: window.innerWidth >= 640 ? defaultProps.transition : { duration: 0 }
    };
  };

  return (
    <section ref={sectionRef} id="work" className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A collection of carefully crafted digital experiences that showcase innovation and technical excellence.
          </motion.p>
        </motion.div>

        <div ref={containerRef} className="relative lg:flex">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-6">
            <motion.div 
              {...getMotionProps({
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6, ease: 'easeOut' }
              })}
              className="sticky top-24 glass-effect rounded-3xl p-8"
            >
              <motion.h3 
                {...getMotionProps({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.2, duration: 0.5 }
                })}
                className="text-4xl font-bold mb-4 text-gradient"
              >
                {projects[currentProject].title}
              </motion.h3>
              <motion.p 
                {...getMotionProps({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.3, duration: 0.5 }
                })}
                className="text-lg text-gray-600 mb-6"
              >
                {projects[currentProject].description}
              </motion.p>
              <motion.div 
                {...getMotionProps({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.5 }
                })}
                className="mb-6"
              >
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="list-disc ml-6 space-y-2">
                  {projects[currentProject].features.map((feat, idx) => (
                    <motion.li 
                      key={idx}
                      {...getMotionProps({
                        initial: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { delay: 0.5 + idx * 0.1, duration: 0.5 }
                      })}
                    >
                      {feat}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                {...getMotionProps({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.6, duration: 0.5 }
                })}
                className="flex flex-wrap gap-2"
              >
                {projects[currentProject].technologies.map((tech, i) => (
                  <motion.span 
                    key={i}
                    {...getMotionProps({
                      initial: { opacity: 0, scale: 0.8 },
                      whileInView: { opacity: 1, scale: 1 },
                      transition: { delay: 0.7 + i * 0.1, duration: 0.5 }
                    })}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scrollable Images */}
          <div
            ref={scrollContainerRef}
            className="lg:w-1/2 h-[60vh] sticky top-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-y snap-mandatory"
          >
            <div className="py-40 space-y-[20vh]">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  ref={(el) => (projectRefs.current[index] = el)}
                  data-index={index}
                  {...getMotionProps({
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, ease: 'easeOut' }
                  })}
                  className="h-[60vh] flex items-center justify-center snap-start snap-always"
                >
                  <motion.div 
                    className="relative w-full max-w-xl mx-auto group"
                    whileHover={getMotionProps({
                      whileHover: { scale: 1.02 },
                      transition: { duration: 0.3 }
                    })}
                    transition={getMotionProps({
                      transition: { duration: 0.3 }
                    })}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`rounded-xl shadow-lg w-full h-[60vh] object-cover transition-all duration-500 ${currentProject === index ? 'scale-100 opacity-100 transform-gpu' : 'scale-95 opacity-70 transform-gpu'} group-hover:scale-105 group-hover:shadow-2xl`}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

