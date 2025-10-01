import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get('bot-field')) return;
    if (!formData.get('name') || !formData.get('email') || !formData.get('phone') || !formData.get('service')) {
      toast({ title: 'Missing Information', description: 'Please fill in all required fields to submit your quote request.', duration: 4000 });
      return;
    }
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        toast({ title: 'Quote Request Submitted!', description: "Thank you! We'll contact you within 24 hours with your free quote.", duration: 5000 });
        form.reset();
      })
      .catch(() => {
        toast({ title: 'Submission Error', description: 'Something went wrong. Please try again.', variant: 'destructive', duration: 4000 });
      });
  };

  const services = [
    'Concrete Cleaning',
    'House Washing',
    'Window Cleaning',
    'Gutter Cleaning',
    'Trash Bin Cleaning',
    'Multiple Services',
    'Other'
  ];

  const contactInfo = [
    { icon: Phone, title: 'Call Us', details: '(555) 123-4567', subtitle: 'Available 7 days a week' },
    { icon: Mail, title: 'Email Us', details: 'info@brightwash.com', subtitle: 'We respond within 2 hours' },
    { icon: MapPin, title: 'Service Area', details: 'Local Community', subtitle: '8+ Counties Served' },
    { icon: Clock, title: 'Business Hours', details: 'Mon-Sat: 7AM-7PM', subtitle: 'Sunday: 9AM-5PM' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your <span className="gradient-text">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your property? Contact BrightWash today for a free, no-obligation quote. We&apos;ll provide transparent pricing and professional service recommendations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Quote</h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="sr-only" aria-hidden="true">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="123 Main St, City, State"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your cleaning needs, property size, or any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Get My Free Quote</span>
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-800">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">What happens next?</span>
              </div>
              <ul className="mt-2 text-sm text-blue-700 space-y-1">
                <li>• We&apos;ll review your request within 2 hours</li>
                <li>• Schedule a convenient time for assessment</li>
                <li>• Provide detailed, transparent pricing</li>
                <li>• No obligation — completely free quote</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                Have questions or need immediate assistance? We&apos;re here to help! Contact us through any of these convenient methods.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 rounded-lg p-3">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-lg text-blue-600 font-semibold">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white"
            >
              <h4 className="font-bold text-xl mb-2">Emergency Service Available</h4>
              <p className="text-blue-100 mb-4">
                Need urgent cleaning after a storm or special event? We offer emergency response services.
              </p>
              <Button
                onClick={() => window.open('tel:+15551234567')}
                className="bg-white hover:bg-gray-200 text-blue-600 font-bold px-6 py-2 rounded-lg transition-all duration-300"
              >
                Call Now: (555) 123-4567
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
