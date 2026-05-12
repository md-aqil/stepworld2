import { motion } from 'motion/react';
import { Briefcase, Monitor, BookOpen, PenTool, Database, ShieldCheck } from 'lucide-react';

const categories = [
  { name: 'Management', icon: Briefcase, color: 'bg-blue-50 text-blue-600', count: '45+ courses' },
  { name: 'Engineering', icon: Monitor, color: 'bg-green-50 text-green-600', count: '30+ courses' },
  { name: 'Medical Sciences', icon: ShieldCheck, color: 'bg-red-50 text-red-600', count: '20+ courses' },
  { name: 'Commerce & Finance', icon: Database, color: 'bg-purple-50 text-purple-600', count: '25+ courses' },
  { name: 'Arts & Humanities', icon: PenTool, color: 'bg-orange-50 text-orange-600', count: '20+ courses' },
  { name: 'Law', icon: BookOpen, color: 'bg-indigo-50 text-indigo-600', count: '15+ courses' },
];

export default function CourseCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore by Categories</h2>
          <p className="mt-4 text-lg text-gray-600">Remove the stress — choose from a wide range of UGC-DEB approved courses.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer text-center group"
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight mb-1">{cat.name}</h3>
              <p className="text-xs text-gray-500">{cat.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
