import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, Mail, BookOpen, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

interface QueryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QueryPopup({ isOpen, onClose }: QueryPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = '919910245535';
    const message = `*New Lead from StepWorld*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Course:* ${formData.course}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    onClose();
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
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-teal-500 focus:bg-white rounded-2xl outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
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
                    type="tel"
                    placeholder="Enter your mobile"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-teal-500 focus:bg-white rounded-2xl outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
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
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-teal-500 focus:bg-white rounded-2xl outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
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
                    type="text"
                    placeholder="Type interested course"
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border-2 border-transparent focus:border-teal-500 focus:bg-white rounded-2xl outline-none transition-all text-gray-900 font-medium placeholder:text-gray-400"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-teal-200 transition-all flex items-center justify-center space-x-2 mt-4"
              >
                <span>Submit</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>

            <div className="p-4 bg-gray-50 text-center">
              <p className="text-xs text-gray-400 font-medium">
                By submitting you agree to our Terms and Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
