
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Mail, Calendar, Linkedin, Github, Twitter } from 'lucide-react';

interface BookCallCardProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

const BookCallCard = ({ isOpen, onClose, onBookCall }: BookCallCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 transition-all duration-500 ease-out ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <div className="glass-effect rounded-t-3xl p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">FROM CONCEPT TO CREATION</h2>
            <div className="flex justify-center space-x-4 mb-6">
              <Linkedin size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-sm text-muted-foreground">Quick connect</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">uditnayak1611@gmail.com</p>
                <p className="text-sm text-muted-foreground">Send me an email directly</p>
              </div>
            </div>

            <div 
              className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300 cursor-pointer group"
              onClick={onBookCall}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Calendar size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Book a Call</h3>
                  <p className="text-sm text-muted-foreground">Fill a form</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Schedule a time slot</p>
                <p className="text-sm text-muted-foreground">Book a call on my calendar</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 p-4 glass-effect rounded-xl">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-sm font-medium">Currently available for new opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCallCard;
