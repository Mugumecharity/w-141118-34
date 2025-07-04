
import { motion } from "framer-motion";
import { GraduationCap, Heart, Users } from 'lucide-react';

const AdditionalWaysToHelp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Additional Ways to Help
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Sponsor a Child</h3>
          <p className="text-gray-600 text-sm mb-4">
            Provide ongoing support for a specific child's education, healthcare, and development.
          </p>
          <a 
            href="https://wa.me/256788293790?text=I'm interested in child sponsorship"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Learn More →
          </a>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">In-Kind Donations</h3>
          <p className="text-gray-600 text-sm mb-4">
            Donate school supplies, medical equipment, or other needed items directly to our programs.
          </p>
          <a 
            href="mailto:mugumehamidu111@gmail.com?subject=In-Kind Donation Inquiry"
            className="text-green-600 hover:text-green-700 text-sm font-medium"
          >
            Contact Us →
          </a>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Corporate Partnership</h3>
          <p className="text-gray-600 text-sm mb-4">
            Partner with us for employee engagement, CSR initiatives, and community impact programs.
          </p>
          <a 
            href="mailto:mugumehamidu111@gmail.com?subject=Corporate Partnership Inquiry"
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Partner With Us →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AdditionalWaysToHelp;
