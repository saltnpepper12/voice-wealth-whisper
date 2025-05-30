
import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoBackground from '@/components/VideoBackground';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <VideoBackground />
      
      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center px-6 py-16">
        <div className="text-center mb-2">
          <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light text-white drop-shadow-2xl tracking-wide opacity-0 animate-[fade-in_1.5s_ease-out_0.8s_forwards,breathe_6s_ease-in-out_3s_infinite] mb-2 leading-[0.85] py-4">
            <span className="inline-block text-incluya-yellow animate-[shimmer_3s_ease-in-out_infinite]">
              Incluya
            </span>
          </h1>
        </div>
        
        <div className="text-center max-w-3xl opacity-0 animate-[fade-in_1.2s_ease-out_2.5s_forwards,gentle-pulse_8s_ease-in-out_4s_infinite] mb-12">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed drop-shadow-lg tracking-wide opacity-80">
            "Embrace your journey with compassion, nurture your growth with wisdom, and discover the abundance that flows from within."
          </p>
        </div>

        <div className="opacity-0 animate-[fade-in_1.5s_ease-out_3.5s_forwards]">
          <Button
            onClick={handleClick}
            className="bg-incluya-yellow hover:bg-incluya-yellow-dark text-incluya-text-dark font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
