import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="text-white">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-sky-300" />
              <span className="text-sm font-medium">Trusted Local Business</span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Professional
              <span className="block text-sky-300">Exterior Cleaning</span>
              Services
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="text-xl text-blue-100 mb-8 leading-relaxed">
              BrightWash specializes in concrete cleaning, house washing, window cleaning, gutter cleaning, and trash bin cleaning. We restore your property's curb appeal with safe, effective methods.
            </motion.p>

            {/* Features */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-sky-300" />
                <span className="text-sm">Insured & Bonded</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-sky-300" />
                <span className="text-sm">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-sky-300" />
                <span className="text-sm">100% Satisfaction</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} className="bg-white hover:bg-gray-200 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl pulse-blue">Call Now!</Button>
              <Button onClick={() => document.getElementById('services').scrollIntoView({
              behavior: 'smooth'
            })} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative floating-animation aspect-square">
              <img alt="Professional exterior cleaning service showing a pristine house after washing" class="w-full h-full object-cover rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1582586588244-64ad8f007cd7" />
              
              {/* Floating Cards */}
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 1,
              duration: 0.5
            }} className="absolute -top-4 -left-4 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-800">5+ Years Experience</span>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 1.2,
              duration: 0.5
            }} className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-800">100% Satisfaction</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;