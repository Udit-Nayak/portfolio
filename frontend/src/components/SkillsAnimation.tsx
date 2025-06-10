import React, { useEffect, useRef } from 'react';

interface SkillsAnimationProps {
  skills1: string[];
  skills2: string[];
  skills3: string[];
}

const SkillsAnimation: React.FC<SkillsAnimationProps> = ({ skills1, skills2, skills3 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force a reflow to ensure animation starts from the beginning
    if (containerRef.current) {
      containerRef.current.style.animation = 'none';
      containerRef.current.offsetHeight; // Force reflow
      containerRef.current.style.animation = '';
    }
  }, []);

  const SkillStripe = ({ skills, direction = 'right' }: { skills: string[], direction?: 'left' | 'right' }) => (
    <div className="overflow-hidden py-4">
      <div 
        ref={containerRef}
        className={`flex space-x-8 whitespace-nowrap ${direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`}
        style={{ 
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
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
    <div className="glass-effect rounded-2xl p-12 relative overflow-hidden">
      <div className="text-right mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Passionate about cutting-edge technologies
        </h2>
      </div>
      
      <div className="grid grid-cols-1 gap-0 mb-2">
        <div className="overflow-hidden">
          <SkillStripe skills={skills1} direction="right" />
        </div>
        <div className="overflow-hidden">
          <SkillStripe skills={skills2} direction="left" />
        </div>
        <div className="overflow-hidden">
          <SkillStripe skills={skills3} direction="right" />
        </div>
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
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-medium"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsAnimation;
