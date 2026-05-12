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
  { name: 'NMIMS', location: 'Mumbai', type: 'Private', logo: 'NMIMS-CODE.png', rating: '4.7' },
  { name: 'BMSCE', location: 'Bengaluru', type: 'Private', logo: 'bmsce_logo.jpg', rating: '4.8' },
  { name: 'GL BAJAJ', location: 'Greater Noida', type: 'Private', logo: 'gl-bajaj.webp', rating: '4.5' },
  { name: 'MAIT', location: 'New Delhi', type: 'Private', logo: 'MAIT_LOGO.png', rating: '4.6' },
  { name: 'NITTE MEENAKSHI', location: 'Bengaluru', type: 'Private', logo: 'nmit-logo.svg', rating: '4.7' },
  { name: 'KIET', location: 'Ghaziabad', type: 'Private', logo: 'KIET-Logo.webp', rating: '4.5' },
];

export default function Institutions() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Universities Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-10 border-l-4 border-teal-500 pl-4">
            <School className="w-6 h-6 text-teal-600" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Top Universities</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {universities.map((uni, index) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-full aspect-square bg-white rounded-xl flex items-center justify-center p-3 mb-4 overflow-hidden group-hover:scale-105 transition-transform border border-gray-50">
                  <img 
                    src={uni.logo} 
                    alt={uni.name} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${uni.name}&background=f0fdfa&color=0d9488&bold=true`;
                    }}
                  />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1">{uni.name}</h4>
                <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                  <MapPin className="w-3 h-3 mr-1 text-teal-500" />
                  {uni.location}
                </div>
                <div className="mt-2 flex items-center justify-between w-full pt-2 border-t border-gray-50">
                  <span className="text-[9px] font-black bg-teal-50 text-teal-600 px-2 py-0.5 rounded-md uppercase">{uni.type}</span>
                  <div className="flex items-center text-orange-400 text-[10px] font-black">
                    <Award className="w-3 h-3 mr-0.5" />
                    {uni.rating}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Colleges Section */}
        <div>
          <div className="flex items-center space-x-3 mb-10 border-l-4 border-indigo-500 pl-4">
            <Building2 className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Top Colleges</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colleges.map((college, index) => (
              <motion.div
                key={college.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-full aspect-square bg-white rounded-xl flex items-center justify-center p-3 mb-4 overflow-hidden group-hover:scale-105 transition-transform border border-gray-50">
                  <img 
                    src={college.logo} 
                    alt={college.name} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${college.name}&background=eef2ff&color=4f46e5&bold=true`;
                    }}
                  />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1 line-clamp-1">{college.name}</h4>
                <div className="flex items-center text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                  <MapPin className="w-3 h-3 mr-1 text-indigo-500" />
                  {college.location}
                </div>
                <div className="mt-2 flex items-center justify-between w-full pt-2 border-t border-gray-50">
                  <span className="text-[9px] font-black bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md uppercase">{college.type}</span>
                  <div className="flex items-center text-orange-400 text-[10px] font-black">
                    <Award className="w-3 h-3 mr-0.5" />
                    {college.rating}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
