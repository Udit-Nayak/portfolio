
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CollaborationSectionProps {
  onBookCall: () => void;
}

const CollaborationSection = ({ onBookCall }: CollaborationSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const skills1 = [
    'ReactJS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Sanity',
    'Contentful', 'Node.JS', 'Express.JS', 'PostgreSQL', 'MongoDB', 'Prisma'
  ];
  
  const skills2 = [
    'Zustand', 'Zod', 'pnpm', 'Bun', 'Git', 'GitHub', 'Vercel',
    'AWS', 'Docker', 'Expo', 'Clerk', 'Linux'
  ];
  
  const skills3 = [
    'ReactJS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Sanity',
    'Node.JS', 'Express.JS', 'PostgreSQL', 'MongoDB', 'Prisma', 'Git'
  ];

  const SkillStripe = ({ skills, direction = 'right' }: { skills: string[], direction?: 'left' | 'right' }) => (
    <div className="overflow-hidden py-4">
      <div className={`flex space-x-8 ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}>
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div 
            key={index}
            className="glass-effect px-6 py-3 rounded-full whitespace-nowrap text-sm font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
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
          
          <div className="space-y-4">
            <div className="mb-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">MY SKILLS</p>
              <h3 className="text-3xl font-bold">Tech Stack</h3>
            </div>
            <SkillStripe skills={skills1} direction="right" />
            <SkillStripe skills={skills2} direction="left" />
            <SkillStripe skills={skills3} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
