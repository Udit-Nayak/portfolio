import { Atom, GitBranch, Github, Cloud, Container, Smartphone, Terminal, Database, Zap, Framer, Layers, Package, Diamond, Type, Wind, Server, Boxes, Rabbit, ListTree, UserCheck, Globe, Sparkle, Code2, FileCode, Mail, Network, Cpu } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const SecretSauceSection = () => {
  const skills = [
    'Python', 'TypeScript', 'JavaScript', 'C++', 'SQL',
    'Node.JS', 'Express.JS', 'FastAPI', 'Socket.io', 'REST APIs', 'Microservices',
    'Next.js', 'ReactJS', 'Tailwind CSS', 'ShadCN',
    'Scikit-learn', 'TensorFlow', 'TFLite', 'PyTorch', 'LangChain', 'N8N', 'LLMs', 'NLP',
    'PostgreSQL', 'MongoDB', 'Redis', 'Firebase',
    'Docker', 'Git', 'GitHub', 'Vercel', 'Linux',
    'Scapy','System Design', 'DSA', 'Agentic AI'
  ];

  const skillIcons: { [key: string]: React.ElementType } = {
    'Python': FileCode,
    'TypeScript': Type,
    'JavaScript': FileCode,
    'C++': Code2,
    'SQL': Database,
    'Node.JS': Server,
    'Express.JS': Zap,
    'FastAPI': Zap,
    'Socket.io': Network,
    'REST APIs': Globe,
    'Microservices': Boxes,
    'Next.js': Globe,
    'ReactJS': Atom,
    'Tailwind CSS': Wind,
    'ShadCN': Layers,
    'Scikit-learn': Cpu,
    'TensorFlow': Cpu,
    'TFLite': Cpu,
    'PyTorch': Cpu,
    'LangChain': Network,
    'N8N': Zap,
    'LLMs': Cpu,
    'NLP': FileCode,
    'PostgreSQL': Database,
    'MongoDB': Database,
    'Redis': Database,
    'Firebase': Cloud,
    'Docker': Container,
    'Git': GitBranch,
    'GitHub': Github,
    'Vercel': Cloud,
    'Linux': Terminal,
    'Scapy': Network,
    'System Design': Diamond,
    'DSA': ListTree,
    'Agentic AI': Cpu,
  };

  const stripeWordsWithText = ['PRODUCTION-READY', 'SCALABLE', 'RELIABLE', 'SECURE', 'AUTOMATED', 'DISTRIBUTED', 'REAL-TIME', 'RESILIENT'];
  const emptyWords: string[] = [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const TextStripe = ({ words, direction }: { words: string[], direction: 'left' | 'right' }) => (
    <div className="overflow-hidden py-1 sm:py-2">
      <div
        className={`flex whitespace-nowrap ${
          direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'
        }`}
        style={{
          gap: '1rem',
          paddingLeft: direction === 'right' ? '0' : '100%',
          paddingRight: direction === 'right' ? '100%' : '0',
        }}
      >
        {words.length > 0 ? (
          [...words, ...words, ...words].map((word, index) => (
            <span
              key={index}
              className="text-white text-lg sm:text-2xl md:text-4xl font-bold flex items-center gap-1 sm:gap-2 md:gap-4 px-2 sm:px-4"
            >
              {word}
              <Sparkle size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </span>
          ))
        ) : (
          [...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-white text-lg sm:text-2xl md:text-4xl font-bold flex items-center gap-1 sm:gap-2 md:gap-4 px-2 sm:px-4 opacity-0"
            >
              HIDDEN TEXT
              <Sparkle size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 opacity-0" />
            </span>
          ))
        )}
      </div>
    </div>
  );

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/Y3kdRmAP8pwbTwf3/scene.splinecode" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4"
          >
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl sm:text-5xl font-bold mb-4"
          >
            The <span className="text-gradient italic">Skills </span>Set
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4"
        >
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-4 rounded-lg border border-gray-700 bg-gray-800 text-white
                           hover:border-purple-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
              >
                {Icon && <Icon size={16} className="sm:w-5 sm:h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />}
                <span className="text-xs sm:text-sm font-medium">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Overlapping Stripes */}
      <div className="mt-16 sm:mt-24 md:mt-40 w-full transform skew-y-3 z-0 bg-gradient-to-l from-blue-500 to-blue-700 py-1 hidden sm:block">
        <div className="overflow-hidden">
          <TextStripe words={emptyWords} direction="left" />
        </div>
      </div>
      <div className="-mt-6 sm:-mt-8 md:-mt-16 w-full transform -skew-y-3 z-10 bg-gradient-to-r from-blue-600 to-blue-800 py-1 hidden sm:block">
        <div className="overflow-hidden">
          <TextStripe words={stripeWordsWithText} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default SecretSauceSection;
