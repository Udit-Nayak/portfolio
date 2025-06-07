
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          Full-Stack Developer and{' '}
          <br />
          a little bit of{' '}
          <span className="text-gradient italic">everything</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in">
          I'm Aayush Bharti, a proactive full-stack developer passionate about creating dynamic web experiences.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 glow-effect animate-scale-in px-8 py-4 text-lg"
        >
          Let's Connect
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
