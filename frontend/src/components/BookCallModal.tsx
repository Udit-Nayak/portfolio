import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      const data = await response.json();
      toast.success('Booking submitted successfully!');
      setFormData({ name: '', email: '', company: '', message: '' });
      onClose();
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
      console.error('Error submitting booking:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className={`relative glass-effect rounded-2xl p-8 w-full max-w-md mx-4 transform transition-all duration-300 ${
        isOpen ? 'animate-scale-in' : ''
      }`}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gradient">Book a Call</h2>
          <p className="text-muted-foreground">Let's discuss your project</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            disabled={isSubmitting}
          />
          
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            disabled={isSubmitting}
          />
          
          <Input
            placeholder="Company (Optional)"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            disabled={isSubmitting}
          />
          
          <Textarea
            placeholder="Tell me about your project"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            disabled={isSubmitting}
          />
          
          <div className="flex space-x-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
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
