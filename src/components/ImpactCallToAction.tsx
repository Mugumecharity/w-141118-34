
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Heart, Users, ExternalLink } from 'lucide-react';

const ImpactCallToAction = () => {
  const paypalDonateUrl = "https://www.paypal.com/donate/?hosted_button_id=FTQKYS6Z2H24E";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center bg-gray-900 text-white rounded-2xl p-8"
    >
      <h2 className="text-2xl font-bold mb-4">
        Be Part of Our Growing Impact
      </h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Our impact grows stronger with every supporter who joins our mission. Help us reach even more children and families in 2024.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href={paypalDonateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Heart className="mr-2 w-4 h-4" />
          Support Our Mission
          <ExternalLink className="ml-2 w-3 h-3" />
        </a>
        <Link 
          to="/volunteer"
          className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Users className="mr-2 w-4 h-4" />
          Volunteer With Us
        </Link>
      </div>
    </motion.div>
  );
};

export default ImpactCallToAction;
