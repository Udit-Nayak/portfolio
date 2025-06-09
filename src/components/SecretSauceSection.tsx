const SecretSauceSection = () => {
  const skills = [
    'ReactJS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Sanity',
    'Contentful', 'Node.JS', 'Express.JS', 'PostgreSQL', 'MongoDB', 'Prisma',
    'Zustand', 'Zod', 'pnpm', 'Bun', 'Git', 'GitHub', 'Vercel', 'AWS', 'Docker', 'Linux'
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 border-2 border-purple-600/20 rounded-full animate-rotate-slow"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-4">MY SKILLS</p>
          <h2 className="text-5xl font-bold mb-4">
            The Secret <span className="text-gradient italic">Sauce</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl p-4 text-center hover:glow-effect transition-all duration-300 group cursor-pointer"
            >
              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 transform -skew-y-3 py-8">
        <div className="overflow-hidden">
          <div className="animate-slide-right">
            <p className="text-4xl font-bold text-white whitespace-nowrap">
              Passionate about cutting-edge technologies • Building the future • 
              Passionate about cutting-edge technologies • Building the future • 
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-l from-blue-600 to-purple-600 transform skew-y-3 py-8">
        <div className="overflow-hidden">
          <div className="animate-slide-left">
            <p className="text-4xl font-bold text-white whitespace-nowrap">
              Creating innovative solutions • Delivering excellence • 
              Creating innovative solutions • Delivering excellence • 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretSauceSection;
