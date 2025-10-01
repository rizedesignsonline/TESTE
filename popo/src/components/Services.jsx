import React from 'react';
import { motion } from 'framer-motion';
import { Home, Droplets, Wind, Trash2, CheckCircle, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Services = () => {
  const {
    toast
  } = useToast();
  const services = [{
    icon: Home,
    title: "House Washing",
    description: "Gentle yet effective exterior house cleaning. We safely remove dirt, mildew, and buildup from all types of siding.",
    features: ["Soft wash technique", "All siding types", "Mildew removal", "Window frames included"],
    image: "House washing service showing clean home exterior with beautiful siding and sparkling windows"
  }, {
    icon: Droplets,
    title: "Concrete Cleaning",
    description: "Professional pressure washing for driveways, sidewalks, and patios. Remove stains, dirt, and grime to restore your concrete surfaces.",
    features: ["Pressure washing", "Stain removal", "Sealing available", "Eco-friendly solutions"],
    image: "Professional concrete cleaning service showing sparkling clean driveway and sidewalk with pressure washing equipment"
  }, {
    icon: Wind,
    title: "Window Cleaning",
    description: "Crystal clear windows inside and out. Professional cleaning for residential and commercial properties.",
    features: ["Interior & exterior", "Screen cleaning", "Sill cleaning", "Streak-free guarantee"],
    image: "Professional window cleaning service showing crystal clear windows on a beautiful home"
  }, {
    icon: Droplets,
    title: "Gutter Cleaning",
    description: "Complete gutter cleaning and maintenance. Protect your home from water damage with our thorough service.",
    features: ["Debris removal", "Downspout cleaning", "Inspection included", "Minor repairs"],
    image: "Gutter cleaning service showing clean gutters and downspouts on a well-maintained home"
  }, {
    icon: Trash2,
    title: "Trash Bin Cleaning",
    description: "Sanitize and deodorize your trash bins. Regular cleaning to keep your bins fresh and hygienic.",
    features: ["Deep sanitization", "Deodorizing treatment", "Regular service plans", "Eco-friendly products"],
    image: "Trash bin cleaning service showing sanitized and clean garbage bins with cleaning equipment"
  }, {
    icon: PlusCircle,
    title: "And More...",
    description: "We offer a variety of other exterior cleaning services. If you have a special request, don't hesitate to ask!",
    features: ["Fence cleaning", "Deck washing", "Rust removal", "Ask about our services"],
    image: "A collage of various exterior cleaning tasks like fence washing and deck cleaning"
  }];
  const handleServiceClick = serviceName => {
    if (serviceName === "And More...") {
      document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      toast({
        title: "Service Information",
        description: `🚧 ${serviceName} booking isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
        duration: 4000
      });
    }
  };
  return <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Professional Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive exterior cleaning services to keep your property looking its absolute best. 
            Every service is performed with attention to detail and guaranteed satisfaction.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img alt={service.image} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://horizons-cdn.hostinger.com/00c3cd30-4ab6-45ac-b938-d81b022466b1/upload-your-own-design-19336-6Z2Jz.png" />
                <div className="absolute top-4 left-4 bg-blue-600 rounded-lg p-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>)}
                </ul>
                
                <Button onClick={() => handleServiceClick(service.title)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-all duration-300 mt-auto">
                  {service.title === "And More..." ? "Contact Us" : "Learn More"}
                </Button>
              </div>
            </motion.div>)}
        </div>

        {/* CTA Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Property?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a free, no-obligation quote for any of our professional cleaning services. 
              We'll help restore your property's curb appeal and keep it looking its best.
            </p>
            <Button onClick={() => document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
          })} className="bg-white hover:bg-gray-200 text-blue-600 px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl">
              Get Your Free Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Services;