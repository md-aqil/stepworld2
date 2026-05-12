import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = '919910245535';
  const message = 'Hello! I am interested in learning more about your courses.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [1, 1.05, 1],
        opacity: 1 
      }}
      transition={{
        scale: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      title="Chat with us on WhatsApp"
    >
      <div className="absolute -left-32 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us!
      </div>
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
    </motion.a>
  );
}
