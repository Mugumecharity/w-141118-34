
import { motion } from "framer-motion";
import { Users, MapPin, GraduationCap, Heart } from 'lucide-react';

const ImpactStatistics = () => {
  const stats = [
    {
      icon: Users,
      number: "90+",
      label: "Children Supported",
      description: "Vulnerable children receiving comprehensive care and support across all our programs"
    },
    {
      icon: MapPin,
      number: "4",
      label: "Communities Reached",
      description: "Rural and urban communities across Uganda where we have active programs"
    },
    {
      icon: GraduationCap,
      number: "95%",
      label: "School Enrollment Success",
      description: "Children successfully enrolled and staying in school through our education programs"
    },
    {
      icon: Heart,
      number: "45+",
      label: "Families Empowered",
      description: "Families with improved livelihoods and stability through our empowerment programs"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Impact at a Glance
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              {stat.number}
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">
              {stat.label}
            </div>
            <p className="text-sm text-gray-600">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImpactStatistics;
