import { ArrowRight, Heart, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const paypalDonateUrl = "https://www.paypal.com/donate/?hosted_button_id=FTQKYS6Z2H24E";

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Newsletter Subscriber",
        from_email: email,
        message: `New newsletter subscription request from the website.`,
        to_name: 'Mugume Charity Foundation',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our updates.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-green-800 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-green-700">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-white mr-3" />
              <span className="text-xl font-bold">Mugume Charity Foundation</span>
            </div>
            <p className="text-green-100 mb-6">
              Transforming lives through hope, compassion, and opportunity. Since 2015, we've been uplifting vulnerable children and families in Uganda through education, healthcare, protection, and empowerment programs.
            </p>
            <div className="space-y-3 text-green-100">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>Uganda</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>+256 788 293790 (WhatsApp)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>mugumehamidu111@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-green-100 hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/impact" className="text-green-100 hover:text-white transition-colors">Our Impact</Link></li>
              <li><Link to="/volunteer" className="text-green-100 hover:text-white transition-colors">Volunteer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Connected</h3>
            <p className="text-green-100 mb-4 text-sm">Get updates on our programs and the children we serve.</p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-green-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-white text-green-800 rounded-md hover:bg-green-50 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-6">
              <a 
                href={paypalDonateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <Heart className="mr-2 w-4 h-4" />
                Donate Now
                <ExternalLink className="ml-2 w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center border-b border-green-700 pb-4">
          <p className="text-green-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mugume Charity Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-green-200 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
        
        {/* Developer Credit */}
        <div className="pt-4 text-center">
          <p className="text-green-300 text-xs">
            Developed by{" "}
            <a 
              href="https://drewversedesign.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-100 hover:text-white transition-colors underline"
            >
              DrewVerse Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
