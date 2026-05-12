/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCategories from './components/CourseCategories';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PopularPrograms from './components/PopularPrograms';
import Institutions from './components/Institutions';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import QueryPopup from './components/QueryPopup';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Show popup on page load with a slight delay
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar onTalkToExpert={openPopup} />
      <main>
        <Hero />
        <CourseCategories />
        <PopularPrograms />
        <Institutions />
        <Features />
        
        {/* Comparison CTA Section */}
        <section className="py-12 bg-teal-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/30 text-white text-sm font-semibold mb-8 backdrop-blur-sm border border-teal-400/30"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              100% Free AI-Powered Counseling
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Still Confused? Let Our Experts <br className="hidden md:block" /> Help You Decide the Best path.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openPopup}
                className="bg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-teal-900/20"
              >
                Talk to Expert
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Start Comparing
              </motion.button>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
      <QueryPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}

