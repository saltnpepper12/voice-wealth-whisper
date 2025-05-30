
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleBeginJourney = () => {
    console.log('Beginning journey - navigating to intake questions');
    // navigate('/intake');
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center cursor-pointer"
      onClick={handleBeginJourney}
    >
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video 
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source 
            src="https://raw.githubusercontent.com/saltnpepper12/videos/main/Welcome.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 sm:px-8 md:px-10 text-center">
        {/* Welcome Text */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h1 className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light text-white tracking-[0.02em] mb-6 sm:mb-8 md:mb-10 leading-[0.85] uppercase">
            Welcome
          </h1>
          <p className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.03em] font-sans mb-12 sm:mb-16 md:mb-20 uppercase">
            to your journey within
          </p>
        </div>

        {/* Call to Action */}
        <div className="opacity-0 animate-[fade-in_1.5s_ease-out_2s_forwards]">
          <p className="text-white/95 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-sans font-light mb-12 sm:mb-14 md:mb-16 max-w-4xl mx-auto tracking-wide px-2">
            When you're ready, we'll begin exploring the depths of your inner world together.
          </p>
          
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-light font-sans mb-8 sm:mb-10 md:mb-12 tracking-wide uppercase">
            Begin the Journey
          </p>
          
          <p className="text-white/70 text-base sm:text-lg md:text-xl font-sans font-light tracking-wide mb-6 sm:mb-8">
            There is no hurry. Take all the time you need.
          </p>
          
          <p className="text-white/60 text-sm sm:text-base font-sans font-light tracking-wide">
            Click anywhere to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
