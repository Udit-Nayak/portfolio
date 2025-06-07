
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onBookCall: () => void;
}

const HeroSection = ({ onBookCall }: HeroSectionProps) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20"></div>
      
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
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I create digital experiences that combine cutting-edge technology with thoughtful design. 
            From concept to deployment, I build applications that not only function flawlessly but also inspire and engage users.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onBookCall}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Let's Connect
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 rounded-full text-lg font-medium border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
