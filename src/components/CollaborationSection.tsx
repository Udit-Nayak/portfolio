import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CollaborationSectionProps {
  onBookCall: () => void;
}

const CollaborationSection = ({ onBookCall }: CollaborationSectionProps) => {
  const [isCollabHovered, setIsCollabHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const skills1 = [
    'INTERACTIVE', 'SECURE', 'RELIABLE', 'ENGAGING', 'ACCESSIBLE', 'RESPONSIVE', 'DYNAMIC', 'SCALABLE', 'SEO OPTIMIZED'
  ];
  const skills2 = [
    'ReactJS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Sanity',
    'Contentful', 'Node.JS', 'Express.JS', 'PostgreSQL', 'MongoDB', 'Prisma'
  ];
  const skills3 = [
    'Zustand', 'Zod', 'pnpm', 'Bun', 'Git', 'GitHub', 'Vercel',
    'AWS', 'Docker', 'Expo', 'Clerk', 'Linux'
  ];

  const SkillStripe = ({ skills, direction = 'right' }: { skills: string[], direction?: 'left' | 'right' }) => (
    <div className="overflow-hidden py-4">
      <div className={`flex space-x-8 whitespace-nowrap ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}>
        {[...skills, ...skills].map((skill, index) => (
          <div 
            key={index}
            className="px-8 py-3 rounded-2xl text-sm font-medium glass-effect"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[95%]">

        {/* Main Grid: 60% LEFT | 40% RIGHT */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
          {/* LEFT SIDE - 3/5 = 60% */}
          <div className="lg:col-span-3 space-y-12 w-full">
            {/* Collaboration Card */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsCollabHovered(true)}
              onMouseLeave={() => setIsCollabHovered(false)}
            >
              <div className="glass-effect rounded-2xl p-40 transition-all duration-300 group-hover:glow-effect">
                <div className="flex items-center space-x-4 mb-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/lovable-uploads/30d2a950-ba97-4f7a-814f-dd4155c95a27.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                    <p className="text-muted-foreground text-sm max-w-md">
                      I prioritize client collaboration, fostering open communication
                    </p>
                  </div>
                </div>

                {isCollabHovered && (
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

            {/* Email Card */}
            <div 
              className="glass-effect rounded-2xl p-14 relative overflow-hidden group cursor-pointer transition-all duration-300 group-hover:glow-effect"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AB</span>
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
                Let's work together on your next project
              </h2>
               
              <div className="flex items-center justify-center space-x-4 bg-black/30 rounded-xl p-4">
                <div className="w-6 h-6 rounded bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xs">📧</span>
                </div>
                <span className="text-lg font-medium text-gradient">uditnayak1611@gmail.com</span>
              </div>

              {isEmailHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl transition-all duration-300">
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - 2/5 = 40% */}
          <div className="lg:col-span-2 w-full">
            {/* Skills Card */}
            <div className="glass-effect rounded-2xl p-12 relative overflow-hidden">
              <div className="text-right mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  Passionate about cutting-edge technologies
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-3 mb-8">
                <SkillStripe skills={skills1} direction="right" />
                <SkillStripe skills={skills2} direction="left" />
                <SkillStripe skills={skills3} direction="right" />
              </div>

              {/* Website Preview Box Inside Skills */}
              <div className="glass-effect rounded-xl p-8 bg-gradient-to-br from-purple-600/10 to-blue-600/10 mt-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div className="h-20 bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/20 rounded"></div>
                </div>

                <h4 className="text-lg font-bold mb-4 text-center">
                  Websites that stand out and make a difference
                </h4>

                <div className="flex space-x-2 justify-center">
                  <button 
                    onClick={onBookCall}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium"
                  >
                    Get started
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width SaaS Section */}
        <div className="glass-effect rounded-2xl p-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">The Inside Scoop</p>
                  <h3 className="text-2xl font-bold">Currently building a SaaS Application</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Payment System</h4>
                  <p className="text-muted-foreground">Architecture</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Monitoring & Analytics</h4>
                  <p className="text-muted-foreground">Infrastructure</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Design System & UI</h4>
                  <p className="text-muted-foreground">Components</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">API Gateway & Documentation</h4>
                  <p className="text-muted-foreground">Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollaborationSection;