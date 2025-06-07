
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CollaborationSection from '@/components/CollaborationSection';
import CurrentlyWorkingSection from '@/components/CurrentlyWorkingSection';
import ProjectsSection from '@/components/ProjectsSection';
import SecretSauceSection from '@/components/SecretSauceSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';

const Index = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation onBookCall={() => setIsBookCallOpen(true)} />
      
      <main>
        <HeroSection />
        <CollaborationSection onBookCall={() => setIsBookCallOpen(true)} />
        <CurrentlyWorkingSection />
        <ProjectsSection />
        <SecretSauceSection />
        <AboutSection />
        <ContactSection onBookCall={() => setIsBookCallOpen(true)} />
      </main>
      
      <Footer />
      
      <BookCallModal 
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </div>
  );
};

export default Index;
