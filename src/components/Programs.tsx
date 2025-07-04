
import { motion } from "framer-motion";
import { GraduationCap, Heart, Shield, Users, AlertTriangle, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support & Scholarships",
      description: "Tuition, school materials, uniforms, and tutoring support",
      impact: "30+ children annually",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      details: [
        "Full tuition coverage",
        "School supplies and uniforms",
        "Academic tutoring and mentorship",
        "Educational workshops for parents"
      ]
    },
    {
      icon: Heart,
      title: "Health & Nutrition",
      description: "Medical checkups, vaccinations, and nutritious meals",
      impact: "45+ children regularly",
      color: "text-red-600",
      bgColor: "bg-red-50",
      details: [
        "Regular health screenings",
        "Vaccination programs",
        "Nutritious meal programs",
        "Health education workshops"
      ]
    },
    {
      icon: Shield,
      title: "Child Protection",
      description: "Safe shelter, counseling, and emergency care",
      impact: "15+ children in need",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      details: [
        "Emergency shelter and care",
        "Counseling and trauma support",
        "Legal advocacy and protection",
        "Family reunification services"
      ]
    },
    {
      icon: Users,
      title: "Family Empowerment",
      description: "Skills development and income-generating projects",
      impact: "25+ families",
      color: "text-green-600",
      bgColor: "bg-green-50",
      details: [
        "Vocational skills training",
        "Microfinance and loans",
        "Parenting workshops",
        "Women's empowerment programs"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Emergency Relief",
      description: "Food, shelter, and medical crisis aid",
      impact: "20+ families",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      details: [
        "Emergency food assistance",
        "Temporary shelter provision",
        "Medical crisis intervention",
        "Disaster response support"
      ]
    },
    {
      icon: Briefcase,
      title: "Youth Vocational Training",
      description: "Skills workshops and entrepreneurship support",
      impact: "12+ young people",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      details: [
        "Technical skills training",
        "Business development support",
        "Mentorship programs",
        "Job placement assistance"
      ]
    }
  ];

  const galleryImages = [
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0172.jpg?raw=true",
      alt: "Education Program"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0064.jpg?raw=true",
      alt: "Health & Nutrition"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0062.jpg?raw=true",
      alt: "Family Empowerment"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0060.jpg?raw=true",
      alt: "Child Protection"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0058.jpg?raw=true",
      alt: "Community Events"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0067.jpg?raw=true",
      alt: "Learning Activities"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0068.jpg?raw=true",
      alt: "Program Activities"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0108.jpg?raw=true",
      alt: "Community Support"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0120.jpg?raw=true",
      alt: "Educational Activities"
    },
    {
      src: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0165.jpg?raw=true",
      alt: "Community Programs"
    }
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support across six key areas to ensure sustainable impact in the lives of children and families in Uganda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 ${program.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <program.icon className={`w-6 h-6 ${program.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>
              
              <p className="text-gray-600 mb-3">
                {program.description}
              </p>
              
              <div className={`inline-block px-3 py-1 ${program.bgColor} ${program.color} text-sm font-medium rounded-full mb-4`}>
                {program.impact}
              </div>
              
              <ul className="space-y-2 mb-4">
                {program.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/programs"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Learn More About Our Programs
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
