
import React from 'react';
import VideoBackground from '@/components/VideoBackground';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <VideoBackground />
      
      <div className="relative z-10 text-center">
        <div className="glass-panel px-12 py-8 mx-4 mb-8">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl tracking-wider opacity-0 animate-[fade-in_1.5s_ease-out_0.8s_forwards]">
            <span className="inline-block animate-pulse bg-gradient-to-r from-white via-incluya-yellow to-white bg-clip-text text-transparent bg-300% animate-[shimmer_3s_ease-in-out_infinite]">
              Incluya
            </span>
          </h1>
        </div>
        
        <div className="mx-4 opacity-0 animate-[fade-in_1.2s_ease-out_2.5s_forwards]">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
            "Embrace your journey with compassion, nurture your growth with wisdom, and discover the abundance that flows from within."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
