import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import MoreMenuSection from './MoreMenuSection';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onBookCall: () => void;
}

const Navigation = ({ onBookCall }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
    setIsMobileMenuOpen(false);
  };

  const MobileMenu = () => (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Menu Panel */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ 
          type: "spring",
          damping: 25,
          stiffness: 200
        }}
        className="fixed left-0 top-0 bottom-0 w-full max-w-sm bg-background/95 backdrop-blur-sm z-[101] shadow-2xl"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-2xl font-bold text-gradient">UN</div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <button 
                onClick={() => handleNav()}
                className="w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('work')}
                className="w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Work
              </button>
              <button 
                onClick={() => handleNav('about')}
                className="w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About
              </button>
              <div className="pt-4 border-t">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">More</h3>
                <div className="space-y-2">
                  <button 
                    onClick={() => {
                      navigate('/links');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    Links
                  </button>
                  <button 
                    onClick={() => {
                      navigate('/uses');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    Uses
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <Button
              onClick={() => {
                onBookCall();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 glow-effect"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${  
        isScrolled ? 'glass-effect py-4 mx-4 mt-4 rounded-full' : 'py-6'
      }`}>
        <div className={`container mx-auto px-6 flex items-center justify-between ${
          isScrolled ? 'max-w-7xl' : 'max-w-full'
        }`}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="text-2xl font-bold text-gradient cursor-pointer" onClick={() => handleNav()}>UN</div>
          </div>
          
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

      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu />}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
