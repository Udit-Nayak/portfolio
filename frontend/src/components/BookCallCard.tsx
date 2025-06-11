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
      
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-2 sm:mx-4 transition-all duration-500 ease-out ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <div className="glass-effect rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-6 md:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>

          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">FROM CONCEPT TO CREATION</h2>
            <div className="flex justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <Linkedin size={20} className="sm:w-6 sm:h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github size={20} className="sm:w-6 sm:h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter size={20} className="sm:w-6 sm:h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:glow-effect transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Email</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Quick connect</p>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-sm sm:text-base font-semibold">uditnayak1611@gmail.com</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Send me an email directly</p>
              </div>
            </div>

            <div 
              className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:glow-effect transition-all duration-300 cursor-pointer group"
              onClick={onBookCall}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Calendar size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Book a Call</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Fill a form</p>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-sm sm:text-base font-semibold">Schedule a time slot</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Book a call on my calendar</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 p-3 sm:p-4 glass-effect rounded-lg sm:rounded-xl">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-xs sm:text-sm font-medium">Currently available for new opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCallCard;
