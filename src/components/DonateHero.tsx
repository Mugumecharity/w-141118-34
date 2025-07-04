
import { motion } from "framer-motion";

const DonateHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Your Support Matters
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Every donation, no matter the size, helps us continue our mission to transform lives and build stronger communities in Uganda.
      </p>
    </motion.div>
  );
};

export default DonateHero;
