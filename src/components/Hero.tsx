
import React from 'react';
import VideoBackground from '@/components/VideoBackground';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <VideoBackground />
      
      <div className="relative z-10">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl animate-fade-in">
          Incluya
        </h1>
      </div>
    </section>
  );
};

export default Hero;
