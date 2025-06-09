import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';

const tools = [
  { name: 'Raycast', icon: 'https://raycast.com/static/favicon/favicon-512x512.png' },
  { name: 'Arc', icon: 'https://arc.net/favicon.ico' },
  { name: 'VSCode', icon: 'https://code.visualstudio.com/assets/images/code-stable.png' },
  { name: 'Obsidian', icon: 'https://publish.obsidian.md/icons/icon-512.png' },
  { name: 'Notion', icon: 'https://www.notion.so/images/favicon.ico' },
  { name: 'mymind', icon: 'https://mymind.com/favicon.ico' },
  { name: 'Tana', icon: 'https://tana.inc/favicon.ico' },
  { name: 'Spotify', icon: 'https://www.scdn.co/i/_global/open-graph-default.png' },
  { name: 'Figma', icon: 'https://static.figma.com/app/icon/1/favicon.png' },
  { name: 'Things 3', icon: 'https://culturedcode.com/things/images/favicon/favicon-32.png' },
  { name: 'Fantastical', icon: 'https://flexibits.com/favicon.ico' },
  { name: '1Password', icon: 'https://1password.com/img/icons/apple-touch-icon.png' },
  { name: 'Framer', icon: 'https://framerusercontent.com/images/favicon.png' },
  { name: 'Cleanshot X', icon: 'https://cleanshot.com/favicon.ico' },
  { name: 'PixelSnap 2', icon: 'https://getpixelsnap.com/favicon.ico' },
  { name: 'Linear', icon: 'https://linear.app/favicon-32x32.png' },
];

const Uses = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4">
      <Navigation onBookCall={() => setIsBookCallOpen(true)} />
      <div className="w-full max-w-6xl flex flex-col items-center mt-24 mb-16">
        <div className="text-center mb-8">
          <div className="text-sm text-gray-400 mb-2 tracking-widest">MY SETUP</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text italic mr-2">Tools</span>
            I Use Daily
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 w-full">
          {tools.map((tool, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="rounded-2xl bg-[#181818] border border-[#232323] shadow-lg flex items-center justify-center mb-2 transition-all duration-300 ring-0 hover:ring-2 hover:ring-[#7b7bff] hover:ring-offset-2 hover:ring-offset-black hover:-translate-y-2" style={{ width: 90, height: 90 }}>
                <img src={tool.icon} alt={tool.name} className="w-12 h-12 object-contain" />
              </div>
              <span className="text-gray-300 text-sm mt-1">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
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