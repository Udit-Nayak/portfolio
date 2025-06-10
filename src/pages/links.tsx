import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';
import BookCallCard from '@/components/BookCallCard';
import { motion } from 'framer-motion';

const profile = {
  name: 'Udit Nayak',
  avatar: '/lovable-uploads/IMG_20250610_131910.png',
  badges: [
    { label: 'Developer', color: 'bg-blue-700' },
    { label: 'Freelancer', color: 'bg-green-700' },
    { label: 'Problem Solver', color: 'bg-purple-700' },
  ],
  website: '',
  email: 'uditnayak1611@gmail.com',
};

const links = [
  { icon: '🔗', label: 'LinkedIn', url: 'https://www.linkedin.com/in/uditnayak/' },
  { icon: '🐱', label: 'GitHub', url: 'https://github.com/Udit-Nayak' },
  { icon: '📸', label: 'Instagram', url: 'https://www.instagram.com/udiiit.t?igsh=MTVvbnl4eHZ2aXV5dA==' },

  { icon: '✈️', label: 'Telegram', url: 'https://telegram.me/uditnayak16' },
];


const Links = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isBookCallCardOpen, setIsBookCallCardOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <Navigation onBookCall={() => setIsBookCallOpen(true)} />
      <motion.div 
        className="w-full max-w-2xl flex flex-col items-center mt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* <img src={profile.avatar} alt="Profile" className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-4" /> */}
        <motion.h1 
          className="text-6xl font-bold mb-10"
          variants={itemVariants}
        >
          {profile.name}
        </motion.h1>
        <motion.div 
          className="flex gap-2 mb-4"
          variants={itemVariants}
        >
          {profile.badges.map((badge, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-lg font-semibold ${badge.color} bg-opacity-80`}>{badge.label}</span>
          ))}
        </motion.div>
        <motion.div 
          className="flex gap-2 mb-6"
          variants={itemVariants}
        >
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition">
            Website <span aria-hidden>↗</span>
          </a>
          <a href={`mailto:${profile.email}`} className="bg-gray-700 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-600 transition">
            {profile.email} <span aria-hidden>↗</span>
          </a>
        </motion.div>
        <motion.div 
          className="w-full flex flex-col gap-4 mt-2"
          variants={containerVariants}
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#181818] rounded-xl px-6 py-4 text-lg font-medium hover:bg-[#232323] transition border border-[#232323]"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <ContactSection onBookCall={() => setIsBookCallOpen(true)} />
      <Footer />
      <BookCallModal 
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
      <BookCallCard
        isOpen={isBookCallCardOpen}
        onClose={() => setIsBookCallCardOpen(false)}
        onBookCall={() => {
          setIsBookCallCardOpen(false);
          setIsBookCallOpen(true);
        }}
      />
    </div>
  );
};

export default Links; 