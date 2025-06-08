
import { useState } from 'react';

const AboutSection = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Passionate about cutting-<span className="text-gradient">edge technologies</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                From frontend to backend, I thrive on solving complex problems with clean, 
                efficient code. My expertise spans React, Next.js, and Node.js, and I'm 
                always eager to learn more.
              </p>
              
              <p className="text-lg">
                When I'm not immersed in work, I'm exploring new ideas and staying curious. 
                Life's about balance, and I love embracing every part of it.
              </p>
              
              <p className="text-lg">
                I believe in waking up each day eager to make a difference!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="glass-effect px-4 py-2 rounded-full">Tailwind CSS</div>
              <div className="glass-effect px-4 py-2 rounded-full">Motion</div>
              <div className="glass-effect px-4 py-2 rounded-full">Sanity</div>
              <div className="glass-effect px-4 py-2 rounded-full">Contentful</div>
              <div className="glass-effect px-4 py-2 rounded-full">Node.JS</div>
              <div className="glass-effect px-4 py-2 rounded-full">Express.JS</div>
              <div className="glass-effect px-4 py-2 rounded-full">PostgreSQL</div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="glass-effect rounded-2xl p-12 overflow-hidden cursor-pointer transition-all duration-300"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <img 
                src="/lovable-uploads/865f36a2-dfcd-40b0-bbe3-cce3f7d6e2de.png" 
                alt="About me preview"
                className="w-full h-auto transition-all duration-300"
              />
              
              {isImageHovered && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-50"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
