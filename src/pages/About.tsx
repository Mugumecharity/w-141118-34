
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About Mugume Charity Foundation
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We are a Uganda-based nonprofit organization dedicated to uplifting vulnerable children and families through compassion-driven programs.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    To transform lives through compassion-driven programs that support children's rights, 
                    family well-being, and sustainable community development.
                  </p>
                  <p className="text-gray-600">
                    Since 2015, we've worked hand-in-hand with local communities to build a future where 
                    every child has a chance to thrive through education, healthcare, protection, and empowerment.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-green-50 rounded-2xl p-8 border border-green-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Compassion & Respect:</strong> Every child deserves dignity, love, and support.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Transparency & Accountability:</strong> We maintain open communication with our donors and communities.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Empowerment & Sustainability:</strong> We build long-term solutions that communities can maintain.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Cultural Sensitivity:</strong> We respect and work within local customs and traditions.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Child-Centered Development:</strong> Children's voices and needs guide our programs.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Mugume Charity Foundation was founded in 2015 with a simple but powerful vision: to ensure that every 
                    vulnerable child in Uganda has access to education, healthcare, protection, and the opportunity to thrive.
                  </p>
                  <p className="text-gray-600 mb-4">
                    What started as a small community initiative has grown into a comprehensive organization serving 
                    four communities across Uganda. We work directly with families, local leaders, and community organizations 
                    to identify needs and develop sustainable solutions.
                  </p>
                  <p className="text-gray-600">
                    Today, we support over 90 children and 45 families through our six core programs, maintaining our 
                    commitment to transparency, cultural sensitivity, and community-driven development. Every program we 
                    implement is designed with input from the communities we serve.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Focus Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Education Access",
                      description: "Empowering children through scholarships and academic support",
                      impact: "30+ children annually"
                    },
                    {
                      title: "Health & Nutrition", 
                      description: "Ensuring children's physical well-being through essential care",
                      impact: "45+ children regularly"
                    },
                    {
                      title: "Child Protection",
                      description: "Safeguarding vulnerable children from harm and neglect", 
                      impact: "15+ children in need"
                    },
                    {
                      title: "Community Empowerment",
                      description: "Strengthening families through training and economic support",
                      impact: "25+ families"
                    },
                    {
                      title: "Emergency Relief",
                      description: "Providing immediate aid during crises and disasters",
                      impact: "20+ families"
                    },
                    {
                      title: "Youth Development", 
                      description: "Vocational training and entrepreneurship support",
                      impact: "12+ young people"
                    }
                  ].map((area, i) => (
                    <Card key={i} className="bg-green-50 border border-green-100">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-2 text-green-800">{area.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                        <div className="text-sm font-medium text-green-600">{area.impact}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/volunteer" className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all group">
                  Volunteer With Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/donate" className="inline-flex items-center px-5 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-all">
                  Support Our Mission
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
