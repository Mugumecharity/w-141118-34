
import { motion } from "framer-motion";
import { Heart, ExternalLink } from 'lucide-react';

const PayPalDonationSection = () => {
  const paypalDonateUrl = "https://www.paypal.com/donate/?hosted_button_id=FTQKYS6Z2H24E";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-blue-50 rounded-2xl p-8 mb-16 text-center"
    >
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Heart className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Donate Securely with PayPal
      </h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Make a secure donation through PayPal. You can use your PayPal account or donate with any credit or debit card - no PayPal account required.
      </p>
      
      <a 
        href={paypalDonateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold mb-4"
      >
        <Heart className="mr-3 w-5 h-5" />
        Donate Now via PayPal
        <ExternalLink className="ml-3 w-4 h-4" />
      </a>
      
      <div className="text-sm text-gray-500 space-y-1">
        <p>✓ Secure payment processing</p>
        <p>✓ Credit/debit cards accepted</p>
        <p>✓ No PayPal account required</p>
      </div>
    </motion.div>
  );
};

export default PayPalDonationSection;
