import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "MBA Student",
    content: "StepWorld made it so easy to compare universities. I was confused between three colleges, but their comparison portal cleared everything.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Sneha Patel",
    role: "Working Professional",
    content: "The counseling session with StepWorld was brilliant. They actually listen to your needs instead of pushing one university. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sneha"
  },
  {
    name: "Arjun Verma",
    role: "MCA Aspirant",
    content: "I found the best EMI options through StepWorld. It helped me manage my fees without any financial burden.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=arjun"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-600">Join over 1 million students who found their path with StepWorld</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-teal-50/50 p-8 rounded-3xl border border-teal-100 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-teal-200 opacity-50" />
              <div>
                <div className="flex mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-teal-500 fill-teal-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{test.content}"</p>
              </div>
              <div className="flex items-center">
                <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900">{test.name}</h4>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
