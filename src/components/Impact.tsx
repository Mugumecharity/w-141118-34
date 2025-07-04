import { motion } from "framer-motion";
import { Users, MapPin, GraduationCap, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Impact = () => {
  const paypalDonateUrl = "https://www.paypal.com/donate/?hosted_button_id=FTQKYS6Z2H24E";

  const stats = [
    {
      icon: Users,
      number: "90+",
      label: "Children Supported",
      description: "Vulnerable children receiving comprehensive care and support"
    },
    {
      icon: MapPin,
      number: "4",
      label: "Communities Reached",
      description: "Rural and urban communities across Uganda"
    },
    {
      icon: GraduationCap,
      number: "95%",
      label: "School Enrollment Success",
      description: "Children successfully enrolled and staying in school"
    },
    {
      icon: Heart,
      number: "45+",
      label: "Families Empowered",
      description: "Families with improved livelihoods and stability"
    }
  ];

  const testimonials = [
    {
      name: "Auntie Rose",
      role: "Guardian of Devine (11)",
      quote: "Mugume Charity gave my niece a second chance at life—education, shelter, and love."
    },
    {
      name: "James",
      role: "Former street child",
      quote: "From the streets to school. Mugume gave Tom a future."
    },
    {
      name: "Grace",
      role: "Guardian after COVID loss",
      quote: "After losing her parents, Racheal had no hope. Today, she's back in school—happy and healthy."
    }
  ];

  return (
    <section id="impact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact at a Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Since 2015, we've been making a tangible difference in the lives of vulnerable children and families across Uganda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real Stories Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Real Stories of Change
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Behind every statistic is a real person whose life has been transformed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-green-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Be Part of Our Story
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Your support helps us continue transforming lives and building stronger communities. Join us in making a lasting difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={paypalDonateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Heart className="mr-2 w-4 h-4" />
              Donate Now
              <ExternalLink className="ml-2 w-3 h-3" />
            </a>
            <Link 
              to="/volunteer"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
            >
              Volunteer With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
