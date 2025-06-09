import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';
import BookCallCard from '@/components/BookCallCard';

const profile = {
  name: 'Udit Nayak',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <Navigation onBookCall={() => setIsBookCallOpen(true)} />
      <div className="w-full max-w-2xl flex flex-col items-center mt-20">
        <img src={profile.avatar} alt="Profile" className="w-28 h-28 rounded-full border-4 border-white shadow-lg mb-4" />
        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
        <div className="flex gap-2 mb-4">
          {profile.badges.map((badge, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color} bg-opacity-80`}>{badge.label}</span>
          ))}
        </div>
        <div className="flex gap-2 mb-6">
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition">
            Website <span aria-hidden>↗</span>
          </a>
          <a href={`mailto:${profile.email}`} className="bg-gray-700 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-600 transition">
            {profile.email} <span aria-hidden>↗</span>
          </a>
        </div>
        <div className="w-full flex flex-col gap-4 mt-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#181818] rounded-xl px-6 py-4 text-lg font-medium hover:bg-[#232323] transition border border-[#232323]"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
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