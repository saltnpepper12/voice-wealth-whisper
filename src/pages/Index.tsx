
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Quote from '@/components/Quote';
import Pricing from '@/components/Pricing';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import SelfCompassionQuote from '@/components/SelfCompassionQuote';
import MoneyJourney from '@/components/MoneyJourney';

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent font-sans">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Quote />
      <MoneyJourney />
      <SelfCompassionQuote />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
