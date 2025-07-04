
import { motion } from "framer-motion";
import { Heart, Users } from 'lucide-react';

const DonationMethods = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-green-50 rounded-2xl p-8 mb-16"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Other Ways to Support
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Heart className="w-5 h-5 text-red-500 mr-2" />
            Direct Contact
          </h3>
          <p className="text-gray-600 mb-4">
            Contact us directly for large donations, recurring support, or to discuss specific programs you'd like to support.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>WhatsApp:</strong> +256 788 293790</p>
            <p><strong>Email:</strong> mugumehamidu111@gmail.com</p>
            <p><strong>Website:</strong> www.mugumecharity.org</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
            <Users className="w-5 h-5 text-blue-500 mr-2" />
            Transparency Promise
          </h3>
          <p className="text-gray-600 mb-4">
            We believe in complete transparency. You'll receive regular updates on how your donation is being used and the impact it's making.
          </p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Quarterly impact reports</li>
            <li>• Photo updates from the field</li>
            <li>• Direct stories from beneficiaries</li>
            <li>• Financial transparency reports</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default DonationMethods;
