import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CollaborationSection from '@/components/CollaborationSection';
import ProjectsSection from '@/components/ProjectsSection';
import SecretSauceSection from '@/components/SecretSauceSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BookCallModal from '@/components/BookCallModal';
import BookCallCard from '@/components/BookCallCard';
import Spline from '@splinetool/react-spline';
import { SplineErrorBoundary } from '@/components/SplineErrorBoundary';

const Index = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isBookCallCardOpen, setIsBookCallCardOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <SplineErrorBoundary>
          <Spline scene="https://prod.spline.design/6tvbGQe5QnQkq1vG/scene.splinecode" />
        </SplineErrorBoundary>
      </div>
      <Navigation onBookCall={() => setIsBookCallOpen(true)} />
      
      <main>
        <HeroSection onBookCall={() => setIsBookCallCardOpen(true)} />
        <CollaborationSection onBookCall={() => setIsBookCallOpen(true)} />
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
      
      <BookCallCard
        isOpen={isBookCallCardOpen}
        onClose={() => setIsBookCallCardOpen(false)}
        onBookCall={() => {
          setIsBookCallCardOpen(false);
          setIsBookCallOpen(true);
        }}
      />
    </div>
  );
};

export default Index;
