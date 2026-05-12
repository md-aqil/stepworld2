import { motion } from 'motion/react';
import { ChevronRight, Play, Star, Users, GraduationCap, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 bg-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-black uppercase tracking-widest mb-8 border border-teal-100"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 50,000+ Students
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight"
            >
              Your Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Starts Here.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-xl md:text-2xl leading-relaxed mb-10 max-w-xl font-medium"
            >
              Find your dream university and course with expert guidance. Compare top-tier colleges and take the first step towards a successful career.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button className="bg-teal-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center shadow-2xl shadow-teal-200 hover:bg-teal-700 transition-all hover:-translate-y-1">
                Explore Courses <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-100 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center hover:bg-gray-50 transition-all hover:border-teal-200 group">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center mr-3 group-hover:bg-teal-100 transition-colors">
                  <Play className="w-4 h-4 text-teal-600 fill-current" />
                </div>
                Watch Video
              </button>
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex items-center gap-8 pt-8 border-t border-gray-100"
            >
              <div>
                <p className="text-3xl font-black text-gray-900">500+</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Colleges</p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <p className="text-3xl font-black text-gray-900">2000+</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Courses</p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <p className="text-3xl font-black text-gray-900">100%</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Guidance</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right Visuals */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', damping: 20 }}
              className="relative z-20"
            >
              {/* Main Image Container */}
              <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-gray-200">
                <img 
                  src="hero-student.png" 
                  alt="Student at StepWorld" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-4 z-30"
              >
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Success Rate</p>
                  <p className="text-lg font-black text-gray-900">99.9% Reliable</p>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-50 flex items-center gap-5 z-30"
              >
                <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Active Community</p>
                  <p className="text-xl font-black text-gray-900">10k+ Members</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-30"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i*100 + 200}`} />
                    ))}
                  </div>
                  <p className="text-xs font-black text-gray-900">+4k joined today</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full blur-[100px]" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
