
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">AB</div>
            <p className="text-muted-foreground">
              Full-Stack Developer passionate about creating digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@aayushbharti.in</p>
              <p>India - 24:55</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Aayush Bharti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
