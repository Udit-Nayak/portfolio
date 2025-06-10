import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import MoreMenuSection from './MoreMenuSection';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  onBookCall: () => void;
}

const Navigation = ({ onBookCall }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  const handleNav = (sectionId?: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      if (sectionId) {
        setTimeout(() => scrollToSection(sectionId), 300);
      }
    } else {
      if (sectionId) {
        scrollToSection(sectionId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${  
      isScrolled ? 'glass-effect py-4 mx-4 mt-4 rounded-full' : 'py-6'
    }`}>
      <div className={`container mx-auto px-6 flex items-center justify-between ${
        isScrolled ? 'max-w-7xl' : 'max-w-full'
      }`}>
        <div className="text-2xl font-bold text-gradient cursor-pointer" onClick={() => handleNav()}>UN</div>
        
        <div className="hidden md:flex items-center space-x-8 ml-20">
          <button 
            onClick={() => handleNav()}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('work')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => handleNav('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <Popover open={isMoreOpen} onOpenChange={setIsMoreOpen}>
            <PopoverTrigger asChild>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                More
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="mt-0"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <MoreMenuSection />
            </PopoverContent>
          </Popover>
        </div>

        <Button
          onClick={() => {
            if (location.pathname === '/links' || location.pathname === '/uses') {
              onBookCall();
            } else if (location.pathname !== '/') {
              navigate('/');
              setTimeout(() => onBookCall(), 300);
            } else {
              onBookCall();
            }
          }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 glow-effect"
        >
          Book a Call
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
