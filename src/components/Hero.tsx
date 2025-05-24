
import React from 'react';
import { Button } from '@/components/ui/button';
import VideoBackground from '@/components/VideoBackground';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 min-h-screen">
      <VideoBackground />
      
      {/* Background Decorations */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-incluya-yellow opacity-20 blob-shape animate-float" 
        style={{ zIndex: 1 }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-incluya-turquoise opacity-15 blob-shape animate-float"
        style={{ animationDelay: '2s', zIndex: 1 }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              Reduce Financial Anxiety with 
              <span className="highlight-text"> Emotional Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md max-w-lg">
              The first platform that combines voice journaling with financial tracking 
              to help you understand the emotions behind your money decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-incluya-yellow-dark hover:bg-incluya-yellow text-incluya-text-dark text-lg py-6 px-8">
                Get Started Free
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-incluya-peach"></div>
                <div className="w-8 h-8 rounded-full bg-incluya-coral"></div>
                <div className="w-8 h-8 rounded-full bg-incluya-turquoise"></div>
              </div>
              <p className="text-sm text-white drop-shadow-md">Join 1000+ people reducing financial stress</p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md lg:max-w-none mx-auto">
            <div className="relative">
              <div className="bg-transparent backdrop-blur-sm p-6 rounded-3xl">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-center text-white drop-shadow-lg">Money Journey</h3>
                <div className="relative flex flex-col items-center py-6">
                  <div className="timeline-dot"></div>
                  <div className="timeline-stem h-16"></div>
                  <div className="timeline-dot"></div>
                  <div className="timeline-stem h-16"></div>
                  <div className="timeline-dot"></div>

                  {/* Leaves */}
                  <div className="leaf w-16 h-10 -right-6 top-8"></div>
                  <div className="leaf w-12 h-8 -left-4 top-20"></div>
                  <div className="leaf w-14 h-10 -right-6 bottom-20"></div>
                  
                  {/* Journey Items */}
                  <div className="absolute left-16 top-4 max-w-[180px] bg-white/20 backdrop-blur-sm p-2 rounded-lg text-sm text-white shadow-sm">
                    Changed my career to earn more money
                  </div>
                  <div className="absolute right-16 top-28 max-w-[180px] bg-white/20 backdrop-blur-sm p-2 rounded-lg text-sm text-white shadow-sm">
                    Increased my confidence and learned how to save
                  </div>
                  <div className="absolute left-16 bottom-4 max-w-[180px] bg-white/20 backdrop-blur-sm p-2 rounded-lg text-sm text-white shadow-sm">
                    Learned the source of my financial anxiety
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
