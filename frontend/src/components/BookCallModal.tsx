import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { X } from 'lucide-react';
import emailjs from 'emailjs-com';


interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookCallModal = ({ isOpen, onClose }: BookCallModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message || 'N/A',
        reply_to: formData.email, // 👈 ADD THIS

      },
      PUBLIC_KEY
    );

    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', company: '', message: '' });
    onClose();
  } catch (error: any) {
  console.error('EMAILJS ERROR:', error);

  if (error?.text) {
    toast.error(error.text);
  } else {
    toast.error('Failed to send message');
  }

  }finally {
    setIsSubmitting(false);
  }
};
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className={`relative glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-8 w-full max-w-md mx-auto transform transition-all duration-300 ${
        isOpen ? 'animate-scale-in' : ''
      }`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-gradient">Book a Call</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Let's discuss your project</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            disabled={isSubmitting}
            className="h-9 sm:h-10 text-sm sm:text-base"
          />
          
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            disabled={isSubmitting}
            className="h-9 sm:h-10 text-sm sm:text-base"
          />
          
          <Input
            placeholder="Company (Optional)"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            disabled={isSubmitting}
            className="h-9 sm:h-10 text-sm sm:text-base"
          />
          
          <Textarea
            placeholder="Tell me about your project"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            disabled={isSubmitting}
            className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base resize-none"
          />
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1 h-9 sm:h-10 text-sm sm:text-base"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 h-9 sm:h-10 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCallModal;
