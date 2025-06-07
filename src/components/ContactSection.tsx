
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  onBookCall: () => void;
}

const ContactSection = ({ onBookCall }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
            AB
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From concept to creation<br />
            let's make it happen!
          </h2>
        </div>
        
        <Button 
          onClick={onBookCall}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 glow-effect hover:scale-105 px-12 py-4 text-lg mb-6"
        >
          Get in Touch
        </Button>
        
        <p className="text-muted-foreground">
          I am available for freelance projects
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
