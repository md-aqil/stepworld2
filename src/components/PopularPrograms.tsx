import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Landmark, Monitor, TrendingUp } from 'lucide-react';

const programs = [
  { id: '01', name: 'B.Tech', icon: Monitor, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: '02', name: 'MBA / PGDM', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: '03', name: 'MBBS / BAMS', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50' },
  { id: '04', name: 'B.Sc', icon: BookOpen, color: 'text-amber-600', bg: 'bg-amber-50' },
  { id: '05', name: 'BBA / B.Com / BCA', icon: Award, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: '06', name: 'LLB', icon: Landmark, color: 'text-slate-600', bg: 'bg-slate-50' },
];

export default function PopularPrograms() {
  return (
    <section className="py-12 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-4 border border-orange-100"
          >
            Trending Education
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Most Popular Programs
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most sought-after degrees across various disciplines, vetted for quality and global recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-teal-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${program.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className={`w-7 h-7 ${program.color}`} />
                </div>
                <span className="text-4xl font-black text-gray-50/10 group-hover:text-gray-100 transition-colors duration-300">
                  {program.id}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                {program.name}
              </h3>
              <div className="flex items-center text-teal-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Courses
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
