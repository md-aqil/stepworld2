import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="StepWorld" className="h-16 mb-6 brightness-0 invert opacity-90" />
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering students to find the right university, college, and courses through expert guidance and data-driven comparisons.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/stepworldeducation?igsh=NzRxMzdsbGF3Mmwz" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-500 pl-3">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">Compare Universities</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Courses List</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Free Counseling</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-500 pl-3">Popular Courses</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-teal-500 transition-colors">MBA</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">MCA</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">BBA</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">BCA</a></li>
              <li><a href="#" className="hover:text-teal-500 transition-colors">M.Com</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-teal-500 pl-3">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-teal-500 mr-3 shrink-0" />
                  <span>G - 8, Ground Floor, Step World Education, Noida Sector 3, Noida, Uttar Pradesh 201303</span>
                </li>
               <li className="flex items-center">
                 <Phone className="w-5 h-5 text-teal-500 mr-3 shrink-0" />
                 <span>099102 45535</span>
               </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-teal-500 mr-3 shrink-0" />
                  <span>helpdesk@stepworldeducation.com</span>
               </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} StepWorld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
