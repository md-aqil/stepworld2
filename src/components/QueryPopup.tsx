import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, Mail, BookOpen, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface QueryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Digital Chatbox API Configuration
const API_KEY = 'wapi_1778608583406_7b2e76a9-c12e-42b4-a9a0-3c7679c5ef5b';
const SESSION_ID = 'wb_1047487935122698_1777633459878';
const API_URL = 'https://digitalchatbox.com/api/project/v1/messages';

export default function QueryPopup({ isOpen, onClose }: QueryPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Clean the phone number (remove spaces, +, etc.)
    const cleanNumber = formData.mobile.replace(/\D/g, '');
    const formattedNumber = cleanNumber.length === 10 ? `91${cleanNumber}` : cleanNumber;

    try {
      // Sending data to Digital Chatbox API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY,
        },
        body: JSON.stringify({
          sessionId: SESSION_ID,
          to: formattedNumber,
          type: 'text',
          text: {
            body: `Hi ${formData.name}, 👋\n\nThank you for choosing *StepWorld Education*! \n\nWe have received your query regarding the *${formData.course}* course. One of our senior counselors will get in touch with you shortly on this number.\n\nHave a great day! ✨`
          }
        }),
      });

      if (response.ok) {
        setStatus('success');
        
        // Optionally send a notification to YOURSELF too
        // await fetch(API_URL, { ... })

        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', mobile: '', email: '', course: '' });
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      // Fallback: If API fails, use the old WhatsApp redirect
      const adminNumber = '919910245535';
      const message = `*New Lead from StepWorld*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Mobile:* ${formData.mobile}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Course:* ${formData.course}`;
      
      const whatsappUrl = `https://wa.me/${adminNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
      setStatus('idle');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            {status === 'success' ? (
              <div className="p-12 text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-12 h-12" />
                </motion.div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-gray-900">Thank You!</h2>
                  <p className="text-gray-500 font-medium">
                    Your query has been received. Our expert will contact you on WhatsApp shortly.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="bg-teal-600 p-8 text-center text-white relative">
                  <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h2 className="text-3xl font-black mb-2">Got a query?</h2>
                  <p className="text-teal-50 text-lg opacity-90 font-medium">Talk to us.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 flex items-center">
                      Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        required
                        disabled={status === 'loading'}
                        type="text"
                        placeholder="Enter your name"
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-teal-500 focus:bg-white rounded-2xl outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400 disabled:opacity-50"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 flex items-center">
                      Mobile <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        required
                        disabled={status === 'loading'}
                        type="tel"
                        placeholder="Enter your mobile"
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-teal-500 focus:bg-white rounded-2xl outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400 disabled:opacity-50"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 flex items-center">
                      Email <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        required
                        disabled={status === 'loading'}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-teal-500 focus:bg-white rounded-2xl outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400 disabled:opacity-50"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1 flex items-center">
                      Course applying for <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-teal-600 transition-colors">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <input
                        required
                        disabled={status === 'loading'}
                        type="text"
                        placeholder="Type interested course"
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-teal-500 focus:bg-white rounded-2xl outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400 disabled:opacity-50"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-teal-200 transition-all flex items-center justify-center space-x-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{status === 'loading' ? 'Sending...' : 'Submit'}</span>
                    {status === 'loading' ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.button>
                </form>

                <div className="p-4 bg-gray-50 text-center">
                  <p className="text-xs text-gray-400 font-medium">
                    By submitting you agree to our Terms and Privacy Policy
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
