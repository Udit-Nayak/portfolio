
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onBookCall: () => void;
}

const Navigation = ({ onBookCall }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });  // This enables smooth scrolling
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${  // duration-300 controls the animation speed
      isScrolled ? 'glass-effect py-4 mx-4 mt-4 rounded-full' : 'py-6'
    }`}>
      <div className={`container mx-auto px-6 flex items-center justify-between ${
        isScrolled ? 'max-w-7xl' : 'max-w-full'
      }`}>
        <div className="text-2xl font-bold text-gradient">AB</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            More
          </button>
        </div>

        <Button 
          onClick={onBookCall}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 glow-effect"
        >
          Book a Call
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
