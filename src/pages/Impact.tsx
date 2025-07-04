
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import ImpactStatistics from '@/components/ImpactStatistics';
import ProgramOutcomes from '@/components/ProgramOutcomes';
import ImpactTestimonials from '@/components/ImpactTestimonials';
import FutureGoals from '@/components/FutureGoals';
import ImpactCallToAction from '@/components/ImpactCallToAction';

const Impact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Our Impact - Mugume Charity Foundation"
        description="See the real impact of our work in Uganda. Statistics, success stories, and measurable outcomes from our programs supporting children and families."
        keywords={['impact', 'results', 'success stories', 'Uganda charity outcomes', 'program effectiveness', 'community development']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Impact
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Since 2015, we've been making measurable differences in the lives of vulnerable children and families across Uganda. Here's the evidence of our impact.
              </p>
            </motion.div>

            <ImpactStatistics />
            <ProgramOutcomes />
            <ImpactTestimonials />
            <FutureGoals />
            <ImpactCallToAction />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Impact;
