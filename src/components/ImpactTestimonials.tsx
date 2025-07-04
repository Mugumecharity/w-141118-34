
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ImpactTestimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="bg-green-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Real Stories, Real Impact
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <blockquote className="text-gray-700 italic mb-3">
              "Mugume Charity gave my niece a second chance at life—education, shelter, and love."
            </blockquote>
            <div className="font-semibold text-gray-900">Auntie Rose</div>
            <div className="text-sm text-gray-600">Guardian of Devine (11)</div>
          </div>
          
          <div className="text-center">
            <blockquote className="text-gray-700 italic mb-3">
              "From the streets to school. Mugume gave Tom a future."
            </blockquote>
            <div className="font-semibold text-gray-900">James</div>
            <div className="text-sm text-gray-600">Former street child</div>
          </div>
          
          <div className="text-center">
            <blockquote className="text-gray-700 italic mb-3">
              "After losing her parents, Racheal had no hope. Today, she's back in school—happy and healthy."
            </blockquote>
            <div className="font-semibold text-gray-900">Grace</div>
            <div className="text-sm text-gray-600">Guardian after COVID loss</div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/stories"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Read More Stories
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactTestimonials;
