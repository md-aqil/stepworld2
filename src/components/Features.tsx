import { motion } from 'motion/react';
import { Target, Users, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: "Unbiased Comparison",
    desc: "We don't favor any university. Our data-driven approach helps you pick based on facts.",
    icon: Target,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Free Expert Counseling",
    desc: "Talk to our senior counselors who help you navigate through the complex admission process.",
    icon: Users,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "CV Approved Universities",
    desc: "We only list universities that pass our rigorous 30+ factor quality check.",
    icon: Shield,
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Fast-track Admissions",
    desc: "Direct coordination with universities to ensure your application gets processed quickly.",
    icon: Zap,
    color: "from-purple-500 to-pink-600"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Why <span className="text-teal-600 underline decoration-teal-200">StepWorld</span> is your best education partner?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've helped millions of students find their dream careers by simplifying the search for education.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-teal-100">
              <p className="text-teal-600 font-bold text-lg mb-2">Did you know?</p>
              <p className="text-gray-700 italic">
                "94% of our students report finding a better university match than searching on their own with StepWorld."
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md border border-gray-100 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg shadow-orange-200`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
