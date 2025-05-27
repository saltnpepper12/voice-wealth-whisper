
import React from 'react';
import VideoBackground from '@/components/VideoBackground';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <VideoBackground />
      
      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center px-6 py-16">
        <div className="text-center mb-8 w-full max-w-none overflow-visible">
          <h1 className="font-sans text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-extralight text-white drop-shadow-2xl tracking-widest opacity-0 animate-[fade-in_1.5s_ease-out_0.8s_forwards,breathe_6s_ease-in-out_3s_infinite] mb-6 leading-[0.8] overflow-visible min-h-[1.2em]">
            <span className="inline-block bg-gradient-to-r from-white via-incluya-yellow to-white bg-clip-text text-transparent bg-300% animate-[shimmer_3s_ease-in-out_infinite] overflow-visible">
              Incluya
            </span>
          </h1>
        </div>
        
        <div className="text-center max-w-3xl opacity-0 animate-[fade-in_1.2s_ease-out_2.5s_forwards,gentle-pulse_8s_ease-in-out_4s_infinite]">
          <p className="text-white text-sm md:text-base lg:text-lg font-light leading-relaxed drop-shadow-lg tracking-wide opacity-70">
            "Embrace your journey with compassion, nurture your growth with wisdom, and discover the abundance that flows from within."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
