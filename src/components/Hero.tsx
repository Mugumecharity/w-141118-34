
import { ArrowRight, Heart, Users, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative mt-16 md:mt-0 w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-green-800 relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[750px] w-full">
        <div className="absolute inset-0 bg-green-800 w-full">
          <img 
            src="https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0108.jpg?raw=true" 
            alt="Children from Mugume Charity Foundation" 
            className={`w-full h-full object-cover opacity-70 ${isMobile ? 'object-center' : 'object-center'}`} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-800/80 via-green-800/70 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-16 sm:pt-20 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Transforming Lives with Hope, Compassion, and Opportunity</motion.h1>
              <motion.p className="banner-subtitle text-gray-200 mt-4 sm:mt-6" variants={itemVariants}>
                Mugume Charity Foundation uplifts vulnerable children and families in Uganda through education, healthcare, protection, and empowerment programs.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-white text-green-800 rounded-md hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:shadow-white/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const programsSection = document.getElementById('programs');
                    if (programsSection) {
                      programsSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Support Our Mission
                  <Heart className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-green-700 text-white rounded-md hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:shadow-green-700/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const impactSection = document.getElementById('impact');
                    if (impactSection) {
                      impactSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  See Our Impact
                  <Users className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-600 mb-2 md:mb-3">
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Child-Centered Care</h3>
            <p className="text-gray-600 text-xs md:text-sm">Supporting vulnerable children through education, healthcare, and protection programs.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-600 mb-2 md:mb-3">
              <Users className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Community Impact</h3>
            <p className="text-gray-600 text-xs md:text-sm">Empowering families and communities through sustainable development programs.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 flex items-center justify-center rounded-lg text-green-600 mb-2 md:mb-3">
              <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Transparent Mission</h3>
            <p className="text-gray-600 text-xs md:text-sm">Working with accountability and cultural sensitivity to ensure lasting change.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
