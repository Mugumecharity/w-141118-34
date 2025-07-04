
import { ArrowLeft, Users, Clock, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Volunteer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const opportunities = [
    {
      title: "Education Support",
      description: "Help with homework assistance, tutoring, and educational activities",
      commitment: "4-8 hours/week",
      requirements: "Basic literacy, patience with children",
      icon: "📚"
    },
    {
      title: "Community Outreach",
      description: "Family visits, needs assessments, and community engagement",
      commitment: "6-10 hours/week", 
      requirements: "Communication skills, cultural sensitivity",
      icon: "🏘️"
    },
    {
      title: "Healthcare Support",
      description: "Assist with basic health services and health education",
      commitment: "8-12 hours/week",
      requirements: "Basic health knowledge or medical background",
      icon: "🏥"
    },
    {
      title: "Skills Training",
      description: "Teach vocational skills, business development, or life skills",
      commitment: "6-8 hours/week",
      requirements: "Relevant expertise or professional experience",
      icon: "🛠️"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Volunteer With Us - Mugume Charity Foundation"
        description="Join our mission to transform lives in Uganda. Discover volunteer opportunities in education, healthcare, community outreach, and skills training."
        keywords={['volunteer', 'Uganda', 'charity work', 'community service', 'education support', 'healthcare']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
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
                Volunteer With Us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our mission to transform lives and make a lasting difference in the communities we serve across Uganda.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Volunteers working with children"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            </motion.div>

            {/* Volunteer Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Volunteer Opportunities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {opportunities.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  >
                    <div className="text-4xl mb-4">{opportunity.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {opportunity.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{opportunity.commitment}</span>
                      </div>
                      <div className="flex items-start text-gray-500">
                        <Award className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{opportunity.requirements}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Program Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8 mb-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Our Volunteer Program
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">40 Hours Training</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive orientation covering child protection, cultural sensitivity, and program-specific skills.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Monthly Check-ins</h3>
                  <p className="text-gray-600 text-sm">
                    Regular support meetings with program coordinators and fellow volunteers for guidance and reflection.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Certificates</h3>
                  <p className="text-gray-600 text-sm">
                    Recognition of your service and skills development through official volunteer certificates.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* International Volunteering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  International Volunteering
                </h2>
                <p className="text-gray-600 mb-6">
                  We welcome international volunteers for long-term immersion programs (3-6 months). 
                  Experience Ugandan culture while making a meaningful impact in our communities.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Cultural orientation and language support
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Local accommodation assistance
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        24/7 program coordinator support
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Community integration activities
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Requirements:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Minimum 3-month commitment
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Relevant skills or experience
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Background check and references
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Cultural sensitivity and adaptability
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact and Apply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gray-900 text-white rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join our team of dedicated volunteers and help us transform lives in Uganda. Your skills, time, and compassion can make a lasting impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/256788293790?text=I'm interested in volunteering with Mugume Charity Foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Apply to Volunteer
                </a>
                <a 
                  href="mailto:mugumehamidu111@gmail.com?subject=Volunteer Program Inquiry"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Ask Questions
                </a>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <p>WhatsApp: +256 788 293790 | Email: mugumehamidu111@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Volunteer;
