import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Concrete Cleaning',
    'House Washing',
    'Window Cleaning', 
    'Gutter Cleaning',
    'Trash Bin Cleaning'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <img src="https://horizons-cdn.hostinger.com/00c3cd30-4ab6-45ac-b938-d81b022466b1/91481c7596be4ba61bb01ce9122a63ed.png" alt="BrightWash Logo" className="h-16 w-auto" />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted local exterior cleaning experts. We specialize in keeping your property spotless 
              and well-maintained with professional, reliable service.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold text-white mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold text-white mb-6 block">Our Services</span>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-bold text-white mb-6 block">Contact Info</span>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@brightwash.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">Serving Local Community</p>
                  <p className="text-sm text-gray-400">8+ Counties</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Business Hours:</p>
              <p className="text-sm text-blue-400">Mon-Sat: 7AM-7PM</p>
              <p className="text-sm text-blue-400">Sunday: 9AM-5PM</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} BrightWash Exterior Cleaning. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                Insurance Info
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;