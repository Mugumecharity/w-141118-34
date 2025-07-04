
import { motion } from "framer-motion";
import { TrendingUp, Award } from 'lucide-react';

const FutureGoals = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Looking Ahead: Our 2024-2025 Goals
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
              Expansion Goals
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Reach 150+ children across 6 communities
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Launch digital literacy program
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Establish community health centers
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Develop youth leadership programs
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              Quality Improvements
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Implement digital monitoring systems
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Enhance volunteer training programs
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Strengthen community partnerships
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Develop sustainability strategies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FutureGoals;
