import { motion } from 'motion/react';
import { School, Building2, MapPin, Award, ChevronRight } from 'lucide-react';

const universities = [
  { name: 'MIT WPU', location: 'Pune', type: 'Private', logo: 'mit-wpu.svg', rating: '4.8' },
  { name: 'RVCE', location: 'Bengaluru', type: 'Private', logo: ' RVCE.png', rating: '4.9' },
  { name: 'MSRIT', location: 'Bengaluru', type: 'Private', logo: 'MSRIT.png', rating: '4.7' },
  { name: 'SRM', location: 'Chennai', type: 'Deemed', logo: 'srm-logo.svg', rating: '4.6' },
  { name: 'SYMBIOSIS', location: 'Pune', type: 'Private', logo: 'symbiosis-logo.webp', rating: '4.8' },
];

const colleges = [
  { name: 'NMIMS', location: 'Mumbai', type: 'Private', logo: 'NMIMS-CODE.png', rating: '4.7' },
  { name: 'BMSCE', location: 'Bengaluru', type: 'Private', logo: 'bmsce_logo.jpg', rating: '4.8' },
  { name: 'GL BAJAJ', location: 'Greater Noida', type: 'Private', logo: 'gl-bajaj.webp', rating: '4.5' },
  { name: 'MAIT', location: 'New Delhi', type: 'Private', logo: 'MAIT_LOGO.png', rating: '4.6' },
  { name: 'NITTE MEENAKSHI', location: 'Bengaluru', type: 'Private', logo: 'nmit-logo.svg', rating: '4.7' },
  { name: 'KIET', location: 'Ghaziabad', type: 'Private', logo: 'KIET-Logo.webp', rating: '4.5' },
];

export default function Institutions() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#fdfdfd]">
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-teal-400 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-black uppercase tracking-widest mb-6 border border-teal-100"
          >
            <Award className="w-4 h-4 mr-2" />
            Premier Partners
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Showcase</span>
          </motion.h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Discover India's top-tier educational institutions partnered with StepWorld to accelerate your career.
          </p>
        </div>

        <div className="space-y-32">
          {/* Top Universities Section */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-teal-200">
                  <School className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900">Top Universities</h3>
                  <div className="h-1.5 w-24 bg-teal-500 rounded-full mt-2" />
                </div>
              </div>
              <button className="text-teal-600 font-black text-sm flex items-center hover:translate-x-2 transition-transform">
                VIEW ALL PARTNERS <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universities.map((uni, index) => (
                <motion.div
                  key={uni.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-teal-200 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <School className="w-24 h-24 rotate-12" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-gray-50 rounded-3xl flex items-center justify-center p-5 border border-gray-100 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-teal-50 transition-all duration-500 mb-6 overflow-hidden">
                      <img 
                        src={uni.logo} 
                        alt={uni.name} 
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${uni.name}&background=f0fdfa&color=0d9488&bold=true`;
                        }}
                      />
                    </div>
                    <h4 className="font-black text-gray-900 text-2xl mb-2 group-hover:text-teal-600 transition-colors">{uni.name}</h4>
                    <div className="flex items-center justify-center space-x-2 text-gray-500 font-bold text-sm mb-4">
                      <MapPin className="w-4 h-4 text-teal-500" />
                      <span>{uni.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="px-4 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-black uppercase tracking-widest">
                        {uni.type}
                      </span>
                      <div className="flex items-center text-orange-500 font-black text-sm">
                        <Award className="w-4 h-4 mr-1" />
                        {uni.rating}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Top Colleges Section */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-200">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900">Top Colleges</h3>
                  <div className="h-1.5 w-24 bg-indigo-500 rounded-full mt-2" />
                </div>
              </div>
              <button className="text-indigo-600 font-black text-sm flex items-center hover:translate-x-2 transition-transform">
                EXPLORE COLLEGES <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {colleges.map((college, index) => (
                <motion.div
                  key={college.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <Building2 className="w-24 h-24 -rotate-12" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-gray-50 rounded-3xl flex items-center justify-center p-5 border border-gray-100 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-indigo-50 transition-all duration-500 mb-6 overflow-hidden">
                      <img 
                        src={college.logo} 
                        alt={college.name} 
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${college.name}&background=eef2ff&color=4f46e5&bold=true`;
                        }}
                      />
                    </div>
                    <h4 className="font-black text-gray-900 text-2xl mb-2 group-hover:text-indigo-600 transition-colors">{college.name}</h4>
                    <div className="flex items-center justify-center space-x-2 text-gray-500 font-bold text-sm mb-4">
                      <MapPin className="w-4 h-4 text-indigo-500" />
                      <span>{college.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest">
                        {college.type}
                      </span>
                      <div className="flex items-center text-orange-500 font-black text-sm">
                        <Award className="w-4 h-4 mr-1" />
                        {college.rating}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
