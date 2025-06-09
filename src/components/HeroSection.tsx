import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clipboard } from 'lucide-react';
import Spline from '@splinetool/react-spline';

interface HeroSectionProps {
  onBookCall: () => void;
}

const HeroSection = ({ onBookCall }: HeroSectionProps) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@aayushbharti.in');
      setIsEmailCopied(true);
      setTimeout(() => setIsEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/0SNGr6XPmGqGgUmK/scene.splinecode" />
      </div>
      <div className="relative z-10 w-full">
        {/* Remove the background overlay below */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20"></div> */}
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                KNOW ABOUT ME
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block">Full-Stack Developer and</span>
                <span className="text-gradient">Creative Designer</span>
              </h1>
            </div>
            
            <p className="mb-12 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I create digital experiences that combine cutting-edge technology with thoughtful design. 
              From concept to deployment, I build applications that not only function flawlessly but also inspire and engage users.
            </p>
            
            <div className="mt-16 mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div 
                onClick={onBookCall}
                className="relative inline-flex items-center rounded-full
                           text-lg font-medium cursor-pointer
                           transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                           group
                           bg-gradient-to-r from-purple-700 to-blue-700 text-white
                           hover:bg-white hover:text-black"
              >
                <span className="px-8 py-3 pr-2">Let's Connect</span>
                <div className="w-12 h-12 rounded-full flex items-center justify-center -mr-2
                                bg-gray-800 group-hover:bg-white
                                transition-colors duration-300">
                  <ArrowRight size={20} className="text-white group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
              <div 
                onClick={copyEmail}
                className="relative flex items-center gap-2 px-8 py-3 rounded-full text-lg font-medium text-white cursor-pointer transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
              >
                <Clipboard size={20} /> uditnayak1611@gmail.com
                {isEmailCopied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                    Email copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
