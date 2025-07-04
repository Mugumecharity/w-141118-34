
import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Contact Us Today
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our programs or want to get involved? Reach out to our team and let's discuss how we can work together to transform lives.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mugume Charity Foundation</h3>
              <p className="text-gray-600">Transforming Lives in Uganda</p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="tel:+256788293790" 
                className="flex items-center justify-center p-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                <span>+256 788 293790</span>
              </a>
              
              <a 
                href="mailto:mugumehamidu111@gmail.com" 
                className="flex items-center justify-center p-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                <span>mugumehamidu111@gmail.com</span>
              </a>
              
              <a 
                href="https://www.mugumecharity.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                <Globe className="w-5 h-5 mr-3" />
                <span>www.mugumecharity.org</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
