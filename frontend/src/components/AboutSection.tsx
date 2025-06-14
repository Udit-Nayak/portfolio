import { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSectionHovered, setIsSectionHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

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
    <section 
      id="about" 
      className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
    >
      {isSectionHovered && (
        <div className="hidden sm:block">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src="/lovable-uploads/object.png"
            alt="Floating object"
            className="absolute pointer-events-none z-50 w-40 sm:w-80 h-40 sm:h-80"
            style={{
              left: mousePosition.x - 85,
              top: mousePosition.y - 15,
              position: 'fixed',
              transform: 'none',
            }}
          />
        </div>
      )}
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <motion.div
            {...getMotionProps({
              initial: { opacity: 0, x: -40 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.7, ease: 'easeOut' },
              viewport: { once: true }
            })}
          >
            <motion.p
              {...getMotionProps({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.15, duration: 0.5 },
                viewport: { once: true }
              })}
              className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-2"
            >
              KNOW ABOUT ME
            </motion.p>
            <motion.h2
              {...getMotionProps({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.25, duration: 0.5 },
                viewport: { once: true }
              })}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8"
            >
              Full-Stack Developer and<br />
              a little bit of <span className="text-gradient italic">everything</span>
            </motion.h2>
            <motion.div
              {...getMotionProps({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.35, duration: 0.5 },
                viewport: { once: true }
              })}
              className="space-y-4 sm:space-y-6 text-muted-foreground"
            >
              <motion.p 
                {...getMotionProps({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.5 },
                  viewport: { once: true }
                })}
                className="text-base sm:text-lg"
              >
                I'm Udit Nayak, a proactive full-stack developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans React, Next.js, and Node.js,
                and I'm always eager to learn more.
              </motion.p>
              <motion.p 
                {...getMotionProps({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.5, duration: 0.5 },
                  viewport: { once: true }
                })}
                className="text-base sm:text-lg"
              >
                When I'm not immersed in work, I'm exploring new ideas and
                staying curious. Life's about balance, and I love embracing
                every part of it.
              </motion.p>
              <motion.p 
                {...getMotionProps({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.6, duration: 0.5 },
                  viewport: { once: true }
                })}
                className="text-base sm:text-lg"
              >
                I believe in waking up each day eager to make a difference!
              </motion.p>
            </motion.div>
            <motion.div
              {...getMotionProps({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.7, duration: 0.5 },
                viewport: { once: true }
              })}
              className="flex gap-4 sm:gap-6 mt-6 sm:mt-8"
            >
              <a href="https://www.linkedin.com/in/uditnayak/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a href="https://github.com/Udit-Nayak" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github size={24} className="sm:w-7 sm:h-7" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            {...getMotionProps({
              initial: { opacity: 0, x: 40 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.7, ease: 'easeOut' },
              viewport: { once: true }
            })}
            className="relative group mt-8 lg:mt-0"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div
              className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-12 overflow-hidden transition-all duration-500 ease-in-out
                         group-hover:shadow-2xl group-hover:scale-105
                         bg-gradient-to-br from-blue-900/50 to-purple-900/50"
            >
              <img
                src="/lovable-uploads/aboutme.png"
                alt="About me preview"
                className="w-full h-auto transition-all duration-500 ease-in-out transform group-hover:rotate-2 group-hover:scale-110"
              />
              {isImageHovered && (
                <motion.div
                  {...getMotionProps({
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.3 }
                  })}
                  className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-blue-600/30 backdrop-blur-sm flex items-center justify-center"
                />
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white opacity-80">UN</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
