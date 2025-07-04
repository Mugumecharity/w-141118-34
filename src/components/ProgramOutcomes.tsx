
import { motion } from "framer-motion";

const ProgramOutcomes = () => {
  const programStats = [
    {
      program: "Education Support",
      served: "30+",
      impact: "95% completion rate",
      highlight: "All sponsored children completed their school year successfully"
    },
    {
      program: "Health & Nutrition",
      served: "45+",
      impact: "100% vaccination compliance",
      highlight: "Zero preventable disease cases among program participants"
    },
    {
      program: "Child Protection",
      served: "15+",
      impact: "85% family reunification",
      highlight: "Successful reintegration of children with their families"
    },
    {
      program: "Family Empowerment",
      served: "25+",
      impact: "80% income increase",
      highlight: "Average family income doubled within one year"
    },
    {
      program: "Emergency Relief",
      served: "20+",
      impact: "48-hour response time",
      highlight: "Rapid deployment during COVID-19 and other emergencies"
    },
    {
      program: "Youth Training",
      served: "12+",
      impact: "90% job placement",
      highlight: "Most graduates secured employment or started their own businesses"
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
        Program Outcomes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programStats.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <h3 className="font-semibold text-gray-900 mb-3">
              {program.program}
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">People Served:</span>
                <span className="font-semibold text-green-600">{program.served}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Success Rate:</span>
                <span className="font-semibold text-blue-600">{program.impact}</span>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <p className="text-sm text-gray-700 italic">
                  "{program.highlight}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProgramOutcomes;
