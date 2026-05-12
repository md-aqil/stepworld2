import { motion } from 'motion/react';
import { ChevronRight, Play, Star, Users, GraduationCap, Award, Search } from 'lucide-react';

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

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.15] mb-8 tracking-tight"
            >
              Finding the right <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">university, colleges, courses</span> <br />
              shouldn't be so difficult.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium"
            >
              Compare 100+ accredited universities and 300+ courses based on 30+ factors with <span className="font-bold text-teal-600">StepWorld</span>. Get unbiased advice from expert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
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
                <button className="bg-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-teal-700 transition-all flex items-center justify-center shadow-lg shadow-teal-200">
                  Find Best University <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex items-center gap-8 pt-8 border-t border-gray-100"
            >
              <div>
                <p className="text-2xl font-black text-gray-900">100+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Top Universities</p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <p className="text-2xl font-black text-gray-900">30+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Comparison Factors</p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <p className="text-2xl font-black text-gray-900">Unlimited</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Scholar Guides</p>
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
              <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-gray-200 aspect-[4/5] lg:aspect-auto">
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
                className="absolute -top-6 -right-6 bg-white p-4 rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-3 z-30"
              >
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Success Rate</p>
                  <p className="text-sm font-black text-gray-900">99.9% Reliable</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-white p-5 rounded-[2rem] shadow-2xl border border-gray-50 flex items-center gap-4 z-30"
              >
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Community</p>
                  <p className="text-lg font-black text-gray-900">10k+ Members</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-12 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50 z-30 hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-7 h-7 rounded-full border-2 border-white bg-gray-${i * 100 + 200}`} />
                    ))}
                  </div>
                  <p className="text-[10px] font-black text-gray-900">+4k joined today</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
