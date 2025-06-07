
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CollaborationSectionProps {
  onBookCall: () => void;
}

const CollaborationSection = ({ onBookCall }: CollaborationSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="glass-effect rounded-2xl p-8 transition-all duration-300 group-hover:glow-effect">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold">Collaboration</h3>
              </div>
              
              <p className="text-muted-foreground text-lg mb-6">
                I prioritize client collaboration, fostering open communication and ensuring every project reflects your vision.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
              </div>
              
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl transition-all duration-300">
                  <Button 
                    onClick={onBookCall}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 glow-effect animate-scale-in"
                  >
                    Book a Call
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Let's work together on your next project
            </h2>
            
            <div className="glass-effect rounded-xl p-6 inline-block">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-sm">@</span>
                </div>
                <span className="text-lg font-medium">hello@aayushbharti.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
