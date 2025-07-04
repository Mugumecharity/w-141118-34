
import { ArrowLeft, Heart, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Stories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stories = [
    {
      title: "From Street to School: Tom's Transformation",
      excerpt: "James rescued Tom from the streets and watched him flourish through our education program.",
      story: "Tom was living on the streets of Kampala when James, our community outreach coordinator, found him. Malnourished and without hope, Tom had given up on education after losing his parents. Through our comprehensive support program, Tom received not just schooling, but also counseling, healthcare, and a loving community. Today, Tom is in his final year of secondary school and dreams of becoming a teacher to help other children like himself.",
      testimonial: "From the streets to school. Mugume gave Tom a future.",
      author: "James",
      role: "Community Outreach Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 2024",
      impact: "Tom now ranks in the top 10% of his class and mentors younger students."
    },
    {
      title: "A Second Chance at Childhood: Devine's Story",
      excerpt: "Auntie Rose saw her niece transform from a traumatized child to a confident young girl.",
      story: "When Devine came to live with her aunt Rose after losing her parents, she was withdrawn and struggling with trauma. At just 11 years old, she had already experienced more hardship than most adults. Through our child protection and education programs, Devine received trauma counseling, educational support, and most importantly, a community that cared for her. Auntie Rose watched as her niece slowly began to smile again, excel in school, and dream of a bright future.",
      testimonial: "Mugume Charity gave my niece a second chance at life—education, shelter, and love.",
      author: "Auntie Rose",
      role: "Guardian of Devine (11)",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "February 2024",
      impact: "Devine is now one of the top students in her class and wants to become a doctor."
    },
    {
      title: "Hope After Loss: Racheal's Journey",
      excerpt: "Grace watched her ward overcome the devastating loss of her parents during COVID-19.",
      story: "The COVID-19 pandemic left Racheal orphaned and hopeless at just 9 years old. Grace, a family friend, took her in but struggled to provide for her basic needs, let alone education. When Mugume Charity Foundation stepped in, everything changed. Racheal received educational support, healthcare, and psychological counseling to help her process her grief. Grace watched as the little girl who had lost everything slowly began to heal and thrive.",
      testimonial: "After losing her parents, Racheal had no hope. Today, she's back in school—happy and healthy.",
      author: "Grace",
      role: "Guardian after COVID loss",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "January 2024",
      impact: "Racheal has perfect school attendance and is passionate about helping other orphaned children."
    },
    {
      title: "Breaking the Cycle: Sarah's Family Empowerment",
      excerpt: "A single mother transforms her family's future through our microfinance and skills training program.",
      story: "Sarah was a single mother of three, struggling to make ends meet with small-scale farming. When drought hit her region, she thought all hope was lost. Our family empowerment program provided her with vocational training in tailoring and a small microloan to start her business. Within six months, Sarah's income had tripled, and she could afford to send all her children to school. Today, she employs two other women in her community and has become a role model for economic empowerment.",
      testimonial: "I never thought I could provide a good life for my children. Now I'm planning to expand my business and help other mothers too.",
      author: "Sarah",
      role: "Program Beneficiary & Entrepreneur",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 2023",
      impact: "Sarah's business now employs 3 people and serves as a training center for other women."
    },
    {
      title: "From Patient to Helper: Michael's Health Journey",
      excerpt: "A young boy's health transformation inspires him to help other children access healthcare.",
      story: "Michael was frequently absent from school due to recurring illnesses that his family couldn't afford to treat properly. When he joined our health and nutrition program, regular check-ups revealed that he had been suffering from preventable conditions. With proper medical care, nutritious meals, and health education, Michael's health improved dramatically. Inspired by the care he received, Michael now volunteers as a peer health educator, teaching other children about hygiene and nutrition.",
      testimonial: "The doctors and nurses here saved my life. Now I want to help save other children too.",
      author: "Michael",
      role: "Program Beneficiary & Peer Educator (Age 14)",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "November 2023",
      impact: "Michael hasn't missed a day of school in over a year and has trained 20+ peers in health education."
    },
    {
      title: "Building Tomorrow: David's Vocational Success",
      excerpt: "A young man transforms his community through skills learned in our youth training program.",
      story: "David had dropped out of school due to financial constraints and was facing an uncertain future. When he joined our youth vocational training program, he discovered a passion for carpentry and construction. After completing his certification, David not only secured employment but also started his own small construction business. He now employs four other young people from his community and has built low-cost housing for families in need.",
      testimonial: "This program didn't just teach me skills—it taught me how to dream big and make those dreams reality.",
      author: "David",
      role: "Vocational Training Graduate & Business Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "October 2023",
      impact: "David's business has completed 15 construction projects and provides jobs for 4 young people."
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Success Stories - Mugume Charity Foundation"
        description="Read inspiring stories of transformation and hope from the children and families we serve in Uganda. Real stories of impact and change."
        keywords={['success stories', 'testimonials', 'Uganda charity stories', 'child transformation', 'community impact', 'real stories']}
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
                Stories of Hope & Transformation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Behind every statistic is a real person whose life has been transformed through our programs. These are their stories.
              </p>
            </motion.div>

            {/* Stories */}
            <div className="space-y-16">
              {stories.map((story, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="order-2 lg:order-1 p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {story.date}
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {story.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {story.story}
                      </p>
                      
                      <blockquote className="border-l-4 border-green-500 pl-4 mb-6">
                        <p className="text-gray-700 italic mb-2">"{story.testimonial}"</p>
                        <footer className="text-sm text-gray-600">
                          <strong>{story.author}</strong>, {story.role}
                        </footer>
                      </blockquote>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-start">
                          <Star className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-green-800 mb-1">Impact Today:</h4>
                            <p className="text-green-700 text-sm">{story.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Statistics Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 bg-green-50 rounded-2xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Every Story Matters
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                These stories represent just a few of the many lives transformed through our programs. Each child, each family, each community member has a unique story of hope and resilience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">90+</div>
                  <div className="text-sm text-gray-600">Children with stories like these</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">45+</div>
                  <div className="text-sm text-gray-600">Families transformed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">4</div>
                  <div className="text-sm text-gray-600">Communities impacted</div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 text-center bg-gray-900 text-white rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                Help Us Write More Stories
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Every donation, every volunteer hour, every act of support helps us write new stories of transformation and hope.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/donate"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Heart className="mr-2 w-4 h-4" />
                  Support Our Mission
                </Link>
                <Link 
                  to="/volunteer"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Volunteer With Us
                </Link>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <p>Contact us: +256 788 293790 | mugumehamidu111@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Stories;
