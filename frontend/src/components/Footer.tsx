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
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">UN</div>
            <p className="text-muted-foreground">
              Full-Stack Developer passionate about creating digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              <button 
                onClick={() => handleNav()}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('work')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => handleNav('about')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>uditnayak1611@gmail.com</p>
              <p>India</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="space-y-2">
              <a href="https://www.linkedin.com/in/uditnayak/" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/Udit-Nayak" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">
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
