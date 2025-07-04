
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import DonateHero from '@/components/DonateHero';
import PayPalDonationSection from '@/components/PayPalDonationSection';
import DonationImpactExamples from '@/components/DonationImpactExamples';
import DonationMethods from '@/components/DonationMethods';
import AdditionalWaysToHelp from '@/components/AdditionalWaysToHelp';
import DonateCallToAction from '@/components/DonateCallToAction';

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Donate - Support Our Mission - Mugume Charity Foundation"
        description="Your donation helps transform lives in Uganda. Support education, healthcare, child protection, and family empowerment programs."
        keywords={['donate', 'charity donation', 'Uganda support', 'child sponsorship', 'education funding', 'healthcare support']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <DonateHero />
            <PayPalDonationSection />

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Children in classroom"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </motion.div>

            <DonationImpactExamples />
            <DonationMethods />
            <AdditionalWaysToHelp />
            <DonateCallToAction />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Donate;
