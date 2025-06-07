
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const CurrentlyWorkingSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById('curated-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div 
          className="relative glass-effect rounded-2xl p-12 overflow-hidden group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/5 whitespace-nowrap transition-all duration-300 ${isHovered ? '' : 'animate-slide-right'}`}>
            <span>CURRENTLY BUILDING • SAAS APPLICATION • INNOVATIVE SOLUTIONS • CURRENTLY BUILDING • SAAS APPLICATION • INNOVATIVE SOLUTIONS • </span>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Currently Working On</h2>
            <p className="text-muted-foreground mb-6">Building innovative SaaS solutions</p>
          </div>
          
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20 transition-all duration-300">
              <Button 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 animate-scale-in"
              >
                Recent Works
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingSection;
