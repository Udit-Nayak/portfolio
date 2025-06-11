import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8 sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-8 sm:text-left sm:items-start">
          <div className="w-full">
            <div className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4">UN</div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Full-Stack Developer passionate about creating digital experiences.
            </p>
          </div>
          <div className="w-full">
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Navigation</h4>
            <div className="space-y-1.5 sm:space-y-2">
              <button 
                onClick={() => handleNav()}
                className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mx-auto sm:mx-0"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('work')}
                className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mx-auto sm:mx-0"
              >
                Work
              </button>
              <button 
                onClick={() => handleNav('about')}
                className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mx-auto sm:mx-0"
              >
                About
              </button>
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <p>uditnayak1611@gmail.com</p>
              <p>India</p>
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Social</h4>
            <div className="space-y-1.5 sm:space-y-2">
              <a 
                href="https://www.linkedin.com/in/uditnayak/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mx-auto sm:mx-0"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Udit-Nayak" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mx-auto sm:mx-0"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
