
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-green-800")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={cn("text-xl font-bold", isScrolled ? "text-green-800" : "text-white")}>
                Mugume Charity Foundation
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-green-700")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-green-700")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-green-700")}>
                    Our Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/programs" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">All Programs</div>
                          <p className="text-sm text-gray-500">Overview of all our initiatives</p>
                        </Link>
                      </li>
                      <li>
                        <div className="block p-3 space-y-1 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => scrollToSection('programs')}>
                          <div className="font-medium">Education Support</div>
                          <p className="text-sm text-gray-500">Scholarships and academic support</p>
                        </div>
                      </li>
                      <li>
                        <div className="block p-3 space-y-1 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => scrollToSection('programs')}>
                          <div className="font-medium">Health & Nutrition</div>
                          <p className="text-sm text-gray-500">Medical care and nutrition programs</p>
                        </div>
                      </li>
                      <li>
                        <div className="block p-3 space-y-1 rounded-md hover:bg-gray-100 cursor-pointer" onClick={() => scrollToSection('programs')}>
                          <div className="font-medium">Child Protection</div>
                          <p className="text-sm text-gray-500">Safeguarding vulnerable children</p>
                        </div>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-green-700")}>
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/volunteer" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Volunteer With Us</div>
                          <p className="text-sm text-gray-500">Join our mission and make a difference</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/donate" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Donate</div>
                          <p className="text-sm text-gray-500">Support our programs and initiatives</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/impact">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-green-700")}>
                      Our Impact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-green-800 hover:bg-gray-100")}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-green-800")}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-green-700")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-green-700")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          <div className="block">
            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-green-700")}>
              <span>Our Programs</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/programs" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-green-700")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                All Programs
              </Link>
            </div>
          </div>
          
          <div className="block">
            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-green-700")}>
              <span>Get Involved</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/volunteer" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-green-700")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Volunteer
              </Link>
              <Link to="/donate" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-green-700")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Donate
              </Link>
            </div>
          </div>
          
          <Link to="/impact" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-green-700")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Our Impact
          </Link>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-white bg-green-600 hover:bg-green-700" : "text-green-800 bg-white hover:bg-gray-100")}>
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
