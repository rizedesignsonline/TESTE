import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServiceArea from '@/components/ServiceArea';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>BrightWash Exterior Cleaning - Professional Home & Business Cleaning Services</title>
        <meta name="description" content="BrightWash Exterior Cleaning offers professional concrete cleaning, house washing, window cleaning, gutter cleaning, and trash bin cleaning services. Trusted local business serving your community with reliable, affordable exterior cleaning solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <ServiceArea />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;