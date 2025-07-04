
import { ArrowLeft, GraduationCap, Heart, Shield, Users, AlertTriangle, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support & Scholarships",
      description: "Empowering children through comprehensive educational support",
      impact: "30+ children annually",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      details: [
        "Full tuition coverage for primary and secondary education",
        "School supplies, uniforms, and learning materials",
        "Academic tutoring and homework assistance",
        "Educational workshops and parental engagement programs",
        "Career guidance and mentorship for older students"
      ],
      stats: {
        current: "30 children currently supported",
        success: "95% school completion rate",
        focus: "Rural and urban schools across 4 communities"
      }
    },
    {
      icon: Heart,
      title: "Health & Nutrition",
      description: "Ensuring children's physical well-being through comprehensive healthcare",
      impact: "45+ children regularly",
      color: "text-red-600",
      bgColor: "bg-red-50",
      details: [
        "Regular health screenings and medical checkups",
        "Vaccination programs and immunization support",
        "Nutritious meal programs and food security",
        "Health education and hygiene training",
        "Emergency medical care and treatment"
      ],
      stats: {
        current: "45 children receiving regular care",
        success: "100% vaccination compliance",
        focus: "Partnership with local health centers"
      }
    },
    {
      icon: Shield,
      title: "Child Protection",
      description: "Safeguarding vulnerable children from harm and providing safe environments",
      impact: "15+ children in need",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      details: [
        "Emergency shelter and temporary care facilities",
        "Counseling and trauma-informed support",
        "Legal advocacy and child rights protection",
        "Family reunification and restoration services",
        "Community awareness and prevention programs"
      ],
      stats: {
        current: "15 children in protection programs",
        success: "85% successful family reunification",
        focus: "24/7 emergency response capability"
      }
    },
    {
      icon: Users,
      title: "Family Empowerment",
      description: "Strengthening families through skills development and economic support",
      impact: "25+ families",
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "Vocational skills training and certification",
        "Microfinance loans and business support",
        "Parenting workshops and family counseling",
        "Women's empowerment and leadership programs",
        "Income-generating project development"
      ],
      stats: {
        current: "25 families actively participating",
        success: "80% increase in family income",
        focus: "Sustainable livelihood development"
      }
    },
    {
      icon: AlertTriangle,
      title: "Emergency Relief",
      description: "Providing immediate assistance during crises and disasters",
      impact: "20+ families",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      details: [
        "Emergency food assistance and nutrition support",
        "Temporary shelter and housing support", 
        "Medical crisis intervention and care",
        "Disaster response and recovery programs",
        "Community resilience and preparedness training"
      ],
      stats: {
        current: "20 families supported in emergencies",
        success: "48-hour emergency response time",
        focus: "Rapid deployment crisis teams"
      }
    },
    {
      icon: Briefcase,
      title: "Youth Vocational Training",
      description: "Preparing young people for employment and entrepreneurship",
      impact: "12+ young people",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      details: [
        "Technical and vocational skills certification",
        "Business development and entrepreneurship training",
        "Mentorship and career guidance programs",
        "Job placement assistance and networking",
        "Leadership development and life skills training"
      ],
      stats: {
        current: "12 youth in training programs",
        success: "90% job placement rate",
        focus: "Market-relevant skills development"
      }
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Our Programs - Mugume Charity Foundation"
        description="Learn about our comprehensive programs supporting vulnerable children and families in Uganda through education, healthcare, protection, and empowerment."
        keywords={['programs', 'education', 'healthcare', 'child protection', 'family empowerment', 'Uganda', 'charity']}
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
                Our Programs & Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive support across six key areas to ensure sustainable impact in the lives of children and families in Uganda.
              </p>
            </motion.div>

            <div className="space-y-16">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className={`w-16 h-16 ${program.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                        <program.icon className={`w-8 h-8 ${program.color}`} />
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {program.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 text-lg">
                        {program.description}
                      </p>
                      
                      <div className={`inline-block px-4 py-2 ${program.bgColor} ${program.color} text-sm font-semibold rounded-full mb-6`}>
                        Impact: {program.impact}
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="font-semibold text-gray-900">Key Statistics:</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {program.stats.current}
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {program.stats.success}
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {program.stats.focus}
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Components:</h3>
                      <ul className="space-y-3">
                        {program.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 text-center bg-green-50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Support Our Programs
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Every program depends on the generosity of donors and volunteers. Your support helps us continue transforming lives across Uganda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/donate"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Donate to Our Programs
                </Link>
                <Link 
                  to="/volunteer"
                  className="inline-flex items-center px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  Volunteer With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Programs;
