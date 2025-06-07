
const SkillsAnimation = () => {
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
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 w-80 space-y-4 hidden lg:block">
      <SkillStripe skills={skills1} direction="right" />
      <SkillStripe skills={skills2} direction="left" />
      <SkillStripe skills={skills3} direction="right" />
    </div>
  );
};

export default SkillsAnimation;
