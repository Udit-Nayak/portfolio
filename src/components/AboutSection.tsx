import { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const AboutSection = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSectionHovered, setIsSectionHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-6 relative overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsSectionHovered(true)}
      onMouseLeave={() => setIsSectionHovered(false)}
    >
      {isSectionHovered && (
        <img
          src="/lovable-uploads/object.png"
          alt="Floating object"
          className="absolute pointer-events-none z-50 w-80 h-80"
          style={{
            transform: `translate(${mousePosition.x-770}px, ${mousePosition.y-350}px)`,
          }}
        />
      )}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              KNOW ABOUT ME
            </p>
            <h2 className="text-5xl lg:text-5xl font-bold mb-8">
              Full-Stack Developer and<br />
              a little bit of <span className="text-gradient italic">everything</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                I'm Aayush Bharti, a proactive full-stack developer passionate
                about creating dynamic web experiences. From frontend to
                backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans React, Next.js, and Node.js,
                and I'm always eager to learn more.
              </p>
              
              <p className="text-lg">
                When I'm not immersed in work, I'm exploring new ideas and
                staying curious. Life's about balance, and I love embracing
                every part of it.
              </p>
              
              <p className="text-lg">
                I believe in waking up each day eager to make a difference!
              </p>
            </div>
            
            <div className="flex gap-6 mt-8">
              <a href="https://www.linkedin.com/in/aayushbharti/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin size={28} />
              </a>
              <a href="https://github.com/aayushbharti/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github size={28} />
              </a>
              <a href="https://twitter.com/aayushbharti/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Twitter size={28} />
              </a>
            </div>
          </div>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div 
              className="glass-effect rounded-2xl p-12 overflow-hidden transition-all duration-500 ease-in-out
                         group-hover:shadow-2xl group-hover:scale-105
                         bg-gradient-to-br from-blue-900/50 to-purple-900/50"
            >
              <img 
                src="/lovable-uploads/865f36a2-dfcd-40b0-bbe3-cce3f7d6e2de.png" 
                alt="About me preview"
                className="w-full h-auto transition-all duration-500 ease-in-out transform group-hover:rotate-2 group-hover:scale-110"
              />
              
              {isImageHovered && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ease-in-out">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-50 animate-pulse shadow-lg transform hover:scale-110 transition-all duration-300"></div>
                </div>
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-8xl font-bold text-white opacity-20">AB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
