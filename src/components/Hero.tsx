
import React from 'react';
import VideoBackground from '@/components/VideoBackground';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <VideoBackground />
      
      <div className="relative z-10">
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl px-12 py-8 mx-4 shadow-2xl">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl tracking-wider opacity-0 animate-[fade-in_1.5s_ease-out_0.8s_forwards]">
            <span className="inline-block animate-pulse bg-gradient-to-r from-white via-incluya-yellow to-white bg-clip-text text-transparent bg-300% animate-[shimmer_3s_ease-in-out_infinite]">
              Incluya
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
