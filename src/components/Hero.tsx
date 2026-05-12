import { motion } from 'motion/react';
import { Search, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-teal-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-teal-600 uppercase bg-teal-50 rounded-full"
          >
            Step Your Career With Us
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight"
          >
            Finding the right <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">university, colleges, courses</span> <br className="hidden md:block" /> shouldn't be so difficult.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Compare 100+ accredited universities and 300+ courses based on 30+ factors with <span className="font-bold text-teal-600">StepWorld</span>. 
            Get unbiased advice from expert.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 max-w-4xl mx-auto"
          >
            <div className="bg-white p-2 rounded-2xl shadow-xl flex flex-col md:flex-row gap-2 border border-blue-50">
              <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="What would you like to study?" 
                  className="w-full bg-transparent border-none py-4 focus:outline-none text-gray-900 text-lg"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-700 transition-colors flex items-center justify-center shadow-lg shadow-teal-200"
              >
                Find Best University
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-gray-800">100+</span>
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold text-left">Top<br/>Universities</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-gray-800">30+</span>
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold text-left">Comparison<br/>Factors</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-gray-800">$M+</span>
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold text-left">Scholar<br/>Guides</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
