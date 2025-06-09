import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

interface ContactSectionProps {
  onBookCall: () => void;
}

const ContactSection = ({ onBookCall }: ContactSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false); // reset first to re-trigger
          setTimeout(() => setAnimate(true), 10);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative px-6 overflow-hidden min-h-screen">
      <div ref={sectionRef} className="container mx-auto max-w-6xl text-center relative z-10 flex flex-col justify-center min-h-screen">
        {/* Logo */}
        <div className="mb-4">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-2xl">
            AB
          </div>
        </div>
        {/* Main heading - matching the reference image style */}
        <div className="mb-2">
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center items-center gap-0 mb-2">
              <span className={`text-3xl lg:text-4xl xl:text-6xl font-bold text-white leading-none tracking-tight ${animate ? 'animate-slide-in-left' : ''}`}>FROM CONCEPT TO</span>
              <span className={`block text-3xl lg:text-4xl xl:text-6xl font-black text-white leading-none tracking-tight ${animate ? 'animate-slide-in-right' : ''} ml-0`} style={{marginTop: '0.2em'}}>CREATION</span>
            </div>
            <h3 className={`text-2xl lg:text-6xl xl:text-4xl font-bold text-white mb-8 leading-none tracking-tight ${animate ? 'animate-pop-in-center' : ''}`}>
              LET'S MAKE IT{' '}
              <span className="text-white font-black">HAPPEN!</span>
            </h3>
          </div>
        </div>
        {/* CTA Button */}
        <div className={`mb-8 ${animate ? 'animate-pop-in-center' : ''}`}>
          <Button 
            onClick={onBookCall}
            size="lg"
            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-slate-500 transition-all duration-300 px-8 py-4 text-lg rounded-full group shadow-xl hover:shadow-2xl"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
        {/* Availability statement */}
        <p className={`text-xl text-slate-300 mb-2 font-medium ${animate ? 'animate-pop-in-center' : ''}`}>
          I'm available for full-time roles & freelance projects.
        </p>
        {/* Skills description */}
        <p className={`text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed ${animate ? 'animate-pop-in-center' : ''}`}>
          I thrive on crafting dynamic web applications, and<br />
          delivering seamless user experiences.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;