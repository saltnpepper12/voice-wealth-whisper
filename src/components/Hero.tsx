
import React from 'react';
import VideoBackground from '@/components/VideoBackground';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <VideoBackground />
      
      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white drop-shadow-2xl tracking-wide opacity-0 animate-[fade-in_1.5s_ease-out_0.8s_forwards,breathe_6s_ease-in-out_3s_infinite] mb-8">
            <span className="inline-block bg-gradient-to-r from-white via-incluya-yellow to-white bg-clip-text text-transparent bg-300% animate-[shimmer_3s_ease-in-out_infinite]">
              Incluya
            </span>
          </h1>
        </div>
        
        <div className="text-center max-w-4xl opacity-0 animate-[fade-in_1.2s_ease-out_2.5s_forwards,gentle-pulse_8s_ease-in-out_4s_infinite]">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-light leading-relaxed drop-shadow-xl tracking-wide">
            "Embrace your journey with compassion, nurture your growth with wisdom, and discover the abundance that flows from within."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
