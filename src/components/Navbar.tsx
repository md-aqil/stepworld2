import { Search, Menu, User, ChevronDown, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Navbar({ onTalkToExpert }: { onTalkToExpert: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'B.Tech', 'MBA', 'MBBS', 'Design', 'Law', 'Science', 
    'MBBS Abroad', 'Study Abroad', 'All courses'
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="StepWorld" className="h-8 md:h-12 w-auto object-contain" />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group cursor-pointer flex items-center text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                Explore Courses & Universities <ChevronDown className="ml-1 w-4 h-4" />
              </div>
              <div className="cursor-pointer text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                CV Labs
              </div>
              <div className="cursor-pointer text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                Community
              </div>
              <div className="cursor-pointer text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">
                Mentor's Point
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-1.5 focus-within:ring-2 focus-within:ring-teal-200 transition-all">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  className="bg-transparent border-none focus:outline-none text-sm w-32 md:w-48"
                />
              </div>
              <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onTalkToExpert}
              className="bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center shadow-lg shadow-teal-100"
            >
              Talk to Expert
            </motion.button>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 text-gray-600"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-gray-900/95 backdrop-blur-xl flex flex-col text-white"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center px-6 h-20">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-8 h-8 text-white" />
              </button>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    onTalkToExpert();
                  }}
                  className="bg-teal-600/20 border border-teal-500/50 text-teal-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  Talk to Expert
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 overflow-y-auto py-10">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  href="#"
                  className={`text-2xl font-bold hover:text-teal-400 transition-colors ${item === 'All courses' ? 'text-teal-400' : ''}`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="p-10 flex justify-center space-x-8">
              <motion.a 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                href="#" 
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-7 h-7" />
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                href="https://www.instagram.com/stepworldeducation?igsh=NzRxMzdsbGF3Mmwz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-7 h-7" />
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                href="#" 
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
