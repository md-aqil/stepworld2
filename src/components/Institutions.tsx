import { motion } from 'motion/react';
import { School, Building2, MapPin, Award } from 'lucide-react';

const universities = [
  { name: 'MIT WPU', location: 'Pune', type: 'Private', logo: 'mit-wpu.svg', rating: '4.8' },
  { name: 'RVCE', location: 'Bengaluru', type: 'Private', logo: ' RVCE.png', rating: '4.9' },
  { name: 'MSRIT', location: 'Bengaluru', type: 'Private', logo: 'MSRIT.png', rating: '4.7' },
  { name: 'SRM', location: 'Chennai', type: 'Deemed', logo: 'srm-logo.svg', rating: '4.6' },
  { name: 'SYMBIOSIS', location: 'Pune', type: 'Private', logo: 'symbiosis-logo.webp', rating: '4.8' },
];

const colleges = [
  { name: 'NMIMS', location: 'Mumbai', type: 'Private', logo: 'https://logo.clearbit.com/nmims.edu', rating: '4.7' },
  { name: 'BMSCE', location: 'Bengaluru', type: 'Private', logo: 'https://logo.clearbit.com/bmsce.ac.in', rating: '4.8' },
  { name: 'GL BAJAJ', location: 'Greater Noida', type: 'Private', logo: 'https://logo.clearbit.com/glbitm.org', rating: '4.5' },
  { name: 'MAIT', location: 'New Delhi', type: 'Private', logo: 'https://logo.clearbit.com/mait.ac.in', rating: '4.6' },
  { name: 'NITTE MEENAKSHI', location: 'Bengaluru', type: 'Private', logo: 'https://logo.clearbit.com/nmit.ac.in', rating: '4.7' },
  { name: 'KIET', location: 'Ghaziabad', type: 'Private', logo: 'https://logo.clearbit.com/kiet.edu', rating: '4.5' },
];

export default function Institutions() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Partner <span className="text-teal-600">Institutions</span>
          </motion.h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            We are proud to partner with India's most prestigious universities and colleges to bring you world-class education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Top Universities Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b-2 border-teal-50">
              <div className="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-teal-200">
                <School className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">Top Universities</h3>
                <p className="text-teal-600 font-bold text-sm uppercase tracking-wider">Premium Partners</p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {universities.map((uni, index) => (
                <motion.div
                  key={uni.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-100 hover:border-teal-200 transition-all duration-300 flex items-center space-x-6 cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-3 border border-gray-100 group-hover:bg-white transition-colors overflow-hidden flex-shrink-0">
                    <img 
                      src={uni.logo} 
                      alt={uni.name} 
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${uni.name}&background=f0fdfa&color=0d9488&bold=true`;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-black text-gray-900 text-xl group-hover:text-teal-600 transition-colors">{uni.name}</h4>
                      <div className="flex items-center text-orange-400 bg-orange-50 px-2 py-1 rounded-lg text-xs font-bold">
                        <Award className="w-3 h-3 mr-1" />
                        {uni.rating}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm font-medium text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-teal-500" />
                        {uni.location}
                      </span>
                      <span className="px-2 py-0.5 bg-teal-50 text-teal-600 rounded-md text-[10px] font-black uppercase tracking-tighter">
                        {uni.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colleges Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 pb-4 border-b-2 border-indigo-50">
              <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">Top Colleges</h3>
                <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider">Leading Institutions</p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {colleges.map((college, index) => (
                <motion.div
                  key={college.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-300 flex items-center space-x-6 cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center p-3 border border-gray-100 group-hover:bg-white transition-colors overflow-hidden flex-shrink-0">
                    <img 
                      src={college.logo} 
                      alt={college.name} 
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${college.name}&background=eef2ff&color=4f46e5&bold=true`;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-black text-gray-900 text-xl group-hover:text-indigo-600 transition-colors">{college.name}</h4>
                      <div className="flex items-center text-orange-400 bg-orange-50 px-2 py-1 rounded-lg text-xs font-bold">
                        <Award className="w-3 h-3 mr-1" />
                        {college.rating}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm font-medium text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-indigo-500" />
                        {college.location}
                      </span>
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-md text-[10px] font-black uppercase tracking-tighter">
                        {college.type}
                      </span>
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
