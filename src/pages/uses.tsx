import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';
import { motion } from 'framer-motion';

const tools = [
  { name: 'VSCode', icon: 'https://code.visualstudio.com/assets/images/code-stable.png' },
  { name: 'Notion', icon: 'https://www.notion.so/images/favicon.ico' },
  { name: 'Spotify', icon: 'https://www.scdn.co/i/_global/open-graph-default.png' },
  { name: 'Spline', icon: '/lovable-uploads/images32.png' },
  { name: 'PostManAPI', icon: '/lovable-uploads/download.png' },
  { name: 'PostGresSQL', icon: 'https://www.postgresql.org/favicon.ico' },
  { name: 'MongoDB', icon: 'https://www.mongodb.com/assets/images/global/favicon.ico' },
  { name: 'Node.js', icon: '/lovable-uploads/images.png' },
  { name: 'Express.js', icon: 'https://expressjs.com/images/favicon.png' },
  { name: 'React.js', icon: 'https://react.dev/favicon.ico' },
  { name: 'TailwindCSS', icon: 'https://tailwindcss.com/favicon.ico' },
  { name: 'Cursor', icon: 'https://cursor.sh/favicon.ico' },
];

const Uses = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4">
      <Navigation onBookCall={() => setIsBookCallOpen(true)} />
      <motion.div 
        className="w-full max-w-6xl flex flex-col items-center mt-32 mb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="text-sm text-gray-400 mb-2 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            MY SETUP
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text italic mr-2">Tools</span>
            I Use Daily
          </motion.h2>
        </motion.div>
        <motion.div 
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 w-full"
          variants={containerVariants}
        >
          {tools.map((tool, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="rounded-2xl bg-[#181818] border border-[#232323] shadow-lg flex items-center justify-center mb-2 transition-all duration-300 ring-0 hover:ring-2 hover:ring-[#7b7bff] hover:ring-offset-2 hover:ring-offset-black hover:-translate-y-2" 
                style={{ width: 90, height: 90 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-12 h-12 object-contain"
                  style={{ 
                    filter: tool.name === 'PostManAPI' ? 'none' : 'none',
                    backgroundColor: tool.name === 'Spline' ? 'white' : 'transparent',
                    borderRadius: tool.name === 'Spline' ? '8px' : '0',
                    padding: tool.name === 'Spline' ? '8px' : '0',
                    width: tool.name === 'Spline' ? '40px' : '48px',
                    height: tool.name === 'Spline' ? '40px' : '48px',
                    objectFit: tool.name === 'PostManAPI' ? 'cover' : 'contain'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.span 
                className="text-gray-300 text-sm mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {tool.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <ContactSection onBookCall={() => setIsBookCallOpen(true)} />
      <Footer />
      <BookCallModal 
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </div>
  );
};

export default Uses; 