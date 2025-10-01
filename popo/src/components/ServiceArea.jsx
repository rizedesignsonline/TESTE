import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ServiceArea = () => {
  const serviceAreas = ["Jefferson County (Louisville)", "Oldham County", "Bullitt County", "Shelby County", "Spencer County", "Nelson County", "Hardin County", "Henry County"];
  const benefits = [{
    icon: Clock,
    title: "Same Day Service",
    description: "Quick response times for urgent cleaning needs"
  }, {
    icon: MapPin,
    title: "Local Expertise",
    description: "We know the area and understand local cleaning challenges"
  }, {
    icon: Phone,
    title: "24/7 Support",
    description: "Always available to answer your questions"
  }];
  return <section id="service-area" className="py-20 bg-white">
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
            Our <span className="gradient-text">Service Area</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving our local community with professional exterior cleaning services. 
            We're your trusted neighborhood cleaning experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden">
              {/* Map Placeholder */}
              <div className="relative aspect-[3/4] bg-white rounded-xl shadow-lg overflow-hidden">
                <img alt="Service area map showing BrightWash coverage zones in Kentucky" class="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/00c3cd30-4ab6-45ac-b938-d81b022466b1/louisville-map-kentucky-1265x1262-wEGcC.jpg" />
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-blue-600/20"></div>
                
                {/* Location Pins */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-white rounded-full pulse-blue"></div>
                <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-white rounded-full pulse-blue"></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-white rounded-full pulse-blue"></div>
              </div>

              {/* Floating Info Card */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.5,
              duration: 0.5
            }} viewport={{
              once: true
            }} className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Coverage Area</p>
                    <p className="text-sm text-gray-600">8+ Counties</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Service Areas List */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Counties We Serve
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              {serviceAreas.map((area, index) => <motion.div key={area} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} viewport={{
              once: true
            }} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </motion.div>)}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Why Choose Local?</h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1,
                duration: 0.5
              }} viewport={{
                once: true
              }} className="flex items-start space-x-3">
                    <div className="bg-blue-600 rounded-lg p-2 mt-1">
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{benefit.title}</h5>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>)}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Don't see your area listed? Give us a call - we may still be able to help!
              </p>
              <Button onClick={() => document.getElementById('contact').scrollIntoView({
              behavior: 'smooth'
            })} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                Contact Us Today
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ServiceArea;