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
      title: "ArowClick AI",
      description: "B2B back-office automation SaaS — describe a task in plain English, an AI agent executes it in a real browser with zero manual integrations.",
      features: [
        "Architecting a three-layer execution system: Next.js web app with Claude-powered step planning, a Chrome Extension (MV3), and an Electron Desktop Agent running Playwright automation end-to-end.",
        "Engineering a multi-phase Playwright execution engine with intelligent selector routing, and detection bypass — operating Gmail, Google Sheets, and more.",
        "Acquired paying clients and 20+ pre-order customers through word of mouth alone. Designed tiered pricing and owned delivery, architecture, and client relationships end-to-end."
      ],
      technologies: ["Next.js", "TypeScript", "Playwright", "Claude API", "Firebase", "Railway"],
      image: "/lovable-uploads/image.png",
      link: "https://www.arowclick.com",
      linkLabel: "Visit ArowClick AI"
    },
    {
      title: "NIDS — Network Intrusion Detection",
      description: "Real-time AI threat detection system deployed on Raspberry Pi — captures live network traffic, classifies attacks on-device, and instantly alerts.",
      features: [
        "Trained a Random Forest classifier on 2.3M network flows (CICIDS2017) achieving 99.84% accuracy and 99.82% F1-score across 15 attack classes.",
        "Quantized and deployed as a TFLite edge pipeline on Raspberry Pi: Scapy packet capture → 77-feature extraction → 11ms on-device inference.",
        "Built a FastAPI monitoring backend with real-time dashboard, and REST endpoints for continuous threat logging and attack classification on live traffic."
      ],
      technologies: ["Python", "Scikit-learn", "TensorFlow Lite", "FastAPI", "Scapy", "Raspberry Pi", "Wireshark"],
      image: "/lovable-uploads/nids.png",
      link: "https://github.com/Udit-Nayak/Network-Intrusion-Detection-System",
      linkLabel: "View on GitHub"
    },
    {
      title: "EduConnect",
      description: "AI-driven collaborative learning platform for communities — personalized feeds, semantic search, and real-time interactions built scalably.",
      features: [
        "Architected a multi-tenant AI-first backend with scalable REST APIs, ML-powered semantic search, auto-tag classification for smart content recommendations.",
        "Designed an NLP content curation pipeline combining ranking signals and personalized feed generation — context-aware AI in a production content system.",
        "Implemented low-latency real-time features via Socket.io and Redis pub/sub; load-benchmarked AI inference throughput under concurrent user sessions."
      ],
      technologies: ["Node.js", "FastAPI", "TensorFlow.js", "Socket.io", "PostgreSQL", "Redis", "MongoDB", "Firebase"],
      image: "/lovable-uploads/educonnect.png",
      link: "https://edunet-theta.vercel.app/",
      linkLabel: "View Live"
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
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            mostVisibleIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            maxRatio = entry.intersectionRatio;
          }
        });
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
    projectRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => { observer.disconnect(); };
  }, []);

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
            Production systems, real users, and problems worth solving.
          </motion.p>
        </motion.div>

        <div ref={containerRef} className="relative lg:flex">

          {/* LEFT: Text Content — sticky */}
          <div className="lg:w-3/5 lg:pr-6">
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

          {/* RIGHT: Scrollable Images + Link below each */}
          <div
            ref={scrollContainerRef}
            className="lg:w-2/5 h-[60vh] sticky top-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-y snap-mandatory"
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
                  className="h-[60vh] flex flex-col items-center justify-center snap-start snap-always gap-3"
                >
                  {/* Image */}
                  <motion.div
                    className="relative w-full max-w-xl mx-auto group"
                    whileHover={getMotionProps({
                      whileHover: { scale: 1.02 },
                      transition: { duration: 0.3 }
                    })}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`rounded-xl shadow-lg w-full h-[50vh] object-cover transition-all duration-500 ${
                        currentProject === index
                          ? 'scale-100 opacity-100 transform-gpu'
                          : 'scale-95 opacity-70 transform-gpu'
                      } group-hover:scale-105 group-hover:shadow-2xl`}
                    />
                  </motion.div>

                  {/* Link below image */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-purple-500 transition-colors duration-200 group"
                    >
                      <span>{project.linkLabel}</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  )}
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