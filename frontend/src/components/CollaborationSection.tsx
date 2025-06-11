import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface CollaborationSectionProps {
  onBookCall: () => void;
}

const CollaborationSection = ({ onBookCall }: CollaborationSectionProps) => {
  const [isCollabHovered, setIsCollabHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const skills1 = [
    'INTERACTIVE', 'SECURE', 'RELIABLE', 'ENGAGING', 'ACCESSIBLE', 'RESPONSIVE', 'DYNAMIC', 'SCALABLE'];
  const skills2 = [
    'ReactJS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN', 'Node.JS', 'Express.JS', 'PostgreSQL', 'MongoDB'];
  const skills3 = [
    'MongoDB', 'PostgreSQL', 'BootStrap', 'Javascript', 'MySQL', 'Socket.io', 'Git', 'GitHub', 'Vercel'];

  const SkillStripe = ({ skills, direction = 'right' }: { skills: string[], direction?: 'left' | 'right' }) => (
    <div className="overflow-hidden py-2 sm:py-4">
      <div className={`flex space-x-4 sm:space-x-8 whitespace-nowrap ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}>
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div 
            key={index}
            className="px-4 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium glass-effect"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto px-2 sm:px-4 lg:px-8 max-w-[95%]">
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-12 items-start mb-8 sm:mb-16">
          {/* LEFT SIDE */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-12 w-full">
            {/* 🌟 Animated Collaboration Card */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsCollabHovered(true)}
              onMouseLeave={() => setIsCollabHovered(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-12 md:p-20 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl backdrop-blur-xl border border-white/10"
              >
                <div className="relative z-10">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-10"
                  >
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 shadow-lg shadow-purple-800/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img 
                          src="/lovable-uploads/IMG_20250610_131910.png" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-xl sm:text-2xl font-extrabold mb-1 text-white text-gradient"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        Let's Collaborate
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground text-xs sm:text-sm max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        Open communication, creative results.
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <motion.p
                      className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      Great things are built together.
                    </motion.p>
                    <motion.p
                      className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      Whether it's solving complex problems,
                      crafting full-stack apps, or thriving in national tech contests —
                      I love working with passionate people on meaningful products.
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>

              {isCollabHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-auto"
                  >
                    <Button 
                      onClick={onBookCall}
                      className="text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 glow-effect animate-scale-in"
                    >
                      Book a Call
                    </Button>
                  </motion.div>
                </div>
              )}
            </div>

            {/* 📧 Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px 0 rgba(124,58,237,0.25)' }}
              className="relative glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-12 md:p-20 overflow-hidden group cursor-pointer transition-all duration-300"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
            >
              <motion.div
                className="flex items-center space-x-4 sm:space-x-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.div
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg sm:text-2xl shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  UN
                </motion.div>
                <div>
                  <motion.h4
                    className="text-base sm:text-lg font-bold mb-1 text-white"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    Email Me
                  </motion.h4>
                  <motion.p
                    className="text-muted-foreground text-xs sm:text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    Let's connect and build something great.
                  </motion.p>
                  <motion.a
                    href="mailto:uditnayak1611@gmail.com"
                    className="block mt-2 sm:mt-3 text-sm sm:text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent select-all"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    uditnayak1611@gmail.com
                  </motion.a>
                </div>
              </motion.div>
              <div className={`absolute inset-0 pointer-events-none transition-all duration-300 rounded-xl sm:rounded-2xl ${isEmailHovered ? 'glow-effect' : ''}`}></div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="glass-effect rounded-xl sm:rounded-2xl p-0 relative overflow-hidden"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-right mb-4 sm:mb-6 p-2"
              >
                <h2 className="p-2 text-xl sm:text-2xl lg:text-3xl font-bold">
                  Passionate about <span className="text-gradient">cutting-edge technologies</span>
                </h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="grid grid-cols-1 gap-2 sm:gap-3 mb-4"
              >
                <SkillStripe skills={skills1} direction="right" />
                <SkillStripe skills={skills2} direction="left" />
                <SkillStripe skills={skills3} direction="right" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="glass-effect rounded-lg sm:rounded-xl p-3 sm:p-4 bg-gradient-to-br from-purple-600/10 to-blue-600/10 mt-6 sm:mt-8 mx-4 sm:mx-6 mb-4 sm:mb-6"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center justify-between mb-3 sm:mb-4"
                >
                  <div className="flex space-x-1.5 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* SaaS Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass-effect rounded-2xl p-12 w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">
            {/* Left: SaaS Info */}
            <div>
              <motion.div className="flex items-center space-x-4 mb-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <motion.div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <span className="text-2xl">📱</span>
                </motion.div>
                <div>
                  <motion.p className="text-sm text-muted-foreground" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>The Inside Scoop</motion.p>
                  <motion.h3 className="text-2xl font-bold" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>Currently building a HealthCare Application</motion.h3>
                </div>
              </motion.div>

              <motion.div
                className="grid gap-4 text-sm w-full"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
              >
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <h4 className="font-semibold mb-2">Symptom Checker</h4>
                  <p className="text-muted-foreground">Architecture</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                  <h4 className="font-semibold mb-2">Lab Report Interpretation</h4>
                  <p className="text-muted-foreground">Using AI</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
                  <h4 className="font-semibold mb-2">Appointment Booking</h4>
                  <p className="text-muted-foreground">Integration</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                  <h4 className="font-semibold mb-2">Test Analysis</h4>
                  <p className="text-muted-foreground">Components</p>
                </motion.div>
                
              </motion.div>
            </div>
            {/* Right: Placeholder Image */}
            <div className="flex justify-center items-center w-full h-full group">
              <img 
                src="/lovable-uploads/image.png" 
                alt="Placeholder" 
                className="rounded-xl object-cover max-w-full max-h-48 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/30"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CollaborationSection;
