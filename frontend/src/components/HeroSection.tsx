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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 relative overflow-hidden">
      {/* <div className="absolute inset-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/0SNGr6XPmGqGgUmK/scene.splinecode" />
      </div> */}
      <div className="relative z-10 w-full">
        {/* Remove the background overlay below */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20"></div> */}
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                KNOW ABOUT ME
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="block">Full-Stack Developer and</span>
                <span className="text-gradient">Creative Designer</span>
              </h1>
            </div>
            
            <p className="mb-8 sm:mb-12 text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              I create digital experiences that combine cutting-edge technology with thoughtful design. 
              From concept to deployment, I build applications that not only function flawlessly but also inspire and engage users.
            </p>
            
            <div className="mt-12 sm:mt-16 mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onBookCall}
                className="relative flex items-center justify-center w-full sm:w-auto rounded-full text-base sm:text-lg font-medium cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl group bg-gradient-to-r from-purple-700 to-blue-700 text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 mb-2 sm:mb-0"
              >
                <span className="mr-3">Let's Connect</span>
                <span className="flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gray-800 group-hover:bg-white transition-colors duration-300">
                  <ArrowRight size={18} className="text-white group-hover:text-black transition-colors duration-300" />
                </span>
              </button>
              <div 
                onClick={copyEmail}
                className="relative flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium text-white cursor-pointer transition-all duration-300 hover:bg-white/10 hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <Clipboard size={18} className="sm:w-5 sm:h-5" /> 
                <span className="hidden sm:inline">uditnayak1611@gmail.com</span>
                <span className="sm:hidden">Email Me</span>
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
