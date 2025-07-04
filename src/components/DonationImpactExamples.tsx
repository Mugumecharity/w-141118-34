
import { motion } from "framer-motion";

const DonationImpactExamples = () => {
  const donationExamples = [
    {
      amount: "$10",
      impact: "School supplies for 1 child for 2 months",
      icon: "📚",
      color: "bg-blue-50 text-blue-600"
    },
    {
      amount: "$25", 
      impact: "Healthy meals for 3 children for 1 week",
      icon: "🍎",
      color: "bg-green-50 text-green-600"
    },
    {
      amount: "$50",
      impact: "Healthcare for 1 child for 2 months",
      icon: "🏥",
      color: "bg-red-50 text-red-600"
    },
    {
      amount: "$100",
      impact: "Skills training for a family for 1 month",
      icon: "🛠️",
      color: "bg-purple-50 text-purple-600"
    },
    {
      amount: "$250",
      impact: "Emergency relief for a family in crisis",
      icon: "🆘",
      color: "bg-orange-50 text-orange-600"
    },
    {
      amount: "$500",
      impact: "Full education support for 1 child for a year",
      icon: "🎓",
      color: "bg-indigo-50 text-indigo-600"
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
        Your Impact
      </h2>
      <p className="text-center text-gray-600 mb-8">
        See how your donation directly transforms lives in our communities
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donationExamples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <div className="text-4xl mb-4">{example.icon}</div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${example.color}`}>
              {example.amount}
            </div>
            <p className="text-gray-700 font-medium">
              {example.impact}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DonationImpactExamples;
